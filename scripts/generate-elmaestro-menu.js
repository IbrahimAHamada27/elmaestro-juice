const fs = require('fs');
const path = require('path');

// 1. ADDONS
const ELMAESTRO_ADDONS = [
  { id: 'addon-chocolate', nameAr: 'شيكولاتة', nameEn: 'Chocolate Sauce', price: 15, categoryId: 'add-on', availability: 'available' },
  { id: 'addon-honey', nameAr: 'عسل نحل', nameEn: 'Pure Natural Honey', price: 15, categoryId: 'add-on', availability: 'available' },
  { id: 'addon-ice-cream', nameAr: 'بولة آيس كريم', nameEn: 'Ice Cream Scoop', price: 15, categoryId: 'add-on', availability: 'available' },
  { id: 'addon-fruits', nameAr: 'فاكهة قطع', nameEn: 'Extra Fresh Fruits', price: 20, categoryId: 'add-on', availability: 'available' },
  { id: 'addon-nuts', nameAr: 'مكسرات فاخرة', nameEn: 'Premium Nuts', price: 30, categoryId: 'add-on', availability: 'available' }
];

// 2. CATEGORIES (22 Categories)
const categories = [
  {
    id: 'fresh-juices',
    slug: 'fresh-juices',
    nameAr: 'عصائر فريش',
    nameEn: 'Fresh Juices',
    descriptionAr: 'عصائر طبيعية 100% معصورة طازجة يومياً بأعلى جودة وانتعاش',
    icon: 'fa-solid fa-glass-water',
    themeColor: '#15803d',
    image: '/images/products/orange-juice.png',
    displayOrder: 1,
    informationAr: [
      'جميع العصائر فريش وطبيعية 100% بدون أي ألوان صناعية.',
      'تتوفر أحجام وعبوات عائلية وجراكن للتوصيل والمنزل في قسم العبوات.'
    ]
  },
  {
    id: 'sugarcane',
    slug: 'sugarcane',
    nameAr: 'القصب',
    nameEn: 'Sugarcane Specials',
    descriptionAr: 'عصير قصب طبيعي مثلج مع تشكيلة إضافات ونكهات مبتكرة',
    icon: 'fa-solid fa-seedling',
    themeColor: '#65a30d',
    image: '/images/products/sugarcane-pure.png',
    displayOrder: 2,
    informationAr: [
      'قصب طبيعي نقي معصور على أعلى معايير النظافة والتعقيم.',
      'يتوفر سادة وبإضافات اللبن، البرتقال، الليمون، الفانيليا، الحلاوة، والبريل.'
    ]
  },
  {
    id: 'avocado',
    slug: 'avocado',
    nameAr: 'الأفوكادو',
    nameEn: 'Avocado Creations',
    descriptionAr: 'أفوكادو طازج كريمي غني بالقيمة الغذائية مضاف إليه عسل ومكسرات وفواكه',
    icon: 'fa-solid fa-shield-heart',
    themeColor: '#4d7c0f',
    image: '/images/products/avocado-nuts-mango-pair.jpg',
    displayOrder: 3,
    informationAr: [
      'أفوكادو بيور طازج مع تشكيلة واسعة من الفواكه والعسل والمكسرات الملكية.'
    ]
  },
  {
    id: 'smoothie',
    slug: 'smoothie',
    nameAr: 'سموزي',
    nameEn: 'Smoothies',
    descriptionAr: 'سموزي فواكه مثلج ومنعش بقوام غني ومذاق استوائي ساحر',
    icon: 'fa-solid fa-blender',
    themeColor: '#0284c7',
    image: '/images/products/signature-four-drinks.jpg',
    displayOrder: 4,
    informationAr: [
      'سموزي مثلج مجروش بنكهات التوت والمانجو والكيوي والليمون نعناع.'
    ]
  },
  {
    id: 'oriental-juices',
    slug: 'oriental-juices',
    nameAr: 'عصائر شرقي',
    nameEn: 'Oriental Juices',
    descriptionAr: 'مشروبات تراثية أصيلة: تمر هندي، سوبيا، خروب، عناب، ودوم باللبن',
    icon: 'fa-solid fa-jug-detergent',
    themeColor: '#b45309',
    image: '/images/products/karkadeh-ennab.png',
    displayOrder: 5,
    informationAr: [
      'مشروبات تراثية محضرة بالطرق الأصيلة وبأحجام متعددة (عادي وكبير).'
    ]
  },
  {
    id: 'mango-world',
    slug: 'mango-world',
    nameAr: 'عالم المانجو',
    nameEn: 'Mango World',
    descriptionAr: 'مانجو طبيعية فاخرة بيور وممزوجة بأشهى الفواكه والآيس كريم',
    icon: 'fa-solid fa-lemon',
    themeColor: '#ea580c',
    image: '/images/products/mango-chunks-bowl.jpg',
    displayOrder: 6,
    informationAr: [
      'مانجو طبيعية طازجة منتقاة بعناية لتقديم أرقى المذاقات.'
    ]
  },
  {
    id: 'milkshake',
    slug: 'milkshake',
    nameAr: 'ميلك شيك',
    nameEn: 'Milkshakes',
    descriptionAr: 'ميلك شيك كريمي كثيف بنكهات الشوكولاتة، الفانيليا، التوت والكراميل',
    icon: 'fa-solid fa-ice-cream',
    themeColor: '#ec4899',
    image: '/images/products/chocolate-milkshake.png',
    displayOrder: 7,
    informationAr: [
      'ميلك شيك بارد وكريمي غني بالآيس كريم الفاخر والحليب الطازج.'
    ]
  },
  {
    id: 'yogurt',
    slug: 'yogurt',
    nameAr: 'الزبادي',
    nameEn: 'Yogurt Bowls & Drinks',
    descriptionAr: 'زبادي طبيعي صحي سادة وبالعسل والفواكه الطازجة لراحة وانتعاش',
    icon: 'fa-solid fa-bowl-food',
    themeColor: '#059669',
    image: '/images/products/mango-yogurt-nuts.png',
    displayOrder: 8,
    informationAr: [
      'زبادي طازج خفيف وصحي مع العسل النقي وقطع الفواكه المتنوعة.'
    ]
  },
  {
    id: 'addons',
    slug: 'addons',
    nameAr: 'الإضافات',
    nameEn: 'Add-ons & Extras',
    descriptionAr: 'إضافات مميزة لمشروباتك: شوكولاتة، عسل نحل، آيس كريم ومكسرات',
    icon: 'fa-solid fa-plus-circle',
    themeColor: '#d97706',
    image: '/images/products/super-cocktail-icecream.png',
    displayOrder: 9,
    informationAr: [
      'يمكنك طلب هذه الإضافات مع أي عصير أو كوكتيل أو زبادي حسب رغبتك.'
    ]
  },
  {
    id: 'roastery-juices',
    slug: 'roastery-juices',
    nameAr: 'عصائر المحمصات',
    nameEn: 'Roastery Nut Juices',
    descriptionAr: 'تخصص المايسترو الحصري: مشروبات المكسرات المحمصة الفاخرة بالحليب',
    icon: 'fa-solid fa-cubes-stacked',
    themeColor: '#78350f',
    image: '/images/products/walnut-drink.png',
    displayOrder: 10,
    informationAr: [
      'المحمصات الفاخرة ممزوجة بالحليب الطبيعي: سوداني، لب، بندق، كاجو، فستق، ولوز.'
    ]
  },
  {
    id: 'chocolate',
    slug: 'chocolate',
    nameAr: 'الشوكولاتة',
    nameEn: 'Chocolate Shakes',
    descriptionAr: 'مشروبات شكولاتات البراند العالمية: نوتيلا، أوريو، كيندر، وسنيكرز',
    icon: 'fa-solid fa-cookie-bite',
    themeColor: '#451a03',
    image: '/images/products/oreo-drink.png',
    displayOrder: 11,
    informationAr: [
      'مخفوق بالشوكولاتة الأصلية المحبوبة.'
    ]
  },
  {
    id: 'fruit-cuts',
    slug: 'fruit-cuts',
    nameAr: 'قطع فواكه',
    nameEn: 'Fresh Fruit Chunks & Bowls',
    descriptionAr: 'أطباق وكاسات قطع الفواكه الطازجة، سلطات الفواكه، والقنابل والفتة',
    icon: 'fa-solid fa-bowl-rice',
    themeColor: '#dc2626',
    image: '/images/products/fruit-salad-bowl.png',
    displayOrder: 12,
    informationAr: [
      'قطع فاكهة طازجة تُقطع يومياً عند الطلب.'
    ]
  },
  {
    id: 'boba-corner',
    slug: 'boba-corner',
    nameAr: 'بوبا كورنر',
    nameEn: 'Boba Corner',
    descriptionAr: 'مشروبات البوبا المنعشة بحبيبات البوبا اللذيذة والنكهات العصرية',
    icon: 'fa-solid fa-circle-dot',
    themeColor: '#7c3aed',
    image: '/images/products/boba-milkshake-blueberry.png',
    displayOrder: 13,
    informationAr: [
      'حبيبات بوبا طازجة بنكهات السوبيا، الكوفي، الكراميل، والتوت والفواكه.'
    ]
  },
  {
    id: 'vitamins',
    slug: 'vitamins',
    nameAr: 'الفيتامينات',
    nameEn: 'Vitamin Mixes & Signatures',
    descriptionAr: 'خلطات وتواقيع المايسترو الأسطورية الغنية بالفيتامينات والمذاقات المبتكرة',
    icon: 'fa-solid fa-heart-pulse',
    themeColor: '#0891b2',
    image: '/images/products/super-vitamin-c.png',
    displayOrder: 14,
    informationAr: [
      'ميكسات حصرية بأجمل الأسماء الفنية والموسيقية وغنية بالفيتامينات الطبيعية.'
    ]
  },
  {
    id: 'diet-corner',
    slug: 'diet-corner',
    nameAr: 'دايت كورنر',
    nameEn: 'Diet & Healthy Corner',
    descriptionAr: 'مشروبات صحية خفيفة بدون إضافات سكرية للياقة والانتعاش',
    icon: 'fa-solid fa-person-running',
    themeColor: '#16a34a',
    image: '/images/products/kiwi-orange.png',
    displayOrder: 15,
    informationAr: [
      'مشروبات طبيعية خفيفة ومناسبة للحمية الغذائية ونمط الحياة الصحي.'
    ]
  },
  {
    id: 'power-mix',
    slug: 'power-mix',
    nameAr: 'ميكس باور',
    nameEn: 'Power Mixes & Energy',
    descriptionAr: 'مشروبات الطاقة الطبيعية الملكية بالمكسرات والقشطة والعسل والأفوكادو',
    icon: 'fa-solid fa-bolt',
    themeColor: '#d97706',
    image: '/images/products/super-elmaestro-bomb.png',
    displayOrder: 16,
    informationAr: [
      'مشروب المايسترو الملكي وتشكيلة طاقة غنية بالمكسرات والعسل والقشطة الطبيعية.'
    ]
  },
  {
    id: 'mojito',
    slug: 'mojito',
    nameAr: 'الموهيتو (كولا - سفن)',
    nameEn: 'Mojito (Cola & 7Up)',
    descriptionAr: 'موهيتو منعش بالصودا والليمون والنعناع الفريش ونكهات التوت والفراولة',
    icon: 'fa-solid fa-champagne-glasses',
    themeColor: '#06b6d4',
    image: '/images/products/boba-mojito-blueberry.png',
    displayOrder: 17,
    informationAr: [
      'موهيتو منعش ومثلج بالليمون والنعناع الفريش مع اختيارك من سفن أب أو كولا.'
    ]
  },
  {
    id: 'sobya',
    slug: 'sobya',
    nameAr: 'السوبيا',
    nameEn: 'Sobya Flavors',
    descriptionAr: 'سوبيا طبيعية ناصعة مثلجة بنكهات المانجو والفراولة واللوتس والنوتيلا',
    icon: 'fa-solid fa-mug-saucer',
    themeColor: '#0ea5e9',
    image: '/images/products/sobya-natural.png',
    displayOrder: 18,
    informationAr: [
      'تتوفر بالحجم الصغير (40 ج) والحجم الكبير (80 ج).'
    ]
  },
  {
    id: 'rice-pudding',
    slug: 'rice-pudding',
    nameAr: 'رز بلبن',
    nameEn: 'Rice Pudding Delights',
    descriptionAr: 'أطباق أرز بلبن فلاحي غني بالقشطة، الفواكه، المكسرات والكنافة والبسبوسة',
    icon: 'fa-solid fa-stroopwafel',
    themeColor: '#f59e0b',
    image: '/images/products/rice-pudding.jpg',
    displayOrder: 19,
    informationAr: [
      'أرز باللبن طازج ومطهو على أصوله بإضافات شهية ومتنوعة.'
    ]
  },
  {
    id: 'bottles',
    slug: 'bottles',
    nameAr: 'العبوات',
    nameEn: 'Family Bottles & Packs',
    descriptionAr: 'عبوات وجراكن عائلية بحجم 1 لتر و4 لتر للمنازل والحفلات والعزومات',
    icon: 'fa-solid fa-bottle-droplet',
    themeColor: '#047857',
    image: '/images/products/signature-four-drinks.jpg',
    displayOrder: 20,
    informationAr: [
      'عبوات لتر وعبوات 4 لتر لتلبية كافة احتياجات العزومات والمناسبات العائلية.'
    ]
  },
  {
    id: 'coffee',
    slug: 'coffee',
    nameAr: 'القهوة',
    nameEn: 'Hot Coffee Corner',
    descriptionAr: 'ركن القهوة التركية والمشروبات الساخنة بنكهة البن المحمص الفاخر',
    icon: 'fa-solid fa-mug-hot',
    themeColor: '#78350f',
    image: '/images/brand/elmaestro-drinks.jpg',
    displayOrder: 21,
    informationAr: [
      'قهوة تركي بن محمص فاخر تتوفر سنجل (S) ودبل (D).'
    ]
  },
  {
    id: 'iced-coffee',
    slug: 'iced-coffee',
    nameAr: 'آيس كوفي',
    nameEn: 'Iced Coffee',
    descriptionAr: 'آيس كوفي منعش، آيس لاتيه، وآيس موكا بأعلى معايير المقاهي المختصة',
    icon: 'fa-solid fa-glass-water-droplet',
    themeColor: '#92400e',
    image: '/images/brand/elmaestro-special.jpg',
    displayOrder: 22,
    informationAr: [
      'مشروبات قهوة مثلجة منعشة بالبن المحمص الفاخر مع الحليب وصوصات الموكا واللاتيه.'
    ]
  }
];

