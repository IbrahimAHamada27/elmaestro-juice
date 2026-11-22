import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConfigService } from '../../core/services/config.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="about-modern-page">
      <!-- Modern Hero Showcase -->
      <section class="about-hero-block">
        <div class="container hero-layout">
          <div class="hero-text-side">
            <span class="about-tag-pill">
              <i class="fa-solid fa-crown"></i> قصة التميز والجودة بالعبور
            </span>
            <h1 class="about-main-title">
              المايسترو.. <br />
              <span class="gradient-txt">محمصات وفريشات</span>
            </h1>
            <p class="about-lead-desc">
              سيمفونية راقية تجمع بين عبق التحميص الأصيل لأجود أنواع البن والمكسرات الفاخرة، وانتعاش الفواكه الطبيعية 100% المعصورة طازجة يومياً بأعلى درجات العناية والإتقان.
            </p>
            <div class="hero-actions-row">
              <a routerLink="/menu" class="btn-green-fill">
                <i class="fa-solid fa-layer-group"></i> استكشف المنيو
              </a>
              <a [href]="'https://wa.me/' + business().contacts.whatsapp" target="_blank" rel="noopener noreferrer" class="btn-wa-fill">
                <i class="fa-brands fa-whatsapp"></i> تواصل عبر واتساب
              </a>
            </div>
          </div>

          <div class="hero-image-side">
            <div class="media-frame-featured">
              <img src="/images/brand/elmaestro-store.jpg" alt="فرع المايسترو سنتر العبور" class="featured-img" />
              <div class="branch-overlay-label">
                <i class="fa-solid fa-location-dot"></i>
                <span>مدينة العبور – سنتر العبور (بجوار أبو حلب)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Key Stats & Philosophy -->
      <section class="stats-counter-strip">
        <div class="container stats-flex">
          <div class="stat-pill-item">
            <div class="spi-num">23</div>
            <div class="spi-text">
              <strong>قسماً متنوعاً</strong>
              <span>يغطي كافة الأذواق</span>
            </div>
          </div>
          <div class="stat-pill-item">
            <div class="spi-num">+290</div>
            <div class="spi-text">
              <strong>صنفاً حقيقياً</strong>
              <span>تحضير طازج يومياً</span>
            </div>
          </div>
          <div class="stat-pill-item">
            <div class="spi-num">100%</div>
            <div class="spi-text">
              <strong>طبيعي ونقي</strong>
              <span>بدون منكهات صناعية</span>
            </div>
          </div>
          <div class="stat-pill-item">
            <div class="spi-num">24h</div>
            <div class="spi-text">
              <strong>توصيل على مدار الساعة</strong>
              <span>لكافة أحياء العبور</span>
            </div>
          </div>
        </div>
      </section>

      <!-- The Specialty Pillars -->
      <section class="section-padding container">
        <div class="section-header-wrap">
          <span class="sub-badge"><i class="fa-solid fa-star"></i> أركان التميز</span>
          <h2 class="section-title">لماذا يختار أهالي العبور "المايسترو"؟</h2>
          <p class="section-desc">نجمع بين خبرة التحميص الدقيق والاحترافية العالية في تقديم الفريشات والمشروبات العصرية</p>
        </div>

        <div class="pillars-grid">
          <div class="pillar-card">
            <div class="pillar-icon nature"><i class="fa-solid fa-leaf"></i></div>
            <h3 class="pillar-title">فواكه طازجة 100%</h3>
            <p class="pillar-desc">
              نختار ثمار الفواكه بعناية فائقة من المزارع مباشرة يومياً، من المانجو الإسماعيلاوي، الفراولة، الأفوكادو، والرمان، ليتم عصرها فور طلبك بدون ألوان أو نكهات مصطنعة.
            </p>
          </div>

          <div class="pillar-card">
            <div class="pillar-icon coffee"><i class="fa-solid fa-mug-hot"></i></div>
            <h3 class="pillar-title">ركن القهوة والآيس كوفي</h3>
            <p class="pillar-desc">
              بن محمص بنسب تحميص دقيقة لتقديم القهوة التركية المضبوطة (سنجل ودبل)، والآيس موكا والآيس لاتيه الكريمي المثلج الذي يمنحك الطاقة والانتعاش في كل وقت.
            </p>
          </div>

          <div class="pillar-card">
            <div class="pillar-icon roastery"><i class="fa-solid fa-cubes-stacked"></i></div>
            <h3 class="pillar-title">عصائر المحمصات بالمكسرات</h3>
            <p class="pillar-desc">
              تخصص فريد في مدينة العبور: عصائر الحليب الطبيعي بالمكسرات المحمصة الفاخرة (فستق، لوز، كاجو، بندق، وسوداني) محلاة بعسل النحل ومغذية للجميع.
            </p>
          </div>

          <div class="pillar-card">
            <div class="pillar-icon speed"><i class="fa-solid fa-motorcycle"></i></div>
            <h3 class="pillar-title">توصيل دليفري 24 ساعة</h3>
            <p class="pillar-desc">
              أسطول طيارين جاهز على مدار 24 ساعة لخدمتك في الحي الأول، الثاني، الثالث، الرابع، الخامس، السادس، الشباب، العائلي، الترفيهي، وكافة كمبوندات ومناطق العبور.
            </p>
          </div>
        </div>
      </section>

      <!-- Signature Visuals Strip -->
      <section class="visuals-showcase-section">
        <div class="container">
          <div class="visuals-cards-grid">
            <div class="visual-card">
              <img src="/images/brand/elmaestro-drinks.jpg" alt="مشروبات وفريشات المايسترو" class="vc-img" />
              <div class="vc-info">
                <h4>عصائر فريش وميكسات ملكية</h4>
                <p>توليفات طازجة غنية بالفيتامينات والنكهة الأصيلة</p>
              </div>
            </div>

            <div class="visual-card">
              <img src="/images/brand/elmaestro-hero.jpg" alt="بار المايسترو" class="vc-img" />
              <div class="vc-info">
                <h4>تحضير فوري أمام العميل</h4>
                <p>أعلى معايير النظافة والتعقيم في سنتر العبور</p>
              </div>
            </div>

            <div class="visual-card">
              <img src="/images/brand/elmaestro-special.jpg" alt="الآيس كوفي والموهيتو" class="vc-img" />
              <div class="vc-info">
                <h4>آيس كوفي وموهيتو منعش</h4>
                <p>مشروبات باردة ومثلجة تلائم كل أوقات اليوم</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action Banner -->
      <section class="cta-bottom-block container">
        <div class="cta-inner-card">
          <div class="cta-texts">
            <h3 class="cta-title">جاهز لتجربة سيمفونية المذاق الطبيعي؟</h3>
            <p class="cta-sub">اطلب الآن لنصلك خلال دقائق أينما كنت في مدينة العبور، أو شرفنا بالزيارة في سنتر العبور بجوار مطعم أبو حلب.</p>
          </div>
          <div class="cta-buttons">
            <a routerLink="/menu" class="btn-cta-menu">
              <i class="fa-solid fa-book-open"></i> استعراض المنيو
            </a>
            <a [href]="'https://wa.me/' + business().contacts.whatsapp" target="_blank" rel="noopener noreferrer" class="btn-cta-wa">
              <i class="fa-brands fa-whatsapp"></i> طلب واتساب 24 ساعة
            </a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .about-modern-page {
      background: #fbfbf9;
      padding-bottom: 4rem;
    }

    /* Hero */
    .about-hero-block {
      background: linear-gradient(135deg, #07190d 0%, #14532d 100%);
      color: #ffffff;
      padding: 4.5rem 0 4rem;
      border-bottom: 3px solid #16a34a;
    }
    .hero-layout {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 3rem;
      align-items: center;
    }
    .hero-text-side {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .about-tag-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      background: rgba(34, 197, 94, 0.15);
      border: 1px solid rgba(34, 197, 94, 0.35);
      color: #86efac;
      padding: 0.25rem 0.75rem;
      border-radius: 999px;
      font-size: 0.8rem;
      font-weight: 700;
      align-self: flex-start;
    }
    .about-main-title {
      font-size: 3.2rem;
      font-weight: 900;
      line-height: 1.15;
      color: #ffffff;
    }
    .gradient-txt {
      color: #86efac;
    }
    .about-lead-desc {
      font-size: 1.05rem;
      line-height: 1.7;
      color: rgba(255, 255, 255, 0.9);
      max-width: 580px;
    }
    .hero-actions-row {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      flex-wrap: wrap;
      margin-top: 0.5rem;
    }
    .btn-green-fill {
      background: #16a34a;
      color: #ffffff;
      padding: 0.75rem 1.4rem;
      border-radius: 10px;
      font-weight: 800;
      font-size: 0.95rem;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: background 0.2s;
    }
    .btn-green-fill:hover { background: #15803d; }
    .btn-wa-fill {
      background: #25d366;
      color: #ffffff;
      padding: 0.75rem 1.4rem;
      border-radius: 10px;
      font-weight: 800;
      font-size: 0.95rem;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: background 0.2s;
    }
    .btn-wa-fill:hover { background: #20ba59; }

    .media-frame-featured {
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35);
      border: 3px solid rgba(255, 255, 255, 0.15);
    }
    .featured-img {
      width: 100%;
      height: 380px;
      object-fit: cover;
    }
    .branch-overlay-label {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      left: 1rem;
      background: rgba(7, 25, 13, 0.88);
      backdrop-filter: blur(8px);
      padding: 0.65rem 1rem;
      border-radius: 12px;
      color: #ffffff;
      font-size: 0.82rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .branch-overlay-label i {
      color: #f87171;
    }

    /* Stats Counter Strip */
    .stats-counter-strip {
      background: #ffffff;
      border-bottom: 1px solid #e2e8f0;
      padding: 1.5rem 0;
    }
    .stats-flex {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
    }
    .stat-pill-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.5rem;
    }
    .spi-num {
      font-size: 2.4rem;
      font-weight: 900;
      color: #166534;
      line-height: 1;
    }
    .spi-text strong {
      display: block;
      color: #0f172a;
      font-size: 0.95rem;
    }
    .spi-text span {
      font-size: 0.78rem;
      color: #64748b;
    }

    /* Section Headings */
    .section-header-wrap {
      text-align: center;
      max-width: 650px;
      margin: 0 auto 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.45rem;
    }
    .sub-badge {
      background: #dcfce7;
      color: #166534;
      font-size: 0.78rem;
      font-weight: 800;
      padding: 0.2rem 0.65rem;
      border-radius: 999px;
    }
    .section-title {
      font-size: 2.2rem;
      font-weight: 900;
      color: #0f172a;
    }
    .section-desc {
      font-size: 0.95rem;
      color: #64748b;
    }

    /* Pillars */
    .pillars-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
    }
    .pillar-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 1.75rem 1.25rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .pillar-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
    }
    .pillar-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
    }
    .pillar-icon.nature { background: #dcfce7; color: #166534; }
    .pillar-icon.coffee { background: #fef3c7; color: #92400e; }
    .pillar-icon.roastery { background: #fed7aa; color: #9a3412; }
    .pillar-icon.speed { background: #e0e7ff; color: #4338ca; }
    .pillar-title {
      font-size: 1.15rem;
      font-weight: 800;
      color: #1e293b;
    }
    .pillar-desc {
      font-size: 0.88rem;
      color: #64748b;
      line-height: 1.6;
    }

    /* Visuals Strip */
    .visuals-showcase-section {
      background: #ffffff;
      padding: 3rem 0;
      border-block: 1px solid #e2e8f0;
    }
    .visuals-cards-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }
    .visual-card {
      border-radius: 16px;
      overflow: hidden;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
    }
    .vc-img {
      width: 100%;
      height: 220px;
      object-fit: cover;
    }
    .vc-info {
      padding: 1.25rem;
    }
    .vc-info h4 {
      font-size: 1.05rem;
      font-weight: 800;
      color: #1e293b;
      margin-bottom: 0.25rem;
    }
    .vc-info p {
      font-size: 0.82rem;
      color: #64748b;
    }

    /* CTA Bottom */
    .cta-bottom-block {
      margin-top: 3.5rem;
    }
    .cta-inner-card {
      background: linear-gradient(135deg, #07190d 0%, #166534 100%);
      border-radius: 20px;
      padding: 2.75rem 3rem;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      box-shadow: 0 10px 30px rgba(22, 101, 52, 0.25);
    }
    .cta-title {
      font-size: 1.7rem;
      font-weight: 900;
      margin-bottom: 0.35rem;
    }
    .cta-sub {
      font-size: 0.92rem;
      color: rgba(255, 255, 255, 0.85);
      max-width: 580px;
    }
    .cta-buttons {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      flex-shrink: 0;
    }
    .btn-cta-menu {
      background: #ffffff;
      color: #166534;
      padding: 0.85rem 1.4rem;
      border-radius: 10px;
      font-weight: 800;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }
    .btn-cta-wa {
      background: #25d366;
      color: #ffffff;
      padding: 0.85rem 1.4rem;
      border-radius: 10px;
      font-weight: 800;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    /* Responsive */
    @media (max-width: 1024px) {
      .hero-layout {
        grid-template-columns: 1fr;
      }
      .featured-img {
        height: 280px;
      }
      .stats-flex {
        grid-template-columns: repeat(2, 1fr);
      }
      .pillars-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .visuals-cards-grid {
        grid-template-columns: 1fr;
      }
      .cta-inner-card {
        flex-direction: column;
        text-align: center;
        padding: 2rem;
      }
      .cta-buttons {
        flex-direction: column;
        width: 100%;
      }
      .btn-cta-menu, .btn-cta-wa {
        width: 100%;
        justify-content: center;
      }
    }
    @media (max-width: 640px) {
      .about-main-title {
        font-size: 2.3rem;
      }
      .stats-flex {
        grid-template-columns: 1fr;
      }
      .pillars-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent {
  private configService = inject(ConfigService);
  readonly business = this.configService.business;
}
