export type ExtractionConfidence = 'verified' | 'needs_review' | 'unreadable';
export type ItemAvailability = 'available' | 'unavailable' | 'needs_review';
export type PricingType = 'fixed' | 'weight_based';
export type PricingStatus = 'confirmed' | 'pending';

export interface ProductSizeOption {
  id: string;
  nameAr: string;
  nameEn: string;
  price: number;
  volumeLabel?: string;
  isDefault?: boolean;
  sourceLabel?: string;
  availability?: ItemAvailability;
  extractionStatus?: ExtractionConfidence;
}

export interface ProductAddon {
  id: string;
  nameAr: string;
  nameEn: string;
  price: number;
  categoryId?: string;
  availability?: ItemAvailability;
}

export interface ProductCategory {
  id: string;
  slug: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  icon: string;
  itemCount: number;
  image?: string;
  displayOrder?: number;
  themeColor?: string;
  informationAr?: string[];
  reviewNotes?: string;
}

export interface Product {
  id: string;
  slug: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  categorySlug: string;
  categoryNameAr: string;
  basePrice: number;
  soldCount?: number;
  rating?: number;
  sizes: ProductSizeOption[];
  availableAddons?: ProductAddon[];
  image: string;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isNew?: boolean;
  tags: string[];
  ingredientsAr?: string[];
  dietary?: {
    isNatural: boolean;
    isSugarFreeAvailable: boolean;
    containsNuts: boolean;
    containsDairy: boolean;
  };
  verifiedFromAsset: string;
  sourceImageIds?: string[];
  extractionStatus?: ExtractionConfidence;
  availability?: ItemAvailability;

  // Smart Weight & Pricing Extensions
  pricingType?: PricingType; // 'weight_based' for roastery items, 'fixed' otherwise
  pricingStatus?: PricingStatus; // 'pending' if basePrice is 0 or missing, otherwise 'confirmed'
  pricePerKg?: number; // actual price per kg if weight-based
  minWeightGrams?: number; // minimum order weight in grams (e.g. 25g or 50g)
  unitLabelAr?: string; // e.g. 'كجم' or 'قطعة'
}