// Helper to create single-price product
function makeSingle(id, slug, nameAr, nameEn, catSlug, catNameAr, price, image, descAr, ingredients = [], tags = [], isFeatured = false, isBestSeller = false) {
  return {
    id,
    slug,
    nameAr,
    nameEn,
    descriptionAr: descAr || `${nameAr} طازج ولذيذ من المايسترو محمصات وفريشات.`,
    categorySlug: catSlug,
    categoryNameAr: catNameAr,
    basePrice: price,
    sizes: [
      {
        id: 'standard',
        nameAr: 'حجم عادي',
        nameEn: 'Standard Size',
        price: price,
        volumeLabel: 'عادي',
        isDefault: true,
        availability: 'available',
        extractionStatus: 'verified'
      }
    ],
    availableAddons: ELMAESTRO_ADDONS,
    image: image || '/images/products/orange-juice.png',
    isFeatured: !!isFeatured,
    isBestSeller: !!isBestSeller,
    tags: tags.length ? tags : [nameAr, catNameAr, 'المايسترو'],
    ingredientsAr: ingredients,
    verifiedFromAsset: 'المايسترو منيو رسمي',
    extractionStatus: 'verified',
    availability: 'available'
  };
}

// Helper to create size-based product
function makeMulti(id, slug, nameAr, nameEn, catSlug, catNameAr, sizesArr, image, descAr, ingredients = [], tags = [], isFeatured = false, isBestSeller = false) {
  const basePrice = sizesArr[0].price;
  return {
    id,
    slug,
    nameAr,
    nameEn,
    descriptionAr: descAr || `${nameAr} من المايسترو محمصات وفريشات.`,
    categorySlug: catSlug,
    categoryNameAr: catNameAr,
    basePrice,
    sizes: sizesArr,
    availableAddons: ELMAESTRO_ADDONS,
    image: image || '/images/products/orange-juice.png',
    isFeatured: !!isFeatured,
    isBestSeller: !!isBestSeller,
    tags: tags.length ? tags : [nameAr, catNameAr, 'المايسترو'],
    ingredientsAr: ingredients,
    verifiedFromAsset: 'المايسترو منيو رسمي',
    extractionStatus: 'verified',
    availability: 'available'
  };
}

const products = [];

// 1. عصائر فريش
products.push(
  makeSingle('fj-orange', 'orange-juice', 'عصير برتقال فريش', 'Fresh Orange Juice', 'fresh-juices', 'عصائر فريش', 35, '/images/products/orange-juice.png', 'برتقال طبيعي معصور طازج 100% غني بفيتامين سي', ['برتقال طبيعي'], ['برتقال', 'عصائر فريش'], true, true),
  makeSingle('fj-cantaloupe', 'cantaloupe-juice', 'عصير كنتالوب فريش', 'Fresh Cantaloupe Juice', 'fresh-juices', 'عصائر فريش', 35, '/images/products/cantaloupe-juice.png', 'كنتالوب طازج منعش وحلو المذاق', ['كنتالوب طازج']),
  makeSingle('fj-lemon', 'lemon-juice', 'عصير ليمون فريش', 'Fresh Lemon Juice', 'fresh-juices', 'عصائر فريش', 35, '/images/products/lemon-juice.png', 'ليمون طبيعي منعش معصور طازجاً', ['ليمون طبيعي']),
  makeSingle('fj-watermelon', 'watermelon-juice', 'عصير بطيخ فريش', 'Fresh Watermelon Juice', 'fresh-juices', 'عصائر فريش', 40, '/images/products/watermelon-juice.png', 'بطيخ أحمر طبيعي مثلج ومنعش', ['بطيخ أحمر'], ['بطيخ', 'عصائر فريش'], true),
  makeSingle('fj-guava', 'guava-juice', 'عصير جوافة فريش', 'Fresh Guava Juice', 'fresh-juices', 'عصائر فريش', 40, '/images/products/guava-juice.png', 'جوافة طبيعية طازجة بقوام مثالي', ['جوافة طبيعية']),
  makeSingle('fj-lemon-mint', 'lemon-mint-juice', 'عصير ليمون نعناع', 'Lemon Mint Juice', 'fresh-juices', 'عصائر فريش', 40, '/images/products/lemon-mint-juice.png', 'ليمون ونعناع فريش لانتعاش فوري', ['ليمون', 'نعناع فريش'], ['ليمون نعناع'], true, true),
  makeSingle('fj-strawberry', 'strawberry-juice', 'عصير فراولة فريش', 'Fresh Strawberry Juice', 'fresh-juices', 'عصائر فريش', 40, '/images/products/strawberry-juice.png', 'فراولة طازجة ولذيذة معصورة يومياً', ['فراولة طازجة'], ['فراولة'], true),
  makeSingle('fj-apricot', 'apricot-juice', 'عصير مشمش فريش', 'Fresh Apricot Juice', 'fresh-juices', 'عصائر فريش', 40, '/images/products/orange-juice.png', 'مشمش طبيعي غني بالنكهة اللذيذة', ['مشمش']),
  makeSingle('fj-plum', 'plum-juice', 'عصير برقوق فريش', 'Fresh Plum Juice', 'fresh-juices', 'عصائر فريش', 40, '/images/products/strawberry-juice.png', 'برقوق طازج بطعم منعش ومميز', ['برقوق']),
  makeSingle('fj-peach', 'peach-juice', 'عصير خوخ فريش', 'Fresh Peach Juice', 'fresh-juices', 'عصائر فريش', 40, '/images/products/orange-juice.png', 'خوخ طبيعي حلو ومنعش', ['خوخ']),
  makeSingle('fj-cantaloupe-milk', 'cantaloupe-milk', 'كنتالوب باللبن', 'Cantaloupe with Milk', 'fresh-juices', 'عصائر فريش', 40, '/images/products/cantaloupe-juice.png', 'كنتالوب طازج ممزوج بالحليب الطبيعي', ['كنتالوب', 'حليب']),
  makeSingle('fj-lemon-milk', 'lemon-milk', 'ليمون باللبن', 'Lemon with Milk', 'fresh-juices', 'عصائر فريش', 40, '/images/products/lemon-milk.png', 'ليمون فريش كريمي مع الحليب الطبيعي', ['ليمون', 'حليب']),
  makeSingle('fj-red-apple', 'red-apple-juice', 'عصير تفاح أحمر', 'Red Apple Juice', 'fresh-juices', 'عصائر فريش', 50, '/images/products/apple-juice.png', 'تفاح أحمر معصور طازج بدون أي إضافات', ['تفاح أحمر']),
  makeSingle('fj-yellow-apple', 'yellow-apple-juice', 'عصير تفاح أصفر', 'Yellow Apple Juice', 'fresh-juices', 'عصائر فريش', 50, '/images/products/apple-juice.png', 'تفاح أصفر معصور طازج ونقي', ['تفاح أصفر']),
  makeSingle('fj-grape', 'grape-juice', 'عصير عنب فريش', 'Fresh Grape Juice', 'fresh-juices', 'عصائر فريش', 50, '/images/products/strawberry-juice.png', 'عنب طبيعي طازج غني بالنكهة', ['عنب']),
  makeSingle('fj-guava-milk', 'guava-milk', 'جوافة باللبن', 'Guava with Milk', 'fresh-juices', 'عصائر فريش', 50, '/images/products/guava-milk.png', 'جوافة طبيعية كريمية مع الحليب الطازج', ['جوافة', 'حليب']),
  makeSingle('fj-strawberry-milk', 'strawberry-milk', 'فراولة باللبن', 'Strawberry with Milk', 'fresh-juices', 'عصائر فريش', 50, '/images/products/strawberry-milk.png', 'فراولة طازجة ممزوجة بالحليب الطبيعي', ['فراولة', 'حليب'], ['فراولة باللبن'], true),
  makeSingle('fj-banana-milk', 'banana-milk', 'موز باللبن', 'Banana with Milk', 'fresh-juices', 'عصائر فريش', 50, '/images/products/banana-milk.png', 'موز طازج بالحليب الطبيعي الغني والمغذي', ['موز', 'حليب'], ['موز باللبن'], true, true),
  makeSingle('fj-plum-milk', 'plum-milk', 'برقوق باللبن', 'Plum with Milk', 'fresh-juices', 'عصائر فريش', 50, '/images/products/strawberry-milk.png', 'برقوق طبيعي مع الحليب الطازج', ['برقوق', 'حليب']),
  makeSingle('fj-peach-milk', 'peach-milk', 'خوخ باللبن', 'Peach with Milk', 'fresh-juices', 'عصائر فريش', 50, '/images/products/orange-juice.png', 'خوخ طازج ممزوج بالحليب الطبيعي', ['خوخ', 'حليب']),
  makeSingle('fj-pomegranate', 'pomegranate-juice', 'عصير رمان فريش', 'Fresh Pomegranate Juice', 'fresh-juices', 'عصائر فريش', 50, '/images/products/pomegranate-juice.png', 'رمان طبيعي نقي 100% معصور طازج', ['رمان طبيعي'], ['رمان'], true),
  makeSingle('fj-dates-milk', 'dates-milk', 'بلح باللبن', 'Dates with Milk', 'fresh-juices', 'عصائر فريش', 55, '/images/products/dates-milk.png', 'بلح غني بالطاقة ممزوج بالحليب الطبيعي الطازج', ['بلح', 'حليب'], ['بلح باللبن', 'طاقة'], true),
  makeSingle('fj-kiwi', 'kiwi-juice', 'عصير كيوي فريش', 'Fresh Kiwi Juice', 'fresh-juices', 'عصائر فريش', 60, '/images/products/kiwi-juice.png', 'كيوي طبيعي طازج غني بفيتامين سي والانتعاش', ['كيوي طبيعي']),
  makeSingle('fj-pineapple', 'pineapple-juice', 'عصير أناناس فريش', 'Fresh Pineapple Juice', 'fresh-juices', 'عصائر فريش', 70, '/images/products/pineapple-juice.png', 'أناناس استوائي طبيعي معصور طازج', ['أناناس طبيعي'], ['أناناس'], true)
);

