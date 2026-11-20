const fs = require('fs');
const path = require('path');

const menuPath = path.resolve(__dirname, '../src/app/core/data/elmaestro-menu.data.ts');
const content = fs.readFileSync(menuPath, 'utf8');

const prodMatch = content.match(/export const ELMAESTRO_PRODUCTS: Product\[\] = (\[[\s\S]*?\]);/);
const catMatch = content.match(/export const ELMAESTRO_CATEGORIES: ProductCategory\[\] = (\[[\s\S]*?\]);/);

const products = JSON.parse(prodMatch[1]);
const categories = JSON.parse(catMatch[1]);

const today = new Date().toISOString().split('T')[0];

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

const staticRoutes = [
  { url: 'https://elmaestrojuice.com/', priority: '1.0', changefreq: 'daily' },
  { url: 'https://elmaestrojuice.com/menu', priority: '0.9', changefreq: 'daily' },
  { url: 'https://elmaestrojuice.com/about', priority: '0.8', changefreq: 'monthly' },
  { url: 'https://elmaestrojuice.com/contact', priority: '0.8', changefreq: 'monthly' },
  { url: 'https://elmaestrojuice.com/cart', priority: '0.6', changefreq: 'daily' },
  { url: 'https://elmaestrojuice.com/checkout', priority: '0.6', changefreq: 'daily' },
  { url: 'https://elmaestrojuice.com/privacy', priority: '0.4', changefreq: 'yearly' },
  { url: 'https://elmaestrojuice.com/terms', priority: '0.4', changefreq: 'yearly' }
];

staticRoutes.forEach(r => {
  xml += `  <url>\n    <loc>${r.url}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>\n`;
});

categories.forEach(c => {
  xml += `  <url>\n    <loc>https://elmaestrojuice.com/menu/${c.slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
});

products.forEach(p => {
  xml += `  <url>\n    <loc>https://elmaestrojuice.com/product/${p.slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
});

xml += '</urlset>\n';

fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), xml, 'utf8');
console.log('Sitemap generated successfully with', categories.length, 'categories and', products.length, 'products!');
