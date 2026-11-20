import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'المايسترو محمصات وفريشات | El Maestro — مدينة العبور'
  },
  {
    path: 'menu',
    loadComponent: () => import('./features/menu/menu.component').then(m => m.MenuComponent),
    title: 'قائمة المنيو | المايسترو محمصات وفريشات'
  },
  {
    path: 'menu/:categorySlug',
    loadComponent: () => import('./features/menu/menu.component').then(m => m.MenuComponent),
    title: 'قائمة الأصناف | المايسترو محمصات وفريشات'
  },
  {
    path: 't/:tableId',
    loadComponent: () => import('./features/table-qr/table-qr.component').then(m => m.TableQrComponent),
    title: 'التعرف على الطاولة | المايسترو محمصات وفريشات'
  },
  {
    path: 'table/:tableId',
    loadComponent: () => import('./features/table-qr/table-qr.component').then(m => m.TableQrComponent),
    title: 'التعرف على الطاولة | المايسترو محمصات وفريشات'
  },
  {
    path: 'product/:productSlug',
    loadComponent: () => import('./features/product/product-detail.component').then(m => m.ProductDetailComponent),
    title: 'تفاصيل الصنف | المايسترو محمصات وفريشات'
  },
  {
    path: 'search',
    loadComponent: () => import('./features/search/search.component').then(m => m.SearchComponent),
    title: 'نتائج البحث | المايسترو محمصات وفريشات'
  },
  {
    path: 'cart',
    loadComponent: () => import('./features/cart/cart.component').then(m => m.CartComponent),
    title: 'سلة الطلبات | المايسترو محمصات وفريشات'
  },
  {
    path: 'checkout',
    loadComponent: () => import('./features/checkout/checkout.component').then(m => m.CheckoutComponent),
    title: 'إتمام الطلب والتوصيل | المايسترو محمصات وفريشات'
  },
  {
    path: 'order-confirmation/:orderId',
    loadComponent: () => import('./features/orders/order-confirmation.component').then(m => m.OrderConfirmationComponent),
    title: 'تأكيد الطلب | المايسترو محمصات وفريشات'
  },
  {
    path: 'track-order/:orderId',
    loadComponent: () => import('./features/orders/track-order.component').then(m => m.TrackOrderComponent),
    title: 'تتبع حالة الطلب | المايسترو محمصات وفريشات'
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
    title: 'عن المايسترو وقصتنا | El Maestro'
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
    title: 'موقعنا وتواصل معنا | المايسترو محمصات وفريشات'
  },
  {
    path: 'privacy',
    loadComponent: () => import('./features/legal/privacy.component').then(m => m.PrivacyComponent),
    title: 'سياسة الخصوصية | المايسترو محمصات وفريشات'
  },
  {
    path: 'terms',
    loadComponent: () => import('./features/legal/terms.component').then(m => m.TermsComponent),
    title: 'الشروط والأحكام | المايسترو محمصات وفريشات'
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: 'الصفحة غير موجودة 404 | المايسترو محمصات وفريشات'
  }
];