// 2. القصب
products.push(
  makeMulti('sc-pure', 'sugarcane-pure', 'عصير قصب طبيعي', 'Pure Sugarcane Juice', 'sugarcane', 'القصب', [
    { id: 'sc-sm', nameAr: 'حجم عادي', nameEn: 'Regular', price: 15, isDefault: true, availability: 'available' },
    { id: 'sc-lg', nameAr: 'حجم كبير', nameEn: 'Large', price: 20, isDefault: false, availability: 'available' }
  ], '/images/products/sugarcane-pure.png', 'عصير قصب طبيعي معصور طازجاً من أجود أعواد القصب', ['قصب طبيعي'], ['قصب'], true, true),
  makeSingle('sc-milk', 'sugarcane-milk', 'قصب باللبن', 'Sugarcane with Milk', 'sugarcane', 'القصب', 25, '/images/products/sugarcane-milk.png', 'قصب طبيعي ممزوج بالحليب الطازج', ['قصب', 'حليب']),
  makeSingle('sc-orange', 'sugarcane-orange', 'قصب برتقال', 'Sugarcane Orange', 'sugarcane', 'القصب', 25, '/images/products/sugarcane-orange.png', 'مزيج القصب الطبيعي مع عصير البرتقال الطازج', ['قصب', 'برتقال']),
  makeSingle('sc-lemon', 'sugarcane-lemon', 'قصب ليمون', 'Sugarcane Lemon', 'sugarcane', 'القصب', 25, '/images/products/sugarcane-lemon.png', 'قصب طبيعي مع عصير الليمون المنعش', ['قصب', 'ليمون']),
  makeSingle('sc-mint', 'sugarcane-mint', 'قصب نعناع', 'Sugarcane Mint', 'sugarcane', 'القصب', 25, '/images/products/sugarcane-pure.png', 'قصب طبيعي مع أوراق النعناع الفريش', ['قصب', 'نعناع فريش']),
  makeSingle('sc-vanilla', 'sugarcane-vanilla', 'قصب فانيليا', 'Sugarcane Vanilla', 'sugarcane', 'القصب', 25, '/images/products/sugarcane-pure.png', 'قصب طبيعي مع لمسة الفانيليا الناعمة', ['قصب', 'فانيليا']),
  makeSingle('sc-sobya', 'sugarcane-sobya', 'قصب سوبيا', 'Sugarcane Sobya', 'sugarcane', 'القصب', 25, '/images/products/sugarcane-sobia.png', 'مزيج القصب اللذيذ مع السوبيا المثلجة', ['قصب', 'سوبيا']),
  makeSingle('sc-halawa', 'sugarcane-halawa', 'قصب حلاوة', 'Sugarcane Halawa', 'sugarcane', 'القصب', 25, '/images/products/sugarcane-pure.png', 'خلطة القصب المبتكرة بالحلاوة الطحينية', ['قصب', 'حلاوة طحينية']),
  makeSingle('sc-rocca', 'sugarcane-rocca', 'قصب جرجير', 'Sugarcane Arugula', 'sugarcane', 'القصب', 25, '/images/products/arugula-milk.png', 'قصب طبيعي غني مع الجرجير الصحي', ['قصب', 'جرجير فريش']),
  makeSingle('sc-birell', 'sugarcane-birell', 'قصب بريل', 'Sugarcane Birell', 'sugarcane', 'القصب', 35, '/images/products/sugarcane-pure.png', 'خلطة القصب المنعشة مع مشروب البريل الشعير', ['قصب', 'بريل'])
);

// 3. الأفوكادو
products.push(
  makeSingle('avo-pure', 'avocado-pure', 'أفوكادو بيور', 'Pure Avocado', 'avocado', 'الأفوكادو', 90, '/images/products/avocado-nuts-mango-pair.jpg', 'أفوكادو طبيعي طازج بقوام كريمي فاخر', ['أفوكادو طبيعي'], ['أفوكادو'], true, true),
  makeSingle('avo-mango', 'avocado-mango', 'أفوكادو + مانجو', 'Avocado + Mango', 'avocado', 'الأفوكادو', 95, '/images/products/avocado-nuts-mango-pair.jpg', 'أفوكادو كريمي طازج مع مانجو بيور', ['أفوكادو', 'مانجو']),
  makeSingle('avo-banana', 'avocado-banana', 'أفوكادو + موز', 'Avocado + Banana', 'avocado', 'الأفوكادو', 95, '/images/products/avocado-nuts-mango-pair.jpg', 'أفوكادو طازج مع موز طبيعي وحليب', ['أفوكادو', 'موز']),
  makeSingle('avo-kiwi', 'avocado-kiwi', 'أفوكادو + كيوي', 'Avocado + Kiwi', 'avocado', 'الأفوكادو', 95, '/images/products/avocado-nuts-mango-pair.jpg', 'أفوكادو غني مع كيوي فريش منعش', ['أفوكادو', 'كيوي']),
  makeSingle('avo-strawberry', 'avocado-strawberry', 'أفوكادو + فراولة', 'Avocado + Strawberry', 'avocado', 'الأفوكادو', 95, '/images/products/avocado-nuts-mango-pair.jpg', 'أفوكادو كريمي مع فراولة طازجة', ['أفوكادو', 'فراولة']),
  makeSingle('avo-guava', 'avocado-guava', 'أفوكادو + جوافة', 'Avocado + Guava', 'avocado', 'الأفوكادو', 95, '/images/products/avocado-nuts-mango-pair.jpg', 'أفوكادو طازج مع جوافة بيور', ['أفوكادو', 'جوافة']),
  makeSingle('avo-dates', 'avocado-dates', 'أفوكادو + بلح', 'Avocado + Dates', 'avocado', 'الأفوكادو', 95, '/images/products/avocado-nuts-mango-pair.jpg', 'أفوكادو طبيعي مع بلح طري وعسل', ['أفوكادو', 'بلح', 'عسل']),
  makeSingle('avo-nuts-honey', 'avocado-nuts-honey', 'أفوكادو + مكسرات + عسل', 'Avocado with Nuts & Honey', 'avocado', 'الأفوكادو', 110, '/images/products/avocado-nuts-mango-pair.jpg', 'أفوكادو ملكي بالمكسرات المحمصة الفاخرة وعسل النحل', ['أفوكادو', 'مكسرات فاخرة', 'عسل نحل'], ['أفوكادو ملكي', 'مكسرات'], true, true)
);

// 4. سموزي
products.push(
  makeSingle('sm-kiwi', 'smoothie-kiwi', 'سموزي كيوي', 'Kiwi Smoothie', 'smoothie', 'سموزي', 60, '/images/products/signature-four-drinks.jpg', 'سموزي كيوي مثلج ومنعش', ['كيوي', 'ثلج مجروش']),
  makeSingle('sm-guava', 'smoothie-guava', 'سموزي جوافة', 'Guava Smoothie', 'smoothie', 'سموزي', 60, '/images/products/signature-four-drinks.jpg', 'سموزي جوافة طبيعية مثلجة', ['جوافة', 'ثلج مجروش']),
  makeSingle('sm-lemon', 'smoothie-lemon', 'سموزي ليمون', 'Lemon Smoothie', 'smoothie', 'سموزي', 60, '/images/products/signature-four-drinks.jpg', 'سموزي ليمون منعش مثلج', ['ليمون', 'ثلج مجروش']),
  makeSingle('sm-strawberry', 'smoothie-strawberry', 'سموزي فراولة', 'Strawberry Smoothie', 'smoothie', 'سموزي', 60, '/images/products/signature-four-drinks.jpg', 'سموزي فراولة طبيعية مثلجة', ['فراولة', 'ثلج مجروش'], ['سموزي فراولة'], true),
  makeSingle('sm-orange', 'smoothie-orange', 'سموزي برتقال', 'Orange Smoothie', 'smoothie', 'سموزي', 60, '/images/products/signature-four-drinks.jpg', 'سموزي برتقال فريش مثلج', ['برتقال', 'ثلج مجروش']),
  makeSingle('sm-watermelon', 'smoothie-watermelon', 'سموزي بطيخ', 'Watermelon Smoothie', 'smoothie', 'سموزي', 60, '/images/products/watermelon-mint.png', 'سموزي بطيخ أحمر مثلج ومنعش', ['بطيخ', 'ثلج مجروش']),
  makeSingle('sm-mango', 'smoothie-mango', 'سموزي مانجو', 'Mango Smoothie', 'smoothie', 'سموزي', 60, '/images/products/signature-four-drinks.jpg', 'سموزي مانجو استوائي مثلج وغني', ['مانجو', 'ثلج مجروش'], ['سموزي مانجو'], true, true),
  makeSingle('sm-mix', 'smoothie-mix', 'سموزي ميكس', 'Mix Smoothie', 'smoothie', 'سموزي', 60, '/images/products/signature-four-drinks.jpg', 'سموزي ميكس فواكه استوائية مشكلة', ['فواكه مشكلة', 'ثلج مجروش']),
  makeSingle('sm-watermelon-mint', 'smoothie-watermelon-mint', 'سموزي بطيخ نعناع', 'Watermelon Mint Smoothie', 'smoothie', 'سموزي', 60, '/images/products/watermelon-mint.png', 'سموزي بطيخ مع نعناع فريش مثلج', ['بطيخ', 'نعناع فريش', 'ثلج مجروش']),
  makeSingle('sm-lemon-mint', 'smoothie-lemon-mint', 'سموزي ليمون نعناع', 'Lemon Mint Smoothie', 'smoothie', 'سموزي', 60, '/images/products/signature-four-drinks.jpg', 'سموزي ليمون ونعناع مثلج ومنعش للروح', ['ليمون', 'نعناع', 'ثلج مجروش'], ['ليمون نعناع'], true),
  makeSingle('sm-red-berry', 'smoothie-red-berry', 'سموزي توت أحمر', 'Red Berry Smoothie', 'smoothie', 'سموزي', 60, '/images/products/signature-four-drinks.jpg', 'سموزي توت أحمر مثلج وغني بالانتعاش', ['توت أحمر', 'ثلج مجروش']),
  makeSingle('sm-blue-berry', 'smoothie-blue-berry', 'سموزي توت أزرق', 'Blueberry Smoothie', 'smoothie', 'سموزي', 60, '/images/products/signature-four-drinks.jpg', 'سموزي توت أزرق (بلوبيري) فاخر مثلج', ['توت أزرق', 'ثلج مجروش'], ['بلوبيري'], true),
  makeSingle('sm-pineapple', 'smoothie-pineapple', 'سموزي أناناس', 'Pineapple Smoothie', 'smoothie', 'سموزي', 70, '/images/products/pineapple-orange.png', 'سموزي أناناس استوائي مثلج', ['أناناس', 'ثلج مجروش'])
);

