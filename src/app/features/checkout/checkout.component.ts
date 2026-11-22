import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../core/services/cart.service';
import { OrderService } from '../../core/services/order.service';
import { ToastService } from '../../core/services/toast.service';
import { FulfillmentService } from '../../core/services/fulfillment.service';
import { FulfillmentType } from '../../core/models/fulfillment.model';
import { PaymentMethod } from '../../core/models/order.model';
import { ORDER_SUBMISSION_SERVICE, OrderSubmissionPayload } from '../../core/contracts/order-submission.contract';
import { OFFICIAL_DELIVERY_AREAS, getDeliveryFeeForDistrict } from '../../core/data/restaurant-layout.config';

type OrderTypeChoice = 'delivery' | 'takeaway' | 'table';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterLink, FormsModule],
  template: `
    <div class="checkout-modern-page container">
      <!-- Checkout Header -->
      <div class="checkout-head-block">
        <span class="co-step-badge">
          <i class="fa-solid fa-bag-shopping"></i> الخطوة الأخيرة لإتمام طلبك
        </span>
        <h1 class="checkout-main-title">أين وكيف تحب أن تستلم طلبك اليوم؟</h1>
        <p class="checkout-lead-desc">
          بكل بساطة اختر مكان استلامك وسيقوم المايسترو بتجهيز طلبك طازجاً فورياً وإرسال التفاصيل مباشرة إلى الواتساب للتنفيذ.
        </p>
      </div>

      @if (items().length > 0) {
        <div class="checkout-two-columns">
          <!-- Column 1: Fulfillment Type & Customer Details Form -->
          <div class="checkout-form-column">
            <!-- 1. Selection Cards: Where & How -->
            <div class="fulfillment-selector-card">
              <h2 class="section-box-title">
                <span class="circle-num">1</span>
                <span>اختر مكان وطريقة الاستلام:</span>
              </h2>

              <div class="modes-grid-three">
                <!-- Option A: Delivery -->
                <div 
                  class="mode-choice-card" 
                  [class.active]="orderType === 'delivery'"
                  (click)="setOrderType('delivery')">
                  <div class="mode-icon-wrap delivery-icon">
                    <i class="fa-solid fa-motorcycle"></i>
                  </div>
                  <div class="mode-text-wrap">
                    <strong class="mode-name">توصيل دليفري للبيت</strong>
                    <span class="mode-info">تغطية 24 ساعة لكافة أحياء العبور</span>
                  </div>
                  <div class="radio-check-bubble">
                    <i class="fa-solid fa-check"></i>
                  </div>
                </div>

                <!-- Option B: Takeaway -->
                <div 
                  class="mode-choice-card" 
                  [class.active]="orderType === 'takeaway'"
                  (click)="setOrderType('takeaway')">
                  <div class="mode-icon-wrap takeaway-icon">
                    <i class="fa-solid fa-bag-shopping"></i>
                  </div>
                  <div class="mode-text-wrap">
                    <strong class="mode-name">استلام من المحل</strong>
                    <span class="mode-info">جاهز خلال 5 - 10 دقائق بسنتر العبور</span>
                  </div>
                  <div class="radio-check-bubble">
                    <i class="fa-solid fa-check"></i>
                  </div>
                </div>

                <!-- Option C: Table Service -->
                <div 
                  class="mode-choice-card" 
                  [class.active]="orderType === 'table'"
                  (click)="setOrderType('table')">
                  <div class="mode-icon-wrap table-icon">
                    <i class="fa-solid fa-chair"></i>
                  </div>
                  <div class="mode-text-wrap">
                    <strong class="mode-name">طلب داخل الصالة</strong>
                    <span class="mode-info">أنت جالس الآن بالفرع وتحدد رقم ترابيزتك</span>
                  </div>
                  <div class="radio-check-bubble">
                    <i class="fa-solid fa-check"></i>
                  </div>
                </div>
              </div>
            </div>

            <!-- 2. Customer Contact & Location Details -->
            <div class="details-input-card">
              <h2 class="section-box-title">
                <span class="circle-num">2</span>
                <span>بيانات التواصل ومكان التوصيل:</span>
              </h2>

              <div class="inputs-stack">
                <!-- Name & Phone -->
                <div class="form-row-dual">
                  <div class="field-item">
                    <label for="cName">الاسم بالكامل *</label>
                    <input 
                      id="cName" 
                      type="text" 
                      [(ngModel)]="customerName" 
                      placeholder="مثال: أحمد عبد الله" 
                      class="clean-input" 
                      [class.error]="errors['customerName']" />
                    @if (errors['customerName']) {
                      <span class="err-text">{{ errors['customerName'] }}</span>
                    }
                  </div>

                  <div class="field-item">
                    <label for="cPhone">رقم الموبايل *</label>
                    <input 
                      id="cPhone" 
                      type="tel" 
                      dir="ltr"
                      [(ngModel)]="customerPhone" 
                      placeholder="01012345678" 
                      class="clean-input ltr-input" 
                      [class.error]="errors['customerPhone']" />
                    @if (errors['customerPhone']) {
                      <span class="err-text">{{ errors['customerPhone'] }}</span>
                    }
                  </div>
                </div>

                <!-- Delivery Address Inputs -->
                @if (orderType === 'delivery') {
                  <div class="delivery-address-panel">
                    <div class="field-item">
                      <label for="delDistrict">الحي أو المنطقة داخل العبور *</label>
                      <select 
                        id="delDistrict" 
                        [(ngModel)]="selectedDistrict" 
                        (change)="onDistrictChange()" 
                        class="clean-input select-styled"
                        [class.error]="errors['district']">
                        <option value="" disabled selected>-- اختر الحي / المنطقة --</option>
                        @for (area of deliveryAreas; track area.id) {
                          <option [value]="area.nameAr">
                            {{ area.nameAr }} — ({{ area.fee > 0 ? area.fee + ' ج.م' : 'يحدد لاحقاً' }})
                          </option>
                        }
                      </select>
                      @if (errors['district']) {
                        <span class="err-text">{{ errors['district'] }}</span>
                      }
                    </div>

                    <div class="field-item">
                      <label for="delStreet">العنوان بالتفصيل (الشارع ورقم العمارة والدور) *</label>
                      <input 
                        id="delStreet" 
                        type="text" 
                        [(ngModel)]="deliveryStreet" 
                        placeholder="مثال: شارع الرواد، عمارة 12، الدور 3، شقة 5" 
                        class="clean-input"
                        [class.error]="errors['street']" />
                      @if (errors['street']) {
                        <span class="err-text">{{ errors['street'] }}</span>
                      }
                    </div>

                    <div class="field-item">
                      <label for="delLandmark">أقرب علامة مميزة (اختياري)</label>
                      <input 
                        id="delLandmark" 
                        type="text" 
                        [(ngModel)]="deliveryLandmark" 
                        placeholder="مثال: بجوار صيدلية النور / أمام المدرسة" 
                        class="clean-input" />
                    </div>
                  </div>
                }

                <!-- Table Number Input (Only if Table selected) -->
                @if (orderType === 'table') {
                  <div class="table-input-panel">
                    <label for="tNum">رقم الترابيزة داخل الصالة *</label>
                    <div class="table-quick-strip">
                      @for (n of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; track n) {
                        <button 
                          type="button" 
                          class="table-bubble-btn" 
                          [class.selected]="tableNumber === n"
                          (click)="tableNumber = n">
                          #{{ n }}
                        </button>
                      }
                    </div>
                    @if (errors['tableNumber']) {
                      <span class="err-text">{{ errors['tableNumber'] }}</span>
                    }
                  </div>
                }

                <!-- Special Notes -->
                <div class="field-item">
                  <label for="orderNotes">ملاحظات إضافية على الطلب (اختياري)</label>
                  <textarea 
                    id="orderNotes" 
                    rows="2" 
                    [(ngModel)]="orderNotes" 
                    placeholder="أي توجيهات بخصوص السكر، التحضير، أو طريقة التوصيل..."
                    class="clean-textarea">
                  </textarea>
                </div>
              </div>
            </div>

            <!-- 3. Payment Method Choice -->
            <div class="payment-selection-card">
              <h2 class="section-box-title">
                <span class="circle-num">3</span>
                <span>طريقة سداد الحساب:</span>
              </h2>

              <div class="payment-radios-grid">
                <label class="pay-option" [class.active]="paymentMethod === 'cash'">
                  <input type="radio" name="pay" value="cash" [(ngModel)]="paymentMethod" class="sr-only" />
                  <i class="fa-solid fa-money-bill-wave"></i>
                  <div>
                    <strong>الدفع نقداً (كاش)</strong>
                    <span>عند الاستلام مع الطيار أو الكاشير</span>
                  </div>
                </label>

                <label class="pay-option" [class.active]="paymentMethod === 'instapay'">
                  <input type="radio" name="pay" value="instapay" [(ngModel)]="paymentMethod" class="sr-only" />
                  <i class="fa-solid fa-mobile-screen-button"></i>
                  <div>
                    <strong>إنستاباي (InstaPay)</strong>
                    <span>تحويل إلكتروني فوري</span>
                  </div>
                </label>

                <label class="pay-option" [class.active]="paymentMethod === 'vodafone_cash'">
                  <input type="radio" name="pay" value="vodafone_cash" [(ngModel)]="paymentMethod" class="sr-only" />
                  <i class="fa-solid fa-wallet"></i>
                  <div>
                    <strong>فودافون كاش</strong>
                    <span>تحويل للمحفظة عند الاستلام</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <!-- Column 2: Order Review & WhatsApp Direct Checkout -->
          <div class="checkout-summary-column">
            <div class="sticky-summary-box">
              <h3 class="summary-box-heading">ملخص طلبك بالمايسترو</h3>

              <!-- Items Mini List -->
              <div class="items-mini-list">
                @for (item of items(); track item.cartItemId) {
                  <div class="mini-item-row">
                    <img [src]="item.image" [alt]="item.nameAr" class="mini-item-thumb" />
                    <div class="mini-item-info">
                      <strong class="mini-item-title">{{ item.quantity }} × {{ item.nameAr }}</strong>
                      <span class="mini-item-meta">
                        @if (item.pricingType === 'weight_based' || item.weightInGrams) {
                          الوزن: {{ item.weightInGrams || 250 }} جم
                        } @else {
                          {{ item.selectedSize.nameAr }}
                        }
                      </span>
                    </div>
                    @if (item.pricingStatus === 'pending') {
                      <span class="mini-item-pending">سيتم التسعير</span>
                    } @else {
                      <span class="mini-item-price">{{ item.totalPrice }} ج.م</span>
                    }
                  </div>
                }
              </div>

              <!-- Price Breakdown -->
              <div class="price-calculations-box">
                <div class="calc-row">
                  <span>إجمالي المنتجات المؤكدة:</span>
                  <strong>{{ subtotal() }} ج.م</strong>
                </div>

                @if (hasPendingPricedItems()) {
                  <div class="calc-row pending-sub-notice">
                    <span>منتجات بانتظار التسعير:</span>
                    <strong class="pending-warn-txt">{{ pendingItemsCount() }} صنف</strong>
                  </div>
                }

                @if (orderType === 'delivery') {
                  <div class="calc-row">
                    <span>رسوم التوصيل ({{ selectedDistrict || 'العبور' }}):</span>
                    <strong>{{ deliveryFee() > 0 ? deliveryFee() + ' ج.م' : (selectedDistrict ? 'يحدد لاحقاً' : '0 ج.م') }}</strong>
                  </div>
                }

                <div class="calc-row final-total-row">
                  <span>{{ hasPendingPricedItems() ? 'الإجمالي المؤكد حالياً:' : 'المبلغ الإجمالي المطلوب:' }}</span>
                  <span class="grand-total-val">{{ finalTotal() }} ج.م</span>
                </div>

                @if (hasPendingPricedItems()) {
                  <p class="final-pending-alert">
                    <i class="fa-solid fa-circle-info"></i>
                    سيتم تأكيد الإجمالي النهائي لطلبك بعد تسعير الأصناف غير المسعرة عبر محادثة الواتساب.
                  </p>
                }
              </div>

              <!-- Submit WhatsApp Direct Order Button -->
              <button 
                type="button" 
                class="btn-send-whatsapp-order" 
                (click)="submitOrder()"
                [disabled]="isSubmitting()">
                @if (isSubmitting()) {
                  <i class="fa-solid fa-spinner fa-spin"></i>
                  <span>جاري تجهيز الطلب...</span>
                } @else {
                  <i class="fa-brands fa-whatsapp"></i>
                  <span>إرسال الطلب عبر واتساب</span>
                }
              </button>

              <p class="whatsapp-hint-note">
                <i class="fa-solid fa-circle-check"></i>
                سيتم فتح محادثة واتساب الرسمية لفرع المايسترو العبور بطلبك كاملاً للتنفيذ والتوصيل فوراً.
              </p>
            </div>
          </div>
        </div>
      } @else {
        <div class="empty-checkout-card">
          <div class="empty-icon-wrap"><i class="fa-solid fa-basket-shopping"></i></div>
          <h2>سلة الطلبات فارغة حالياً</h2>
          <p>تفضل بتصفح منيو المايسترو وأضف مشروباتك وفريشاتك المفضلة للمتابعة.</p>
          <a routerLink="/menu" class="btn-return-menu">
            <i class="fa-solid fa-book-open"></i> تصفح المنيو الآن
          </a>
        </div>
      }
    </div>
  `,
  styles: [`
    .checkout-modern-page {
      padding-block: 2.5rem 4rem;
    }
    .checkout-head-block {
      max-width: 680px;
      margin-bottom: 2rem;
    }
    .co-step-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: #dcfce7;
      color: #166534;
      font-size: 0.78rem;
      font-weight: 800;
      padding: 0.25rem 0.75rem;
      border-radius: 999px;
      margin-bottom: 0.65rem;
    }
    .checkout-main-title {
      font-size: 2.2rem;
      font-weight: 900;
      color: #0f172a;
      line-height: 1.25;
      margin-bottom: 0.35rem;
    }
    .checkout-lead-desc {
      font-size: 0.95rem;
      color: #64748b;
      line-height: 1.6;
    }

    .checkout-two-columns {
      display: grid;
      grid-template-columns: 1.35fr 1fr;
      gap: 2.25rem;
      align-items: flex-start;
    }

    /* Common Card Box */
    .fulfillment-selector-card, .details-input-card, .payment-selection-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 18px;
      padding: 1.75rem;
      margin-bottom: 1.5rem;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.02);
    }
    .section-box-title {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 1.15rem;
      font-weight: 800;
      color: #1e293b;
      margin-bottom: 1.25rem;
    }
    .circle-num {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #166534;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.88rem;
      font-weight: 900;
    }

    /* 1. Fulfillment Modes 3 Grid */
    .modes-grid-three {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.85rem;
    }
    .mode-choice-card {
      border: 2px solid #e2e8f0;
      border-radius: 14px;
      padding: 1.1rem 0.85rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 0.65rem;
      cursor: pointer;
      position: relative;
      background: #f8fafc;
      transition: all 0.2s ease;
    }
    .mode-choice-card:hover {
      border-color: #16a34a;
      background: #ffffff;
    }
    .mode-choice-card.active {
      border-color: #166534;
      background: #f0fdf4;
      box-shadow: 0 4px 14px rgba(22, 101, 52, 0.12);
    }
    .mode-icon-wrap {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
    }
    .delivery-icon { background: #dcfce7; color: #166534; }
    .takeaway-icon { background: #fed7aa; color: #c2410c; }
    .table-icon { background: #fef3c7; color: #b45309; }

    .mode-text-wrap {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }
    .mode-name {
      font-size: 0.92rem;
      font-weight: 800;
      color: #0f172a;
    }
    .mode-info {
      font-size: 0.72rem;
      color: #64748b;
      line-height: 1.35;
    }
    .radio-check-bubble {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 1.5px solid #cbd5e1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
      color: transparent;
      background: #ffffff;
      margin-top: 0.35rem;
    }
    .mode-choice-card.active .radio-check-bubble {
      border-color: #166534;
      background: #166534;
      color: #ffffff;
    }

    /* 2. Inputs */
    .inputs-stack {
      display: flex;
      flex-direction: column;
      gap: 1.1rem;
    }
    .form-row-dual {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    .field-item {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }
    .field-item label {
      font-size: 0.85rem;
      font-weight: 700;
      color: #334155;
    }
    .clean-input, .select-styled, .clean-textarea {
      width: 100%;
      padding: 0.7rem 0.85rem;
      border: 1.5px solid #cbd5e1;
      border-radius: 10px;
      font-size: 0.9rem;
      font-family: inherit;
      background: #f8fafc;
      transition: all 0.2s;
    }
    .clean-input:focus, .select-styled:focus, .clean-textarea:focus {
      outline: none;
      background: #ffffff;
      border-color: #16a34a;
      box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.12);
    }
    .clean-input.error, .select-styled.error {
      border-color: #ef4444;
      background: #fff5f5;
    }
    .ltr-input {
      direction: ltr;
      text-align: right;
    }
    .err-text {
      font-size: 0.75rem;
      color: #ef4444;
      font-weight: 700;
    }

    /* Delivery Specific Panel */
    .delivery-address-panel {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      padding: 1.25rem;
      border-radius: 12px;
    }

    /* Table Quick Selector */
    .table-input-panel {
      background: #fffbeb;
      border: 1px solid #fef3c7;
      padding: 1.25rem;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .table-quick-strip {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
    }
    .table-bubble-btn {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      border: 1.5px solid #d97706;
      background: #ffffff;
      color: #92400e;
      font-weight: 800;
      font-size: 0.88rem;
      cursor: pointer;
      transition: all 0.2s;
    }
    .table-bubble-btn:hover {
      background: #fde68a;
    }
    .table-bubble-btn.selected {
      background: #b45309;
      color: #ffffff;
      border-color: #b45309;
    }

    /* 3. Payment Radios */
    .payment-radios-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.75rem;
    }
    .pay-option {
      border: 1.5px solid #e2e8f0;
      border-radius: 12px;
      padding: 0.85rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      background: #f8fafc;
      cursor: pointer;
      transition: all 0.2s;
    }
    .pay-option:hover {
      background: #ffffff;
      border-color: #16a34a;
    }
    .pay-option.active {
      background: #f0fdf4;
      border-color: #166534;
    }
    .pay-option i {
      font-size: 1.3rem;
      color: #166534;
    }
    .pay-option div {
      display: flex;
      flex-direction: column;
      line-height: 1.25;
    }
    .pay-option strong {
      font-size: 0.85rem;
      color: #0f172a;
    }
    .pay-option span {
      font-size: 0.7rem;
      color: #64748b;
    }

    /* Column 2: Sticky Summary */
    .sticky-summary-box {
      position: sticky;
      top: 90px;
      background: #ffffff;
      border: 1.5px solid #e2e8f0;
      border-radius: 20px;
      padding: 1.75rem;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .summary-box-heading {
      font-size: 1.25rem;
      font-weight: 900;
      color: #0f172a;
      padding-bottom: 0.75rem;
      border-bottom: 1px solid #f1f5f9;
    }
    .items-mini-list {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      max-height: 260px;
      overflow-y: auto;
      padding-right: 0.25rem;
    }
    .mini-item-row {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .mini-item-thumb {
      width: 44px;
      height: 44px;
      border-radius: 8px;
      object-fit: cover;
      flex-shrink: 0;
    }
    .mini-item-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      line-height: 1.25;
    }
    .mini-item-title {
      font-size: 0.85rem;
      color: #1e293b;
    }
    .mini-item-meta {
      font-size: 0.72rem;
      color: #64748b;
    }
    .mini-item-price {
      font-size: 0.88rem;
      font-weight: 800;
      color: #166534;
    }
    .mini-item-pending {
      font-size: 0.72rem;
      font-weight: 800;
      color: #92400e;
      background: #fef3c7;
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
    }
    .pending-sub-notice {
      background: #fffbeb;
      padding: 0.35rem 0.5rem;
      border-radius: 6px;
    }
    .pending-warn-txt {
      color: #b45309;
      font-size: 0.8rem;
    }
    .final-pending-alert {
      font-size: 0.76rem;
      color: #b45309;
      line-height: 1.4;
      margin: 0.35rem 0 0 0;
      display: flex;
      align-items: flex-start;
      gap: 0.35rem;
    }

    .price-calculations-box {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      padding-top: 1rem;
      border-top: 1px solid #f1f5f9;
    }
    .calc-row {
      display: flex;
      justify-content: space-between;
      font-size: 0.88rem;
      color: #475569;
    }
    .final-total-row {
      font-size: 1.15rem;
      font-weight: 900;
      color: #0f172a;
      padding-top: 0.75rem;
      border-top: 1px dashed #cbd5e1;
    }
    .grand-total-val {
      color: #15803d;
      font-size: 1.35rem;
    }

    .btn-send-whatsapp-order {
      background: #25d366;
      color: #ffffff;
      border: none;
      padding: 1rem;
      border-radius: 12px;
      font-size: 1.05rem;
      font-weight: 900;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.65rem;
      cursor: pointer;
      box-shadow: 0 4px 16px rgba(37, 211, 102, 0.35);
      transition: all 0.2s;
    }
    .btn-send-whatsapp-order:hover:not(:disabled) {
      background: #20ba59;
      transform: translateY(-2px);
      box-shadow: 0 6px 22px rgba(37, 211, 102, 0.5);
    }
    .btn-send-whatsapp-order:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
    .whatsapp-hint-note {
      font-size: 0.76rem;
      color: #64748b;
      line-height: 1.45;
      display: flex;
      align-items: flex-start;
      gap: 0.4rem;
    }
    .whatsapp-hint-note i {
      color: #16a34a;
      margin-top: 0.15rem;
    }

    /* Empty state */
    .empty-checkout-card {
      text-align: center;
      padding: 4rem 2rem;
      background: #ffffff;
      border-radius: 20px;
      border: 1px solid #e2e8f0;
      max-width: 500px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
    .empty-icon-wrap {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: #dcfce7;
      color: #166534;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
    }
    .empty-checkout-card h2 {
      font-size: 1.4rem;
      font-weight: 800;
      color: #0f172a;
    }
    .empty-checkout-card p {
      font-size: 0.9rem;
      color: #64748b;
    }
    .btn-return-menu {
      background: #166534;
      color: #ffffff;
      padding: 0.75rem 1.4rem;
      border-radius: 10px;
      font-weight: 800;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }

    /* Responsive */
    @media (max-width: 992px) {
      .checkout-two-columns {
        grid-template-columns: 1fr;
      }
      .modes-grid-three {
        grid-template-columns: 1fr;
      }
      .payment-radios-grid {
        grid-template-columns: 1fr;
      }
    }
    @media (max-width: 640px) {
      .form-row-dual {
        grid-template-columns: 1fr;
      }
      .checkout-main-title {
        font-size: 1.7rem;
      }
    }
  `]
})
export class CheckoutComponent {
  private cartService = inject(CartService);
  private orderService = inject(OrderService);
  private toastService = inject(ToastService);
  private fulfillmentService = inject(FulfillmentService);
  private submissionService = inject(ORDER_SUBMISSION_SERVICE);
  private router = inject(Router);

