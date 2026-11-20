import { Component, inject, signal, effect } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="master-clean-header">
      <div class="container nav-content">
        <!-- Brand Crest + Typography -->
        <a routerLink="/" class="brand-unit" aria-label="المايسترو محمصات وفريشات">
          <img src="/images/brand/elmaestro-logo-badge.png" alt="لوجو المايسترو" class="brand-crest" />
          <div class="brand-headings">
            <span class="brand-main-name">المايسترو</span>
            <span class="brand-sub-badge">محمصات وفريشات • العبور</span>
          </div>
        </a>

        <!-- Navigation Controls -->
        <nav class="nav-control-group">
          <!-- Primary Menu Pill -->
          <a routerLink="/menu" routerLinkActive="active" class="btn-menu-pill">
            <i class="fa-solid fa-book-open"></i>
            <span>المنيو</span>
          </a>

          <!-- Cart Bubble Button -->
          <a routerLink="/cart" class="cart-circle-btn" aria-label="سلة الطلبات">
            <i class="fa-solid fa-basket-shopping"></i>
            @if (cartCount() > 0) {
              <span class="cart-badge-count">{{ cartCount() }}</span>
            }
          </a>

          <!-- 3-Bars Hamburger Trigger (Menu Drawer) -->
          <button 
            type="button" 
            class="sidebar-hamburger-trigger" 
            (click)="toggleMenu()"
            [attr.aria-expanded]="isOpen()"
            aria-label="فتح القائمة الرئيسية">
            <span class="bar-line line-1"></span>
            <span class="bar-line line-2"></span>
            <span class="bar-line line-3"></span>
          </button>
        </nav>
      </div>
    </header>

    <!-- Side Drawer Navigation Panel -->
    @if (isOpen()) {
      <div class="drawer-overlay" (click)="closeMenu()">
        <div class="drawer-panel" (click)="$event.stopPropagation()">
          <!-- Drawer Header -->
          <div class="drawer-top-bar">
            <div class="drawer-brand">
              <img src="/images/brand/elmaestro-logo-badge.png" alt="المايسترو" class="drawer-logo" />
              <div class="drawer-titles">
                <strong>المايسترو</strong>
                <span>محمصات وفريشات</span>
              </div>
            </div>
            <button type="button" class="btn-close-drawer" (click)="closeMenu()" aria-label="إغلاق القائمة">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <!-- Main Navigation Links -->
          <nav class="drawer-links-stack">
            <div class="drawer-section-label">التنقل الرئيسي</div>

            <!-- 1. الرئيسية -->
            <a routerLink="/" (click)="closeMenu()" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" class="drawer-link">
              <i class="fa-solid fa-house"></i>
              <span>الرئيسية</span>
            </a>

            <!-- 2. المنيو -->
            <a routerLink="/menu" (click)="closeMenu()" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" class="drawer-link highlight-menu">
              <i class="fa-solid fa-book-open"></i>
              <span>المنيو</span>
            </a>

            <!-- 3. الأكثر طلباً -->
            <a routerLink="/" fragment="bestsellers" (click)="closeMenu()" class="drawer-link">
              <i class="fa-solid fa-star"></i>
              <span>الأكثر طلباً</span>
            </a>

            <!-- 4. القهوة والمحمصات -->
            <a routerLink="/menu/coffee" (click)="closeMenu()" routerLinkActive="active" class="drawer-link">
              <i class="fa-solid fa-mug-hot"></i>
              <span>القهوة والمحمصات</span>
            </a>

            <!-- 5. عن المايسترو -->
            <a routerLink="/about" (click)="closeMenu()" routerLinkActive="active" class="drawer-link">
              <i class="fa-solid fa-award"></i>
              <span>عن المايسترو</span>
            </a>

            <!-- 6. موقعنا وتواصل معنا -->
            <a routerLink="/contact" (click)="closeMenu()" routerLinkActive="active" class="drawer-link">
              <i class="fa-solid fa-location-dot"></i>
              <span>موقعنا وتواصل معنا</span>
            </a>
          </nav>

          <!-- Secondary Links Divider -->
          <div class="drawer-secondary-section">
            <div class="drawer-section-label">روابط هامة</div>
            <div class="secondary-links-grid">
              <a [href]="business().contacts.facebookUrl" target="_blank" rel="noopener noreferrer" class="secondary-link">
                <i class="fa-brands fa-facebook"></i>
                <span>Facebook</span>
              </a>
              <a [href]="business().contacts.googleReviewsUrl || business().contacts.googleMapsUrl" target="_blank" rel="noopener noreferrer" class="secondary-link">
                <i class="fa-solid fa-star-half-stroke"></i>
                <span>تقييمات Google</span>
              </a>
              <a routerLink="/privacy" (click)="closeMenu()" class="secondary-link">
                <i class="fa-solid fa-shield-halved"></i>
                <span>سياسة الخصوصية</span>
              </a>
            </div>
          </div>

          <!-- Drawer Footer Direct Contacts -->
          <div class="drawer-footer-actions">
            <div class="store-mini-info">
              <i class="fa-solid fa-clock"></i>
              <span>خدمة وتوصيل 24 ساعة لكافة أحياء العبور</span>
            </div>
            <a [href]="'tel:' + business().contacts.phone1" class="btn-drawer-phone">
              <i class="fa-solid fa-phone"></i>
              <span dir="ltr">{{ business().contacts.phone1 }}</span>
            </a>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 1000;
      width: 100%;
    }

    .master-clean-header {
      background: #FFFFFF;
      border-bottom: 1px solid #E2E8E2;
      box-shadow: 0 2px 10px rgba(23, 77, 50, 0.04);
      height: var(--header-height, 64px);
      display: flex;
      align-items: center;
    }

    .nav-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }

    /* Brand */
    .brand-unit {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      text-decoration: none;
      flex-shrink: 0;
    }

    .brand-crest {
      width: 44px;
      height: 44px;
      object-fit: contain;
      border-radius: 10px;
    }

    .brand-headings {
      display: flex;
      flex-direction: column;
      line-height: 1.15;
    }

    .brand-main-name {
      font-size: 1.2rem;
      font-weight: 900;
      color: #174D32;
      letter-spacing: -0.3px;
    }

    .brand-sub-badge {
      font-size: 0.72rem;
      font-weight: 700;
      color: #718096;
    }

    /* Nav Controls */
    .nav-control-group {
      display: flex;
      align-items: center;
      gap: 0.65rem;
    }

    /* Primary Menu Button */
    .btn-menu-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      background: #174D32;
      color: #FFFFFF;
      padding: 0.5rem 1.15rem;
      border-radius: 999px;
      font-size: 0.9rem;
      font-weight: 800;
      text-decoration: none;
      transition: background 0.2s ease, transform 0.15s ease;
      box-shadow: 0 2px 6px rgba(23, 77, 50, 0.2);
    }

    .btn-menu-pill:hover, .btn-menu-pill.active {
      background: #279653;
      transform: translateY(-1px);
    }

    .btn-menu-pill i {
      font-size: 0.85rem;
    }

    /* Cart Button */
    .cart-circle-btn {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: #EAF5EC;
      color: #174D32;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.05rem;
      position: relative;
      text-decoration: none;
      transition: background 0.2s, transform 0.15s;
    }

    .cart-circle-btn:hover {
      background: #174D32;
      color: #FFFFFF;
      transform: scale(1.05);
    }

    .cart-badge-count {
      position: absolute;
      top: -3px;
      left: -3px;
      background: #55B83F;
      color: #FFFFFF;
      font-size: 0.68rem;
      font-weight: 900;
      min-width: 18px;
      height: 18px;
      border-radius: 999px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 4px;
      border: 2px solid #FFFFFF;
    }

    /* Hamburger Trigger */
    .sidebar-hamburger-trigger {
      width: 42px;
      height: 42px;
      border-radius: 10px;
      background: #F0F3EC;
      border: 1px solid #E2E8E2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
      cursor: pointer;
      padding: 0;
      transition: background 0.2s;
    }

    .sidebar-hamburger-trigger:hover {
      background: #EAF5EC;
      border-color: #BBD9C2;
    }

    .bar-line {
      width: 18px;
      height: 2px;
      background: #174D32;
      border-radius: 2px;
      transition: all 0.2s;
    }

    /* Drawer Styles */
    .drawer-overlay {
      position: fixed;
      inset: 0;
      background: rgba(23, 32, 51, 0.45);
      backdrop-filter: blur(4px);
      z-index: 2000;
      display: flex;
      justify-content: flex-start;
      animation: fadeIn 0.2s ease-out;
    }

    .drawer-panel {
      width: 320px;
      max-width: 85vw;
      height: 100%;
      background: #FFFFFF;
      box-shadow: 4px 0 24px rgba(0, 0, 0, 0.15);
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      animation: slideInRight 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideInRight {
      from { transform: translateX(100%); }
      to { transform: translateX(0); }
    }

    .drawer-top-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.15rem 1.25rem;
      border-bottom: 1px solid #E2E8E2;
      background: #F7F8F3;
    }

    .drawer-brand {
      display: flex;
      align-items: center;
      gap: 0.65rem;
    }

    .drawer-logo {
      width: 38px;
      height: 38px;
      object-fit: contain;
      border-radius: 8px;
    }

    .drawer-titles {
      display: flex;
      flex-direction: column;
      line-height: 1.2;
    }

    .drawer-titles strong {
      font-size: 1.05rem;
      font-weight: 900;
      color: #174D32;
    }

    .drawer-titles span {
      font-size: 0.72rem;
      color: #718096;
    }

    .btn-close-drawer {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      background: #FFFFFF;
      border: 1px solid #E2E8E2;
      color: #718096;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.15s;
    }

    .btn-close-drawer:hover {
      background: #EAF5EC;
      color: #174D32;
    }

    .drawer-section-label {
      padding: 0.75rem 1.25rem 0.35rem;
      font-size: 0.72rem;
      font-weight: 800;
      color: #718096;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .drawer-links-stack {
      display: flex;
      flex-direction: column;
      padding: 0.5rem 0.75rem;
      gap: 0.25rem;
    }

    .drawer-link {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      padding: 0.75rem 0.85rem;
      border-radius: 10px;
      color: #172033;
      font-size: 0.95rem;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.15s ease;
    }

    .drawer-link i {
      width: 22px;
      text-align: center;
      font-size: 1rem;
      color: #279653;
      transition: color 0.15s;
    }

    .drawer-link:hover {
      background: #EAF5EC;
      color: #174D32;
    }

    .drawer-link:hover i {
      color: #174D32;
    }

    .drawer-link.active {
      background: #EAF5EC;
      color: #174D32;
      font-weight: 800;
      border-inline-start: 4px solid #174D32;
    }

    .drawer-link.highlight-menu {
      color: #174D32;
      font-weight: 800;
    }

    .drawer-secondary-section {
      margin-top: auto;
      border-top: 1px solid #E2E8E2;
      padding: 0.75rem 0.75rem;
      background: #F7F8F3;
    }

    .secondary-links-grid {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .secondary-link {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      padding: 0.55rem 0.75rem;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 700;
      color: #718096;
      text-decoration: none;
      transition: all 0.15s;
    }

    .secondary-link i {
      font-size: 0.95rem;
      color: #718096;
    }

    .secondary-link:hover {
      background: #FFFFFF;
      color: #174D32;
    }

    .secondary-link:hover i {
      color: #279653;
    }

    .drawer-footer-actions {
      padding: 1rem 1.25rem;
      border-top: 1px solid #E2E8E2;
      background: #FFFFFF;
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
    }

    .store-mini-info {
      display: flex;
      align-items: center;
      gap: 0.45rem;
      font-size: 0.74rem;
      color: #718096;
      line-height: 1.3;
    }

    .store-mini-info i {
      color: #55B83F;
    }

    .btn-drawer-phone {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background: #174D32;
      color: #FFFFFF;
      padding: 0.65rem;
      border-radius: 10px;
      font-size: 0.9rem;
      font-weight: 800;
      text-decoration: none;
      transition: background 0.2s;
    }

    .btn-drawer-phone:hover {
      background: #279653;
    }

    @media (max-width: 480px) {
      .brand-sub-badge {
        display: none;
      }
      .brand-crest {
        width: 38px;
        height: 38px;
      }
      .brand-main-name {
        font-size: 1.1rem;
      }
      .btn-menu-pill {
        padding: 0.45rem 0.9rem;
        font-size: 0.85rem;
      }
      .cart-circle-btn, .sidebar-hamburger-trigger {
        width: 38px;
        height: 38px;
      }
    }
  `]
})
export class HeaderComponent {
  private cartService = inject(CartService);
  private configService = inject(ConfigService);

  readonly cartCount = this.cartService.itemCount;
  readonly business = this.configService.business;
  readonly isOpen = signal<boolean>(false);

  constructor() {
    // Prevent background scrolling when drawer is open
    effect(() => {
      if (typeof document !== 'undefined') {
        if (this.isOpen()) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      }
    });
  }

  toggleMenu(): void {
    this.isOpen.update(v => !v);
  }

  closeMenu(): void {
    this.isOpen.set(false);
  }
}