// 5. عصائر شرقي
products.push(
  makeMulti('or-tamarind', 'tamarind', 'تمر هندي طبيعي', 'Natural Tamarind', 'oriental-juices', 'عصائر شرقي', [
    { id: 'or-tam-sm', nameAr: 'حجم عادي', nameEn: 'Regular', price: 20, isDefault: true, availability: 'available' },
    { id: 'or-tam-lg', nameAr: 'حجم كبير', nameEn: 'Large', price: 25, isDefault: false, availability: 'available' }
  ], '/images/products/tamarind-natural.png', 'تمر هندي طبيعي محضر على الأصول', ['تمر هندي طبيعي']),
  makeMulti('or-sobya', 'oriental-sobya', 'سوبيا طبيعي', 'Natural Sobya', 'oriental-juices', 'عصائر شرقي', [
    { id: 'or-sob-sm', nameAr: 'حجم عادي', nameEn: 'Regular', price: 25, isDefault: true, availability: 'available' },
    { id: 'or-sob-lg', nameAr: 'حجم كبير', nameEn: 'Large', price: 30, isDefault: false, availability: 'available' }
  ], '/images/products/sobya-natural.png', 'سوبيا طبيعية مثلجة وغنية بجوز الهند والحليب', ['سوبيا طبيعية', 'حليب', 'جوز هند'], ['سوبيا'], true, true),
  makeMulti('or-kharroub', 'carob-kharroub', 'خروب طبيعي', 'Natural Carob', 'oriental-juices', 'عصائر شرقي', [
    { id: 'or-khar-sm', nameAr: 'حجم عادي', nameEn: 'Regular', price: 20, isDefault: true, availability: 'available' },
    { id: 'or-khar-lg', nameAr: 'حجم كبير', nameEn: 'Large', price: 25, isDefault: false, availability: 'available' }
  ], '/images/products/carob-kharroub.png', 'خروب طبيعي أصيل معصور ومثلج', ['خروب طبيعي']),
  makeMulti('or-ennab', 'karkadeh-ennab', 'عناب مثلج', 'Iced Ennab (Karkadeh)', 'oriental-juices', 'عصائر شرقي', [
    { id: 'or-enn-sm', nameAr: 'حجم عادي', nameEn: 'Regular', price: 20, isDefault: true, availability: 'available' },
    { id: 'or-enn-lg', nameAr: 'حجم كبير', nameEn: 'Large', price: 25, isDefault: false, availability: 'available' }
  ], '/images/products/karkadeh-ennab.png', 'عناب (كركديه) طبيعي مثلج مهدئ ومنعش', ['كركديه طبيعي', 'عناب'], ['عناب'], true),
  makeMulti('or-doum', 'doum-juice', 'دوم طبيعي', 'Natural Doum', 'oriental-juices', 'عصائر شرقي', [
    { id: 'or-doum-sm', nameAr: 'حجم عادي', nameEn: 'Regular', price: 20, isDefault: true, availability: 'available' },
    { id: 'or-doum-lg', nameAr: 'حجم كبير', nameEn: 'Large', price: 25, isDefault: false, availability: 'available' }
  ], '/images/products/doum-juice.png', 'دوم طبيعي أصيل ومفيد', ['دوم طبيعي']),
  makeSingle('or-doum-milk', 'doum-milk', 'دوم باللبن', 'Doum with Milk', 'oriental-juices', 'عصائر شرقي', 30, '/images/products/doum-milk.png', 'دوم طبيعي ممزوج بالحليب الطازج', ['دوم طبيعي', 'حليب']),
  makeSingle('or-tam-sobya', 'tamarind-on-sobya', 'تمر على سوبيا', 'Tamarind on Sobya', 'oriental-juices', 'عصائر شرقي', 30, '/images/products/sobya-natural.png', 'الميكس الشرقي الشهير: تمر هندي مع سوبيا مثلجة', ['تمر هندي', 'سوبيا'], ['تمر على سوبيا'], true)
);

// 6. عالم المانجو
products.push(
  makeMulti('mg-pure', 'mango-pure', 'عصير مانجو فريش', 'Fresh Mango Juice', 'mango-world', 'عالم المانجو', [
    { id: 'mg-sm', nameAr: 'حجم عادي', nameEn: 'Regular', price: 45, isDefault: true, availability: 'available' },
    { id: 'mg-lg', nameAr: 'حجم كبير', nameEn: 'Large', price: 55, isDefault: false, availability: 'available' }
  ], '/images/products/mango-chunks-bowl.jpg', 'مانجو طبيعية طازجة بيور معصورة يومياً', ['مانجو طبيعي'], ['مانجو'], true, true),
  makeSingle('mg-banana', 'mango-banana', 'مانجو بالموز', 'Mango with Banana', 'mango-world', 'عالم المانجو', 55, '/images/products/mango-banana.png', 'مانجو فريش ممزوجة بالموز الطازج', ['مانجو', 'موز']),
  makeSingle('mg-strawberry', 'mango-strawberry', 'مانجو فراولة', 'Mango Strawberry', 'mango-world', 'عالم المانجو', 55, '/images/products/mango-strawberry.png', 'مزيج المانجو الاستوائي مع الفراولة الطازجة', ['مانجو', 'فراولة'], ['مانجو فراولة'], true),
  makeSingle('mg-apple', 'mango-apple', 'مانجو تفاح', 'Mango Apple', 'mango-world', 'عالم المانجو', 55, '/images/products/mango-apple.png', 'مانجو فريش مع قطع وعصير التفاح', ['مانجو', 'تفاح']),
  makeSingle('mg-milk', 'mango-milk', 'مانجو باللبن', 'Mango with Milk', 'mango-world', 'عالم المانجو', 55, '/images/products/mango-milk.png', 'مانجو طبيعية مع الحليب الطبيعي الطازج', ['مانجو', 'حليب']),
  makeSingle('mg-icecream', 'mango-icecream', 'مانجو آيس كريم', 'Mango Ice Cream', 'mango-world', 'عالم المانجو', 55, '/images/products/mango-icecream.png', 'مانجو بيور مع بولة آيس كريم فانيليا غنية', ['مانجو', 'آيس كريم فانيليا'], ['مانجو آيس كريم'], true),
  makeSingle('mg-pineapple', 'mango-pineapple', 'مانجو بالأناناس', 'Mango with Pineapple', 'mango-world', 'عالم المانجو', 65, '/images/products/mango-pineapple.png', 'مزيج المانجو والأنناناس الاستوائي المنعش', ['مانجو', 'أناناس']),
  makeSingle('mg-kiwi', 'mango-kiwi', 'مانجو كيوي', 'Mango Kiwi', 'mango-world', 'عالم المانجو', 65, '/images/products/mango-kiwi.png', 'مانجو حلوة مع كيوي فريش منعش', ['مانجو', 'كيوي'])
);

// 7. ميلك شيك
products.push(
  makeSingle('ms-chocolate', 'milkshake-chocolate', 'ميلك شيك شيكولاتة', 'Chocolate Milkshake', 'milkshake', 'ميلك شيك', 70, '/images/products/chocolate-milkshake.png', 'ميلك شيك شوكولاتة غني بالآيس كريم الفاخر', ['شوكولاتة', 'آيس كريم', 'حليب'], ['ميلك شيك'], true, true),
  makeSingle('ms-vanilla', 'milkshake-vanilla', 'ميلك شيك فانيليا', 'Vanilla Milkshake', 'milkshake', 'ميلك شيك', 70, '/images/products/vanilla-milkshake.png', 'ميلك شيك فانيليا ناعم وكريمي', ['فانيليا', 'آيس كريم', 'حليب']),
  makeSingle('ms-mango', 'milkshake-mango', 'ميلك شيك مانجو', 'Mango Milkshake', 'milkshake', 'ميلك شيك', 70, '/images/products/mango-milkshake.png', 'ميلك شيك مانجو طبيعية كريمية', ['مانجو', 'آيس كريم', 'حليب']),
  makeSingle('ms-strawberry', 'milkshake-strawberry', 'ميلك شيك فراولة', 'Strawberry Milkshake', 'milkshake', 'ميلك شيك', 70, '/images/products/strawberry-milkshake.png', 'ميلك شيك فراولة طازجة ولذيذة', ['فراولة', 'آيس كريم', 'حليب']),
  makeSingle('ms-blueberry', 'milkshake-blueberry', 'ميلك شيك توت أزرق', 'Blueberry Milkshake', 'milkshake', 'ميلك شيك', 70, '/images/products/blueberry-milkshake.png', 'ميلك شيك بلوبيري فاخر', ['توت أزرق', 'آيس كريم', 'حليب'], ['بلوبيري'], true),
  makeSingle('ms-caramel', 'milkshake-caramel', 'ميلك شيك كراميل', 'Caramel Milkshake', 'milkshake', 'ميلك شيك', 70, '/images/products/caramel-milkshake.png', 'ميلك شيك كراميل لذيذ وغني بالصوص الذهبي', ['كراميل', 'آيس كريم', 'حليب'])
);

// 8. الزبادي
products.push(
  makeSingle('yg-plain', 'yogurt-plain', 'زبادي سادة', 'Plain Fresh Yogurt', 'yogurt', 'الزبادي', 50, '/images/products/mango-yogurt-nuts.png', 'زبادي طبيعي طازج وصحي', ['زبادي طبيعي']),
  makeSingle('yg-honey', 'yogurt-honey', 'زبادي بالعسل', 'Yogurt with Honey', 'yogurt', 'الزبادي', 55, '/images/products/mango-yogurt-nuts.png', 'زبادي طبيعي مع عسل النحل النقي', ['زبادي', 'عسل نحل']),
  makeSingle('yg-fruits', 'yogurt-fruits', 'زبادي فواكه قطع', 'Yogurt with Fruit Chunks', 'yogurt', 'الزبادي', 65, '/images/products/mango-yogurt-nuts.png', 'زبادي طبيعي غني بقطع الفواكه الطازجة المشكلة', ['زبادي', 'قطع فواكه طازجة'], ['زبادي فواكه'], true, true),
  makeSingle('yg-strawberry', 'yogurt-strawberry', 'زبادي بالفراولة', 'Yogurt with Strawberry', 'yogurt', 'الزبادي', 65, '/images/products/mango-yogurt-nuts.png', 'زبادي طبيعي مع قطع الفراولة الطازجة', ['زبادي', 'فراولة']),
  makeSingle('yg-peach', 'yogurt-peach', 'زبادي خوخ', 'Yogurt with Peach', 'yogurt', 'الزبادي', 65, '/images/products/mango-yogurt-nuts.png', 'زبادي طازج مع قطع الخوخ اللذيذ', ['زبادي', 'خوخ']),
  makeSingle('yg-dates-honey', 'yogurt-dates-honey', 'زبادي بلح وعسل', 'Yogurt with Dates & Honey', 'yogurt', 'الزبادي', 65, '/images/products/mango-yogurt-nuts.png', 'زبادي طبيعي مع التمر وعسل النحل', ['زبادي', 'بلح', 'عسل نحل']),
  makeSingle('yg-apple', 'yogurt-apple', 'زبادي تفاح', 'Yogurt with Apple', 'yogurt', 'الزبادي', 65, '/images/products/mango-yogurt-nuts.png', 'زبادي طازج مع قطع التفاح المقرمش', ['زبادي', 'تفاح']),
  makeSingle('yg-mango', 'yogurt-mango', 'زبادي مانجو', 'Yogurt with Mango', 'yogurt', 'الزبادي', 65, '/images/products/mango-yogurt-nuts.png', 'زبادي طبيعي مع قطع المانجو الاستوائية', ['زبادي', 'مانجو قطع'], ['زبادي مانجو'], true),
  makeSingle('yg-kiwi', 'yogurt-kiwi', 'زبادي كيوي', 'Yogurt with Kiwi', 'yogurt', 'الزبادي', 70, '/images/products/mango-yogurt-nuts.png', 'زبادي طازج مع قطع الكيوي الغني بفيتامين سي', ['زبادي', 'كيوي قطع'])
);