  readonly items = this.cartService.items;
  readonly subtotal = this.cartService.subtotal;
  readonly pendingItemsCount = this.cartService.pendingItemsCount;
  readonly hasPendingPricedItems = this.cartService.hasPendingPricedItems;

  orderType: OrderTypeChoice = 'delivery';
  paymentMethod: PaymentMethod = 'cash';

  customerName = '';
  customerPhone = '';

  selectedDistrict = '';
  deliveryStreet = '';
  deliveryLandmark = '';
  orderNotes = '';
  tableNumber: number | null = null;

  isSubmitting = signal<boolean>(false);
  errors: Record<string, string> = {};

  readonly deliveryAreas = OFFICIAL_DELIVERY_AREAS;

  deliveryFee = computed(() => {
    if (this.orderType !== 'delivery' || !this.selectedDistrict) return 0;
    return getDeliveryFeeForDistrict(this.selectedDistrict);
  });

  finalTotal = computed(() => {
    return this.subtotal() + this.deliveryFee();
  });

  setOrderType(type: OrderTypeChoice): void {
    this.orderType = type;
    this.errors = {};
    if (type === 'delivery') {
      this.fulfillmentService.setFulfillmentType('delivery');
    } else if (type === 'takeaway') {
      this.fulfillmentService.setFulfillmentType('takeaway');
    } else if (type === 'table') {
      this.fulfillmentService.setFulfillmentType('table');
    }
  }

