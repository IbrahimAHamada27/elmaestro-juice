const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.elmaestroeg.com';
const SITE_NAME = 'المايسترو محمصات وفريشات';
const DEFAULT_LOGO = `${BASE_URL}/images/brand/elmaestro-og-banner.jpg`;

const distBrowserDir = path.join(__dirname, '..', 'dist', 'elmaestro-app', 'browser');
const templateHtmlPath = path.join(distBrowserDir, 'index.html');

if (!fs.existsSync(templateHtmlPath)) {
  console.error('[SEO Gen] dist/elmaestro-app/browser/index.html not found! Run ng build first.');
  process.exit(1);
}

const templateHtml = fs.readFileSync(templateHtmlPath, 'utf8');

// Load menu data
const menuDataPath = path.join(__dirname, '..', 'src', 'app', 'core', 'data', 'elmaestro-menu.data.ts');
const menuContent = fs.readFileSync(menuDataPath, 'utf8');

// Parse Categories
let categories = [];
const catIndex = menuContent.indexOf('export const ELMAESTRO_CATEGORIES: ProductCategory[] = [');
if (catIndex !== -1) {
  const catEndIndex = menuContent.indexOf('export const ELMAESTRO_PRODUCTS', catIndex);
  const catJsonStr = menuContent.slice(catIndex + 'export const ELMAESTRO_CATEGORIES: ProductCategory[] = '.length, catEndIndex).trim().replace(/;$/, '');
  try {
    categories = JSON.parse(catJsonStr);
  } catch (e) {
    console.warn('[SEO Gen] Failed to parse categories JSON:', e.message);
  }
}

