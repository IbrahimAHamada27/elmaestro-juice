import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { ConfigService } from '../../core/services/config.service';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProductCardComponent],
  template: `
    <div class="juice-store-home">
      <!-- 1. Hero Showcase with Authentic Storefront & Natural Branding -->
      <section class="store-hero-immersive">
        <div class="container hero-container-box">
          <div class="hero-split-grid">
            <!-- Left Narrative & Actions -->
            <div class="hero-brand-statement">
              <div class="badge-fresh-origin">
                <i class="fa-solid fa-seedling"></i>
                <span>محمصات وفريشات طبيعية 100%</span>
              </div>

              <h1 class="hero-display-title">
                طعم الفاكهة الحقيقي <br />
                <span class="color-accent-fresh">وانتعاش ملوش مثيل</span>
              </h1>

              <p class="hero-subtext">
                أرقى الفواكه الطبيعية المعصورة طازجة يومياً، خلطات الأفوكادو الملكية بالمكسرات والعسل، وركن البن المحمص والقهوة التركية والآيس كوفي. نخدمكم ونوصل لجميع أحياء العبور 24 ساعة.
              </p>

              <div class="hero-action-buttons">
                <a routerLink="/menu" class="btn-primary-menu">
                  <i class="fa-solid fa-book-open"></i>
                  <span>تصفح واطلب من المنيو</span>
                </a>
              </div>

              <!-- Service Perks -->
              <div class="service-strip-perks">
                <div class="perk-unit">
                  <i class="fa-solid fa-motorcycle"></i>
                  <span>توصيل 24 ساعة بالعبور</span>
                </div>
                <div class="perk-unit">
                  <i class="fa-solid fa-leaf"></i>
                  <span>بدون أي مواد حافظة</span>
                </div>
                <div class="perk-unit">
                  <i class="fa-solid fa-mug-hot"></i>
                  <span>قهوة وبن محمص فاخر</span>
                </div>
              </div>
            </div>

            <!-- Right Storefront Visual -->
            <div class="hero-storefront-wrapper">
              <div class="storefront-canvas">
                <img 
                  src="/images/brand/elmaestro-store.jpg" 
                  alt="محل المايسترو محمصات وفريشات سنتر العبور" 
                  class="storefront-main-photo" />

                <!-- Elegant Authentic Badge Overlay -->
                <div class="storefront-badge-bar">
                  <div class="sbb-crest">
                    <img src="/images/brand/elmaestro-logo-badge.png" alt="المايسترو" class="sbb-logo-img" />
                  </div>
                  <div class="sbb-info">
                    <strong class="sbb-title">المايسترو محمصات وفريشات</strong>
                    <span class="sbb-address">
                      <i class="fa-solid fa-location-dot"></i> سنتر العبور – بجوار مطعم أبو حلب
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. Clean Category Cards Section -->
      <section class="minimal-categories-section">
        <div class="container">
          <div class="section-headline-bar">
            <div class="headline-titles">
              <span class="sub-headline">تنوع يلبي كافة الأذواق</span>
              <h2 class="main-headline">أقسام العصير والمشروبات والآيس كريم والمحمصات</h2>
            </div>
            <a routerLink="/menu" class="view-menu-link">عرض المنيو بالكامل (24 قسماً) ←</a>
          </div>

          <div class="categories-pure-grid">
            <!-- 1. Fresh Juices -->
            <a routerLink="/menu/fresh-juices" class="clean-category-card">
              <div class="clean-icon-wrap"><i class="fa-solid fa-glass-water"></i></div>
              <h3>عصائر فريش</h3>
              <p>مانجو، فراولة، قصب، ولمون نعناع</p>
            </a>

            <!-- 2. Roastery Juices -->
            <a routerLink="/menu/roastery-juices" class="clean-category-card">
              <div class="clean-icon-wrap"><i class="fa-solid fa-cubes-stacked"></i></div>
              <h3>عصائر المحمصات</h3>
              <p>لوز، فستق، كاجو، وبندق بالحليب</p>
            </a>

            <!-- 3. Coffee & Iced Coffee -->
            <a routerLink="/menu/coffee" class="clean-category-card">
              <div class="clean-icon-wrap"><i class="fa-solid fa-mug-hot"></i></div>
              <h3>ركن القهوة</h3>
              <p>قهوة تركي محمص، آيس لاتيه وموكا</p>
            </a>

            <!-- 4. Avocado & Power -->
            <a routerLink="/menu/power-mix" class="clean-category-card">
              <div class="clean-icon-wrap"><i class="fa-solid fa-bolt"></i></div>
              <h3>أفوكادو وميكس باور</h3>
              <p>خلطات ملكية بالمكسرات والعسل</p>
            </a>

            <!-- 5. Mojito & Sobia -->
            <a routerLink="/menu/mojito" class="clean-category-card">
              <div class="clean-icon-wrap"><i class="fa-solid fa-champagne-glasses"></i></div>
              <h3>موهيتو وسوبيا</h3>
              <p>انتعاش مثلج بنكهات بلوبيري وباشن</p>
            </a>

            <!-- 6. Family Bottles -->
            <a routerLink="/menu/bottles" class="clean-category-card">
              <div class="clean-icon-wrap"><i class="fa-solid fa-bottle-droplet"></i></div>
              <h3>عبوات عائلية وجراكن</h3>
              <p>1 لتر و 4 لتر للعزومات والمناسبات</p>
            </a>
          </div>
        </div>
      </section>

      <!-- 3. Featured Best Sellers Grid -->
      <section id="bestsellers" class="section-featured-products">
        <div class="container">
          <div class="section-headline-bar">
            <div class="headline-titles">
              <span class="sub-headline">الأكثر طلباً ومحبة بالعبور</span>
              <h2 class="main-headline">مشروبات المايسترو المفضلة</h2>
            </div>
            <a routerLink="/menu" class="view-menu-link">مشاهدة الكل ←</a>
          </div>

          <div class="clean-products-grid">
            @for (prod of bestSellers().slice(0, 8); track prod.id) {
              <app-product-card [product]="prod"></app-product-card>
            }
          </div>
        </div>
      </section>

      <!-- 4. Fresh Juice Seasonal Grid -->
      <section class="section-fresh-seasonal">
        <div class="container">
          <div class="section-headline-bar">
            <div class="headline-titles">
              <span class="sub-headline">طازج معصور بدون ماء مضاف</span>
              <h2 class="main-headline">فواكه الموسم الطبيعية</h2>
            </div>
            <a routerLink="/menu/fresh-juices" class="view-menu-link">كل العصائر الفريش ←</a>
          </div>

          <div class="clean-products-grid">
            @for (prod of freshJuices().slice(0, 4); track prod.id) {
              <app-product-card [product]="prod"></app-product-card>
            }
          </div>
        </div>
      </section>

      <!-- 5. Store Address & Visit Callout -->
      <section class="section-visit-banner container">
        <div class="visit-card-grid">
          <div class="visit-content">
            <span class="visit-pill-tag">
              <i class="fa-solid fa-location-dot"></i> فرع مدينة العبور المعتمد
            </span>
            <h2 class="visit-title">شرفنا بالزيارة في سنتر العبور</h2>
            <p class="visit-desc">
              الحي الأول – سنتر العبور (بجوار مطعم أبو حلب). <br />
              نستقبلكم طوال اليوم ونوفر خدمة التوصيل الدليفري السريع 24 ساعة لكافة أحياء ومناطق العبور.
            </p>
            <div class="visit-buttons">
              <a [href]="business().contacts.googleMapsUrl" target="_blank" rel="noopener noreferrer" class="btn-map-nav">
                <i class="fa-solid fa-map-location-dot"></i> الاتجاهات على خرائط Google
              </a>
              <a [href]="'tel:' + business().contacts.phone1" class="btn-call-direct">
                <i class="fa-solid fa-phone"></i> {{ business().contacts.phone1 }}
              </a>
            </div>
          </div>

          <div class="visit-visual-side">
            <img src="/images/brand/elmaestro-hero.jpg" alt="عصائر وفريشات المايسترو" class="visit-photo" />
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .juice-store-home {
      background: #F7F8F3;
      padding-bottom: 4rem;
    }

    /* 1. Hero Showcase */
    .store-hero-immersive {
      background: #FFFFFF;
      border-bottom: 1px solid #E2E8E2;
      padding: 3rem 0 3.5rem;
    }
    .hero-container-box {
      max-width: 1200px;
      margin: 0 auto;
    }
    .hero-split-grid {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 3rem;
      align-items: center;
    }
    .hero-brand-statement {
      display: flex;
      flex-direction: column;
      gap: 1.15rem;
    }
    .badge-fresh-origin {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: #EAF5EC;
      color: #174D32;
      border: 1px solid #BBD9C2;
      padding: 0.35rem 0.85rem;
      border-radius: 999px;
      font-size: 0.82rem;
      font-weight: 800;
      align-self: flex-start;
    }
    .badge-fresh-origin i {
      color: #279653;
    }
    .hero-display-title {
      font-size: clamp(2rem, 4vw, 3.2rem);
      font-weight: 900;
      color: #172033;
      line-height: 1.25;
      letter-spacing: -0.5px;
    }
    .color-accent-fresh {
      color: #174D32;
    }
    .hero-subtext {
      font-size: clamp(0.95rem, 1.8vw, 1.05rem);
      color: #718096;
      line-height: 1.7;
      max-width: 580px;
    }
    .hero-action-buttons {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 0.5rem;
    }
    .btn-primary-menu {
      background: #174D32;
      color: #FFFFFF;
      padding: 0.95rem 2rem;
      border-radius: 12px;
      font-size: 1rem;
      font-weight: 800;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.65rem;
      transition: background 0.2s, transform 0.15s;
      box-shadow: 0 4px 14px rgba(23, 77, 50, 0.25);
    }
    .btn-primary-menu:hover {
      background: #279653;
      transform: translateY(-2px);
    }

    .service-strip-perks {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      padding-top: 1.25rem;
      border-top: 1px solid #E2E8E2;
      margin-top: 0.75rem;
    }
    .perk-unit {
      display: flex;
      align-items: center;
      gap: 0.45rem;
      font-size: 0.82rem;
      font-weight: 700;
      color: #172033;
    }
    .perk-unit i {
      color: #279653;
      font-size: 0.9rem;
    }

    /* Storefront Card */
    .hero-storefront-wrapper {
      position: relative;
    }
    .storefront-canvas {
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 12px 30px rgba(23, 77, 50, 0.08);
      border: 1px solid #E2E8E2;
      background: #FFFFFF;
    }
    .storefront-main-photo {
      width: 100%;
      height: 420px;
      object-fit: cover;
      display: block;
    }
    .storefront-badge-bar {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      left: 1rem;
      background: rgba(255, 255, 255, 0.96);
      backdrop-filter: blur(8px);
      border-radius: 14px;
      padding: 0.75rem 1rem;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      gap: 0.75rem;
      border: 1px solid #E2E8E2;
    }
    .sbb-crest {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      background: #F7F8F3;
      padding: 2px;
      border: 1px solid #E2E8E2;
      flex-shrink: 0;
    }
    .sbb-logo-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .sbb-info {
      display: flex;
      flex-direction: column;
      line-height: 1.25;
    }
    .sbb-title {
      font-size: 0.95rem;
      font-weight: 800;
      color: #174D32;
    }
    .sbb-address {
      font-size: 0.76rem;
      color: #718096;
      display: flex;
      align-items: center;
      gap: 0.35rem;
    }
    .sbb-address i {
      color: #279653;
    }

    /* Section Headings */
    .minimal-categories-section, .section-featured-products, .section-fresh-seasonal {
      padding-top: 3rem;
    }
    .section-headline-bar {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 1rem;
      margin-bottom: 1.5rem;
      flex-wrap: wrap;
    }
    .headline-titles {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }
    .sub-headline {
      font-size: 0.8rem;
      font-weight: 800;
      color: #279653;
      display: block;
    }
    .main-headline {
      font-size: clamp(1.4rem, 3vw, 1.85rem);
      font-weight: 900;
      color: #172033;
    }
    .view-menu-link {
      color: #174D32;
      font-size: 0.88rem;
      font-weight: 800;
      text-decoration: none;
      transition: color 0.2s;
      white-space: nowrap;
    }
    .view-menu-link:hover {
      color: #279653;
    }

    /* Category Grid */
    .categories-pure-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 0.85rem;
    }
    .clean-category-card {
      background: #FFFFFF;
      border: 1px solid #E2E8E2;
      border-radius: 14px;
      padding: 1.35rem 0.85rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.45rem;
      text-decoration: none;
      color: inherit;
      box-shadow: 0 2px 6px rgba(23, 77, 50, 0.02);
      transition: all 0.2s ease;
    }
    .clean-category-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(23, 77, 50, 0.08);
      border-color: #279653;
    }
    .clean-icon-wrap {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      background: #EAF5EC;
      color: #174D32;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.15rem;
      margin-bottom: 0.25rem;
      transition: all 0.2s;
    }
    .clean-category-card:hover .clean-icon-wrap {
      background: #174D32;
      color: #FFFFFF;
    }
    .clean-category-card h3 {
      font-size: 0.92rem;
      font-weight: 800;
      color: #172033;
    }
    .clean-category-card p {
      font-size: 0.72rem;
      color: #718096;
      line-height: 1.35;
    }

    /* Product Grid */
    .clean-products-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.25rem;
    }

    /* Visit Banner */
    .section-visit-banner {
      margin-top: 3.5rem;
    }
    .visit-card-grid {
      background: #174D32;
      color: #FFFFFF;
      border-radius: 20px;
      overflow: hidden;
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      box-shadow: 0 10px 28px rgba(23, 77, 50, 0.18);
    }
    .visit-content {
      padding: 3rem 2.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
    }
    .visit-pill-tag {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      background: rgba(255, 255, 255, 0.15);
      color: #BBD9C2;
      padding: 0.25rem 0.75rem;
      border-radius: 999px;
      font-size: 0.78rem;
      font-weight: 700;
      align-self: flex-start;
    }
    .visit-title {
      font-size: clamp(1.6rem, 3.5vw, 2.1rem);
      font-weight: 900;
      line-height: 1.25;
      color: #FFFFFF;
    }
    .visit-desc {
      font-size: 0.92rem;
      color: rgba(255, 255, 255, 0.88);
      line-height: 1.65;
    }
    .visit-buttons {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-wrap: wrap;
      margin-top: 0.5rem;
    }
    .btn-map-nav {
      background: #FFFFFF;
      color: #174D32;
      padding: 0.8rem 1.4rem;
      border-radius: 10px;
      font-size: 0.9rem;
      font-weight: 800;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: background 0.2s;
    }
    .btn-map-nav:hover { background: #EAF5EC; }
    .btn-call-direct {
      background: rgba(255, 255, 255, 0.15);
      border: 1.5px solid rgba(255, 255, 255, 0.3);
      color: #FFFFFF;
      padding: 0.8rem 1.3rem;
      border-radius: 10px;
      font-size: 0.9rem;
      font-weight: 800;
      text-decoration: none;
      direction: ltr;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: background 0.2s;
    }
    .btn-call-direct:hover { background: rgba(255, 255, 255, 0.25); }

    .visit-visual-side {
      height: 100%;
    }
    .visit-photo {
      width: 100%;
      height: 100%;
      min-height: 280px;
      object-fit: cover;
      display: block;
    }

    /* Responsive Breakpoints */
    @media (max-width: 1024px) {
      .hero-split-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      .categories-pure-grid {
        grid-template-columns: repeat(3, 1fr);
      }
      .clean-products-grid {
        grid-template-columns: repeat(3, 1fr);
      }
      .visit-card-grid {
        grid-template-columns: 1fr;
      }
      .visit-photo {
        min-height: 220px;
      }
    }

    @media (max-width: 768px) {
      .section-headline-bar {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
      .clean-products-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.75rem;
      }
    }

    @media (max-width: 640px) {
      .store-hero-immersive {
        padding: 2rem 0 2.5rem;
      }
      .hero-action-buttons {
        flex-direction: column;
        width: 100%;
      }
      .btn-primary-menu {
        width: 100%;
        justify-content: center;
      }
      .service-strip-perks {
        flex-wrap: wrap;
        gap: 0.85rem;
      }
      .categories-pure-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.65rem;
      }
      .clean-category-card {
        padding: 1.1rem 0.65rem;
      }
      .clean-products-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.65rem;
      }
      .storefront-main-photo {
        height: 260px;
      }
      .visit-content {
        padding: 1.75rem 1.25rem;
      }
      .btn-map-nav, .btn-call-direct {
        width: 100%;
        justify-content: center;
      }
    }
  `]
})
export class HomeComponent {
  private productService = inject(ProductService);
  private configService = inject(ConfigService);
  private seoService = inject(SeoService);

  readonly business = this.configService.business;
  readonly bestSellers = this.productService.bestSellers;
  readonly freshJuices = computed(() => this.productService.getProductsByCategory('fresh-juices'));

  constructor() {
    this.seoService.setDefaultSeo();
  }
}
