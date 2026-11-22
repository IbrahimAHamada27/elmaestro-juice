import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Main Footer Container -->
    <footer class="executive-footer">
      <div class="container footer-main-grid">
        <!-- Col 1: Brand & Official Seal -->
        <div class="footer-brand-column">
          <div class="brand-crest-header">
            <div class="crest-frame">
              <img 
                src="/images/brand/elmaestro-logo-badge.png" 
                alt="لوجو المايسترو محمصات وفريشات" 
                class="brand-seal-img" />
            </div>
            <div class="brand-sign-texts">
              <img 
                src="/images/brand/elmaestro-name.png" 
                alt="المايسترو" 
                class="brand-calligraphy-footer" />
              <div class="brand-tag-seal">
                <span class="sub-text">محمصات وفريشات</span>
                <span class="seal-badge">فرع العبور الرسمي</span>
              </div>
            </div>
          </div>

          <p class="brand-mission-text">
            الوجهة الأولى والمميزة في مدينة العبور لتقديم أرقى العصائر الفريش الطبيعية 100%، ركن القهوة والآيس كوفي الفاخر، عصائر المحمصات بالمكسرات، خلطات الأفوكادو الملكية، السوبيا والموهيتو المنعش، بأعلى معايير الجودة والنظافة على مدار 24 ساعة.
          </p>

          <!-- Social Presence -->
          <div class="footer-social-deck">
            <a [href]="business().contacts.facebookUrl" target="_blank" rel="noopener noreferrer" class="social-circle fb" aria-label="فيسبوك" title="صفحة الفيسبوك الرسمية">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a [href]="'https://wa.me/' + business().contacts.whatsapp" target="_blank" rel="noopener noreferrer" class="social-circle wa" aria-label="واتساب" title="محادثة واتساب">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a [href]="business().contacts.googleMapsUrl" target="_blank" rel="noopener noreferrer" class="social-circle map" aria-label="خرائط جوجل" title="موقعنا على الخريطة">
              <i class="fa-solid fa-location-dot"></i>
            </a>
            <a [href]="business().contacts.googleReviewsUrl" target="_blank" rel="noopener noreferrer" class="social-circle rev" aria-label="تقييمات العملاء" title="تقييمات Google">
              <i class="fa-solid fa-star"></i>
            </a>
          </div>
        </div>

        <!-- Col 2: Specialty Menus -->
        <div class="footer-column">
          <h4 class="column-heading">
            <span>أقسام المنيو الفاخرة</span>
          </h4>
          <ul class="nav-links-list">
            <li>
              <a routerLink="/menu/coffee">
                <span class="icon-tag coffee"><i class="fa-solid fa-mug-hot"></i></span>
                <span>ركن القهوة والآيس كوفي</span>
              </a>
            </li>
            <li>
              <a routerLink="/menu/roastery-juices">
                <span class="icon-tag roastery"><i class="fa-solid fa-cubes-stacked"></i></span>
                <span>عصائر المحمصات بالمكسرات</span>
              </a>
            </li>
            <li>
              <a routerLink="/menu/fresh-juices">
                <span class="icon-tag fresh"><i class="fa-solid fa-glass-water"></i></span>
                <span>عصائر طبيعية فريش 100%</span>
              </a>
            </li>
            <li>
              <a routerLink="/menu/avocado">
                <span class="icon-tag avo"><i class="fa-solid fa-shield-heart"></i></span>
                <span>الأفوكادو والخلطات الملكية</span>
              </a>
            </li>
            <li>
              <a routerLink="/menu/mojito">
                <span class="icon-tag mojito"><i class="fa-solid fa-champagne-glasses"></i></span>
                <span>الموهيتو المنعش والسوبيا</span>
              </a>
            </li>
            <li>
              <a routerLink="/menu/bottles">
                <span class="icon-tag bottle"><i class="fa-solid fa-bottle-droplet"></i></span>
                <span>العبوات العائلية (1L & 4L)</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Col 3: Hours & Operations -->
        <div class="footer-column">
          <h4 class="column-heading">
            <span>ساعات العمل والتوصيل</span>
          </h4>

          <div class="hours-feature-card">
            <div class="hfc-top">
              <div class="hfc-clock-icon"><i class="fa-solid fa-clock"></i></div>
              <div class="hfc-text">
                <strong>خدمة وتوصيل 24 ساعة</strong>
                <span>نستقبل طلباتكم على مدار الساعة طوال أيام الأسبوع</span>
              </div>
            </div>
            <div class="hfc-status">
              <span class="status-indicator-dot"></span>
              <span>الفرع يستقبل الطلبات والدليفري الآن</span>
            </div>
          </div>

          <div class="delivery-coverage-box">
            <div class="dcb-icon"><i class="fa-solid fa-motorcycle"></i></div>
            <div class="dcb-content">
              <strong>تغطية توصيل شاملة:</strong>
              <span>الحي الأول، الثاني، الثالث، الرابع، الخامس، السادس، الشباب، العائلي، الترفيهي، وكافة أحياء مدينة العبور.</span>
            </div>
          </div>
        </div>

        <!-- Col 4: Verified Store Location & Direct Contact -->
        <div class="footer-column">
          <h4 class="column-heading">
            <span>موقع الفرع المعتمد</span>
          </h4>

          <div class="store-address-card">
            <p class="address-content">
              <i class="fa-solid fa-location-dot loc-marker"></i>
              <span>{{ business().addressAr }}</span>
            </p>
            <div class="location-links-row">
              <a [href]="business().contacts.googleMapsUrl" target="_blank" rel="noopener noreferrer" class="map-nav-btn">
                <i class="fa-solid fa-map-location-dot"></i>
                <span>الاتجاهات على خرائط Google</span>
              </a>
              <a [href]="business().contacts.googleReviewsUrl" target="_blank" rel="noopener noreferrer" class="reviews-pill-btn">
                <span class="stars-set">
                  <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </span>
                <span>آراء الزوار</span>
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>

          <div class="hotline-numbers-container">
            <span class="hotline-label">الخط الساخن الموحد للطلبات:</span>
            <div class="buttons-grid">
              <a [href]="'tel:' + business().contacts.phone1" class="order-phone-link">
                <i class="fa-solid fa-phone"></i>
                <span class="dir-ltr">{{ business().contacts.phone1 }}</span>
              </a>
              <a [href]="'https://wa.me/' + business().contacts.whatsapp" target="_blank" rel="noopener noreferrer" class="order-wa-link">
                <i class="fa-brands fa-whatsapp"></i>
                <span>واتساب الفرع</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Legal & Copyright Bottom Strip -->
      <div class="footer-copyright-strip">
        <div class="container strip-inner">
          <p class="copyright-text">
            جميع الحقوق محفوظة © {{ currentYear }} لمحل <strong>المايسترو محمصات وفريشات</strong> — مدينة العبور، مصر.
          </p>

          <div class="bottom-quick-links">
            <a routerLink="/privacy">سياسة الخصوصية</a>
            <span class="sep-dot">•</span>
            <a routerLink="/terms">الشروط والأحكام</a>
            <span class="sep-dot">•</span>
            <a routerLink="/about">عن المايسترو</a>
            <span class="sep-dot">•</span>
            <a routerLink="/contact">تواصل معنا</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    /* Pre-Footer Action Banner */
    .footer-pre-banner {
      background: linear-gradient(135deg, #07190d 0%, #14532d 100%);
      color: #ffffff;
      padding: 2.25rem 0;
      border-top: 3px solid #16a34a;
    }
    .pre-banner-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      flex-wrap: wrap;
    }
    .pre-banner-info {
      max-width: 620px;
    }
    .pre-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(34, 197, 94, 0.15);
      border: 1px solid rgba(34, 197, 94, 0.4);
      color: #86efac;
      padding: 0.2rem 0.65rem;
      border-radius: 999px;
      font-size: 0.78rem;
      font-weight: 700;
      margin-bottom: 0.6rem;
    }
    .live-blink {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #22c55e;
      box-shadow: 0 0 8px #22c55e;
      animation: pulseBlink 1.8s infinite;
    }
    @keyframes pulseBlink {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(1.3); }
    }
    .pre-title {
      font-size: 1.4rem;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 0.35rem;
    }
    .pre-desc {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.85);
      line-height: 1.5;
    }
    .pre-banner-actions {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      flex-wrap: wrap;
    }
    .banner-btn-wa {
      background: #25d366;
      color: #ffffff;
      padding: 0.8rem 1.4rem;
      border-radius: 12px;
      font-size: 0.95rem;
      font-weight: 800;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      box-shadow: 0 4px 14px rgba(37, 211, 102, 0.3);
      transition: all 0.2s ease;
    }
    .banner-btn-wa:hover {
      background: #20ba59;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
    }
    .banner-btn-call {
      background: rgba(255, 255, 255, 0.12);
      border: 1.5px solid rgba(255, 255, 255, 0.3);
      color: #ffffff;
      padding: 0.8rem 1.25rem;
      border-radius: 12px;
      font-size: 0.95rem;
      font-weight: 800;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      transition: all 0.2s ease;
    }
    .banner-btn-call:hover {
      background: rgba(255, 255, 255, 0.25);
    }
    .dir-ltr {
      direction: ltr;
    }

    /* Executive Main Footer */
    .executive-footer {
      background: #06150b;
      color: #cbd5e1;
      padding-top: 4rem;
      position: relative;
    }
    .footer-main-grid {
      display: grid;
      grid-template-columns: 1.4fr 1.1fr 1.1fr 1.2fr;
      gap: 2.5rem;
      padding-bottom: 3.5rem;
    }

    /* Col 1: Brand */
    .footer-brand-column {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .brand-crest-header {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .crest-frame {
      width: 60px;
      height: 60px;
      border-radius: 14px;
      background: #ffffff;
      padding: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
      border: 2px solid rgba(34, 197, 94, 0.35);
    }
    .brand-seal-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .brand-sign-texts {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }
    .brand-calligraphy-footer {
      height: 34px;
      width: auto;
      object-fit: contain;
      filter: brightness(0) invert(1);
    }
    .brand-tag-seal {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.75rem;
    }
    .sub-text {
      color: #86efac;
      font-weight: 700;
    }
    .seal-badge {
      background: rgba(255, 255, 255, 0.1);
      color: #cbd5e1;
      padding: 0.1rem 0.45rem;
      border-radius: 4px;
      font-size: 0.68rem;
    }
    .brand-mission-text {
      font-size: 0.88rem;
      line-height: 1.7;
      color: #94a3b8;
    }
    .footer-social-deck {
      display: flex;
      gap: 0.65rem;
    }
    .social-circle {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.12);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      font-size: 1rem;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .social-circle:hover {
      transform: translateY(-2px);
    }
    .social-circle.fb:hover { background: #1877f2; border-color: #1877f2; }
    .social-circle.wa:hover { background: #25d366; border-color: #25d366; }
    .social-circle.map:hover { background: #ea4335; border-color: #ea4335; }
    .social-circle.rev:hover { background: #f59e0b; border-color: #f59e0b; }

    /* Columns Shared */
    .footer-column {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .column-heading {
      color: #ffffff;
      font-size: 1.1rem;
      font-weight: 800;
      position: relative;
      padding-bottom: 0.65rem;
    }
    .column-heading::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 36px;
      height: 2.5px;
      background: #16a34a;
      border-radius: 999px;
    }

    /* Links List */
    .nav-links-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
      padding: 0;
      margin: 0;
    }
    .nav-links-list a {
      color: #cbd5e1;
      text-decoration: none;
      font-size: 0.88rem;
      display: flex;
      align-items: center;
      gap: 0.6rem;
      transition: all 0.2s;
    }
    .nav-links-list a:hover {
      color: #86efac;
      transform: translateX(-4px);
    }
    .icon-tag {
      width: 28px;
      height: 28px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      flex-shrink: 0;
    }
    .icon-tag.coffee { background: rgba(180, 83, 9, 0.25); color: #f59e0b; }
    .icon-tag.roastery { background: rgba(194, 65, 12, 0.25); color: #fb923c; }
    .icon-tag.fresh { background: rgba(22, 163, 74, 0.25); color: #4ade80; }
    .icon-tag.avo { background: rgba(101, 163, 13, 0.25); color: #a3e635; }
    .icon-tag.mojito { background: rgba(6, 182, 212, 0.25); color: #22d3ee; }
    .icon-tag.bottle { background: rgba(99, 102, 241, 0.25); color: #818cf8; }

    /* Hours Feature Card */
    .hours-feature-card {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .hfc-top {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
    }
    .hfc-clock-icon {
      color: #f59e0b;
      font-size: 1.25rem;
      margin-top: 0.15rem;
    }
    .hfc-text strong {
      display: block;
      color: #ffffff;
      font-size: 0.95rem;
    }
    .hfc-text span {
      font-size: 0.78rem;
      color: #94a3b8;
    }
    .hfc-status {
      display: flex;
      align-items: center;
      gap: 0.45rem;
      font-size: 0.78rem;
      font-weight: 700;
      color: #86efac;
      padding-top: 0.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
    }
    .status-indicator-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #22c55e;
      box-shadow: 0 0 8px #22c55e;
    }

    .delivery-coverage-box {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      background: rgba(22, 101, 52, 0.15);
      border: 1px solid rgba(22, 101, 52, 0.3);
      padding: 0.85rem 1rem;
      border-radius: 12px;
    }
    .dcb-icon {
      color: #4ade80;
      font-size: 1.1rem;
      margin-top: 0.15rem;
    }
    .dcb-content strong {
      display: block;
      color: #ffffff;
      font-size: 0.85rem;
      margin-bottom: 0.2rem;
    }
    .dcb-content span {
      font-size: 0.76rem;
      color: #cbd5e1;
      line-height: 1.4;
    }

    /* Store Address Card */
    .store-address-card {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .address-content {
      font-size: 0.88rem;
      line-height: 1.5;
      color: #cbd5e1;
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
    }
    .loc-marker {
      color: #f87171;
      margin-top: 0.25rem;
    }
    .location-links-row {
      display: flex;
      flex-direction: column;
      gap: 0.45rem;
    }
    .map-nav-btn {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #ffffff;
      padding: 0.6rem 0.85rem;
      border-radius: 8px;
      font-size: 0.82rem;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      transition: background 0.2s;
    }
    .map-nav-btn:hover {
      background: rgba(255, 255, 255, 0.15);
    }
    .reviews-pill-btn {
      background: rgba(245, 158, 11, 0.12);
      border: 1px solid rgba(245, 158, 11, 0.3);
      color: #fbbf24;
      padding: 0.5rem 0.85rem;
      border-radius: 8px;
      font-size: 0.8rem;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      transition: all 0.2s;
    }
    .reviews-pill-btn:hover {
      background: rgba(245, 158, 11, 0.2);
    }
    .stars-set {
      display: flex;
      gap: 2px;
      font-size: 0.75rem;
    }

    /* Hotlines */
    .hotline-numbers-container {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-top: 0.35rem;
    }
    .hotline-label {
      font-size: 0.78rem;
      color: #94a3b8;
    }
    .buttons-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.5rem;
    }
    .order-phone-link {
      background: #15803d;
      color: #ffffff;
      padding: 0.65rem 0.5rem;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 800;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
    }
    .order-wa-link {
      background: #25d366;
      color: #ffffff;
      padding: 0.65rem 0.5rem;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 800;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
    }

    /* Bottom Legal Strip */
    .footer-copyright-strip {
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding: 1.5rem 0;
      font-size: 0.82rem;
      color: #94a3b8;
    }
    .strip-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
    }
    .copyright-text strong {
      color: #ffffff;
    }
    .bottom-quick-links {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .bottom-quick-links a {
      color: #94a3b8;
      text-decoration: none;
      transition: color 0.2s;
    }
    .bottom-quick-links a:hover {
      color: #86efac;
    }
    .sep-dot {
      opacity: 0.4;
    }

    /* Responsive Rules for Mobile and Laptops */
    @media (max-width: 1100px) {
      .footer-main-grid {
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }
    }
    @media (max-width: 640px) {
      .footer-pre-banner {
        padding: 1.75rem 0;
      }
      .pre-banner-container {
        flex-direction: column;
        align-items: flex-start;
        gap: 1.25rem;
      }
      .pre-banner-actions {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.65rem;
      }
      .banner-btn-wa, .banner-btn-call {
        width: 100%;
        justify-content: center;
      }
      .footer-main-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      .strip-inner {
        flex-direction: column;
        text-align: center;
        gap: 0.85rem;
      }
      .buttons-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class FooterComponent {
  private configService = inject(ConfigService);
  readonly business = this.configService.business;
  readonly currentYear = new Date().getFullYear();
}
