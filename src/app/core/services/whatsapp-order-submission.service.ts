import { Injectable, inject } from '@angular/core';
import { 
  IOrderSubmissionService, 
  OrderSubmissionPayload, 
  OrderSubmissionResult 
} from '../contracts/order-submission.contract';
import { OrderService } from './order.service';
import { WHATSAPP_ORDER_CONFIG, normalizeWhatsAppNumber } from '../config/order.config';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class WhatsAppOrderSubmissionService implements IOrderSubmissionService {
  private orderService = inject(OrderService);
  private configService = inject(ConfigService);

  async submitOrder(payload: OrderSubmissionPayload): Promise<OrderSubmissionResult> {
    // 1. Validation: Cart must contain at least 1 item
    if (!payload.items || payload.items.length === 0) {
      throw new Error('لا توجد أصناف في السلة لإتمام الطلب');
    }

    // 2. Validate quantities and prices
    for (const item of payload.items) {
      if (item.quantity <= 0) {
        throw new Error(`كمية الصنف ${item.nameAr} غير صالحة`);
      }
      if (item.totalPrice < 0) {
        throw new Error(`سعر الصنف ${item.nameAr} غير صالح`);
      }
    }

    // 3. Register order record in local storage via OrderService
    const order = this.orderService.createOrder(
      payload.customer,
      payload.fulfillmentType,
      payload.paymentMethod,
      payload.items,
      payload.summary,
      {
        tableDetails: payload.tableDetails,
        carDetails: payload.carDetails,
        takeawayDetails: payload.takeawayDetails,
        deliveryDetails: payload.deliveryDetails
      }
    );

    // 4. Resolve official WhatsApp number
    const businessWhatsApp = this.configService.business().contacts.whatsapp || WHATSAPP_ORDER_CONFIG.phoneNumber;
    const targetPhone = normalizeWhatsAppNumber(businessWhatsApp);

    // 5. Build structured, professional WhatsApp order message
    const messageText = this.buildWhatsAppMessage(order, payload);

    // 6. Encode message for WhatsApp Click-to-Chat URL
    const encodedText = encodeURIComponent(messageText);
    const redirectUrl = `https://wa.me/${targetPhone}?text=${encodedText}`;

    return {
      success: true,
      order,
      orderId: order.orderId,
      orderNumber: order.orderNumber,
      submissionMethod: 'whatsapp',
      redirectUrl,
      formattedMessageText: messageText,
      messageAr: 'تم تجهيز تفاصيل طلبك للإرسال عبر واتساب.'
    };
  }

  /**
   * Builds the formatted WhatsApp order text in clear, courteous Arabic according to El Maestro standards.
   */
  buildWhatsAppMessage(order: { orderNumber: string }, payload: OrderSubmissionPayload): string {
    const lines: string[] = [];

    // Header with stylish branding and divider
    lines.push(`🌟 *طـلـب جـديـد — الـمـايـسـتـرو* 🌟`);
    lines.push(`محمصات وفريشات • طازجة يومياً`);
    lines.push(`────────────────────`);
    lines.push(`مرحبًا فريق المايسترو 👋، أريد تأكيد طلبي التالي:`);
    lines.push(``);
    lines.push(`🔖 *رقم الطلب:* \`${order.orderNumber}\``);
    lines.push(`📅 *التاريخ والوقت:* ${new Date().toLocaleDateString('ar-EG')} — ${new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}`);
    lines.push(`────────────────────`);

    // Customer Info Section
    lines.push(`👤 *بـيـانـات الـعـمـيـل:*`);
    lines.push(`▫️ *الاسم:* ${payload.customer.fullName || 'عميل المايسترو'}`);
    if (payload.customer.phone && payload.customer.phone !== 'طلب طاولة بدون هاتف') {
      lines.push(`▫️ *رقم الهاتف:* ${payload.customer.phone}`);
    }
    if (payload.deliveryDetails?.alternativePhone) {
      lines.push(`▫️ *هاتف بديل:* ${payload.deliveryDetails.alternativePhone}`);
    }

    // Fulfillment Details Section
    let methodEmoji = '🛵';
    let methodAr = 'توصيل للمنزل (دليفري)';
    if (payload.fulfillmentType === 'table') {
      methodEmoji = '🍽️';
      methodAr = 'طلب صالة داخل الفرع';
    } else if (payload.fulfillmentType === 'takeaway') {
      methodEmoji = '🛍️';
      methodAr = 'استلام تيك أواي من الفرع';
    } else if (payload.fulfillmentType === 'car') {
      methodEmoji = '🚗';
      methodAr = 'خدمة التوصيل للسيارة';
    }

    lines.push(`▫️ *طريقة الاستلام:* ${methodEmoji} ${methodAr}`);

    if (payload.fulfillmentType === 'delivery') {
      const district = payload.deliveryDetails?.district || 'مدينة العبور';
      lines.push(`▫️ *المنطقة:* 📍 ${district}`);
      const addressParts: string[] = [];
      if (payload.deliveryDetails?.street) addressParts.push(payload.deliveryDetails.street);
      if (payload.deliveryDetails?.building) addressParts.push(payload.deliveryDetails.building);
      lines.push(`▫️ *العنوان:* ${addressParts.join(' - ') || 'مدينة العبور'}`);
      if (payload.deliveryDetails?.landmark) {
        lines.push(`▫️ *علامة مميزة:* 🏢 ${payload.deliveryDetails.landmark}`);
      }
    } else if (payload.fulfillmentType === 'table') {
      const tableNum = payload.tableDetails?.tableNumber ? `#${payload.tableDetails.tableNumber}` : 'غير محدد';
      lines.push(`▫️ *رقم الطاولة:* 🪑 ${tableNum}`);
    } else if (payload.fulfillmentType === 'car') {
      if (payload.carDetails?.vehiclePlate) lines.push(`▫️ *لوحة السيارة:* 🚘 ${payload.carDetails.vehiclePlate}`);
      if (payload.carDetails?.vehicleModel || payload.carDetails?.vehicleColor) {
        lines.push(`▫️ *مواصفات السيارة:* ${[payload.carDetails.vehicleModel, payload.carDetails.vehicleColor].filter(Boolean).join(' - ')}`);
      }
      if (payload.carDetails?.parkingSpot) lines.push(`▫️ *مكان الوقوف:* ${payload.carDetails.parkingSpot}`);
    }

    const note = (payload.notes || payload.customer.notes || '').trim();
    if (note) {
      lines.push(`▫️ *ملاحظات خاصة:* ✍️ ${note}`);
    }
    lines.push(`────────────────────`);

    // Items Details Section
    lines.push(`📋 *الأصـنـاف الـمـطـلـوبـة:*`);
    lines.push(``);

    let confirmedSubtotal = 0;
    let pendingItemsCount = 0;

    payload.items.forEach((item, index) => {
      const itemNum = index + 1;
      const isWeight = item.pricingType === 'weight_based' || (item.weightInGrams && item.weightInGrams > 0);
      const isPending = item.pricingStatus === 'pending' || (isWeight && (!item.pricePerKg && item.unitPrice === 0));

      // Category icon based on category name
      let itemIcon = '🔸';
      const cat = (item.categoryNameAr || '').toLowerCase();
      if (cat.includes('محمص') || cat.includes('مقلاة') || cat.includes('لب') || cat.includes('مكسرات')) itemIcon = '🥜';
      else if (cat.includes('عصير') || cat.includes('فريش') || cat.includes('قصب') || cat.includes('سموزي') || cat.includes('مانجو')) itemIcon = '🍹';
      else if (cat.includes('آيس') || cat.includes('ايس')) itemIcon = '🍨';
      else if (cat.includes('شوكولات') || cat.includes('حلو')) itemIcon = '🍫';
      else if (cat.includes('فاكه') || cat.includes('قطع')) itemIcon = '🍓';

      lines.push(`${itemIcon} *[${itemNum}] ${item.nameAr}*`);
      if (item.categoryNameAr) {
        lines.push(`    📂 القسم: ${item.categoryNameAr}`);
      }

      if (isWeight) {
        const weightGrams = item.weightInGrams || 250;
        const weightFormatted = weightGrams >= 1000 ? `${(weightGrams / 1000).toFixed(2).replace(/\.00$/, '')} كجم` : `${weightGrams} جرام`;
        lines.push(`    ⚖️ الوزن: *${weightFormatted}*`);
        if (item.quantity > 1) {
          lines.push(`    📦 العدد: ${item.quantity} عبوة`);
        }
        if (isPending) {
          pendingItemsCount++;
          lines.push(`    💰 السعر: ⏳ _سيتم التسعير وإرسال المبلغ_`);
        } else {
          confirmedSubtotal += item.totalPrice;
          if (item.pricePerKg) {
            lines.push(`    🏷️ سعر الكيلو: ${item.pricePerKg} ج.م`);
          }
          lines.push(`    💵 الإجمالي: *${item.totalPrice} ج.م*`);
        }
      } else {
        lines.push(`    🔢 الكمية: *${item.quantity}*`);
        if (item.selectedSize && item.selectedSize.nameAr) {
          lines.push(`    📏 الحجم: ${item.selectedSize.nameAr}`);
        }
        if (isPending) {
          pendingItemsCount++;
          lines.push(`    💰 السعر: ⏳ _سيتم التسعير وإرسال المبلغ_`);
        } else {
          confirmedSubtotal += item.totalPrice;
          lines.push(`    🏷️ سعر الوحدة: ${item.unitPrice} ج.م`);
          lines.push(`    💵 الإجمالي: *${item.totalPrice} ج.م*`);
        }
      }

      // Beverage Customization
      if (item.customization) {
        const c = item.customization;
        const customParts: string[] = [];
        if (c.blendType === 'half') customParts.push('نص ضربة');
        else if (c.blendType === 'froth') customParts.push('وش ضربة');

        if (c.sweetenerType === 'honey') customParts.push('🍯 عسل نحل');
        else if (c.sweetenerType === 'stevia') customParts.push('🍃 ستيفيا دايت');
        else if (c.sweetenerType === 'none') customParts.push('🚫 بدون سكر');
        else if (c.sugarLevel) {
          if (c.sugarLevel === 'light') customParts.push('سكر خفيف');
          else if (c.sugarLevel === 'extra') customParts.push('سكر زيادة');
          else customParts.push('سكر مضبوط');
        }

        if (c.iceLevel === 'none') customParts.push('بدون ثلج');
        else if (c.iceLevel === 'light') customParts.push('🧊 ثلج خفيف');

        if (customParts.length > 0) {
          lines.push(`    ⚡ التحضير: ${customParts.join(' • ')}`);
        }
      }

      // Ice cream customization
      if (item.iceCreamCustomization) {
        const ic = item.iceCreamCustomization;
        const icParts: string[] = [];
        if (ic.selectedFlavors?.length) icParts.push(`🍨 النكهات: ${ic.selectedFlavors.join(' + ')}`);
        if (ic.servingType) icParts.push(`التقديم: ${ic.servingType}`);
        if (ic.sauce) icParts.push(`الصوص: ${ic.sauce}`);
        if (icParts.length > 0) {
          lines.push(`    ✨ تخصيص الآيس كريم: ${icParts.join(' • ')}`);
        }
      }

      // Addons
      if (item.selectedAddons && item.selectedAddons.length > 0) {
        const addonsStr = item.selectedAddons.map(a => `${a.nameAr} (+${a.price} ج.م)`).join('، ');
        lines.push(`    ➕ إضافات: ${addonsStr}`);
      }

      // Special notes
      if (item.specialInstructions) {
        lines.push(`    📝 ملاحظة: ${item.specialInstructions}`);
      }

      lines.push(``);
    });

    lines.push(`────────────────────`);

    // Order Summary Section
    lines.push(`💰 *مـلـخـص الـحـسـاب:*`);
    lines.push(`🔹 إجمالي عدد الأصناف: *${payload.items.length} صنف*`);
    lines.push(`🔹 إجمالي المنتجات المؤكدة: *${confirmedSubtotal} ج.م*`);

    if (pendingItemsCount > 0) {
      lines.push(`⚠️ أصناف بانتظار التسعير: *${pendingItemsCount} صنف* (سيتم حسابها بالفرع)`);
    }

    if (payload.fulfillmentType === 'delivery') {
      const isCustomArea = (payload.deliveryDetails?.district || '').includes('أخرى');
      if (isCustomArea) {
        lines.push(`🛵 رسوم التوصيل: _يحدد لاحقاً مع الفرع_`);
      } else {
        const deliveryFeeVal = payload.summary.deliveryFee ?? 0;
        lines.push(`🛵 رسوم التوصيل (${payload.deliveryDetails?.district || 'العبور'}): *${deliveryFeeVal === 0 ? 'مجاناً' : deliveryFeeVal + ' ج.م'}*`);
      }
    }

    let payText = '💵 نقداً (كاش عند الاستلام)';
    if (payload.paymentMethod === 'instapay') payText = '📱 إنستاباي (InstaPay)';
    else if (payload.paymentMethod === 'vodafone_cash') payText = '👛 فودافون كاش';
    lines.push(`💳 طريقة السداد: *${payText}*`);

    const deliveryFeeAmt = payload.fulfillmentType === 'delivery' ? (payload.summary.deliveryFee || 0) : 0;
    const finalConfirmed = confirmedSubtotal + deliveryFeeAmt;

    lines.push(`────────────────────`);
    if (pendingItemsCount > 0) {
      lines.push(`💵 *المبلغ المؤكد حالياً:* \`${finalConfirmed} ج.م\``);
      lines.push(`⏳ *الإجمالي النهائي:* _سيتم حسابه وتأكيده مع بقية الأصناف فوراً._`);
    } else {
      lines.push(`🧾 *الـمـبـلـغ الإجـمـالـي الـمـطـلـوب:* \`${finalConfirmed} ج.م\``);
    }
    lines.push(`────────────────────`);

    // Courteous closing
    lines.push(`شكراً لاختياركم المايسترو ❤️`);
    lines.push(`📍 *المايسترو محمصات وفريشات*`);
    lines.push(`مدينة العبور – الحي الأول – سنتر العبور (بجوار أبو حلب)`);
    lines.push(`📞 خدمة العملاء والتوصيل: 01037733214`);

    return lines.join('\n');
  }
}