// 9. الإضافات
products.push(
  makeSingle('add-chocolate', 'extra-chocolate', 'إضافة شيكولاتة', 'Chocolate Topping', 'addons', 'الإضافات', 15, '/images/products/super-cocktail-icecream.png', 'إضافة صوص شوكولاتة فاخر لمشروبك', ['شوكولاتة فاخرة']),
  makeSingle('add-honey', 'extra-honey', 'إضافة عسل نحل', 'Honey Topping', 'addons', 'الإضافات', 15, '/images/products/super-cocktail-icecream.png', 'إضافة عسل نحل جبلي نقي', ['عسل نحل']),
  makeSingle('add-icecream', 'extra-icecream', 'إضافة بولة آيس كريم', 'Ice Cream Scoop', 'addons', 'الإضافات', 15, '/images/products/super-cocktail-icecream.png', 'إضافة بولة آيس كريم فانيليا غنية', ['آيس كريم فانيليا']),
  makeSingle('add-fruits', 'extra-fruits', 'إضافة فاكهة قطع', 'Extra Fruit Chunks', 'addons', 'الإضافات', 20, '/images/products/super-cocktail-icecream.png', 'إضافة قطع فواكه طازجة مشكلة', ['قطع فواكه طازجة']),
  makeSingle('add-nuts', 'extra-nuts', 'إضافة مكسرات فاخرة', 'Extra Premium Nuts', 'addons', 'الإضافات', 30, '/images/products/super-cocktail-icecream.png', 'إضافة مكسرات فاخرة محمصة (كاجو، بندق، فستق)', ['مكسرات محمصة'], ['مكسرات'], true)
);

// 10. عصائر المحمصات (تخصص المايسترو)
products.push(
  makeSingle('roast-peanut', 'peanut-milk', 'سوداني باللبن', 'Peanuts with Milk', 'roastery-juices', 'عصائر المحمصات', 60, '/images/products/walnut-drink.png', 'فول سوداني محمص طازج ممزوج بالحليب الطبيعي والعسل', ['فول سوداني محمص', 'حليب'], ['محمصات', 'سوداني باللبن'], true),
  makeSingle('roast-seeds', 'seeds-milk', 'لب باللبن', 'Toasted Seeds with Milk', 'roastery-juices', 'عصائر المحمصات', 60, '/images/products/walnut-drink.png', 'مزيج لب محمص فاخر مع الحليب الطبيعي', ['لب محمص', 'حليب'], ['محمصات']),
  makeSingle('roast-hazelnut', 'hazelnut-milk', 'بندق باللبن', 'Hazelnut with Milk', 'roastery-juices', 'عصائر المحمصات', 100, '/images/products/walnut-drink.png', 'بندق محمص فاخر ممزوج بالحليب الطبيعي الطازج', ['بندق محمص', 'حليب'], ['محمصات', 'بندق باللبن'], true, true),
  makeSingle('roast-cashew', 'cashew-milk', 'كاجو باللبن', 'Cashew with Milk', 'roastery-juices', 'عصائر المحمصات', 100, '/images/products/walnut-drink.png', 'كاجو محمص فاخر ممزوج بالحليب الطبيعي', ['كاجو محمص', 'حليب'], ['محمصات', 'كاجو باللبن'], true, true),
  makeSingle('roast-pistachio', 'pistachio-milk', 'فستق باللبن', 'Pistachio with Milk', 'roastery-juices', 'عصائر المحمصات', 100, '/images/products/pistachio-milkshake.png', 'فستق حلبي محمص فاخر مع الحليب الطازج', ['فستق محمص', 'حليب'], ['محمصات', 'فستق باللبن'], true, true),
  makeSingle('roast-almond', 'almond-milk', 'لوز باللبن', 'Almond with Milk', 'roastery-juices', 'عصائر المحمصات', 100, '/images/products/walnut-drink.png', 'لوز محمص مقرمش ممزوج بالحليب الطبيعي الغني', ['لوز محمص', 'حليب'], ['محمصات', 'لوز باللبن'], true, true)
);

// 11. الشوكولاتة
products.push(
  makeSingle('choc-mandolin', 'mandolin-drink', 'مندولين', 'Mandolin Shake', 'chocolate', 'الشوكولاتة', 75, '/images/products/chocolate-milkshake.png', 'مخفوق شوكولاتة مندولين اللذيذ بالحليب والآيس كريم', ['شوكولاتة مندولين', 'حليب', 'آيس كريم']),
  makeSingle('choc-moro', 'moro-drink', 'مورو', 'Moro Shake', 'chocolate', 'الشوكولاتة', 75, '/images/products/chocolate-milkshake.png', 'مخفوق شوكولاتة مورو مع النوجا والكراميل والحليب', ['شوكولاتة مورو', 'حليب']),
  makeSingle('choc-snikers', 'snikers-drink', 'سنيكرز', 'Snickers Shake', 'chocolate', 'الشوكولاتة', 75, '/images/products/snickers-drink.png', 'مخفوق سنيكرز الشهير بالفول السوداني والكراميل والشوكولاتة', ['سنيكرز', 'حليب', 'آيس كريم'], ['سنيكرز'], true),
  makeSingle('choc-nutella', 'nutella-drink', 'نوتيلا', 'Nutella Shake', 'chocolate', 'الشوكولاتة', 75, '/images/products/nutella-milkshake.png', 'مخفوق شوكولاتة نوتيلا الأصلية الكثيف', ['نوتيلا أصلية', 'حليب', 'آيس كريم'], ['نوتيلا'], true, true),
  makeSingle('choc-kinder', 'kinder-drink', 'كيندر', 'Kinder Shake', 'chocolate', 'الشوكولاتة', 75, '/images/products/chocolate-milkshake.png', 'مخفوق كيندر بوينو الشوكولاتة البيضاء والحليبية', ['كيندر', 'حليب', 'آيس كريم'], ['كيندر'], true),
  makeSingle('choc-oreo', 'oreo-drink', 'أوريو', 'Oreo Shake', 'chocolate', 'الشوكولاتة', 75, '/images/products/oreo-drink.png', 'مخفوق بسكويت أوريو الشهير مع الكريمة والحليب', ['بسكويت أوريو', 'حليب', 'آيس كريم'], ['أوريو'], true, true),
  makeSingle('choc-kitkat', 'kitkat-drink', 'كيت كات', 'Kit Kat Shake', 'chocolate', 'الشوكولاتة', 75, '/images/products/chocolate-milkshake.png', 'مخفوق كيت كات الويفر المقرمش والشوكولاتة', ['كيت كات', 'حليب', 'آيس كريم']),
  makeSingle('choc-galaxy', 'galaxy-drink', 'جلاكسي', 'Galaxy Shake', 'chocolate', 'الشوكولاتة', 75, '/images/products/galaxy-drink.png', 'مخفوق شوكولاتة جلاكسي الناعمة الحريرية', ['جلاكسي', 'حليب', 'آيس كريم'], ['جلاكسي'], true),
  makeSingle('choc-hohos', 'hohos-drink', 'هوهوز', 'Hohos Shake', 'chocolate', 'الشوكولاتة', 75, '/images/products/hohos-drink.png', 'مخفوق كيك هوهوز الشوكولاتة والكريمة', ['كيك هوهوز', 'حليب']),
  makeSingle('choc-twinkies', 'twinkies-drink', 'تونيز (توينكيز)', 'Twinkies Shake', 'chocolate', 'الشوكولاتة', 75, '/images/products/twinkies-drink.png', 'مخفوق كيك توينكيز الفانيليا والكريمة', ['توينكيز', 'حليب'])
);