// Parse Products
let products = [];
const prodIndex = menuContent.indexOf('export const ELMAESTRO_PRODUCTS: Product[] = [');
if (prodIndex !== -1) {
  const prodEndIndex = menuContent.indexOf('export const ELMAESTRO_ADDONS', prodIndex);
  const endSlice = prodEndIndex !== -1 ? prodEndIndex : menuContent.length;
  const prodJsonStr = menuContent.slice(prodIndex + 'export const ELMAESTRO_PRODUCTS: Product[] = '.length, endSlice).trim().replace(/;$/, '');
  try {
    products = JSON.parse(prodJsonStr);
  } catch (e) {
    console.warn('[SEO Gen] Failed to parse products JSON:', e.message);
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function generateHtml(options) {
  const { title, description, image, url, jsonLd, extraHead, appRootContent } = options;
  const escapedTitle = escapeHtml(title);
  const escapedDesc = escapeHtml(description);
  const fullImg = image.startsWith('http') ? image : `${BASE_URL}${image}`;
  const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`;

  let html = templateHtml;

  // Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapedTitle}</title>`);

  // Meta description
  html = html.replace(/<meta\s+name=["']description["']\s+content=["'][^"']*["']\s*\/?>/i, `<meta name="description" content="${escapedDesc}">`);

  // Open Graph
  html = html.replace(/<meta\s+property=["']og:title["']\s+content=["'][^"']*["']\s*\/?>/i, `<meta property="og:title" content="${escapedTitle}">`);
  html = html.replace(/<meta\s+property=["']og:description["']\s+content=["'][^"']*["']\s*\/?>/i, `<meta property="og:description" content="${escapedDesc}">`);
  html = html.replace(/<meta\s+property=["']og:url["']\s+content=["'][^"']*["']\s*\/?>/i, `<meta property="og:url" content="${fullUrl}">`);
  html = html.replace(/<meta\s+property=["']og:image["']\s+content=["'][^"']*["']\s*\/?>/i, `<meta property="og:image" content="${fullImg}">`);
  html = html.replace(/<meta\s+property=["']og:image:secure_url["']\s+content=["'][^"']*["']\s*\/?>/i, `<meta property="og:image:secure_url" content="${fullImg}">`);
  
  const imgType = fullImg.endsWith('.png') ? 'image/png' : 'image/jpeg';
  html = html.replace(/<meta\s+property=["']og:image:type["']\s+content=["'][^"']*["']\s*\/?>/i, `<meta property="og:image:type" content="${imgType}">`);

  // Twitter
  html = html.replace(/<meta\s+name=["']twitter:title["']\s+content=["'][^"']*["']\s*\/?>/i, `<meta name="twitter:title" content="${escapedTitle}">`);
  html = html.replace(/<meta\s+name=["']twitter:description["']\s+content=["'][^"']*["']\s*\/?>/i, `<meta name="twitter:description" content="${escapedDesc}">`);
  html = html.replace(/<meta\s+name=["']twitter:image["']\s+content=["'][^"']*["']\s*\/?>/i, `<meta name="twitter:image" content="${fullImg}">`);

  // Canonical
  html = html.replace(/<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/i, `<link rel="canonical" href="${fullUrl}">`);

  // Structured Data Replacement or Injection
  if (jsonLd) {
    const jsonLdTag = `\n    <script type="application/ld+json">\n${JSON.stringify(jsonLd, null, 2)}\n    </script>\n  </head>`;
    html = html.replace(/<\/head>/i, jsonLdTag);
  }

  // Extra head elements
  if (extraHead) {
    html = html.replace(/<\/head>/i, `\n    ${extraHead}\n  </head>`);
  }

  // App-root initial content
  if (appRootContent) {
    html = html.replace(/<app-root><\/app-root>/i, `<app-root>${appRootContent}</app-root>`);
  }

  return html;
}

let generatedCount = 0;
const sitemapUrls = [];
const today = new Date().toISOString().split('T')[0];

// Main Static Pages in Sitemap
sitemapUrls.push({ loc: `${BASE_URL}/`, changefreq: 'daily', priority: '1.0' });
sitemapUrls.push({ loc: `${BASE_URL}/menu`, changefreq: 'daily', priority: '0.9' });
sitemapUrls.push({ loc: `${BASE_URL}/about`, changefreq: 'monthly', priority: '0.7' });
sitemapUrls.push({ loc: `${BASE_URL}/contact`, changefreq: 'monthly', priority: '0.8' });
sitemapUrls.push({ loc: `${BASE_URL}/privacy`, changefreq: 'yearly', priority: '0.3' });
sitemapUrls.push({ loc: `${BASE_URL}/terms`, changefreq: 'yearly', priority: '0.3' });

// 1. Generate pages for products
for (const prod of products) {
  if (!prod.slug) continue;
  const prodDir = path.join(distBrowserDir, 'product', prod.slug);
  fs.mkdirSync(prodDir, { recursive: true });

  let prodTitle = `${prod.nameAr} | ${SITE_NAME} في العبور`;
  if (prod.categorySlug === 'ice-cream-roll') {
    prodTitle = `${prod.nameAr} | آيس كريم رول المايسترو في العبور`;
  } else if (prod.categorySlug === 'roastery-nuts') {
    prodTitle = `${prod.nameAr} | محمصات ومقلاة المايسترو بالعبور`;
  }

  const prodDesc = prod.descriptionAr
    ? `${prod.descriptionAr} - متوفر الآن لدى المايسترو محمصات وفريشات، سنتر العبور بالحي الأول بجوار مطعم أبو حلب.`
    : `${prod.nameAr} من قسم ${prod.categoryNameAr} لدى المايسترو محمصات وفريشات في سنتر العبور، الحي الأول.`;

  const minPrice = prod.sizes && prod.sizes.length > 0 ? Math.min(...prod.sizes.map(s => s.price)) : prod.basePrice;
  const isAvailable = prod.availability !== 'unavailable' && minPrice > 0;

  // Use product image if valid, otherwise fallback to official brand OG banner
  const hasValidImage = prod.image && !prod.image.includes('elmaestro-logo');
  const prodImg = hasValidImage
    ? (prod.image.startsWith('http') ? prod.image : `${BASE_URL}${prod.image}`)
    : DEFAULT_LOGO;

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: prod.nameAr,
    alternateName: prod.nameEn,
    description: prodDesc,
    image: prodImg,
    brand: {
      '@type': 'Brand',
      name: 'المايسترو محمصات وفريشات'
    },
    category: prod.categoryNameAr,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EGP',
      price: minPrice,
      availability: isAvailable ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      url: `${BASE_URL}/product/${prod.slug}`,
      seller: {
        '@type': 'LocalBusiness',
        name: 'المايسترو محمصات وفريشات',
        telephone: '+201037733214',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'مدينة العبور – الحي الأول – سنتر العبور – بجوار مطعم أبو حلب',
          addressLocality: 'مدينة العبور',
          addressRegion: 'محافظة القليوبية',
          addressCountry: 'EG'
        }
      }
    }
  };

  const prodHtml = generateHtml({
    title: prodTitle,
    description: prodDesc,
    image: prodImg,
    url: `/product/${prod.slug}`,
    jsonLd: productJsonLd
  });

  fs.writeFileSync(path.join(prodDir, 'index.html'), prodHtml, 'utf8');
  sitemapUrls.push({
    loc: `${BASE_URL}/product/${prod.slug}`,
    changefreq: 'weekly',
    priority: '0.8'
  });
  generatedCount++;
}

// 2. Generate pages for categories
for (const cat of categories) {
  if (!cat.slug) continue;
  const catDir = path.join(distBrowserDir, 'menu', cat.slug);
  fs.mkdirSync(catDir, { recursive: true });

  let catTitle = `${cat.nameAr} | منيو ${SITE_NAME} في العبور`;
  let catDesc = cat.descriptionAr
    ? `${cat.descriptionAr} - استكشف كافة أصناف ${cat.nameAr} من المايسترو بسنتر العبور بالحي الأول.`
    : `استعرض قائمة أصناف ${cat.nameAr} من المايسترو محمصات وفريشات في سنتر العبور بالحي الأول بجوار مطعم أبو حلب.`;

  if (cat.slug === 'roastery-nuts') {
    catTitle = 'محمصات ومقلاة المايسترو | مكسرات وتسالي ومقليات في العبور';
    catDesc = 'تشكيلة فاخرة من اللب، المكسرات المحمصة والنية، التسالي والمقرمشات، الشوكولاتات والحلويات والفواكه المجففة بالكيلو من المايسترو سنتر العبور بالحي الأول.';
  } else if (cat.slug === 'ice-cream-roll') {
    catTitle = 'آيس كريم رول المايسترو | آيس كريم رول في العبور (54 صنفاً)';
    catDesc = 'استمتع بألذ آيس كريم رول طازج محضر على الصاج المثلج في مدينة العبور (فواكه طبيعية، شوكولاتات، مكسرات، وميكسات خاصة) بسنتر العبور بجوار مطعم أبو حلب.';
  } else if (cat.slug === 'fresh-juices') {
    catTitle = 'عصائر المايسترو | عصائر فريش طبيعية 100% في مدينة العبور';
    catDesc = 'عصائر طبيعية فريش 100% معصورة طازجة يومياً بدون ماء مضاف (مانجو، فراولة، قصب، ليمون نعناع، أفوكادو) من المايسترو سنتر العبور بجوار أبو حلب.';
  } else if (cat.slug === 'coffee') {
    catTitle = 'ركن القهوة والآيس كوفي | المايسترو في سنتر العبور';
    catDesc = 'أجود أنواع القهوة التركية المحمصة بحجمين سنجل ودبل، ومشروبات الآيس كوفي المنعشة من المايسترو سنتر العبور الحي الأول.';
  }

  const catProds = products.filter(p => p.categorySlug === cat.slug);
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: catTitle,
    description: catDesc,
    url: `${BASE_URL}/menu/${cat.slug}`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: catProds.length,
      itemListElement: catProds.slice(0, 30).map((p, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: `${BASE_URL}/product/${p.slug}`,
        name: p.nameAr
      }))
    }
  };

  const catHtml = generateHtml({
    title: catTitle,
    description: catDesc,
    image: DEFAULT_LOGO,
    url: `/menu/${cat.slug}`,
    jsonLd: collectionJsonLd
  });

  fs.writeFileSync(path.join(catDir, 'index.html'), catHtml, 'utf8');
  sitemapUrls.push({
    loc: `${BASE_URL}/menu/${cat.slug}`,
    changefreq: 'weekly',
    priority: '0.8'
  });
  generatedCount++;
}

// 3. Static main pages
const staticPages = [
  { 
    path: 'menu', 
    title: `قائمة المنيو الكاملة والأسعار | ${SITE_NAME} بالعبور`, 
    desc: 'تصفح منيو وأسعار المايسترو بالكامل: محمصات ومكسرات بالكيلو، مقليات وتسالي، آيس كريم رول 54 صنفاً، عصائر فريش 100%، وركن القهوة بسنتر العبور بالحي الأول.', 
    image: DEFAULT_LOGO 
  },
  { 
    path: 'about', 
    title: `عن المايسترو وقصتنا | ${SITE_NAME} في مدينة العبور`, 
    desc: 'تعرف على قصة تأسيس المايسترو في الحي الأول بسنتر العبور: التميز في تقديم المحمصات والمكسرات، آيس كريم رول، والعصائر الطبيعية بأعلى جودة وتوصيل 24 ساعة.', 
    image: DEFAULT_LOGO 
  },
  { 
    path: 'contact', 
    title: `موقعنا وتواصل معنا والدليفري | سنتر العبور بجوار مطعم أبو حلب`, 
    desc: 'العنوان: الحي الأول، سنتر العبور بجوار مطعم أبو حلب، مدينة العبور. رقم الهاتف والواتساب الموحد: 01037733214. خدمة توصيل سريعة 24 ساعة لكافة أحياء العبور.', 
    image: DEFAULT_LOGO 
  },
  {
    path: 'privacy',
    title: `سياسة الخصوصية | ${SITE_NAME}`,
    desc: 'سياسة الخصوصية وحماية بيانات العملاء لدى المايسترو محمصات وفريشات في مدينة العبور.',
    image: DEFAULT_LOGO
  },
  {
    path: 'terms',
    title: `الشروط والأحكام | ${SITE_NAME}`,
    desc: 'الشروط والأحكام الخاصة بطلبات وخدمات المايسترو محمصات وفريشات في مدينة العبور.',
    image: DEFAULT_LOGO
  }
];

for (const sp of staticPages) {
  const pDir = path.join(distBrowserDir, sp.path);
  fs.mkdirSync(pDir, { recursive: true });
  const pHtml = generateHtml({
    title: sp.title,
    description: sp.desc,
    image: sp.image,
    url: `/${sp.path}`
  });
  fs.writeFileSync(path.join(pDir, 'index.html'), pHtml, 'utf8');
  generatedCount++;
}

// 4. Generate static standalone QR pages for all 30 restaurant tables (/table/:id and /t/:id)
console.log('[SEO Gen] Pre-generating static stand QR routes for all tables (1 to 30)...');
for (let tNum = 1; tNum <= 30; tNum++) {
  const tableTitle = `طاولة رقم ${tNum} | منيو ${SITE_NAME}`;
  const tableDesc = `طلب صالة مباشر من طاولة رقم ${tNum} بفرع المايسترو سنتر العبور. استمتع بأشهى العصائر الطبيعية والمحمصات والآيس كريم رول مع التوصيل لطاولتك.`;
  
  const extraHead = `<script>
    try {
      var raw = localStorage.getItem('elmaestro_fulfillment_state_v2');
      var state = raw ? JSON.parse(raw) : {};
      state.type = 'table';
      state.tableDetails = {
        tableNumber: ${tNum},
        tableNameAr: 'طاولة #${tNum}',
        detectedFromQr: true
      };
      localStorage.setItem('elmaestro_fulfillment_state_v2', JSON.stringify(state));
    } catch (e) {}
  </script>`;

  const appRootContent = `<div style="min-height: 80vh; display: flex; flex-direction: column; align-items: center; justify-content: center; font-family: Alexandria, Cairo, system-ui, sans-serif; text-align: center; padding: 2rem; color: #174D32;">
    <div style="width: 72px; height: 72px; border-radius: 50%; background: #EAF5EC; color: #174D32; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin-bottom: 1.25rem; box-shadow: 0 4px 12px rgba(23,77,50,0.12);"></div>
    <h1 style="font-size: 1.45rem; font-weight: 800; margin: 0 0 0.5rem 0; color: #172033;">جاري ربط الطلب بطاولة رقم ${tNum}...</h1>
    <p style="font-size: 0.95rem; color: #718096; margin: 0; max-width: 420px; line-height: 1.6;">نربط طلبك بـ ترابيزة #${tNum} بسنتر العبور لتجهيز تجربة سريعة ونقلك للمنيو مباشرة.</p>
  </div>`;

  // Both /table/:id and /t/:id routes
  for (const prefix of ['table', 't']) {
    const tableDir = path.join(distBrowserDir, prefix, String(tNum));
    fs.mkdirSync(tableDir, { recursive: true });
    const tableHtml = generateHtml({
      title: tableTitle,
      description: tableDesc,
      image: DEFAULT_LOGO,
      url: `/${prefix}/${tNum}`,
      extraHead: extraHead,
      appRootContent: appRootContent
    });
    fs.writeFileSync(path.join(tableDir, 'index.html'), tableHtml, 'utf8');
    generatedCount++;
  }
}

// 5. Generate Dynamic XML Sitemap
let sitemapXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemapXml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

for (const u of sitemapUrls) {
  sitemapXml += `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>\n`;
}

sitemapXml += '</urlset>\n';

fs.writeFileSync(path.join(distBrowserDir, 'sitemap.xml'), sitemapXml, 'utf8');
const publicDir = path.join(__dirname, '..', 'public');
if (fs.existsSync(publicDir)) {
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
}

console.log(`[SEO Gen] Successfully generated ${generatedCount} SEO-optimized static Open Graph pages!`);
console.log(`[SEO Gen] Successfully generated sitemap.xml with ${sitemapUrls.length} indexed URLs!`);