  onDistrictChange(): void {
    delete this.errors['district'];
  }

  validate(): boolean {
    this.errors = {};
    let valid = true;

    if (!this.customerName.trim()) {
      this.errors['customerName'] = 'يرجى إدخال اسمك';
      valid = false;
    }

    const cleanPhone = this.customerPhone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 11) {
      this.errors['customerPhone'] = 'يرجى إدخال رقم محمول صحيح (11 رقماً)';
      valid = false;
    }

    if (this.orderType === 'delivery') {
      if (!this.selectedDistrict) {
        this.errors['district'] = 'يرجى تحديد الحي / المنطقة داخل العبور';
        valid = false;
      }
      if (!this.deliveryStreet.trim()) {
        this.errors['street'] = 'يرجى إدخال تفاصيل العنوان (الشارع ورقم العمارة)';
        valid = false;
      }
    }

    if (this.orderType === 'table') {
      if (!this.tableNumber) {
        this.errors['tableNumber'] = 'يرجى تحديد رقم الترابيزة';
        valid = false;
      }
    }

    return valid;
  }

  async submitOrder(): Promise<void> {
    if (!this.validate()) {
      this.toastService.show('يرجى استكمال البيانات المطلوبة لإتمام طلبك', 'warning');
      return;
    }

    this.isSubmitting.set(true);

    try {
      const orderPayload: OrderSubmissionPayload = {
        customer: {
          fullName: this.customerName.trim(),
          phone: this.customerPhone.trim(),
          notes: this.orderNotes?.trim()
        },
        fulfillmentType: this.orderType as FulfillmentType,
        paymentMethod: this.paymentMethod,
        items: this.items(),
        summary: {
          subtotal: this.subtotal(),
          pendingItemsCount: this.pendingItemsCount(),
          hasPendingPricedItems: this.hasPendingPricedItems(),
          deliveryFee: this.deliveryFee(),
          total: this.finalTotal(),
          itemCount: this.items().reduce((sum, i) => sum + i.quantity, 0)
        },
        deliveryDetails: this.orderType === 'delivery' ? {
          customerName: this.customerName.trim(),
          customerPhone: this.customerPhone.trim(),
          city: 'مدينة العبور',
          district: this.selectedDistrict,
          street: this.deliveryStreet.trim(),
          landmark: this.deliveryLandmark?.trim(),
          deliveryFee: this.deliveryFee(),
          notes: this.orderNotes?.trim()
        } : undefined,
        tableDetails: this.orderType === 'table' ? {
          tableNumber: this.tableNumber || 1,
          tableNameAr: `ترابيزة #${this.tableNumber || 1}`,
          detectedFromQr: false
        } : undefined,
        takeawayDetails: this.orderType === 'takeaway' ? {
          customerName: this.customerName.trim(),
          customerPhone: this.customerPhone.trim(),
          pickupCounterAr: 'كاونتر الاستلام السريع بمحل المايسترو سنتر العبور',
          notes: this.orderNotes?.trim()
        } : undefined,
        notes: this.orderNotes?.trim()
      };

      const result = await this.submissionService.submitOrder(orderPayload);
      if (result.success) {
        this.cartService.clearCart();
        this.toastService.show('تم تجهيز طلبك بنجاح! جاري تحويلك لواتساب الفرع...', 'success');
        if (result.redirectUrl) {
          window.location.href = result.redirectUrl;
        }
      } else {
        this.toastService.show('حدث خطأ أثناء إرسال الطلب، يرجى المحاولة ثانية', 'error');
      }
    } catch (e: any) {
      console.error('Checkout submit error:', e);
      const errMsg = e?.message || 'حدث خطأ غير متوقع';
      this.toastService.show(errMsg, 'error');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
