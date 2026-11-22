import { Component, computed, inject, input, output, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Product, ProductSizeOption } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article class="product-card" [class.featured-card]="product().isFeatured">
      <!-- Media Header with 4:3 Image Ratio -->
      <div class="card-media">
        <a [routerLink]="['/product', product().slug]" class="image-link" [attr.aria-label]="product().nameAr">
          <img 
            [src]="product().image" 
            [alt]="product().nameAr" 
            loading="lazy" 
            (error)="onImageError($event)"
            class="product-image" />
        </a>

        <!-- Category Tag -->
        <span class="category-badge">{{ product().categoryNameAr }}</span>

        <!-- In-Cart Counter Pill -->
        @if (totalProductInCart() > 0) {
          <span class="in-cart-indicator">
            <i class="fa-solid fa-basket-shopping"></i> {{ totalProductInCart() }}
          </span>
        }

        <!-- Top Actions -->
        <div class="media-actions">
          <button 
            type="button" 
            class="action-icon-btn" 
            [class.active]="isFavorite()"
            (click)="toggleFavorite($event)"
            [attr.aria-label]="isFavorite() ? 'إزالة من المفضلة' : 'إضافة للمفضلة'">
            <i [class]="isFavorite() ? 'fa-solid fa-heart' : 'fa-regular fa-heart'"></i>
          </button>
          <button 
            type="button" 
            class="action-icon-btn" 
            (click)="shareProduct($event)"
            title="مشاركة رابط المشروب"
            aria-label="مشاركة">
            <i class="fa-solid fa-share-nodes"></i>
          </button>
        </div>
      </div>

      <!-- Content -->
      <div class="card-content">
        <!-- Title -->
        <h3 class="product-title">
          <a [routerLink]="['/product', product().slug]">{{ product().nameAr }}</a>
        </h3>

        <!-- Description -->
        @if (product().descriptionAr) {
          <p class="product-desc" [title]="product().descriptionAr">
            {{ product().descriptionAr }}
          </p>
        }

        <!-- Multi-size Switcher -->
        @if (product().sizes.length > 1) {
          <div class="card-sizes-strip" role="group" aria-label="خيارات الحجم">
            @for (size of product().sizes; track size.id) {
              <button 
                type="button" 
                class="size-pill" 
                [class.active]="activeSize().id === size.id"
                (click)="selectSize(size, $event)">
                <span class="size-name">{{ size.nameAr }}</span>
                <span class="size-price">{{ size.price }} ج</span>
              </button>
            }
          </div>
        }

        <!-- Footer: Price & Compact Stepper -->
        <div class="card-footer">
          <div class="price-container">
            @if (product().availability === 'unavailable' || displayedPrice() === 0) {
              <span class="unavailable-badge">غير متاح مؤقتاً</span>
            } @else {
              <span class="price-amount">{{ displayedPrice() }}</span>
              <span class="currency">{{ product().categorySlug === 'roastery-nuts' ? 'ج.م / كجم' : 'ج.م' }}</span>
              @if (product().sizes.length > 1) {
                <span class="size-label">({{ activeSize().nameAr }})</span>
              }
            }
          </div>

          <!-- Quantity Stepper Controls (Tactile, Accessible, Clean) -->
          <div class="stepper-wrapper" (click)="$event.stopPropagation()">
            <button 
              type="button" 
              class="stepper-btn minus" 
              [disabled]="product().availability === 'unavailable' || displayedPrice() === 0 || currentSizeQuantity() === 0"
              (click)="decrement($event)"
              aria-label="إنقاص الكمية">
              <i class="fa-solid fa-minus"></i>
            </button>

            <span class="stepper-quantity" [class.has-value]="currentSizeQuantity() > 0">
              {{ currentSizeQuantity() }}
            </span>

            <button 
              type="button" 
              class="stepper-btn plus" 
              [disabled]="product().availability === 'unavailable' || displayedPrice() === 0"
              (click)="increment($event)"
              aria-label="زيادة الكمية">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </article>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }

    .product-card {
      background: #FFFFFF;
      border: 1px solid #E2E8E2;
      border-radius: 14px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      height: 100%;
      position: relative;
      transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
      box-shadow: 0 2px 6px rgba(23, 77, 50, 0.03);
    }

    .product-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(23, 77, 50, 0.08);
      border-color: #279653;
    }

    /* Media Header */
    .card-media {
      position: relative;
      width: 100%;
      aspect-ratio: 4 / 3;
      background: #F7F8F3;
      overflow: hidden;
    }

    .image-link {
      display: block;
      width: 100%;
      height: 100%;
    }

    .product-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.25s ease;
      display: block;
    }

    .product-card:hover .product-image {
      transform: scale(1.03);
    }

    /* Category Tag */
    .category-badge {
      position: absolute;
      bottom: 0.45rem;
      right: 0.45rem;
      background: rgba(23, 77, 50, 0.92);
      color: #FFFFFF;
      font-size: 0.7rem;
      font-weight: 700;
      padding: 0.15rem 0.55rem;
      border-radius: 999px;
      backdrop-filter: blur(4px);
      pointer-events: none;
      z-index: 2;
    }

    /* In-Cart Total Indicator */
    .in-cart-indicator {
      position: absolute;
      bottom: 0.45rem;
      left: 0.45rem;
      background: #174D32;
      color: #FFFFFF;
      font-size: 0.7rem;
      font-weight: 800;
      padding: 0.15rem 0.55rem;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      z-index: 2;
      box-shadow: 0 2px 5px rgba(0,0,0,0.15);
    }

    /* Actions */
    .media-actions {
      position: absolute;
      top: 0.45rem;
      left: 0.45rem;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      z-index: 3;
    }

    .action-icon-btn {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.92);
      color: #718096;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      border: 1px solid rgba(0, 0, 0, 0.08);
      transition: all 0.2s;
      cursor: pointer;
    }

    .action-icon-btn:hover {
      background: #FFFFFF;
      color: #174D32;
      transform: scale(1.05);
    }

    .action-icon-btn.active {
      color: #dc2626;
      background: #FFFFFF;
    }

    /* Card Content */
    .card-content {
      padding: 0.85rem 0.95rem;
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .product-title {
      font-size: clamp(0.92rem, 2.5vw, 1.02rem);
      font-weight: 800;
      line-height: 1.35;
      margin-bottom: 0.25rem;
    }

    .product-title a {
      color: #172033;
      text-decoration: none;
      transition: color 0.2s;
    }

    .product-title a:hover {
      color: #174D32;
    }

    .product-desc {
      font-size: 0.78rem;
      line-height: 1.45;
      color: #718096;
      margin-bottom: 0.5rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* Sizes */
    .card-sizes-strip {
      display: flex;
      flex-wrap: wrap;
      gap: 0.3rem;
      margin-bottom: 0.65rem;
    }

    .size-pill {
      padding: 0.2rem 0.5rem;
      border-radius: 6px;
      background: #F0F3EC;
      border: 1px solid #E2E8E2;
      font-size: 0.72rem;
      font-weight: 700;
      color: #172033;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.15s;
    }

    .size-pill:hover {
      border-color: #279653;
      color: #174D32;
    }

    .size-pill.active {
      background: #174D32;
      color: #FFFFFF;
      border-color: #174D32;
    }

    .size-price {
      opacity: 0.9;
      margin-inline-start: 2px;
    }

    /* Footer */
    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.4rem;
      margin-top: auto;
      padding-top: 0.65rem;
      border-top: 1px solid #F0F3EC;
    }

    .price-container {
      display: flex;
      align-items: baseline;
      gap: 0.2rem;
    }

    .price-amount {
      font-size: 1.15rem;
      font-weight: 900;
      color: #174D32;
    }

    .unavailable-badge {
      font-size: 0.76rem;
      font-weight: 800;
      color: #b45309;
      background: #fef3c7;
      padding: 0.2rem 0.55rem;
      border-radius: 6px;
      border: 1px solid #fde68a;
      white-space: nowrap;
    }

    .currency {
      font-size: 0.75rem;
      font-weight: 700;
      color: #718096;
    }

    .size-label {
      font-size: 0.7rem;
      color: #718096;
    }

    /* Stepper Counter Controls */
    .stepper-wrapper {
      display: flex;
      align-items: center;
      background: #F0F3EC;
      border: 1px solid #E2E8E2;
      border-radius: 999px;
      padding: 0.15rem;
      gap: 0.3rem;
    }

    .stepper-btn {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.78rem;
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .stepper-btn.minus {
      background: #FFFFFF;
      color: #172033;
      border: 1px solid #E2E8E2;
    }

    .stepper-btn.minus:hover:not(:disabled) {
      background: #EAF5EC;
      color: #174D32;
    }

    .stepper-btn:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }

    .stepper-btn.plus {
      background: #174D32;
      color: #FFFFFF;
    }

    .stepper-btn.plus:hover {
      background: #279653;
      transform: scale(1.05);
    }

    .stepper-quantity {
      min-width: 18px;
      text-align: center;
      font-size: 0.88rem;
      font-weight: 800;
      color: #718096;
    }

    .stepper-quantity.has-value {
      color: #174D32;
      font-weight: 900;
    }

    @media (max-width: 640px) {
      .card-content {
        padding: 0.65rem 0.7rem;
      }
      .product-title {
        font-size: 0.9rem;
      }
      .price-amount {
        font-size: 1.05rem;
      }
      .stepper-btn {
        width: 26px;
        height: 26px;
      }
    }
  `]
})
export class ProductCardComponent {
  product = input.required<Product>();
  private cartService = inject(CartService);
  private toast = inject(ToastService);
  private router = inject(Router);

  readonly selectedSize = signal<ProductSizeOption | null>(null);
  readonly isFavorite = signal<boolean>(false);

  readonly activeSize = computed(() => {
    return this.selectedSize() || this.product().sizes[0];
  });

  readonly displayedPrice = computed(() => {
    return this.activeSize()?.price ?? this.product().basePrice;
  });

  readonly currentCartItem = computed(() => {
    const size = this.activeSize();
    if (!size) return null;
    return this.cartService.items().find(i => 
      i.productId === this.product().id && i.selectedSize.id === size.id
    ) || null;
  });

  readonly currentSizeQuantity = computed(() => {
    return this.currentCartItem()?.quantity ?? 0;
  });

  readonly totalProductInCart = computed(() => {
    return this.cartService.items()
      .filter(i => i.productId === this.product().id)
      .reduce((sum, item) => sum + item.quantity, 0);
  });

  selectSize(size: ProductSizeOption, event?: Event): void {
    if (event) event.stopPropagation();
    this.selectedSize.set(size);
  }

  increment(event: Event): void {
    event.stopPropagation();
    const size = this.activeSize();
    if (!size) return;
    this.cartService.addItem(this.product(), size, [], '', 1);
  }

  decrement(event: Event): void {
    event.stopPropagation();
    const item = this.currentCartItem();
    if (!item) return;
    this.cartService.updateQuantity(item.cartItemId, item.quantity - 1);
  }

  toggleFavorite(event: Event): void {
    event.stopPropagation();
    this.isFavorite.update(v => !v);
    if (this.isFavorite()) {
      this.toast.show(`${this.product().nameAr} أضيف للمفضلة`, 'success');
    }
  }

  shareProduct(event: Event): void {
    event.stopPropagation();
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({
        title: this.product().nameAr,
        text: this.product().descriptionAr,
        url: window.location.origin + '/product/' + this.product().slug
      }).catch(() => {});
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.origin + '/product/' + this.product().slug);
      this.toast.show('تم نسخ رابط المنتج بنجاح', 'info');
    }
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = '/images/brand/elmaestro-logo-badge.png';
  }
}