// 12. قطع فواكه
products.push(
  makeSingle('fc-cocktail', 'cocktail-cup', 'كوكتيل قطع', 'Fruit Cocktail Cup', 'fruit-cuts', 'قطع فواكه', 45, '/images/products/cocktail-cup.png', 'كوب قطع فواكه طازجة مشكلة مع عصير بيور', ['فواكه طازجة مشكلة']),
  makeSingle('fc-cocktail-ice', 'cocktail-ice', 'كوكتيل + آيس', 'Cocktail with Ice Cream', 'fruit-cuts', 'قطع فواكه', 55, '/images/products/super-cocktail-icecream.png', 'كوكتيل قطع فواكه طازجة مع بولة آيس كريم فانيليا', ['فواكه مشكلة', 'آيس كريم']),
  makeSingle('fc-cocktail-mix', 'cocktail-blended', 'كوكتيل خلط', 'Blended Cocktail', 'fruit-cuts', 'قطع فواكه', 55, '/images/products/fruit-cocktail-cup.jpg', 'كوكتيل فواكه مخلوط غني ومركز', ['فواكه طبيعية مشكلة']),
  makeSingle('fc-fruit-salad', 'fruit-salad', 'فروت سالط', 'Fresh Fruit Salad Bowl', 'fruit-cuts', 'قطع فواكه', 85, '/images/products/fruit-salad-bowl.png', 'طبق سلطة فواكه طازجة مشكلة غني بالفيتامينات', ['فواكه طازجة مشكلة'], ['سلطة فواكه'], true, true),
  makeSingle('fc-fruit-salad-ice', 'fruit-salad-ice', 'فروت سالط + آيس', 'Fruit Salad with Ice Cream', 'fruit-cuts', 'قطع فواكه', 95, '/images/products/fruit-salad-icecream.png', 'طبق سلطة فواكه مع بولة آيس كريم فانيليا فاخرة', ['فواكه مشكلة', 'آيس كريم']),
  makeSingle('fc-bomb', 'elmaestro-bomb', 'قنبلة', 'El Maestro Bomb', 'fruit-cuts', 'قطع فواكه', 85, '/images/products/super-elmaestro-bomb.png', 'قنبلة الفواكه الشهيرة: أرز بلبن وقطع فواكه وعصير وقشطة', ['أرز باللبن', 'قطع فواكه', 'قشطة', 'عصير'], ['قنبلة'], true, true),
  makeSingle('fc-bomb-nuts', 'elmaestro-bomb-nuts', 'قنبلة مكسرات', 'Bomb with Premium Nuts', 'fruit-cuts', 'قطع فواكه', 110, '/images/products/super-elmaestro-bomb.png', 'قنبلة الفواكه والأرز باللبن والقشطة مغطاة بالمكسرات الفاخرة', ['أرز باللبن', 'قطع فواكه', 'قشطة', 'مكسرات فاخرة'], ['قنبلة بالمكسرات'], true, true),
  makeSingle('fc-night-calm', 'night-calm', 'هدوء الليل', 'Night Calm Dessert', 'fruit-cuts', 'قطع فواكه', 50, '/images/products/rice-pudding.jpg', 'أرز بلبن + فراولة + قطع فاكهة + قشطة', ['أرز بلبن', 'فراولة', 'قطع فاكهة', 'قشطة'], ['هدوء الليل'], true),
  makeSingle('fc-pomegranate-seeds', 'pomegranate-seeds', 'رمان حب', 'Pomegranate Seeds Cup', 'fruit-cuts', 'قطع فواكه', 50, '/images/products/pomegranate-seeds-cup.png', 'كوب حبوب الرمان الطبيعي الطازج المصفى', ['رمان حب فريش']),
  makeSingle('fc-cantaloupe-cuts', 'cantaloupe-cuts', 'كنتالوب قطع', 'Cantaloupe Chunks', 'fruit-cuts', 'قطع فواكه', 50, '/images/products/cantaloupe-juice.png', 'قطع كنتالوب طازجة ومثلجة', ['كنتالوب قطع']),
  makeSingle('fc-orange-cuts', 'orange-cuts', 'برتقال قطع', 'Orange Chunks', 'fruit-cuts', 'قطع فواكه', 50, '/images/products/orange-juice.png', 'شرائح وقطع برتقال طازجة', ['برتقال قطع']),
  makeSingle('fc-strawberry-cuts', 'strawberry-cuts', 'فراولة قطع', 'Strawberry Chunks', 'fruit-cuts', 'قطع فواكه', 60, '/images/products/strawberry-juice.png', 'كوب قطع فراولة طازجة ولذيذة', ['فراولة قطع']),
  makeSingle('fc-watermelon-cuts', 'watermelon-cuts', 'بطيخ قطع', 'Watermelon Chunks Cup', 'fruit-cuts', 'قطع فواكه', 60, '/images/products/watermelon-chunks-cup.png', 'كوب مكعبات بطيخ أحمر مثلج ومنعش', ['بطيخ أحمر']),
  makeSingle('fc-mango-cuts', 'mango-cuts', 'مانجو قطع', 'Mango Chunks Cup', 'fruit-cuts', 'قطع فواكه', 75, '/images/products/mango-chunks-cup.png', 'قطع مكعبات مانجو استوائية طازجة فاخرة', ['مانجو فريش قطع'], ['مانجو قطع'], true),
  makeSingle('fc-kiwi-cuts', 'kiwi-cuts', 'كيوي قطع', 'Kiwi Chunks', 'fruit-cuts', 'قطع فواكه', 75, '/images/products/kiwi-chunks-cup.png', 'قطع كيوي فريش منعشة وغنية بفيتامين سي', ['كيوي قطع']),
  makeSingle('fc-plum-cuts', 'plum-cuts', 'برقوق قطع', 'Plum Chunks', 'fruit-cuts', 'قطع فواكه', 70, '/images/products/strawberry-juice.png', 'قطع برقوق طازجة ولذيذة', ['برقوق']),
  makeSingle('fc-peach-cuts', 'peach-cuts', 'خوخ قطع', 'Peach Chunks', 'fruit-cuts', 'قطع فواكه', 70, '/images/products/orange-juice.png', 'قطع خوخ طازجة وحلوة المذاق', ['خوخ']),
  makeSingle('fc-pineapple-cuts', 'pineapple-cuts', 'أناناس قطع', 'Pineapple Chunks', 'fruit-cuts', 'قطع فواكه', 100, '/images/products/pineapple-chunks-seasonal.png', 'قطع أناناس طبيعي استوائي طازج', ['أناناس']),
  makeSingle('fc-avocado-fatteh', 'avocado-fatteh', 'فتة أفوكادو', 'Avocado Fatteh Bowl', 'fruit-cuts', 'قطع فواكه', 135, '/images/products/avocado-nuts-mango-pair.jpg', 'فتة أفوكادو ملكية: موز + تفاح + أفوكادو + مانجو', ['موز', 'تفاح', 'أفوكادو', 'مانجو'], ['فتة أفوكادو'], true, true),
  makeSingle('fc-custom-mix', 'custom-fruit-mix', 'ميكس قطع حسب الاختيار', 'Custom Fruit Chunks Mix', 'fruit-cuts', 'قطع فواكه', 60, '/images/products/mixed-fruits-chunks.png', 'تشكيلة قطع فواكه طازجة حسب اختيار ورغبة العميل', ['فواكه حسب اختيار العميل'])
);

// 13. بوبا كورنر
products.push(
  makeSingle('boba-sobya', 'boba-sobya', 'بوبا سوبيا', 'Boba Sobya', 'boba-corner', 'بوبا كورنر', 50, '/images/products/boba-milkshake-blueberry.png', 'سوبيا مثلجة بحبيبات بوبا بنكهة من اختيارك', ['سوبيا', 'حبيبات بوبا']),
  makeSingle('boba-coffee', 'boba-coffee', 'بوبا كوفي', 'Boba Coffee', 'boba-corner', 'بوبا كورنر', 50, '/images/products/boba-milkshake-coffee.png', 'قهوة مثلجة مع حبيبات بوبا اللذيذة', ['قهوة مثلجة', 'حبيبات بوبا'], ['بوبا كوفي'], true),
  makeSingle('boba-caramel', 'boba-caramel', 'بوبا كراميل', 'Boba Caramel', 'boba-corner', 'بوبا كورنر', 50, '/images/products/boba-milkshake-blueberry.png', 'مشروب الكراميل مع حبيبات بوبا المنعشة', ['كراميل', 'حليب', 'بوبا']),
  makeSingle('boba-berries', 'boba-berries', 'بوبا بلو بيري - توت أحمر', 'Boba Blueberry / Red Berry', 'boba-corner', 'بوبا كورنر', 50, '/images/products/boba-milkshake-blueberry.png', 'مشروب التوت المنعش مع حبيبات البوبا', ['توت أزرق وأحمر', 'بوبا'], ['بوبا توت'], true),
  makeSingle('boba-strawberry', 'boba-strawberry', 'بوبا فراولة', 'Boba Strawberry', 'boba-corner', 'بوبا كورنر', 50, '/images/products/boba-milkshake-strawberry.png', 'مشروب الفراولة الطازجة مع حبيبات بوبا', ['فراولة', 'بوبا']),
  makeSingle('boba-mango', 'boba-mango', 'بوبا مانجو', 'Boba Mango', 'boba-corner', 'بوبا كورنر', 50, '/images/products/boba-milkshake-mango.png', 'عصير مانجو استوائي مع حبيبات البوبا', ['مانجو', 'بوبا']),
  makeSingle('boba-cola', 'boba-cola', 'بوبا كولا', 'Boba Cola', 'boba-corner', 'بوبا كورنر', 50, '/images/products/boba-mojito-jelly-cola.png', 'كولا مثلجة مع حبيبات البوبا المنعشة', ['كولا', 'بوبا'])
);

// 14. الفيتامينات
const vitaminData = [
  { id: 'v-viva', slug: 'viva', nameAr: 'فيفا', price: 70, ing: 'موز + بلح + لبن + آيس', img: '/images/products/banana-milk.png' },
  { id: 'v-story', slug: 'hekayet-fakha', nameAr: 'حكاية فاكهة', price: 70, ing: 'فراولة + موز + لبن + آيس', img: '/images/products/strawberry-milk.png' },
  { id: 'v-golden-mood', slug: 'golden-mood', nameAr: 'المزاج الذهبي', price: 70, ing: 'بلح + كيوي + تفاح + عسل', img: '/images/products/super-vitamin-c.png' },
  { id: 'v-love-story', slug: 'seret-el-hob', nameAr: 'سيرة الحب', price: 70, ing: 'رمان حب + جوافة', img: '/images/products/pomegranate-juice.png' },
  { id: 'v-eternal-tune', slug: 'el-lahn-el-khaled', nameAr: 'اللحن الخالد', price: 70, ing: 'بلح + مانجو + آيس + عسل', img: '/images/products/mango-icecream.png' },
  { id: 'v-fresh-boost', slug: 'fresh-boost', nameAr: 'فريش بوست', price: 70, ing: 'فراولة + جوافة + موز', img: '/images/products/fruit-cocktail-cup.jpg' },
  { id: 'v-royal-creation', slug: 'royal-creation', nameAr: 'الإبداع الملكي', price: 70, ing: 'مانجو + زبادي + لبن + آيس', img: '/images/products/mango-yogurt-nuts.png' },
  { id: 'v-banana-special', slug: 'banana-special', nameAr: 'موز اسبشيال', price: 70, ing: 'موز عصير + موز قطع + لبن + آيس', img: '/images/products/special-banana-plate.png' },
  { id: 'v-mocha', slug: 'mocha-vitamin', nameAr: 'موكا', price: 70, ing: 'آيس فانيليا + نسكافيه + لبن', img: '/images/products/mocha-milkshake.png' },
  { id: 'v-vitamin-c', slug: 'super-vitamin-c', nameAr: 'فيتامين سي', price: 70, ing: 'برتقال + جوافة + ليمون + عسل', img: '/images/products/super-vitamin-c.png' },
  { id: 'v-sahr-layali', slug: 'sahr-el-layali', nameAr: 'سهر الليالي', price: 75, ing: 'أناناس + موز + فراولة + آيس', img: '/images/products/fruit-cocktail-cup.jpg' },
  { id: 'v-taqa', slug: 'taqa-energy', nameAr: 'طاقة', price: 75, ing: 'أوريو + سوداني + بلح + بندق + عسل', img: '/images/products/walnut-drink.png' },
  { id: 'v-lahn-khulood', slug: 'lahn-el-khulood', nameAr: 'لحن الخلود', price: 75, ing: 'تفاح + موز + برتقال', img: '/images/products/fruit-cocktail-cup.jpg' },
  { id: 'v-saroukh', slug: 'saroukh-rocket', nameAr: 'صاروخ', price: 75, ing: 'أناناس + موز + مانجو + آيس', img: '/images/products/mango-rocket.png' },
  { id: 'v-zi-el-hawa', slug: 'zi-el-hawa', nameAr: 'زي الهوا', price: 70, ing: 'أناناس + كيوي + ليمون', img: '/images/products/kiwi-pineapple.png' },
  { id: 'v-orchestra', slug: 'orchestra', nameAr: 'أوركسترا', price: 75, ing: 'مانجو + أناناس + لبن + آيس', img: '/images/products/mango-pineapple.png' },
  { id: 'v-oyoun-el-qalb', slug: 'oyoun-el-qalb', nameAr: 'عيون القلب', price: 70, ing: 'أناناس + كيوي + برتقال', img: '/images/products/kiwi-orange.png' },
  { id: 'v-havana', slug: 'havana', nameAr: 'هافانا', price: 75, ing: 'أناناس + تفاح + برتقال', img: '/images/products/pineapple-orange.png' },
  { id: 'v-shawwaqna', slug: 'shawwaqna', nameAr: 'شوقنا', price: 70, ing: 'كيوي + تفاح + موز', img: '/images/products/kiwi-juice.png' },
  { id: 'v-pina-colada', slug: 'pina-colada', nameAr: 'بينا كولادا', price: 75, ing: 'أناناس + برتقال + جوز هند', img: '/images/products/pineapple-juice.png' },
  { id: 'v-sawah', slug: 'sawah', nameAr: 'سواح', price: 70, ing: 'كيوي + جريب فروت + أناناس', img: '/images/products/kiwi-juice.png' },
  { id: 'v-royal-refresh', slug: 'enteash-el-molook', nameAr: 'انتعاش الملوك', price: 75, ing: 'كيوي + تفاح + أفوكادو', img: '/images/products/avocado-nuts-mango-pair.jpg' },
  { id: 'v-mawred', slug: 'mawred', nameAr: 'موعد', price: 70, ing: 'كيوي + نعناع + ليمون', img: '/images/products/kiwi-juice.png' },
  { id: 'v-mexici', slug: 'mexici', nameAr: 'ميكسيكي', price: 75, ing: 'تفاح + أناناس + برتقال + عسل + آيس', img: '/images/products/fruit-cocktail-cup.jpg' },
  { id: 'v-ketab-hayati', slug: 'ketab-hayati', nameAr: 'كتاب حياتي', price: 70, ing: 'كيوي + ليمون + برتقال', img: '/images/products/kiwi-orange.png' },
  { id: 'v-mega', slug: 'mega-mix', nameAr: 'ميجا', price: 90, ing: 'أفوكادو + تفاح + موز + لبن', img: '/images/products/avocado-nuts-mango-pair.jpg' },
  { id: 'v-half-power', slug: 'half-power', nameAr: 'هاف باور', price: 90, ing: 'بلح + كيوي + عسل + لبن + آيس', img: '/images/products/dates-milk.png' },
  { id: 'v-africano', slug: 'africano', nameAr: 'أفريكانو', price: 90, ing: 'أناناس + أفوكادو + موز', img: '/images/products/avocado-nuts-mango-pair.jpg' },
  { id: 'v-summer-breeze', slug: 'naseem-el-seif', nameAr: 'نسيم الصيف', price: 90, ing: 'برقوق + تفاح + كيوي + بلح + لبن', img: '/images/products/fruit-cocktail-cup.jpg' }
];

