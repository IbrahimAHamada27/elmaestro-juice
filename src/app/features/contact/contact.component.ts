import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfigService } from '../../core/services/config.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="contact-page">
      <!-- 1. Hero Section -->
      <section class="contact-hero">
        <div class="container hero-content">
          <span class="badge hero-pill-badge">
            <i class="fa-solid fa-headset"></i> تواصل مع المايسترو
          </span>
          <h1 class="hero-title">المايسترو محمصات وفريشات — تواصل معنا وموقعنا</h1>
          <p class="hero-sub">
            سعداء بخدمتكم وتوصيل طلباتكم على مدار 24 ساعة لجميع أحياء مدينة العبور والمناطق المجاورة.
          </p>
          <div class="hero-tags-row">
            <span class="hero-tag"><i class="fa-solid fa-clock"></i> توصيل 24 ساعة لجميع أحياء العبور</span>
            <span class="hero-tag"><i class="fa-solid fa-phone"></i> الخط الساخن: 01037733214</span>
            <span class="hero-tag"><i class="fa-solid fa-location-dot"></i> سنتر العبور بجوار مطعم أبو حلب</span>
          </div>
        </div>
      </section>

      <div class="container main-content-wrapper">
        <!-- 2. Direct Channels & Official Links -->
        <section class="social-showcase-section" aria-label="قنوات التواصل الرسمية">
          <div class="section-header">
            <div class="section-title-wrap">
              <span class="sub-badge"><i class="fa-solid fa-star"></i> قنواتنا المعتمدة</span>
              <h2 class="section-heading">قنوات التواصل والصفحات الرسمية</h2>
              <p class="section-subtext">تواصل معنا مباشرة عبر الواتساب أو الهاتف، وتابع صفحتنا على فيسبوك واطلع على آراء العملاء على Google</p>
            </div>
          </div>

          <div class="social-grid">
            <!-- 1. Phone Direct Order -->
            <a 
              [href]="'tel:' + business().contacts.phone1" 
              class="social-card phone-card"
              aria-label="الاتصال بالمايسترو">
              <div class="social-card-inner">
                <div class="social-header-row">
                  <div class="social-icon-wrapper phone-icon">
                    <i class="fa-solid fa-phone"></i>
                  </div>
                  <span class="platform-label">خدمة العملاء 24h</span>
                </div>
                <div class="social-text-block">
                  <h3 class="social-platform-title">اتصال هاتفي مباشر</h3>
                  <div class="handle-row" dir="ltr">
                    <span class="handle-text">01037733214</span>
                  </div>
                  <p class="social-desc">
                    لخدمة التوصيل السريع والاستفسارات والطلبات على مدار الساعة بمدينة العبور.
                  </p>
                </div>
                <div class="social-cta-btn phone-btn">
                  <span>اتصل الآن</span>
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </div>
            </a>

            <!-- 2. Facebook Page -->
            <a 
              [href]="business().contacts.facebookUrl" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="social-card fb-card"
              aria-label="صفحة فيسبوك المايسترو">
              <div class="social-card-inner">
                <div class="social-header-row">
                  <div class="social-icon-wrapper fb-icon">
                    <i class="fa-brands fa-facebook-f"></i>
                  </div>
                  <span class="platform-label">Facebook</span>
                </div>
                <div class="social-text-block">
                  <h3 class="social-platform-title">صفحة فيسبوك الرسمية</h3>
                  <div class="handle-row">
                    <span class="handle-text">المايسترو</span>
                  </div>
                  <p class="social-desc">
                    تابع أحدث المنتجات والعروض والمنيو وتحديثات المحل عبر صفحتنا المعتمدة.
                  </p>
                </div>
                <div class="social-cta-btn fb-btn">
                  <span>زيارة صفحة فيسبوك</span>
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </div>
            </a>

            <!-- 3. Google Maps & Reviews -->
            <a 
              [href]="business().contacts.googleReviewsUrl" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="social-card google-card"
              aria-label="تقييمات المايسترو على خرائط Google">
              <div class="social-card-inner">
                <div class="social-header-row">
                  <div class="social-icon-wrapper google-icon">
                    <i class="fa-brands fa-google"></i>
                  </div>
                  <span class="platform-label">خرائط Google</span>
                </div>
                <div class="social-text-block">
                  <h3 class="social-platform-title">آراء وتقييمات Google</h3>
                  <div class="handle-row">
                    <span class="handle-text">المايسترو محمصات وفريشات</span>
                  </div>
                  <p class="social-desc">
                    اطلع على تجارب زبائننا وشاركنا تقييمك ورأيك في زيارتك أو طلبك.
                  </p>
                </div>
                <div class="social-cta-btn google-btn">
                  <span>تقييمنا على خرائط Google ⭐</span>
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </div>
            </a>
          </div>
        </section>

        <!-- 3. Location, Maps & Contact Information -->
        <section class="location-details-section">
          <div class="location-grid">
            <div class="info-card">
              <span class="sub-badge"><i class="fa-solid fa-map-location-dot"></i> تفاصيل العنوان</span>
              <h2 class="card-heading">أين تجدنا في مدينة العبور؟</h2>
              
              <div class="address-highlight">
                <i class="fa-solid fa-location-dot map-pin"></i>
                <div>
                  <strong>{{ business().addressAr }}</strong>
                  <p>الحي الأول – سنتر العبور – بجوار مطعم أبو حلب مباشرة.</p>
                </div>
              </div>

              <div class="contact-methods">
                <div class="contact-method-item">
                  <i class="fa-solid fa-phone"></i>
                  <div>
                    <span class="cm-label">رقم الهاتف والطلبات:</span>
                    <a [href]="'tel:' + business().contacts.phone1" class="cm-val" dir="ltr">
                      {{ business().contacts.phone1 }}
                    </a>
                  </div>
                </div>

                <div class="contact-method-item">
                  <i class="fa-solid fa-store"></i>
                  <div>
                    <span class="cm-label">فرع سنتر العبور:</span>
                    <span class="cm-val">الحي الأول – بجوار مطعم أبو حلب</span>
                  </div>
                </div>

                <div class="contact-method-item">
                  <i class="fa-solid fa-motorcycle"></i>
                  <div>
                    <span class="cm-label">خدمة التوصيل السريع:</span>
                    <span class="cm-val">متاحة 24 ساعة لجميع أحياء ومناطق العبور</span>
                  </div>
                </div>
              </div>

              <div class="action-buttons-row">
                <a [href]="business().contacts.googleMapsUrl" target="_blank" rel="noopener noreferrer" class="btn btn-maps">
                  <i class="fa-solid fa-diamond-turn-right"></i> الاتجاهات عبر Google Maps
                </a>
                <a [href]="'tel:' + business().contacts.phone1" class="btn btn-call">
                  <i class="fa-solid fa-phone"></i> اتصال مباشر
                </a>
              </div>
            </div>

            <!-- Map Embed -->
            <div class="map-embed-card">
              <iframe 
                [src]="mapEmbedUrl" 
                width="100%" 
                height="100%" 
                style="border:0; min-height: 380px;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="موقع المايسترو على خرائط Google">
              </iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: [`
    .contact-hero {
      background: linear-gradient(135deg, var(--elmaestro-green-900) 0%, var(--elmaestro-green-800) 100%);
      color: #ffffff;
      padding-block: 4rem 3.5rem;
      border-bottom: 4px solid var(--elmaestro-lime);
      text-align: center;
    }
    .hero-content {
      max-width: 780px;
      margin-inline: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.1rem;
    }
    .hero-title {
      font-size: 2.6rem;
      color: #ffffff;
      line-height: 1.2;
    }
    .hero-sub {
      font-size: 1.05rem;
      color: rgba(255, 255, 255, 0.88);
      line-height: 1.6;
    }
    .hero-tags-row {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 0.5rem;
    }
    .hero-tag {
      background: rgba(255, 255, 255, 0.12);
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 0.35rem 0.85rem;
      border-radius: var(--radius-full);
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--elmaestro-lime-light);
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
    }

    .main-content-wrapper {
      padding-block: 3.5rem;
      display: flex;
      flex-direction: column;
      gap: 3.5rem;
    }

    .section-title-wrap {
      margin-bottom: 2rem;
    }
    .sub-badge {
      font-size: 0.8rem;
      color: var(--elmaestro-green-700);
      font-weight: 700;
      margin-bottom: 0.35rem;
      display: block;
    }
    .section-heading {
      font-size: 1.85rem;
      color: var(--elmaestro-green-800);
    }
    .section-subtext {
      color: var(--text-secondary);
      font-size: 0.95rem;
      margin-top: 0.35rem;
    }

    /* Social Cards Grid */
    .social-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }
    .social-card {
      background: #ffffff;
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      padding: 1.5rem;
      text-decoration: none;
      box-shadow: var(--shadow-sm);
      transition: all var(--transition-normal);
      display: flex;
      flex-direction: column;
    }
    .social-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-md);
    }
    .social-card-inner {
      display: flex;
      flex-direction: column;
      height: 100%;
      gap: 1rem;
    }
    .social-header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .social-icon-wrapper {
      width: 48px;
      height: 48px;
      border-radius: var(--radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: #ffffff;
    }
    .whatsapp-icon { background: #25d366; }
    .fb-icon { background: #1877f2; }
    .google-icon { background: #ea4335; }

    .platform-label {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--text-muted);
      background: var(--elmaestro-cream);
      padding: 0.2rem 0.55rem;
      border-radius: var(--radius-full);
    }
    .social-platform-title {
      font-size: 1.15rem;
      color: var(--text-primary);
      margin-bottom: 0.25rem;
    }
    .handle-row {
      font-size: 0.88rem;
      font-weight: 700;
      color: var(--elmaestro-green-700);
      margin-bottom: 0.5rem;
    }
    .social-desc {
      font-size: 0.85rem;
      color: var(--text-secondary);
      line-height: 1.4;
    }
    .social-cta-btn {
      margin-top: auto;
      padding: 0.6rem 1rem;
      border-radius: var(--radius-sm);
      font-size: 0.85rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #ffffff;
    }
    .whatsapp-btn { background: #25d366; }
    .fb-btn { background: #1877f2; }
    .google-btn { background: #f59e0b; }

    /* Location & Info Grid */
    .location-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      align-items: stretch;
    }
    .info-card {
      background: #ffffff;
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      padding: 2rem;
      box-shadow: var(--shadow-sm);
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .card-heading {
      font-size: 1.5rem;
      color: var(--elmaestro-green-800);
    }
    .address-highlight {
      background: var(--elmaestro-lime-bg);
      border: 1px solid rgba(101, 163, 13, 0.2);
      border-radius: var(--radius-sm);
      padding: 1rem;
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
    }
    .map-pin {
      color: var(--elmaestro-green-700);
      font-size: 1.3rem;
      margin-top: 0.2rem;
    }
    .address-highlight strong {
      display: block;
      color: var(--elmaestro-green-900);
      font-size: 0.95rem;
    }
    .address-highlight p {
      font-size: 0.82rem;
      color: var(--text-secondary);
      margin-top: 0.2rem;
    }

    .contact-methods {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .contact-method-item {
      display: flex;
      align-items: center;
      gap: 0.85rem;
    }
    .contact-method-item i {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: var(--elmaestro-cream);
      color: var(--elmaestro-green-700);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
    }
    .cm-label {
      font-size: 0.78rem;
      color: var(--text-muted);
      display: block;
    }
    .cm-val {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--text-primary);
      text-decoration: none;
    }

    .action-buttons-row {
      display: flex;
      gap: 0.75rem;
      margin-top: auto;
      padding-top: 1rem;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.75rem 1.25rem;
      border-radius: var(--radius-sm);
      font-size: 0.9rem;
      font-weight: 700;
      text-decoration: none;
      cursor: pointer;
    }
    .btn-maps {
      background: var(--elmaestro-green-700);
      color: #ffffff;
      flex: 1;
    }
    .btn-call {
      background: var(--elmaestro-amber);
      color: #ffffff;
      flex: 1;
    }

    .map-embed-card {
      background: #ffffff;
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      overflow: hidden;
      box-shadow: var(--shadow-sm);
    }

    @media (max-width: 900px) {
      .social-grid {
        grid-template-columns: 1fr;
      }
      .location-grid {
        grid-template-columns: 1fr;
      }
      .action-buttons-row {
        flex-direction: column;
      }
    }
  `]
})
export class ContactComponent {
  private configService = inject(ConfigService);
  readonly business = this.configService.business;
  readonly mapEmbedUrl = 'https://maps.google.com/maps?q=30.2354535,31.4681271&hl=ar&z=17&output=embed';
}
