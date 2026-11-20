import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);

  private readonly siteName = 'المايسترو محمصات وفريشات | El Maestro';
  private readonly defaultTitle = 'المايسترو محمصات وفريشات — مدينة العبور | عصائر طبيعية، قهوة، محمصات وسوبيا';
  private readonly defaultDesc = 'المايسترو محمصات وفريشات في سنتر العبور بالحي الأول بجوار مطعم أبو حلب. عصائر فريش 100%، قهوة وآيس كوفي، عصائر المحمصات، أفوكادو بالمكسرات، سوبيا وموهيتو مع خدمة توصيل 24 ساعة.';
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
      content: 'المايسترو, المايسترو محمصات وفريشات, El Maestro, عصائر العبور, عصائر فريش في العبور, محمصات العبور, سنتر العبور, الحي الاول العبور, قهوة في العبور, ايس كوفي العبور, سوبيا العبور, عصائر طبيعية العبور, توصيل عصائر العبور 24 ساعة'
    });
  }

  setProductSeo(product: Product): void {
    const fullImageUrl = product.image.startsWith('http') 
      ? product.image 
      : `${this.baseUrl}${product.image}`;
    
    const pageTitle = `${product.nameAr} | ${this.siteName}`;
    const desc = product.descriptionAr 
      ? `${product.descriptionAr} - اطلبه الآن طازجاً من المايسترو محمصات وفريشات سنتر العبور، الحي الأول.` 
      : `${product.nameAr} - من المايسترو محمصات وفريشات سنتر العبور، الحي الأول.`;
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

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    this.meta.updateTag({ name: 'twitter:image', content: data.image });
  }
}
