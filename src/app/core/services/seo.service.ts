import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);

  private readonly siteName = 'المايسترو محمصات وفريشات';
  private readonly defaultTitle = 'المايسترو محمصات وفريشات | مكسرات وعصائر وآيس كريم رول في العبور';
  private readonly defaultDesc = 'اكتشف المايسترو في الحي الأول بمدينة العبور، سنتر العبور بجوار أبو حلب. محمصات ومكسرات ومقليات، آيس كريم رول وعصائر فريش ومشروبات متنوعة. تصفح المنيو وتواصل معنا للطلب.';
  private readonly defaultLogo = 'https://elmaestrojuice.com/images/brand/elmaestro-og-banner.jpg';
  private readonly baseUrl = 'https://elmaestrojuice.com';

  setDefaultSeo(): void {
    this.updateMeta({
      title: this.defaultTitle,
      description: this.defaultDesc,
      image: this.defaultLogo,
      url: this.baseUrl
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'محمصات في العبور, محمصات العبور, مكسرات في العبور, مقلاة في العبور, مقليات في العبور, تسالي في العبور, آيس كريم رول في العبور, عصائر في العبور, عصائر فريش العبور, سنتر العبور, الحي الأول العبور, بجوار أبو حلب, المايسترو محمصات وفريشات'
    });
  }

  setCategorySeo(categorySlug: string, categoryName: string, categoryDesc?: string): void {
    let pageTitle = `${categoryName} | منيو ${this.siteName} في العبور`;
    let desc = categoryDesc 
      ? `${categoryDesc} - تصفح أصناف ${categoryName} من المايسترو بسنتر العبور، الحي الأول.` 
      : `استعرض قائمة أصناف ${categoryName} من المايسترو محمصات وفريشات في سنتر العبور بالحي الأول.`;

    if (categorySlug === 'roastery-nuts') {
      pageTitle = 'محمصات ومقلاة المايسترو | مكسرات وتسالي ومقليات في العبور';
      desc = 'تشكيلة فاخرة من اللب، المكسرات المحمصة والنية، التسالي والمقرمشات، الشوكولاتات والحلويات والفواكه المجففة بالكيلو من المايسترو سنتر العبور بالحي الأول.';
    } else if (categorySlug === 'ice-cream-roll') {
      pageTitle = 'آيس كريم رول المايسترو | آيس كريم رول في العبور (54 صنفاً)';
      desc = 'استمتع بألذ آيس كريم رول طازج محضر على الصاج المثلج في مدينة العبور (فواكه طبيعية، شوكولاتات، مكسرات، وميكسات خاصة) بسنتر العبور بجوار مطعم أبو حلب.';
    } else if (categorySlug === 'fresh-juices') {
      pageTitle = 'عصائر المايسترو | عصائر فريش طبيعية 100% في مدينة العبور';
      desc = 'عصائر طبيعية فريش 100% معصورة طازجة يومياً بدون ماء مضاف (مانجو، فراولة، قصب، ليمون نعناع، أفوكادو) من المايسترو سنتر العبور بجوار أبو حلب.';
    } else if (categorySlug === 'coffee') {
      pageTitle = 'ركن القهوة والآيس كوفي | المايسترو في سنتر العبور';
      desc = 'أجود أنواع القهوة التركية المحمصة بحجمين سنجل ودبل، ومشروبات الآيس كوفي المنعشة من المايسترو سنتر العبور الحي الأول.';
    }

    const pageUrl = `${this.baseUrl}/menu/${categorySlug}`;

    this.updateMeta({
      title: pageTitle,
      description: desc,
      image: this.defaultLogo,
      url: pageUrl
    });
  }

  setProductSeo(product: Product): void {
    const fullImageUrl = product.image && !product.image.includes('elmaestro-logo')
      ? (product.image.startsWith('http') ? product.image : `${this.baseUrl}${product.image}`)
      : this.defaultLogo;
    
    let pageTitle = `${product.nameAr} | ${this.siteName} في العبور`;
    if (product.categorySlug === 'ice-cream-roll') {
      pageTitle = `${product.nameAr} | آيس كريم رول المايسترو في العبور`;
    } else if (product.categorySlug === 'roastery-nuts') {
      pageTitle = `${product.nameAr} | محمصات ومقلاة المايسترو بالعبور`;
    }

    const desc = product.descriptionAr 
      ? `${product.descriptionAr} - متوفر الآن لدى المايسترو محمصات وفريشات، سنتر العبور بالحي الأول بجوار مطعم أبو حلب.` 
      : `${product.nameAr} من قسم ${product.categoryNameAr} لدى المايسترو محمصات وفريشات في سنتر العبور، الحي الأول.`;
    
    const pageUrl = `${this.baseUrl}/product/${product.slug}`;

    this.updateMeta({
      title: pageTitle,
      description: desc,
      image: fullImageUrl,
      url: pageUrl
    });
  }

  private updateMeta(data: { title: string; description: string; image: string; url: string }): void {
    this.title.setTitle(data.title);
    this.meta.updateTag({ name: 'description', content: data.description });
    
    // Open Graph / WhatsApp / Facebook
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:image', content: data.image });
    this.meta.updateTag({ property: 'og:image:secure_url', content: data.image });
    this.meta.updateTag({ property: 'og:url', content: data.url });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
    this.meta.updateTag({ property: 'og:locale', content: 'ar_EG' });

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    this.meta.updateTag({ name: 'twitter:image', content: data.image });
  }
}
