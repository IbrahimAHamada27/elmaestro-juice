import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { BeverageCustomization, CartItem, CartSummary, IceCreamCustomization } from '../models/cart.model';
import { Product, ProductAddon, ProductSizeOption } from '../models/product.model';
import { ToastService } from './toast.service';
import { FulfillmentService } from './fulfillment.service';

const CART_STORAGE_KEY = 'elmaestro_customer_cart_v2';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private toastService = inject(ToastService);
  private fulfillmentService = inject(FulfillmentService);

  readonly items = signal<CartItem[]>(this.loadFromStorage());

  readonly itemCount = computed(() => 
    this.items().reduce((sum, item) => sum + item.quantity, 0)
  );

  readonly subtotal = computed(() => 
    // Confirmed priced products only; pending priced items do NOT affect subtotal
    Math.round(
      this.items().reduce((sum, item) => {
        if (item.pricingStatus === 'pending') return sum;
        return sum + (item.totalPrice || 0);
      }, 0) * 100
    ) / 100
  );

  readonly pendingItemsCount = computed(() => 
    this.items().filter(item => item.pricingStatus === 'pending').length
  );

  readonly hasPendingPricedItems = computed(() => 
    this.pendingItemsCount() > 0
  );

  readonly deliveryFee = computed(() => {
    // Only charge delivery fee when fulfillment method is 'delivery'
    if (this.fulfillmentService.activeType() !== 'delivery') {
      return 0;
    }
    const sub = this.subtotal();
    // Dynamic area-based fee resolved through FulfillmentService
    return this.fulfillmentService.currentDeliveryFee();
  });

  readonly total = computed(() => {
    return Math.max(0, this.subtotal() + this.deliveryFee());
  });

  readonly summary = computed<CartSummary>(() => ({
    subtotal: this.subtotal(),
    pendingItemsCount: this.pendingItemsCount(),
    hasPendingPricedItems: this.hasPendingPricedItems(),
    deliveryFee: this.deliveryFee(),
    total: this.total(),
    itemCount: this.itemCount()
  }));

  constructor() {
    // Auto sync to localStorage
    effect(() => {
      const current = this.items();
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(current));
      } catch (err) {
        console.warn('Could not save cart to localStorage', err);
      }
    });
  }

  addItem(
    product: Product,
    selectedSize: ProductSizeOption,
    selectedAddons: ProductAddon[] = [],
    specialInstructions = '',
    quantity = 1,
    customization?: BeverageCustomization,
    iceCreamCustomization?: IceCreamCustomization,
    weightInGrams?: number
  ): void {
    const isWeightBased = product.pricingType === 'weight_based' || product.categorySlug === 'roastery-nuts';
    const isPendingPrice = product.pricingStatus === 'pending' || (isWeightBased && (!product.pricePerKg && product.basePrice === 0));

    let unitPrice = 0;
    let lineTotalPrice = 0;

    if (isPendingPrice) {
      unitPrice = 0;
      lineTotalPrice = 0;
    } else if (isWeightBased) {
      const pPerKg = product.pricePerKg || product.basePrice || selectedSize.price || 0;
      const weight = weightInGrams && weightInGrams > 0 ? weightInGrams : 250; // default 250g
      // Accurate decimal calculation: (weight / 1000) * pricePerKg
      const singleWeightPrice = Math.round(((weight / 1000) * pPerKg) * 100) / 100;
      unitPrice = singleWeightPrice;
      lineTotalPrice = Math.round((singleWeightPrice * quantity) * 100) / 100;
    } else {
      const addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
      const sweetenerExtra = customization?.sweetenerPrice ?? (customization?.sweetenerType === 'honey' ? 10 : 0);
      unitPrice = selectedSize.price + addonsTotal + sweetenerExtra;
      lineTotalPrice = unitPrice * quantity;
    }
    
    // Create unique signature based on size, addons, customization, ice cream flavors, weight, and instructions
    const addonsSig = selectedAddons.map(a => a.id).sort().join('-');
    const custSig = customization ? `${customization.blendType}_${customization.sweetenerType}_${customization.sugarLevel}_${customization.iceLevel}` : '';
    const iceSig = iceCreamCustomization ? `ice_${(iceCreamCustomization.selectedFlavors || []).slice().sort().join('-')}_${iceCreamCustomization.servingType || ''}_${iceCreamCustomization.sauce || ''}` : '';
    const weightSig = isWeightBased ? `weight_${weightInGrams || 250}` : '';
    const cartItemId = `${product.id}_${selectedSize.id}_${addonsSig}_${custSig}_${iceSig}_${weightSig}_${specialInstructions.trim()}`;

    const existingIndex = this.items().findIndex(item => item.cartItemId === cartItemId);

    if (existingIndex > -1) {
      this.items.update(list => {
        const updated = [...list];
        const existing = updated[existingIndex];
        const newQty = existing.quantity + quantity;
        updated[existingIndex] = {
          ...existing,
          quantity: newQty,
          totalPrice: existing.pricingStatus === 'pending' ? 0 : Math.round((newQty * existing.unitPrice) * 100) / 100
        };
        return updated;
      });
    } else {
      const newItem: CartItem = {
        cartItemId,
        productId: product.id,
        productSlug: product.slug,
        nameAr: product.nameAr,
        nameEn: product.nameEn,
        image: product.image,
        categoryNameAr: product.categoryNameAr,
        categorySlug: product.categorySlug,
        selectedSize,
        selectedAddons: [...selectedAddons],
        customization: customization ? { ...customization, sweetenerPrice: (customization?.sweetenerPrice ?? (customization?.sweetenerType === 'honey' ? 10 : 0)) } : undefined,
        iceCreamCustomization: iceCreamCustomization ? { ...iceCreamCustomization } : undefined,
        specialInstructions: specialInstructions.trim(),
        unitPrice,
        quantity,
        totalPrice: lineTotalPrice,
        pricingType: isWeightBased ? 'weight_based' : 'fixed',
        pricingStatus: isPendingPrice ? 'pending' : 'confirmed',
        weightInGrams: isWeightBased ? (weightInGrams || 250) : undefined,
        pricePerKg: isWeightBased && !isPendingPrice ? (product.pricePerKg || product.basePrice || selectedSize.price) : undefined
      };

      this.items.update(list => [...list, newItem]);
    }

    const weightText = isWeightBased ? ` (${weightInGrams || 250} جم)` : (selectedSize ? ` (${selectedSize.nameAr})` : '');
    this.toastService.show(`تمت إضافة "${product.nameAr}${weightText}" إلى السلة `, 'success', 2000);
  }

  updateWeight(cartItemId: string, newWeightGrams: number): void {
    if (newWeightGrams <= 0) return;
    this.items.update(list =>
      list.map(item => {
        if (item.cartItemId === cartItemId && item.pricingType === 'weight_based') {
          if (item.pricingStatus === 'pending' || !item.pricePerKg) {
            return {
              ...item,
              weightInGrams: newWeightGrams,
              unitPrice: 0,
              totalPrice: 0
            };
          }
          const singleWeightPrice = Math.round(((newWeightGrams / 1000) * item.pricePerKg) * 100) / 100;
          return {
            ...item,
            weightInGrams: newWeightGrams,
            unitPrice: singleWeightPrice,
            totalPrice: Math.round((singleWeightPrice * item.quantity) * 100) / 100
          };
        }
        return item;
      })
    );
  }

  updateQuantity(cartItemId: string, newQty: number): void {
    if (newQty <= 0) {
      this.removeItem(cartItemId);
      return;
    }

    this.items.update(list => 
      list.map(item => {
        if (item.cartItemId === cartItemId) {
          const newTotal = item.pricingStatus === 'pending' 
            ? 0 
            : Math.round((newQty * item.unitPrice) * 100) / 100;
          return {
            ...item,
            quantity: newQty,
            totalPrice: newTotal
          };
        }
        return item;
      })
    );
  }

  updateItemCustomization(
    oldCartItemId: string,
    product: Product,
    newSize: ProductSizeOption,
    newAddons: ProductAddon[],
    newInstructions: string,
    quantity: number,
    newCustomization?: BeverageCustomization
  ): void {
    this.removeItem(oldCartItemId);
    this.addItem(product, newSize, newAddons, newInstructions, quantity, newCustomization);
  }

  removeItem(cartItemId: string): void {
    const removedItem = this.items().find(i => i.cartItemId === cartItemId);
    this.items.update(list => list.filter(item => item.cartItemId !== cartItemId));
    if (removedItem) {
      this.toastService.show(`تم حذف "${removedItem.nameAr}" من السلة`, 'info');
    }
  }

  clearCart(): void {
    this.items.set([]);
    try {
      localStorage.removeItem(CART_STORAGE_KEY);
    } catch (err) {
      console.warn('Could not clear cart from localStorage', err);
    }
    this.toastService.show('تم إفراغ سلة المشتريات بالكامل', 'info');
  }

  private loadFromStorage(): CartItem[] {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved) as CartItem[];
      }
    } catch (err) {
      console.warn('Could not load cart from localStorage', err);
    }
    return [];
  }
}