vitaminData.forEach(v => {
  products.push(
    makeSingle(v.id, v.slug, v.nameAr, v.nameAr, 'vitamins', 'الفيتامينات', v.price, v.img, `مزيج فيتامين طبيعي منعش يتكون من: ${v.ing}`, v.ing.split(' + '), [v.nameAr, 'فيتامينات', 'خلطة المايسترو'], true)
  );
});

// 15. دايت كورنر
const dietData = [
  { id: 'diet-lahn', slug: 'diet-lahn-el-khulood', nameAr: 'لحن الخلود (دايت)', price: 70, ing: 'تفاح + موز + برتقال' },
  { id: 'diet-zi', slug: 'diet-zi-el-hawa', nameAr: 'زي الهوا (دايت)', price: 70, ing: 'أناناس + كيوي + ليمون' },
  { id: 'diet-oyoun', slug: 'diet-oyoun-el-qalb', nameAr: 'عيون القلب (دايت)', price: 70, ing: 'أناناس + كيوي + برتقال' },
  { id: 'diet-shawwaqna', slug: 'diet-shawwaqna', nameAr: 'شوقنا (دايت)', price: 70, ing: 'كيوي + تفاح + موز' },
  { id: 'diet-sawah', slug: 'diet-sawah', nameAr: 'سواح (دايت)', price: 70, ing: 'كيوي + جريب فروت + أناناس' },
  { id: 'diet-mawred', slug: 'diet-mawred', nameAr: 'موعد (دايت)', price: 70, ing: 'كيوي + نعناع + ليمون' },
  { id: 'diet-ketab', slug: 'diet-ketab-hayati', nameAr: 'كتاب حياتي (دايت)', price: 70, ing: 'كيوي + ليمون + برتقال' }
];

dietData.forEach(d => {
  products.push(
    makeSingle(d.id, d.slug, d.nameAr, d.nameAr, 'diet-corner', 'دايت كورنر', d.price, '/images/products/kiwi-orange.png', `مشروب صحي وخفيف مناسب للدايت والحمية: ${d.ing}`, d.ing.split(' + '), [d.nameAr, 'دايت', 'صحي'], false)
  );
});

// 16. ميكس باور
const powerData = [
  { id: 'p-elmaestro', slug: 'elmaestro-special-power', nameAr: 'المايسترو', price: 100, ing: 'كاجو + بندق + أفوكادو + حلاوة + قشطة', isFeatured: true, isBestSeller: true },
  { id: 'p-alf-leila', slug: 'alf-leila-wa-leila', nameAr: 'ألف ليلة وليلة', price: 100, ing: 'أفوكادو + كاجو + كيوي + بلح + آيس', isFeatured: true },
  { id: 'p-el-atlal', slug: 'el-atlal', nameAr: 'الإطلال', price: 100, ing: 'كاجو + مانجو + عسل + لبن + آيس' },
  { id: 'p-golden-taste', slug: 'el-mazag-el-zahaby-power', nameAr: 'المذاق الذهبي', price: 100, ing: 'بندق + كاجو + عسل + لبن + آيس', isFeatured: true },
  { id: 'p-king', slug: 'the-king-power', nameAr: 'الكينج', price: 100, ing: 'بندق + توينكيز + عسل + لبن + آيس' },
  { id: 'p-dream-theater', slug: 'masrah-el-ahlam', nameAr: 'مسرح الأحلام', price: 100, ing: 'بندق + لوز + بلح + عسل + لبن + آيس', isFeatured: true },
  { id: 'p-magician', slug: 'el-saher', nameAr: 'الساحر', price: 100, ing: 'مانجو + فراولة + خوخ + عسل + آيس' },
  { id: 'p-jabbar', slug: 'jabbar-power', nameAr: 'جبار', price: 100, ing: 'أفوكادو + كيوي + موز + زبادي + عسل' },
  { id: 'p-happy-end', slug: 'nehaya-saeeda', nameAr: 'نهاية سعيدة', price: 100, ing: 'فستق + كاجو + لبن + آيس', isFeatured: true },
  { id: 'p-beethoven', slug: 'beethoven-mix', nameAr: 'بيتهوفن', price: 100, ing: 'أفوكادو + كيوي + بلح + آيس + عسل + مانجو', isFeatured: true, isBestSeller: true },
  { id: 'p-bent-sultan', slug: 'bent-el-sultan', nameAr: 'بنت السلطان', price: 100, ing: 'كاجو + بندق + أفوكادو + حلاوة', isFeatured: true },
  { id: 'p-high-energy', slug: 'el-taqa-el-aleya', nameAr: 'الطاقة العالية', price: 100, ing: 'أفوكادو + بلح + كيوي + لبن' }
];

powerData.forEach(p => {
  products.push(
    makeSingle(p.id, p.slug, `باور ${p.nameAr}`, `Power ${p.nameAr}`, 'power-mix', 'ميكس باور', p.price, '/images/products/super-elmaestro-bomb.png', `مشروب طاقة ملكي يتكون من: ${p.ing}`, p.ing.split(' + '), [p.nameAr, 'ميكس باور', 'طاقة', 'المايسترو'], p.isFeatured, p.isBestSeller)
  );
});

// 17. الموهيتو (كولا - سفن)
const mojitoData = [
  { id: 'moj-mint', slug: 'mojito-mint', nameAr: 'موهيتو نعناع', ing: 'ليمون + نعناع فريش + صودا + ثلج', img: '/images/products/boba-mojito-lemon-mint.png' },
  { id: 'moj-strawberry', slug: 'mojito-strawberry', nameAr: 'موهيتو فراولة', ing: 'ليمون + نعناع + فراولة + صودا + ثلج', img: '/images/products/boba-mojito-blueberry.png' },
  { id: 'moj-pomegranate', slug: 'mojito-pomegranate', nameAr: 'موهيتو رمان', ing: 'ليمون + نعناع + رمان + صودا + ثلج', img: '/images/products/boba-mojito-blueberry.png' },
  { id: 'moj-curacao', slug: 'mojito-blue-curacao', nameAr: 'موهيتو بلو كوراسو', ing: 'ليمون + نعناع + بلو كوراسو + صودا + ثلج', img: '/images/products/boba-mojito-blueberry.png' },
  { id: 'moj-blueberry', slug: 'mojito-blueberry', nameAr: 'موهيتو توت أزرق', ing: 'ليمون + نعناع + توت أزرق + صودا + ثلج', img: '/images/products/boba-mojito-blueberry.png' },
  { id: 'moj-redberry', slug: 'mojito-redberry', nameAr: 'موهيتو توت أحمر', ing: 'ليمون + نعناع + توت أحمر + صودا + ثلج', img: '/images/products/boba-mojito-blueberry.png' }
];

mojitoData.forEach(m => {
  products.push(
    makeSingle(m.id, m.slug, m.nameAr, m.nameAr, 'mojito', 'الموهيتو (كولا - سفن)', 55, m.img, `موهيتو منعش ومثلج يتكون من: ${m.ing} (مع كولا أو سفن حسب طلبك)`, m.ing.split(' + '), [m.nameAr, 'موهيتو', 'منعش'], true)
  );
});

// 18. السوبيا (صغير 40 / كبير 80)
const sobyaFlavors = [
  { id: 'sob-mango', slug: 'sobya-mango', nameAr: 'سوبيا مانجو' },
  { id: 'sob-strawberry', slug: 'sobya-strawberry', nameAr: 'سوبيا فراولة' },
  { id: 'sob-pineapple', slug: 'sobya-pineapple', nameAr: 'سوبيا أناناس' },
  { id: 'sob-fruits', slug: 'sobya-fruits', nameAr: 'سوبيا فواكه' },
  { id: 'sob-redberry', slug: 'sobya-redberry', nameAr: 'سوبيا توت أحمر' },
  { id: 'sob-blueberry', slug: 'sobya-blueberry', nameAr: 'سوبيا توت أزرق' },
  { id: 'sob-avocado', slug: 'sobya-avocado', nameAr: 'سوبيا أفوكادو' },
  { id: 'sob-pistachio', slug: 'sobya-pistachio', nameAr: 'سوبيا بيستاشيو' },
  { id: 'sob-lotus', slug: 'sobya-lotus', nameAr: 'سوبيا لوتس' },
  { id: 'sob-nutella', slug: 'sobya-nutella', nameAr: 'سوبيا نوتيلا' },
  { id: 'sob-caramel', slug: 'sobya-caramel', nameAr: 'سوبيا كراميل' }
];

sobyaFlavors.forEach(s => {
  products.push(
    makeMulti(s.id, s.slug, s.nameAr, s.nameAr, 'sobya', 'السوبيا', [
      { id: `${s.id}-sm`, nameAr: 'حجم صغير', nameEn: 'Small', price: 40, isDefault: true, availability: 'available' },
      { id: `${s.id}-lg`, nameAr: 'حجم كبير', nameEn: 'Large', price: 80, isDefault: false, availability: 'available' }
    ], '/images/products/sobya-natural.png', `سوبيا مثلجة طبيعية بنكهة ${s.nameAr.replace('سوبيا ', '')} اللذيذة`, ['سوبيا طبيعية', 'حليب', 'جوز هند'], [s.nameAr, 'سوبيا'], true)
  );
});

// 19. رز بلبن
products.push(
  makeSingle('rice-plain', 'rice-pudding-plain', 'رز بلبن سادة', 'Plain Rice Pudding', 'rice-pudding', 'رز بلبن', 30, '/images/products/rice-pudding.jpg', 'أرز بلبن فلاحي طازج مطهو على أصوله', ['أرز', 'حليب فلاحي', 'سكر']),
  makeSingle('rice-mango', 'rice-pudding-mango', 'رز بلبن مانجو', 'Rice Pudding with Mango', 'rice-pudding', 'رز بلبن', 40, '/images/products/rice-pudding.jpg', 'أرز باللبن مغطى بقطع وصوص المانجو الفريش', ['أرز باللبن', 'مانجو فريش'], ['رز بلبن مانجو'], true),
  makeSingle('rice-strawberry', 'rice-pudding-strawberry', 'رز بلبن فراولة', 'Rice Pudding with Strawberry', 'rice-pudding', 'رز بلبن', 40, '/images/products/rice-pudding.jpg', 'أرز باللبن مع قطع الفراولة الطازجة', ['أرز باللبن', 'فراولة فريش']),
  makeSingle('rice-blueberry', 'rice-pudding-blueberry', 'رز بلبن بلو بيري', 'Rice Pudding with Blueberry', 'rice-pudding', 'رز بلبن', 40, '/images/products/rice-pudding.jpg', 'أرز باللبن مع صوص التوت الأزرق الفاخر', ['أرز باللبن', 'بلوبيري']),
  makeSingle('rice-fruits', 'rice-pudding-fruits', 'رز بلبن فواكه', 'Rice Pudding with Fruit Chunks', 'rice-pudding', 'رز بلبن', 40, '/images/products/rice-pudding.jpg', 'أرز باللبن مع تشكيلة قطع فواكه طازجة', ['أرز باللبن', 'فواكه مشكلة']),
  makeSingle('rice-cream', 'rice-pudding-cream', 'رز بلبن قشطة', 'Rice Pudding with Fresh Cream', 'rice-pudding', 'رز بلبن', 40, '/images/products/rice-pudding.jpg', 'أرز باللبن فلاحي مع طبقة قشطة بلدي طبيعية', ['أرز باللبن', 'قشطة بلدي'], ['رز بلبن قشطة'], true),
  makeSingle('rice-oriental-sweets', 'rice-pudding-kunafa-basbousa', 'رز بلبن قشطة وكنافة وبسبوسة', 'Rice Pudding Kunafa & Basbousa', 'rice-pudding', 'رز بلبن', 45, '/images/products/rice-pudding.jpg', 'ميكس حلويات شرقية فاخر: أرز بلبن مع قشطة وكنافة وبسبوسة', ['أرز باللبن', 'قشطة', 'كنافة', 'بسبوسة'], ['حلويات شرقية'], true, true),
  makeSingle('rice-nuts', 'rice-pudding-nuts', 'رز بلبن مكسرات', 'Rice Pudding with Nuts', 'rice-pudding', 'رز بلبن', 50, '/images/products/rice-pudding.jpg', 'أرز باللبن مغطى بالمكسرات المحمصة الفاخرة', ['أرز باللبن', 'مكسرات فاخرة'], ['رز بلبن مكسرات'], true, true)
);

// 20. العبوات (1 لتر و 4 لتر)
const bottlesData = [
  { id: 'btl-sugarcane', slug: 'bottle-sugarcane', nameAr: 'عبوة قصب', p1: 40, p4: 140, img: '/images/products/sugarcane-pure.png' },
  { id: 'btl-tamarind', slug: 'bottle-tamarind', nameAr: 'عبوة تمر هندي', p1: 40, p4: 140, img: '/images/products/tamarind-natural.png' },
  { id: 'btl-ennab', slug: 'bottle-ennab', nameAr: 'عبوة عناب', p1: 40, p4: 140, img: '/images/products/karkadeh-ennab.png' },
  { id: 'btl-doum', slug: 'bottle-doum', nameAr: 'عبوة دوم', p1: 40, p4: 140, img: '/images/products/doum-juice.png' },
  { id: 'btl-kharroub', slug: 'bottle-kharroub', nameAr: 'عبوة خروب', p1: 45, p4: 160, img: '/images/products/carob-kharroub.png' },
  { id: 'btl-grapefruit', slug: 'bottle-grapefruit', nameAr: 'عبوة جريب فروت', p1: 50, p4: 180, img: '/images/products/orange-juice.png' },
  { id: 'btl-doum-milk', slug: 'bottle-doum-milk', nameAr: 'عبوة دوم باللبن', p1: 55, p4: 210, img: '/images/products/doum-milk.png' },
  { id: 'btl-sobya', slug: 'bottle-sobya', nameAr: 'عبوة سوبيا', p1: 60, p4: 220, img: '/images/products/sobya-natural.png' },
  { id: 'btl-orange', slug: 'bottle-orange', nameAr: 'عبوة برتقال', p1: 70, p4: 250, img: '/images/products/orange-juice.png' },
  { id: 'btl-lemon', slug: 'bottle-lemon', nameAr: 'عبوة ليمون', p1: 70, p4: 250, img: '/images/products/lemon-juice.png' },
  { id: 'btl-cantaloupe', slug: 'bottle-cantaloupe', nameAr: 'عبوة كنتالوب', p1: 70, p4: 250, img: '/images/products/cantaloupe-juice.png' },
  { id: 'btl-grape', slug: 'bottle-grape', nameAr: 'عبوة عنب', p1: 70, p4: 250, img: '/images/products/strawberry-juice.png' },
  { id: 'btl-strawberry', slug: 'bottle-strawberry', nameAr: 'عبوة فراولة', p1: 75, p4: 260, img: '/images/products/strawberry-juice.png' },
  { id: 'btl-guava', slug: 'bottle-guava', nameAr: 'عبوة جوافة', p1: 75, p4: 260, img: '/images/products/guava-juice.png' },
  { id: 'btl-lemon-mint', slug: 'bottle-lemon-mint', nameAr: 'عبوة ليمون نعناع', p1: 75, p4: 260, img: '/images/products/lemon-mint-juice.png' },
  { id: 'btl-mango', slug: 'bottle-mango', nameAr: 'عبوة مانجو', p1: 80, p4: 280, img: '/images/products/mango-chunks-bowl.jpg' },
  { id: 'btl-pomegranate', slug: 'bottle-pomegranate', nameAr: 'عبوة رمان', p1: 90, p4: 260, img: '/images/products/pomegranate-juice.png' },
  { id: 'btl-banana-milk', slug: 'bottle-banana-milk', nameAr: 'عبوة موز باللبن', p1: 90, p4: 300, img: '/images/products/banana-milk.png' },
  { id: 'btl-cocktail', slug: 'bottle-cocktail-mix', nameAr: 'عبوة كوكتيل خلط', p1: 90, p4: 300, img: '/images/products/fruit-cocktail-cup.jpg' },
  { id: 'btl-dates', slug: 'bottle-dates', nameAr: 'عبوة بلح باللبن', p1: 90, p4: 320, img: '/images/products/dates-milk.png' },
  { id: 'btl-peach', slug: 'bottle-peach', nameAr: 'عبوة خوخ', p1: 90, p4: 320, img: '/images/products/orange-juice.png' },
  { id: 'btl-watermelon', slug: 'bottle-watermelon', nameAr: 'عبوة بطيخ', p1: 90, p4: 320, img: '/images/products/watermelon-juice.png' },
  { id: 'btl-prickly-pear', slug: 'bottle-prickly-pear', nameAr: 'عبوة تين شوكي', p1: 90, p4: 320, img: '/images/products/prickly-pear-juice.png' },
  { id: 'btl-kiwi', slug: 'bottle-kiwi', nameAr: 'عبوة كيوي', p1: 110, p4: 390, img: '/images/products/kiwi-juice.png' },
  { id: 'btl-yogurt-fruits', slug: 'bottle-yogurt-fruits', nameAr: 'عبوة زبادي فواكه', p1: 110, p4: 390, img: '/images/products/mango-yogurt-nuts.png' },
  { id: 'btl-pineapple', slug: 'bottle-pineapple', nameAr: 'عبوة أناناس', p1: 120, p4: 390, img: '/images/products/pineapple-juice.png' },
  { id: 'btl-avo-honey', slug: 'bottle-avocado-honey', nameAr: 'عبوة أفوكادو عسل', p1: 180, p4: 600, img: '/images/products/avocado-nuts-mango-pair.jpg' },
  { id: 'btl-avo-nuts', slug: 'bottle-avocado-nuts', nameAr: 'عبوة أفوكادو مكسرات', p1: 250, p4: 700, img: '/images/products/avocado-nuts-mango-pair.jpg' }
];

bottlesData.forEach(b => {
  products.push(
    makeMulti(b.id, b.slug, b.nameAr, b.nameAr, 'bottles', 'العبوات', [
      { id: `${b.id}-1l`, nameAr: 'عبوة 1 لتر', nameEn: '1 Liter Bottle', price: b.p1, volumeLabel: '1L', isDefault: true, availability: 'available' },
      { id: `${b.id}-4l`, nameAr: 'جركن 4 لتر عائلي', nameEn: '4 Liters Jug', price: b.p4, volumeLabel: '4L', isDefault: false, availability: 'available' }
    ], b.img, `${b.nameAr} طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر`, ['عصير طبيعي طازج'], [b.nameAr, 'عبوات عائلية', 'جراكن'], true)
  );
});

// 21. القهوة
products.push(
  makeMulti('coffee-turkish', 'turkish-coffee', 'قهوة تركي', 'Turkish Coffee', 'coffee', 'القهوة', [
    { id: 'cof-s', nameAr: 'فنجان سنجل (S)', nameEn: 'Single (S)', price: 20, volumeLabel: 'S', isDefault: true, availability: 'available' },
    { id: 'cof-d', nameAr: 'فنجان دبل (D)', nameEn: 'Double (D)', price: 35, volumeLabel: 'D', isDefault: false, availability: 'available' }
  ], '/images/brand/elmaestro-drinks.jpg', 'قهوة تركية محضرة من أجود حبوب البن المحمص الفاخر تتوفر سنجل أو دبل', ['بن محمص فاخر', 'ماء'], ['قهوة تركي', 'قهوة', 'محمصات'], true, true)
);

// 22. آيس كوفي
products.push(
  makeSingle('ic-coffee', 'iced-coffee', 'آيس كوفي', 'Iced Coffee', 'iced-coffee', 'آيس كوفي', 65, '/images/brand/elmaestro-special.jpg', 'قهوة مثلجة ومنعشة بحبوب البن المحمصة الطازجة والثلج', ['قهوة مثلجة', 'ثلج'], ['آيس كوفي', 'قهوة مثلجة'], true, true),
  makeSingle('ic-latte', 'iced-latte', 'آيس لاتيه', 'Iced Latte', 'iced-coffee', 'آيس كوفي', 65, '/images/brand/elmaestro-special.jpg', 'إسبريسو غني مع الحليب البارد والثلج لمذاق كريمي منعش', ['إسبريسو', 'حليب بارد', 'ثلج'], ['آيس لاتيه', 'لاتيه'], true, true),
  makeSingle('ic-mocha', 'iced-mocha', 'آيس موكا', 'Iced Mocha', 'iced-coffee', 'آيس كوفي', 65, '/images/brand/elmaestro-special.jpg', 'مزيج فاخر من القهوة المثلجة مع صوص الشوكولاتة الغني والحليب', ['قهوة', 'شوكولاتة', 'حليب', 'ثلج'], ['آيس موكا', 'موكا'], true, true)
);

// Update category itemCounts
categories.forEach(cat => {
  cat.itemCount = products.filter(p => p.categorySlug === cat.slug).length;
});

// Format TypeScript File Content
const fileContent = `import { ProductCategory, Product, ProductAddon } from '../models/product.model';

export const ELMAESTRO_ADDONS: ProductAddon[] = ${JSON.stringify(ELMAESTRO_ADDONS, null, 2)};

export const ELMAESTRO_CATEGORIES: ProductCategory[] = ${JSON.stringify(categories, null, 2)};

export const ELMAESTRO_PRODUCTS: Product[] = ${JSON.stringify(products, null, 2)};

`;

const outputPath = path.resolve(__dirname, '../src/app/core/data/elmaestro-menu.data.ts');
fs.writeFileSync(outputPath, fileContent, 'utf8');

console.log('Successfully generated El Maestro menu data!');
console.log('Categories count:', categories.length);
console.log('Products count:', products.length);
