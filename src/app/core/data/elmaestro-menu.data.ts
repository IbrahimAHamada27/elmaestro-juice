import { ProductCategory, Product, ProductAddon } from '../models/product.model';

export const ELMAESTRO_ADDONS: ProductAddon[] = [
  {
    "id": "addon-chocolate",
    "nameAr": "شيكولاتة",
    "nameEn": "Chocolate Sauce",
    "price": 15,
    "categoryId": "add-on",
    "availability": "available"
  },
  {
    "id": "addon-honey",
    "nameAr": "عسل نحل",
    "nameEn": "Pure Natural Honey",
    "price": 15,
    "categoryId": "add-on",
    "availability": "available"
  },
  {
    "id": "addon-ice-cream",
    "nameAr": "بولة آيس كريم",
    "nameEn": "Ice Cream Scoop",
    "price": 15,
    "categoryId": "add-on",
    "availability": "available"
  },
  {
    "id": "addon-fruits",
    "nameAr": "فاكهة قطع",
    "nameEn": "Extra Fresh Fruits",
    "price": 20,
    "categoryId": "add-on",
    "availability": "available"
  },
  {
    "id": "addon-nuts",
    "nameAr": "مكسرات فاخرة",
    "nameEn": "Premium Nuts",
    "price": 30,
    "categoryId": "add-on",
    "availability": "available"
  }
];

export const ELMAESTRO_CATEGORIES: ProductCategory[] = [
  {
    "id": "fresh-juices",
    "slug": "fresh-juices",
    "nameAr": "عصائر فريش",
    "nameEn": "Fresh Juices",
    "descriptionAr": "عصائر طبيعية 100% معصورة طازجة يومياً بأعلى جودة وانتعاش",
    "icon": "fa-solid fa-glass-water",
    "themeColor": "#15803d",
    "image": "/images/products/orange-juice.png",
    "displayOrder": 1,
    "informationAr": [
      "جميع العصائر فريش وطبيعية 100% بدون أي ألوان صناعية.",
      "تتوفر أحجام وعبوات عائلية وجراكن للتوصيل والمنزل في قسم العبوات."
    ],
    "itemCount": 24
  },
  {
    "id": "sugarcane",
    "slug": "sugarcane",
    "nameAr": "القصب",
    "nameEn": "Sugarcane Specials",
    "descriptionAr": "عصير قصب طبيعي مثلج مع تشكيلة إضافات ونكهات مبتكرة",
    "icon": "fa-solid fa-seedling",
    "themeColor": "#65a30d",
    "image": "/images/products/sugarcane-pure.png",
    "displayOrder": 2,
    "informationAr": [
      "قصب طبيعي نقي معصور على أعلى معايير النظافة والتعقيم.",
      "يتوفر سادة وبإضافات اللبن، البرتقال، الليمون، الفانيليا، الحلاوة، والبريل."
    ],
    "itemCount": 10
  },
  {
    "id": "avocado",
    "slug": "avocado",
    "nameAr": "الأفوكادو",
    "nameEn": "Avocado Creations",
    "descriptionAr": "أفوكادو طازج كريمي غني بالقيمة الغذائية مضاف إليه عسل ومكسرات وفواكه",
    "icon": "fa-solid fa-shield-heart",
    "themeColor": "#4d7c0f",
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "displayOrder": 3,
    "informationAr": [
      "أفوكادو بيور طازج مع تشكيلة واسعة من الفواكه والعسل والمكسرات الملكية."
    ],
    "itemCount": 8
  },
  {
    "id": "smoothie",
    "slug": "smoothie",
    "nameAr": "سموزي",
    "nameEn": "Smoothies",
    "descriptionAr": "سموزي فواكه مثلج ومنعش بقوام غني ومذاق استوائي ساحر",
    "icon": "fa-solid fa-blender",
    "themeColor": "#0284c7",
    "image": "/images/products/signature-four-drinks.jpg",
    "displayOrder": 4,
    "informationAr": [
      "سموزي مثلج مجروش بنكهات التوت والمانجو والكيوي والليمون نعناع."
    ],
    "itemCount": 13
  },
  {
    "id": "oriental-juices",
    "slug": "oriental-juices",
    "nameAr": "عصائر شرقي",
    "nameEn": "Oriental Juices",
    "descriptionAr": "مشروبات تراثية أصيلة: تمر هندي، سوبيا، خروب، عناب، ودوم باللبن",
    "icon": "fa-solid fa-jug-detergent",
    "themeColor": "#b45309",
    "image": "/images/products/karkadeh-ennab.png",
    "displayOrder": 5,
    "informationAr": [
      "مشروبات تراثية محضرة بالطرق الأصيلة وبأحجام متعددة (عادي وكبير)."
    ],
    "itemCount": 7
  },
  {
    "id": "mango-world",
    "slug": "mango-world",
    "nameAr": "عالم المانجو",
    "nameEn": "Mango World",
    "descriptionAr": "مانجو طبيعية فاخرة بيور وممزوجة بأشهى الفواكه والآيس كريم",
    "icon": "fa-solid fa-lemon",
    "themeColor": "#ea580c",
    "image": "/images/products/mango-chunks-bowl.jpg",
    "displayOrder": 6,
    "informationAr": [
      "مانجو طبيعية طازجة منتقاة بعناية لتقديم أرقى المذاقات."
    ],
    "itemCount": 8
  },
  {
    "id": "milkshake",
    "slug": "milkshake",
    "nameAr": "ميلك شيك",
    "nameEn": "Milkshakes",
    "descriptionAr": "ميلك شيك كريمي كثيف بنكهات الشوكولاتة، الفانيليا، التوت والكراميل",
    "icon": "fa-solid fa-ice-cream",
    "themeColor": "#ec4899",
    "image": "/images/products/chocolate-milkshake.png",
    "displayOrder": 7,
    "informationAr": [
      "ميلك شيك بارد وكريمي غني بالآيس كريم الفاخر والحليب الطازج."
    ],
    "itemCount": 6
  },
  {
    "id": "yogurt",
    "slug": "yogurt",
    "nameAr": "الزبادي",
    "nameEn": "Yogurt Bowls & Drinks",
    "descriptionAr": "زبادي طبيعي صحي سادة وبالعسل والفواكه الطازجة لراحة وانتعاش",
    "icon": "fa-solid fa-bowl-food",
    "themeColor": "#059669",
    "image": "/images/products/mango-yogurt-nuts.png",
    "displayOrder": 8,
    "informationAr": [
      "زبادي طازج خفيف وصحي مع العسل النقي وقطع الفواكه المتنوعة."
    ],
    "itemCount": 9
  },
  {
    "id": "addons",
    "slug": "addons",
    "nameAr": "الإضافات",
    "nameEn": "Add-ons & Extras",
    "descriptionAr": "إضافات مميزة لمشروباتك: شوكولاتة، عسل نحل، آيس كريم ومكسرات",
    "icon": "fa-solid fa-plus-circle",
    "themeColor": "#d97706",
    "image": "/images/products/super-cocktail-icecream.png",
    "displayOrder": 9,
    "informationAr": [
      "يمكنك طلب هذه الإضافات مع أي عصير أو كوكتيل أو زبادي حسب رغبتك."
    ],
    "itemCount": 5
  },
  {
    "id": "roastery-juices",
    "slug": "roastery-juices",
    "nameAr": "عصائر المحمصات",
    "nameEn": "Roastery Nut Juices",
    "descriptionAr": "تخصص المايسترو الحصري: مشروبات المكسرات المحمصة الفاخرة بالحليب",
    "icon": "fa-solid fa-cubes-stacked",
    "themeColor": "#78350f",
    "image": "/images/products/walnut-drink.png",
    "displayOrder": 10,
    "informationAr": [
      "المحمصات الفاخرة ممزوجة بالحليب الطبيعي: سوداني، لب، بندق، كاجو، فستق، ولوز."
    ],
    "itemCount": 6
  },
  {
    "id": "chocolate",
    "slug": "chocolate",
    "nameAr": "الشوكولاتة",
    "nameEn": "Chocolate Shakes",
    "descriptionAr": "مشروبات شكولاتات البراند العالمية: نوتيلا، أوريو، كيندر، وسنيكرز",
    "icon": "fa-solid fa-cookie-bite",
    "themeColor": "#451a03",
    "image": "/images/products/oreo-drink.png",
    "displayOrder": 11,
    "informationAr": [
      "مخفوق بالشوكولاتة الأصلية المحبوبة."
    ],
    "itemCount": 10
  },
  {
    "id": "fruit-cuts",
    "slug": "fruit-cuts",
    "nameAr": "قطع فواكه",
    "nameEn": "Fresh Fruit Chunks & Bowls",
    "descriptionAr": "أطباق وكاسات قطع الفواكه الطازجة، سلطات الفواكه، والقنابل والفتة",
    "icon": "fa-solid fa-bowl-rice",
    "themeColor": "#dc2626",
    "image": "/images/products/fruit-salad-bowl.png",
    "displayOrder": 12,
    "informationAr": [
      "قطع فاكهة طازجة تُقطع يومياً عند الطلب."
    ],
    "itemCount": 20
  },
  {
    "id": "boba-corner",
    "slug": "boba-corner",
    "nameAr": "بوبا كورنر",
    "nameEn": "Boba Corner",
    "descriptionAr": "مشروبات البوبا المنعشة بحبيبات البوبا اللذيذة والنكهات العصرية",
    "icon": "fa-solid fa-circle-dot",
    "themeColor": "#7c3aed",
    "image": "/images/products/boba-milkshake-blueberry.png",
    "displayOrder": 13,
    "informationAr": [
      "حبيبات بوبا طازجة بنكهات السوبيا، الكوفي، الكراميل، والتوت والفواكه."
    ],
    "itemCount": 7
  },
  {
    "id": "vitamins",
    "slug": "vitamins",
    "nameAr": "الفيتامينات",
    "nameEn": "Vitamin Mixes & Signatures",
    "descriptionAr": "خلطات وتواقيع المايسترو الأسطورية الغنية بالفيتامينات والمذاقات المبتكرة",
    "icon": "fa-solid fa-heart-pulse",
    "themeColor": "#0891b2",
    "image": "/images/products/super-vitamin-c.png",
    "displayOrder": 14,
    "informationAr": [
      "ميكسات حصرية بأجمل الأسماء الفنية والموسيقية وغنية بالفيتامينات الطبيعية."
    ],
    "itemCount": 29
  },
  {
    "id": "diet-corner",
    "slug": "diet-corner",
    "nameAr": "دايت كورنر",
    "nameEn": "Diet & Healthy Corner",
    "descriptionAr": "مشروبات صحية خفيفة بدون إضافات سكرية للياقة والانتعاش",
    "icon": "fa-solid fa-person-running",
    "themeColor": "#16a34a",
    "image": "/images/products/kiwi-orange.png",
    "displayOrder": 15,
    "informationAr": [
      "مشروبات طبيعية خفيفة ومناسبة للحمية الغذائية ونمط الحياة الصحي."
    ],
    "itemCount": 7
  },
  {
    "id": "power-mix",
    "slug": "power-mix",
    "nameAr": "ميكس باور",
    "nameEn": "Power Mixes & Energy",
    "descriptionAr": "مشروبات الطاقة الطبيعية الملكية بالمكسرات والقشطة والعسل والأفوكادو",
    "icon": "fa-solid fa-bolt",
    "themeColor": "#d97706",
    "image": "/images/products/super-elmaestro-bomb.png",
    "displayOrder": 16,
    "informationAr": [
      "مشروب المايسترو الملكي وتشكيلة طاقة غنية بالمكسرات والعسل والقشطة الطبيعية."
    ],
    "itemCount": 12
  },
  {
    "id": "mojito",
    "slug": "mojito",
    "nameAr": "الموهيتو (كولا - سفن)",
    "nameEn": "Mojito (Cola & 7Up)",
    "descriptionAr": "موهيتو منعش بالصودا والليمون والنعناع الفريش ونكهات التوت والفراولة",
    "icon": "fa-solid fa-champagne-glasses",
    "themeColor": "#06b6d4",
    "image": "/images/products/boba-mojito-blueberry.png",
    "displayOrder": 17,
    "informationAr": [
      "موهيتو منعش ومثلج بالليمون والنعناع الفريش مع اختيارك من سفن أب أو كولا."
    ],
    "itemCount": 6
  },
  {
    "id": "sobya",
    "slug": "sobya",
    "nameAr": "السوبيا",
    "nameEn": "Sobya Flavors",
    "descriptionAr": "سوبيا طبيعية ناصعة مثلجة بنكهات المانجو والفراولة واللوتس والنوتيلا",
    "icon": "fa-solid fa-mug-saucer",
    "themeColor": "#0ea5e9",
    "image": "/images/products/sobya-natural.png",
    "displayOrder": 18,
    "informationAr": [
      "تتوفر بالحجم الصغير (40 ج) والحجم الكبير (80 ج)."
    ],
    "itemCount": 11
  },
  {
    "id": "rice-pudding",
    "slug": "rice-pudding",
    "nameAr": "رز بلبن",
    "nameEn": "Rice Pudding Delights",
    "descriptionAr": "أطباق أرز بلبن فلاحي غني بالقشطة، الفواكه، المكسرات والكنافة والبسبوسة",
    "icon": "fa-solid fa-stroopwafel",
    "themeColor": "#f59e0b",
    "image": "/images/products/rice-pudding.jpg",
    "displayOrder": 19,
    "informationAr": [
      "أرز باللبن طازج ومطهو على أصوله بإضافات شهية ومتنوعة."
    ],
    "itemCount": 8
  },
  {
    "id": "bottles",
    "slug": "bottles",
    "nameAr": "العبوات",
    "nameEn": "Family Bottles & Packs",
    "descriptionAr": "عبوات وجراكن عائلية بحجم 1 لتر و4 لتر للمنازل والحفلات والعزومات",
    "icon": "fa-solid fa-bottle-droplet",
    "themeColor": "#047857",
    "image": "/images/products/signature-four-drinks.jpg",
    "displayOrder": 20,
    "informationAr": [
      "عبوات لتر وعبوات 4 لتر لتلبية كافة احتياجات العزومات والمناسبات العائلية."
    ],
    "itemCount": 28
  },
  {
    "id": "coffee",
    "slug": "coffee",
    "nameAr": "القهوة",
    "nameEn": "Hot Coffee Corner",
    "descriptionAr": "ركن القهوة التركية والمشروبات الساخنة بنكهة البن المحمص الفاخر",
    "icon": "fa-solid fa-mug-hot",
    "themeColor": "#78350f",
    "image": "/images/brand/elmaestro-drinks.jpg",
    "displayOrder": 21,
    "informationAr": [
      "قهوة تركي بن محمص فاخر تتوفر سنجل (S) ودبل (D)."
    ],
    "itemCount": 1
  },
  {
    "id": "iced-coffee",
    "slug": "iced-coffee",
    "nameAr": "آيس كوفي",
    "nameEn": "Iced Coffee",
    "descriptionAr": "آيس كوفي منعش، آيس لاتيه، وآيس موكا بأعلى معايير المقاهي المختصة",
    "icon": "fa-solid fa-glass-water-droplet",
    "themeColor": "#92400e",
    "image": "/images/brand/elmaestro-special.jpg",
    "displayOrder": 22,
    "informationAr": [
      "مشروبات قهوة مثلجة منعشة بالبن المحمص الفاخر مع الحليب وصوصات الموكا واللاتيه."
    ],
    "itemCount": 3
  }
];

export const ELMAESTRO_PRODUCTS: Product[] = [
  {
    "id": "fj-orange",
    "slug": "orange-juice",
    "nameAr": "عصير برتقال فريش",
    "nameEn": "Fresh Orange Juice",
    "descriptionAr": "برتقال طبيعي معصور طازج 100% غني بفيتامين سي",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 35,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 35,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/orange-juice.png",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "برتقال",
      "عصائر فريش"
    ],
    "ingredientsAr": [
      "برتقال طبيعي"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-cantaloupe",
    "slug": "cantaloupe-juice",
    "nameAr": "عصير كنتالوب فريش",
    "nameEn": "Fresh Cantaloupe Juice",
    "descriptionAr": "كنتالوب طازج منعش وحلو المذاق",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 35,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 35,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/cantaloupe-juice.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "عصير كنتالوب فريش",
      "عصائر فريش",
      "المايسترو"
    ],
    "ingredientsAr": [
      "كنتالوب طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-lemon",
    "slug": "lemon-juice",
    "nameAr": "عصير ليمون فريش",
    "nameEn": "Fresh Lemon Juice",
    "descriptionAr": "ليمون طبيعي منعش معصور طازجاً",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 35,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 35,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/lemon-juice.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "عصير ليمون فريش",
      "عصائر فريش",
      "المايسترو"
    ],
    "ingredientsAr": [
      "ليمون طبيعي"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-watermelon",
    "slug": "watermelon-juice",
    "nameAr": "عصير بطيخ فريش",
    "nameEn": "Fresh Watermelon Juice",
    "descriptionAr": "بطيخ أحمر طبيعي مثلج ومنعش",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 40,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 40,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/watermelon-juice.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "بطيخ",
      "عصائر فريش"
    ],
    "ingredientsAr": [
      "بطيخ أحمر"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-guava",
    "slug": "guava-juice",
    "nameAr": "عصير جوافة فريش",
    "nameEn": "Fresh Guava Juice",
    "descriptionAr": "جوافة طبيعية طازجة بقوام مثالي",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 40,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 40,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/guava-juice.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "عصير جوافة فريش",
      "عصائر فريش",
      "المايسترو"
    ],
    "ingredientsAr": [
      "جوافة طبيعية"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-lemon-mint",
    "slug": "lemon-mint-juice",
    "nameAr": "عصير ليمون نعناع",
    "nameEn": "Lemon Mint Juice",
    "descriptionAr": "ليمون ونعناع فريش لانتعاش فوري",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 40,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 40,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/lemon-mint-juice.png",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "ليمون نعناع"
    ],
    "ingredientsAr": [
      "ليمون",
      "نعناع فريش"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-strawberry",
    "slug": "strawberry-juice",
    "nameAr": "عصير فراولة فريش",
    "nameEn": "Fresh Strawberry Juice",
    "descriptionAr": "فراولة طازجة ولذيذة معصورة يومياً",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 40,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 40,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/strawberry-juice.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "فراولة"
    ],
    "ingredientsAr": [
      "فراولة طازجة"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-apricot",
    "slug": "apricot-juice",
    "nameAr": "عصير مشمش فريش",
    "nameEn": "Fresh Apricot Juice",
    "descriptionAr": "مشمش طبيعي غني بالنكهة اللذيذة",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 40,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 40,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/orange-juice.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "عصير مشمش فريش",
      "عصائر فريش",
      "المايسترو"
    ],
    "ingredientsAr": [
      "مشمش"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-plum",
    "slug": "plum-juice",
    "nameAr": "عصير برقوق فريش",
    "nameEn": "Fresh Plum Juice",
    "descriptionAr": "برقوق طازج بطعم منعش ومميز",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 40,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 40,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/strawberry-juice.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "عصير برقوق فريش",
      "عصائر فريش",
      "المايسترو"
    ],
    "ingredientsAr": [
      "برقوق"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-peach",
    "slug": "peach-juice",
    "nameAr": "عصير خوخ فريش",
    "nameEn": "Fresh Peach Juice",
    "descriptionAr": "خوخ طبيعي حلو ومنعش",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 40,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 40,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/orange-juice.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "عصير خوخ فريش",
      "عصائر فريش",
      "المايسترو"
    ],
    "ingredientsAr": [
      "خوخ"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-cantaloupe-milk",
    "slug": "cantaloupe-milk",
    "nameAr": "كنتالوب باللبن",
    "nameEn": "Cantaloupe with Milk",
    "descriptionAr": "كنتالوب طازج ممزوج بالحليب الطبيعي",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 40,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 40,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/cantaloupe-juice.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "كنتالوب باللبن",
      "عصائر فريش",
      "المايسترو"
    ],
    "ingredientsAr": [
      "كنتالوب",
      "حليب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-lemon-milk",
    "slug": "lemon-milk",
    "nameAr": "ليمون باللبن",
    "nameEn": "Lemon with Milk",
    "descriptionAr": "ليمون فريش كريمي مع الحليب الطبيعي",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 40,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 40,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/lemon-milk.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "ليمون باللبن",
      "عصائر فريش",
      "المايسترو"
    ],
    "ingredientsAr": [
      "ليمون",
      "حليب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-red-apple",
    "slug": "red-apple-juice",
    "nameAr": "عصير تفاح أحمر",
    "nameEn": "Red Apple Juice",
    "descriptionAr": "تفاح أحمر معصور طازج بدون أي إضافات",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 50,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 50,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/apple-juice.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "عصير تفاح أحمر",
      "عصائر فريش",
      "المايسترو"
    ],
    "ingredientsAr": [
      "تفاح أحمر"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-yellow-apple",
    "slug": "yellow-apple-juice",
    "nameAr": "عصير تفاح أصفر",
    "nameEn": "Yellow Apple Juice",
    "descriptionAr": "تفاح أصفر معصور طازج ونقي",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 50,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 50,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/apple-juice.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "عصير تفاح أصفر",
      "عصائر فريش",
      "المايسترو"
    ],
    "ingredientsAr": [
      "تفاح أصفر"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-grape",
    "slug": "grape-juice",
    "nameAr": "عصير عنب فريش",
    "nameEn": "Fresh Grape Juice",
    "descriptionAr": "عنب طبيعي طازج غني بالنكهة",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 50,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 50,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/strawberry-juice.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "عصير عنب فريش",
      "عصائر فريش",
      "المايسترو"
    ],
    "ingredientsAr": [
      "عنب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-guava-milk",
    "slug": "guava-milk",
    "nameAr": "جوافة باللبن",
    "nameEn": "Guava with Milk",
    "descriptionAr": "جوافة طبيعية كريمية مع الحليب الطازج",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 50,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 50,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/guava-milk.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "جوافة باللبن",
      "عصائر فريش",
      "المايسترو"
    ],
    "ingredientsAr": [
      "جوافة",
      "حليب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-strawberry-milk",
    "slug": "strawberry-milk",
    "nameAr": "فراولة باللبن",
    "nameEn": "Strawberry with Milk",
    "descriptionAr": "فراولة طازجة ممزوجة بالحليب الطبيعي",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 50,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 50,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/strawberry-milk.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "فراولة باللبن"
    ],
    "ingredientsAr": [
      "فراولة",
      "حليب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-banana-milk",
    "slug": "banana-milk",
    "nameAr": "موز باللبن",
    "nameEn": "Banana with Milk",
    "descriptionAr": "موز طازج بالحليب الطبيعي الغني والمغذي",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 50,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 50,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/banana-milk.png",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "موز باللبن"
    ],
    "ingredientsAr": [
      "موز",
      "حليب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-plum-milk",
    "slug": "plum-milk",
    "nameAr": "برقوق باللبن",
    "nameEn": "Plum with Milk",
    "descriptionAr": "برقوق طبيعي مع الحليب الطازج",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 50,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 50,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/strawberry-milk.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "برقوق باللبن",
      "عصائر فريش",
      "المايسترو"
    ],
    "ingredientsAr": [
      "برقوق",
      "حليب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-peach-milk",
    "slug": "peach-milk",
    "nameAr": "خوخ باللبن",
    "nameEn": "Peach with Milk",
    "descriptionAr": "خوخ طازج ممزوج بالحليب الطبيعي",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 50,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 50,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/orange-juice.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "خوخ باللبن",
      "عصائر فريش",
      "المايسترو"
    ],
    "ingredientsAr": [
      "خوخ",
      "حليب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-pomegranate",
    "slug": "pomegranate-juice",
    "nameAr": "عصير رمان فريش",
    "nameEn": "Fresh Pomegranate Juice",
    "descriptionAr": "رمان طبيعي نقي 100% معصور طازج",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 50,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 50,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/pomegranate-juice.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "رمان"
    ],
    "ingredientsAr": [
      "رمان طبيعي"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-dates-milk",
    "slug": "dates-milk",
    "nameAr": "بلح باللبن",
    "nameEn": "Dates with Milk",
    "descriptionAr": "بلح غني بالطاقة ممزوج بالحليب الطبيعي الطازج",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 55,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 55,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/dates-milk.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "بلح باللبن",
      "طاقة"
    ],
    "ingredientsAr": [
      "بلح",
      "حليب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-kiwi",
    "slug": "kiwi-juice",
    "nameAr": "عصير كيوي فريش",
    "nameEn": "Fresh Kiwi Juice",
    "descriptionAr": "كيوي طبيعي طازج غني بفيتامين سي والانتعاش",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 60,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 60,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/kiwi-juice.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "عصير كيوي فريش",
      "عصائر فريش",
      "المايسترو"
    ],
    "ingredientsAr": [
      "كيوي طبيعي"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-pineapple",
    "slug": "pineapple-juice",
    "nameAr": "عصير أناناس فريش",
    "nameEn": "Fresh Pineapple Juice",
    "descriptionAr": "أناناس استوائي طبيعي معصور طازج",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/pineapple-juice.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "أناناس"
    ],
    "ingredientsAr": [
      "أناناس طبيعي"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sc-pure",
    "slug": "sugarcane-pure",
    "nameAr": "عصير قصب طبيعي",
    "nameEn": "Pure Sugarcane Juice",
    "descriptionAr": "عصير قصب طبيعي معصور طازجاً من أجود أعواد القصب",
    "categorySlug": "sugarcane",
    "categoryNameAr": "القصب",
    "basePrice": 15,
    "sizes": [
      {
        "id": "sc-sm",
        "nameAr": "حجم عادي",
        "nameEn": "Regular",
        "price": 15,
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "sc-lg",
        "nameAr": "حجم كبير",
        "nameEn": "Large",
        "price": 20,
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/sugarcane-pure.png",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "قصب"
    ],
    "ingredientsAr": [
      "قصب طبيعي"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sc-milk",
    "slug": "sugarcane-milk",
    "nameAr": "قصب باللبن",
    "nameEn": "Sugarcane with Milk",
    "descriptionAr": "قصب طبيعي ممزوج بالحليب الطازج",
    "categorySlug": "sugarcane",
    "categoryNameAr": "القصب",
    "basePrice": 25,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 25,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/sugarcane-milk.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "قصب باللبن",
      "القصب",
      "المايسترو"
    ],
    "ingredientsAr": [
      "قصب",
      "حليب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sc-orange",
    "slug": "sugarcane-orange",
    "nameAr": "قصب برتقال",
    "nameEn": "Sugarcane Orange",
    "descriptionAr": "مزيج القصب الطبيعي مع عصير البرتقال الطازج",
    "categorySlug": "sugarcane",
    "categoryNameAr": "القصب",
    "basePrice": 25,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 25,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/sugarcane-orange.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "قصب برتقال",
      "القصب",
      "المايسترو"
    ],
    "ingredientsAr": [
      "قصب",
      "برتقال"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sc-lemon",
    "slug": "sugarcane-lemon",
    "nameAr": "قصب ليمون",
    "nameEn": "Sugarcane Lemon",
    "descriptionAr": "قصب طبيعي مع عصير الليمون المنعش",
    "categorySlug": "sugarcane",
    "categoryNameAr": "القصب",
    "basePrice": 25,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 25,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/sugarcane-lemon.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "قصب ليمون",
      "القصب",
      "المايسترو"
    ],
    "ingredientsAr": [
      "قصب",
      "ليمون"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sc-mint",
    "slug": "sugarcane-mint",
    "nameAr": "قصب نعناع",
    "nameEn": "Sugarcane Mint",
    "descriptionAr": "قصب طبيعي مع أوراق النعناع الفريش",
    "categorySlug": "sugarcane",
    "categoryNameAr": "القصب",
    "basePrice": 25,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 25,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/sugarcane-pure.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "قصب نعناع",
      "القصب",
      "المايسترو"
    ],
    "ingredientsAr": [
      "قصب",
      "نعناع فريش"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sc-vanilla",
    "slug": "sugarcane-vanilla",
    "nameAr": "قصب فانيليا",
    "nameEn": "Sugarcane Vanilla",
    "descriptionAr": "قصب طبيعي مع لمسة الفانيليا الناعمة",
    "categorySlug": "sugarcane",
    "categoryNameAr": "القصب",
    "basePrice": 25,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 25,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/sugarcane-pure.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "قصب فانيليا",
      "القصب",
      "المايسترو"
    ],
    "ingredientsAr": [
      "قصب",
      "فانيليا"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sc-sobya",
    "slug": "sugarcane-sobya",
    "nameAr": "قصب سوبيا",
    "nameEn": "Sugarcane Sobya",
    "descriptionAr": "مزيج القصب اللذيذ مع السوبيا المثلجة",
    "categorySlug": "sugarcane",
    "categoryNameAr": "القصب",
    "basePrice": 25,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 25,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/sugarcane-sobia.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "قصب سوبيا",
      "القصب",
      "المايسترو"
    ],
    "ingredientsAr": [
      "قصب",
      "سوبيا"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sc-halawa",
    "slug": "sugarcane-halawa",
    "nameAr": "قصب حلاوة",
    "nameEn": "Sugarcane Halawa",
    "descriptionAr": "خلطة القصب المبتكرة بالحلاوة الطحينية",
    "categorySlug": "sugarcane",
    "categoryNameAr": "القصب",
    "basePrice": 25,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 25,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/sugarcane-pure.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "قصب حلاوة",
      "القصب",
      "المايسترو"
    ],
    "ingredientsAr": [
      "قصب",
      "حلاوة طحينية"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sc-rocca",
    "slug": "sugarcane-rocca",
    "nameAr": "قصب جرجير",
    "nameEn": "Sugarcane Arugula",
    "descriptionAr": "قصب طبيعي غني مع الجرجير الصحي",
    "categorySlug": "sugarcane",
    "categoryNameAr": "القصب",
    "basePrice": 25,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 25,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/arugula-milk.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "قصب جرجير",
      "القصب",
      "المايسترو"
    ],
    "ingredientsAr": [
      "قصب",
      "جرجير فريش"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sc-birell",
    "slug": "sugarcane-birell",
    "nameAr": "قصب بريل",
    "nameEn": "Sugarcane Birell",
    "descriptionAr": "خلطة القصب المنعشة مع مشروب البريل الشعير",
    "categorySlug": "sugarcane",
    "categoryNameAr": "القصب",
    "basePrice": 35,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 35,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/sugarcane-pure.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "قصب بريل",
      "القصب",
      "المايسترو"
    ],
    "ingredientsAr": [
      "قصب",
      "بريل"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "avo-pure",
    "slug": "avocado-pure",
    "nameAr": "أفوكادو بيور",
    "nameEn": "Pure Avocado",
    "descriptionAr": "أفوكادو طبيعي طازج بقوام كريمي فاخر",
    "categorySlug": "avocado",
    "categoryNameAr": "الأفوكادو",
    "basePrice": 90,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 90,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "أفوكادو"
    ],
    "ingredientsAr": [
      "أفوكادو طبيعي"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "avo-mango",
    "slug": "avocado-mango",
    "nameAr": "أفوكادو + مانجو",
    "nameEn": "Avocado + Mango",
    "descriptionAr": "أفوكادو كريمي طازج مع مانجو بيور",
    "categorySlug": "avocado",
    "categoryNameAr": "الأفوكادو",
    "basePrice": 95,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 95,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "أفوكادو + مانجو",
      "الأفوكادو",
      "المايسترو"
    ],
    "ingredientsAr": [
      "أفوكادو",
      "مانجو"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "avo-banana",
    "slug": "avocado-banana",
    "nameAr": "أفوكادو + موز",
    "nameEn": "Avocado + Banana",
    "descriptionAr": "أفوكادو طازج مع موز طبيعي وحليب",
    "categorySlug": "avocado",
    "categoryNameAr": "الأفوكادو",
    "basePrice": 95,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 95,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "أفوكادو + موز",
      "الأفوكادو",
      "المايسترو"
    ],
    "ingredientsAr": [
      "أفوكادو",
      "موز"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "avo-kiwi",
    "slug": "avocado-kiwi",
    "nameAr": "أفوكادو + كيوي",
    "nameEn": "Avocado + Kiwi",
    "descriptionAr": "أفوكادو غني مع كيوي فريش منعش",
    "categorySlug": "avocado",
    "categoryNameAr": "الأفوكادو",
    "basePrice": 95,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 95,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "أفوكادو + كيوي",
      "الأفوكادو",
      "المايسترو"
    ],
    "ingredientsAr": [
      "أفوكادو",
      "كيوي"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "avo-strawberry",
    "slug": "avocado-strawberry",
    "nameAr": "أفوكادو + فراولة",
    "nameEn": "Avocado + Strawberry",
    "descriptionAr": "أفوكادو كريمي مع فراولة طازجة",
    "categorySlug": "avocado",
    "categoryNameAr": "الأفوكادو",
    "basePrice": 95,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 95,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "أفوكادو + فراولة",
      "الأفوكادو",
      "المايسترو"
    ],
    "ingredientsAr": [
      "أفوكادو",
      "فراولة"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "avo-guava",
    "slug": "avocado-guava",
    "nameAr": "أفوكادو + جوافة",
    "nameEn": "Avocado + Guava",
    "descriptionAr": "أفوكادو طازج مع جوافة بيور",
    "categorySlug": "avocado",
    "categoryNameAr": "الأفوكادو",
    "basePrice": 95,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 95,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "أفوكادو + جوافة",
      "الأفوكادو",
      "المايسترو"
    ],
    "ingredientsAr": [
      "أفوكادو",
      "جوافة"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "avo-dates",
    "slug": "avocado-dates",
    "nameAr": "أفوكادو + بلح",
    "nameEn": "Avocado + Dates",
    "descriptionAr": "أفوكادو طبيعي مع بلح طري وعسل",
    "categorySlug": "avocado",
    "categoryNameAr": "الأفوكادو",
    "basePrice": 95,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 95,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "أفوكادو + بلح",
      "الأفوكادو",
      "المايسترو"
    ],
    "ingredientsAr": [
      "أفوكادو",
      "بلح",
      "عسل"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "avo-nuts-honey",
    "slug": "avocado-nuts-honey",
    "nameAr": "أفوكادو + مكسرات + عسل",
    "nameEn": "Avocado with Nuts & Honey",
    "descriptionAr": "أفوكادو ملكي بالمكسرات المحمصة الفاخرة وعسل النحل",
    "categorySlug": "avocado",
    "categoryNameAr": "الأفوكادو",
    "basePrice": 110,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 110,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "أفوكادو ملكي",
      "مكسرات"
    ],
    "ingredientsAr": [
      "أفوكادو",
      "مكسرات فاخرة",
      "عسل نحل"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sm-kiwi",
    "slug": "smoothie-kiwi",
    "nameAr": "سموزي كيوي",
    "nameEn": "Kiwi Smoothie",
    "descriptionAr": "سموزي كيوي مثلج ومنعش",
    "categorySlug": "smoothie",
    "categoryNameAr": "سموزي",
    "basePrice": 60,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 60,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "سموزي كيوي",
      "سموزي",
      "المايسترو"
    ],
    "ingredientsAr": [
      "كيوي",
      "ثلج مجروش"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sm-guava",
    "slug": "smoothie-guava",
    "nameAr": "سموزي جوافة",
    "nameEn": "Guava Smoothie",
    "descriptionAr": "سموزي جوافة طبيعية مثلجة",
    "categorySlug": "smoothie",
    "categoryNameAr": "سموزي",
    "basePrice": 60,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 60,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "سموزي جوافة",
      "سموزي",
      "المايسترو"
    ],
    "ingredientsAr": [
      "جوافة",
      "ثلج مجروش"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sm-lemon",
    "slug": "smoothie-lemon",
    "nameAr": "سموزي ليمون",
    "nameEn": "Lemon Smoothie",
    "descriptionAr": "سموزي ليمون منعش مثلج",
    "categorySlug": "smoothie",
    "categoryNameAr": "سموزي",
    "basePrice": 60,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 60,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "سموزي ليمون",
      "سموزي",
      "المايسترو"
    ],
    "ingredientsAr": [
      "ليمون",
      "ثلج مجروش"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sm-strawberry",
    "slug": "smoothie-strawberry",
    "nameAr": "سموزي فراولة",
    "nameEn": "Strawberry Smoothie",
    "descriptionAr": "سموزي فراولة طبيعية مثلجة",
    "categorySlug": "smoothie",
    "categoryNameAr": "سموزي",
    "basePrice": 60,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 60,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "سموزي فراولة"
    ],
    "ingredientsAr": [
      "فراولة",
      "ثلج مجروش"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sm-orange",
    "slug": "smoothie-orange",
    "nameAr": "سموزي برتقال",
    "nameEn": "Orange Smoothie",
    "descriptionAr": "سموزي برتقال فريش مثلج",
    "categorySlug": "smoothie",
    "categoryNameAr": "سموزي",
    "basePrice": 60,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 60,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "سموزي برتقال",
      "سموزي",
      "المايسترو"
    ],
    "ingredientsAr": [
      "برتقال",
      "ثلج مجروش"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sm-watermelon",
    "slug": "smoothie-watermelon",
    "nameAr": "سموزي بطيخ",
    "nameEn": "Watermelon Smoothie",
    "descriptionAr": "سموزي بطيخ أحمر مثلج ومنعش",
    "categorySlug": "smoothie",
    "categoryNameAr": "سموزي",
    "basePrice": 60,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 60,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/watermelon-mint.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "سموزي بطيخ",
      "سموزي",
      "المايسترو"
    ],
    "ingredientsAr": [
      "بطيخ",
      "ثلج مجروش"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sm-mango",
    "slug": "smoothie-mango",
    "nameAr": "سموزي مانجو",
    "nameEn": "Mango Smoothie",
    "descriptionAr": "سموزي مانجو استوائي مثلج وغني",
    "categorySlug": "smoothie",
    "categoryNameAr": "سموزي",
    "basePrice": 60,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 60,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "سموزي مانجو"
    ],
    "ingredientsAr": [
      "مانجو",
      "ثلج مجروش"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sm-mix",
    "slug": "smoothie-mix",
    "nameAr": "سموزي ميكس",
    "nameEn": "Mix Smoothie",
    "descriptionAr": "سموزي ميكس فواكه استوائية مشكلة",
    "categorySlug": "smoothie",
    "categoryNameAr": "سموزي",
    "basePrice": 60,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 60,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "سموزي ميكس",
      "سموزي",
      "المايسترو"
    ],
    "ingredientsAr": [
      "فواكه مشكلة",
      "ثلج مجروش"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sm-watermelon-mint",
    "slug": "smoothie-watermelon-mint",
    "nameAr": "سموزي بطيخ نعناع",
    "nameEn": "Watermelon Mint Smoothie",
    "descriptionAr": "سموزي بطيخ مع نعناع فريش مثلج",
    "categorySlug": "smoothie",
    "categoryNameAr": "سموزي",
    "basePrice": 60,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 60,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/watermelon-mint.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "سموزي بطيخ نعناع",
      "سموزي",
      "المايسترو"
    ],
    "ingredientsAr": [
      "بطيخ",
      "نعناع فريش",
      "ثلج مجروش"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sm-lemon-mint",
    "slug": "smoothie-lemon-mint",
    "nameAr": "سموزي ليمون نعناع",
    "nameEn": "Lemon Mint Smoothie",
    "descriptionAr": "سموزي ليمون ونعناع مثلج ومنعش للروح",
    "categorySlug": "smoothie",
    "categoryNameAr": "سموزي",
    "basePrice": 60,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 60,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "ليمون نعناع"
    ],
    "ingredientsAr": [
      "ليمون",
      "نعناع",
      "ثلج مجروش"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sm-red-berry",
    "slug": "smoothie-red-berry",
    "nameAr": "سموزي توت أحمر",
    "nameEn": "Red Berry Smoothie",
    "descriptionAr": "سموزي توت أحمر مثلج وغني بالانتعاش",
    "categorySlug": "smoothie",
    "categoryNameAr": "سموزي",
    "basePrice": 60,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 60,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "سموزي توت أحمر",
      "سموزي",
      "المايسترو"
    ],
    "ingredientsAr": [
      "توت أحمر",
      "ثلج مجروش"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sm-blue-berry",
    "slug": "smoothie-blue-berry",
    "nameAr": "سموزي توت أزرق",
    "nameEn": "Blueberry Smoothie",
    "descriptionAr": "سموزي توت أزرق (بلوبيري) فاخر مثلج",
    "categorySlug": "smoothie",
    "categoryNameAr": "سموزي",
    "basePrice": 60,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 60,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "بلوبيري"
    ],
    "ingredientsAr": [
      "توت أزرق",
      "ثلج مجروش"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sm-pineapple",
    "slug": "smoothie-pineapple",
    "nameAr": "سموزي أناناس",
    "nameEn": "Pineapple Smoothie",
    "descriptionAr": "سموزي أناناس استوائي مثلج",
    "categorySlug": "smoothie",
    "categoryNameAr": "سموزي",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/pineapple-orange.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "سموزي أناناس",
      "سموزي",
      "المايسترو"
    ],
    "ingredientsAr": [
      "أناناس",
      "ثلج مجروش"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "or-tamarind",
    "slug": "tamarind",
    "nameAr": "تمر هندي طبيعي",
    "nameEn": "Natural Tamarind",
    "descriptionAr": "تمر هندي طبيعي محضر على الأصول",
    "categorySlug": "oriental-juices",
    "categoryNameAr": "عصائر شرقي",
    "basePrice": 20,
    "sizes": [
      {
        "id": "or-tam-sm",
        "nameAr": "حجم عادي",
        "nameEn": "Regular",
        "price": 20,
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "or-tam-lg",
        "nameAr": "حجم كبير",
        "nameEn": "Large",
        "price": 25,
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/tamarind-natural.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "تمر هندي طبيعي",
      "عصائر شرقي",
      "المايسترو"
    ],
    "ingredientsAr": [
      "تمر هندي طبيعي"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "or-sobya",
    "slug": "oriental-sobya",
    "nameAr": "سوبيا طبيعي",
    "nameEn": "Natural Sobya",
    "descriptionAr": "سوبيا طبيعية مثلجة وغنية بجوز الهند والحليب",
    "categorySlug": "oriental-juices",
    "categoryNameAr": "عصائر شرقي",
    "basePrice": 25,
    "sizes": [
      {
        "id": "or-sob-sm",
        "nameAr": "حجم عادي",
        "nameEn": "Regular",
        "price": 25,
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "or-sob-lg",
        "nameAr": "حجم كبير",
        "nameEn": "Large",
        "price": 30,
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/sobya-natural.png",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "سوبيا"
    ],
    "ingredientsAr": [
      "سوبيا طبيعية",
      "حليب",
      "جوز هند"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "or-kharroub",
    "slug": "carob-kharroub",
    "nameAr": "خروب طبيعي",
    "nameEn": "Natural Carob",
    "descriptionAr": "خروب طبيعي أصيل معصور ومثلج",
    "categorySlug": "oriental-juices",
    "categoryNameAr": "عصائر شرقي",
    "basePrice": 20,
    "sizes": [
      {
        "id": "or-khar-sm",
        "nameAr": "حجم عادي",
        "nameEn": "Regular",
        "price": 20,
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "or-khar-lg",
        "nameAr": "حجم كبير",
        "nameEn": "Large",
        "price": 25,
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/carob-kharroub.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "خروب طبيعي",
      "عصائر شرقي",
      "المايسترو"
    ],
    "ingredientsAr": [
      "خروب طبيعي"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "or-ennab",
    "slug": "karkadeh-ennab",
    "nameAr": "عناب مثلج",
    "nameEn": "Iced Ennab (Karkadeh)",
    "descriptionAr": "عناب (كركديه) طبيعي مثلج مهدئ ومنعش",
    "categorySlug": "oriental-juices",
    "categoryNameAr": "عصائر شرقي",
    "basePrice": 20,
    "sizes": [
      {
        "id": "or-enn-sm",
        "nameAr": "حجم عادي",
        "nameEn": "Regular",
        "price": 20,
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "or-enn-lg",
        "nameAr": "حجم كبير",
        "nameEn": "Large",
        "price": 25,
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/karkadeh-ennab.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عناب"
    ],
    "ingredientsAr": [
      "كركديه طبيعي",
      "عناب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "or-doum",
    "slug": "doum-juice",
    "nameAr": "دوم طبيعي",
    "nameEn": "Natural Doum",
    "descriptionAr": "دوم طبيعي أصيل ومفيد",
    "categorySlug": "oriental-juices",
    "categoryNameAr": "عصائر شرقي",
    "basePrice": 20,
    "sizes": [
      {
        "id": "or-doum-sm",
        "nameAr": "حجم عادي",
        "nameEn": "Regular",
        "price": 20,
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "or-doum-lg",
        "nameAr": "حجم كبير",
        "nameEn": "Large",
        "price": 25,
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/doum-juice.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "دوم طبيعي",
      "عصائر شرقي",
      "المايسترو"
    ],
    "ingredientsAr": [
      "دوم طبيعي"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "or-doum-milk",
    "slug": "doum-milk",
    "nameAr": "دوم باللبن",
    "nameEn": "Doum with Milk",
    "descriptionAr": "دوم طبيعي ممزوج بالحليب الطازج",
    "categorySlug": "oriental-juices",
    "categoryNameAr": "عصائر شرقي",
    "basePrice": 30,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 30,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/doum-milk.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "دوم باللبن",
      "عصائر شرقي",
      "المايسترو"
    ],
    "ingredientsAr": [
      "دوم طبيعي",
      "حليب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "or-tam-sobya",
    "slug": "tamarind-on-sobya",
    "nameAr": "تمر على سوبيا",
    "nameEn": "Tamarind on Sobya",
    "descriptionAr": "الميكس الشرقي الشهير: تمر هندي مع سوبيا مثلجة",
    "categorySlug": "oriental-juices",
    "categoryNameAr": "عصائر شرقي",
    "basePrice": 30,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 30,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/sobya-natural.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "تمر على سوبيا"
    ],
    "ingredientsAr": [
      "تمر هندي",
      "سوبيا"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mg-pure",
    "slug": "mango-pure",
    "nameAr": "عصير مانجو فريش",
    "nameEn": "Fresh Mango Juice",
    "descriptionAr": "مانجو طبيعية طازجة بيور معصورة يومياً",
    "categorySlug": "mango-world",
    "categoryNameAr": "عالم المانجو",
    "basePrice": 45,
    "sizes": [
      {
        "id": "mg-sm",
        "nameAr": "حجم عادي",
        "nameEn": "Regular",
        "price": 45,
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "mg-lg",
        "nameAr": "حجم كبير",
        "nameEn": "Large",
        "price": 55,
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-chunks-bowl.jpg",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "مانجو"
    ],
    "ingredientsAr": [
      "مانجو طبيعي"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mg-banana",
    "slug": "mango-banana",
    "nameAr": "مانجو بالموز",
    "nameEn": "Mango with Banana",
    "descriptionAr": "مانجو فريش ممزوجة بالموز الطازج",
    "categorySlug": "mango-world",
    "categoryNameAr": "عالم المانجو",
    "basePrice": 55,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 55,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-banana.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "مانجو بالموز",
      "عالم المانجو",
      "المايسترو"
    ],
    "ingredientsAr": [
      "مانجو",
      "موز"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mg-strawberry",
    "slug": "mango-strawberry",
    "nameAr": "مانجو فراولة",
    "nameEn": "Mango Strawberry",
    "descriptionAr": "مزيج المانجو الاستوائي مع الفراولة الطازجة",
    "categorySlug": "mango-world",
    "categoryNameAr": "عالم المانجو",
    "basePrice": 55,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 55,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-strawberry.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "مانجو فراولة"
    ],
    "ingredientsAr": [
      "مانجو",
      "فراولة"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mg-apple",
    "slug": "mango-apple",
    "nameAr": "مانجو تفاح",
    "nameEn": "Mango Apple",
    "descriptionAr": "مانجو فريش مع قطع وعصير التفاح",
    "categorySlug": "mango-world",
    "categoryNameAr": "عالم المانجو",
    "basePrice": 55,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 55,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-apple.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "مانجو تفاح",
      "عالم المانجو",
      "المايسترو"
    ],
    "ingredientsAr": [
      "مانجو",
      "تفاح"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mg-milk",
    "slug": "mango-milk",
    "nameAr": "مانجو باللبن",
    "nameEn": "Mango with Milk",
    "descriptionAr": "مانجو طبيعية مع الحليب الطبيعي الطازج",
    "categorySlug": "mango-world",
    "categoryNameAr": "عالم المانجو",
    "basePrice": 55,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 55,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-milk.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "مانجو باللبن",
      "عالم المانجو",
      "المايسترو"
    ],
    "ingredientsAr": [
      "مانجو",
      "حليب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mg-icecream",
    "slug": "mango-icecream",
    "nameAr": "مانجو آيس كريم",
    "nameEn": "Mango Ice Cream",
    "descriptionAr": "مانجو بيور مع بولة آيس كريم فانيليا غنية",
    "categorySlug": "mango-world",
    "categoryNameAr": "عالم المانجو",
    "basePrice": 55,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 55,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-icecream.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "مانجو آيس كريم"
    ],
    "ingredientsAr": [
      "مانجو",
      "آيس كريم فانيليا"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mg-pineapple",
    "slug": "mango-pineapple",
    "nameAr": "مانجو بالأناناس",
    "nameEn": "Mango with Pineapple",
    "descriptionAr": "مزيج المانجو والأنناناس الاستوائي المنعش",
    "categorySlug": "mango-world",
    "categoryNameAr": "عالم المانجو",
    "basePrice": 65,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 65,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-pineapple.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "مانجو بالأناناس",
      "عالم المانجو",
      "المايسترو"
    ],
    "ingredientsAr": [
      "مانجو",
      "أناناس"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mg-kiwi",
    "slug": "mango-kiwi",
    "nameAr": "مانجو كيوي",
    "nameEn": "Mango Kiwi",
    "descriptionAr": "مانجو حلوة مع كيوي فريش منعش",
    "categorySlug": "mango-world",
    "categoryNameAr": "عالم المانجو",
    "basePrice": 65,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 65,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-kiwi.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "مانجو كيوي",
      "عالم المانجو",
      "المايسترو"
    ],
    "ingredientsAr": [
      "مانجو",
      "كيوي"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ms-chocolate",
    "slug": "milkshake-chocolate",
    "nameAr": "ميلك شيك شيكولاتة",
    "nameEn": "Chocolate Milkshake",
    "descriptionAr": "ميلك شيك شوكولاتة غني بالآيس كريم الفاخر",
    "categorySlug": "milkshake",
    "categoryNameAr": "ميلك شيك",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/chocolate-milkshake.png",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "ميلك شيك"
    ],
    "ingredientsAr": [
      "شوكولاتة",
      "آيس كريم",
      "حليب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ms-vanilla",
    "slug": "milkshake-vanilla",
    "nameAr": "ميلك شيك فانيليا",
    "nameEn": "Vanilla Milkshake",
    "descriptionAr": "ميلك شيك فانيليا ناعم وكريمي",
    "categorySlug": "milkshake",
    "categoryNameAr": "ميلك شيك",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/vanilla-milkshake.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "ميلك شيك فانيليا",
      "ميلك شيك",
      "المايسترو"
    ],
    "ingredientsAr": [
      "فانيليا",
      "آيس كريم",
      "حليب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ms-mango",
    "slug": "milkshake-mango",
    "nameAr": "ميلك شيك مانجو",
    "nameEn": "Mango Milkshake",
    "descriptionAr": "ميلك شيك مانجو طبيعية كريمية",
    "categorySlug": "milkshake",
    "categoryNameAr": "ميلك شيك",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-milkshake.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "ميلك شيك مانجو",
      "ميلك شيك",
      "المايسترو"
    ],
    "ingredientsAr": [
      "مانجو",
      "آيس كريم",
      "حليب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ms-strawberry",
    "slug": "milkshake-strawberry",
    "nameAr": "ميلك شيك فراولة",
    "nameEn": "Strawberry Milkshake",
    "descriptionAr": "ميلك شيك فراولة طازجة ولذيذة",
    "categorySlug": "milkshake",
    "categoryNameAr": "ميلك شيك",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/strawberry-milkshake.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "ميلك شيك فراولة",
      "ميلك شيك",
      "المايسترو"
    ],
    "ingredientsAr": [
      "فراولة",
      "آيس كريم",
      "حليب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ms-blueberry",
    "slug": "milkshake-blueberry",
    "nameAr": "ميلك شيك توت أزرق",
    "nameEn": "Blueberry Milkshake",
    "descriptionAr": "ميلك شيك بلوبيري فاخر",
    "categorySlug": "milkshake",
    "categoryNameAr": "ميلك شيك",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/blueberry-milkshake.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "بلوبيري"
    ],
    "ingredientsAr": [
      "توت أزرق",
      "آيس كريم",
      "حليب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ms-caramel",
    "slug": "milkshake-caramel",
    "nameAr": "ميلك شيك كراميل",
    "nameEn": "Caramel Milkshake",
    "descriptionAr": "ميلك شيك كراميل لذيذ وغني بالصوص الذهبي",
    "categorySlug": "milkshake",
    "categoryNameAr": "ميلك شيك",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/caramel-milkshake.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "ميلك شيك كراميل",
      "ميلك شيك",
      "المايسترو"
    ],
    "ingredientsAr": [
      "كراميل",
      "آيس كريم",
      "حليب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "yg-plain",
    "slug": "yogurt-plain",
    "nameAr": "زبادي سادة",
    "nameEn": "Plain Fresh Yogurt",
    "descriptionAr": "زبادي طبيعي طازج وصحي",
    "categorySlug": "yogurt",
    "categoryNameAr": "الزبادي",
    "basePrice": 50,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 50,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-yogurt-nuts.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "زبادي سادة",
      "الزبادي",
      "المايسترو"
    ],
    "ingredientsAr": [
      "زبادي طبيعي"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "yg-honey",
    "slug": "yogurt-honey",
    "nameAr": "زبادي بالعسل",
    "nameEn": "Yogurt with Honey",
    "descriptionAr": "زبادي طبيعي مع عسل النحل النقي",
    "categorySlug": "yogurt",
    "categoryNameAr": "الزبادي",
    "basePrice": 55,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 55,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-yogurt-nuts.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "زبادي بالعسل",
      "الزبادي",
      "المايسترو"
    ],
    "ingredientsAr": [
      "زبادي",
      "عسل نحل"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "yg-fruits",
    "slug": "yogurt-fruits",
    "nameAr": "زبادي فواكه قطع",
    "nameEn": "Yogurt with Fruit Chunks",
    "descriptionAr": "زبادي طبيعي غني بقطع الفواكه الطازجة المشكلة",
    "categorySlug": "yogurt",
    "categoryNameAr": "الزبادي",
    "basePrice": 65,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 65,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-yogurt-nuts.png",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "زبادي فواكه"
    ],
    "ingredientsAr": [
      "زبادي",
      "قطع فواكه طازجة"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "yg-strawberry",
    "slug": "yogurt-strawberry",
    "nameAr": "زبادي بالفراولة",
    "nameEn": "Yogurt with Strawberry",
    "descriptionAr": "زبادي طبيعي مع قطع الفراولة الطازجة",
    "categorySlug": "yogurt",
    "categoryNameAr": "الزبادي",
    "basePrice": 65,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 65,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-yogurt-nuts.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "زبادي بالفراولة",
      "الزبادي",
      "المايسترو"
    ],
    "ingredientsAr": [
      "زبادي",
      "فراولة"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "yg-peach",
    "slug": "yogurt-peach",
    "nameAr": "زبادي خوخ",
    "nameEn": "Yogurt with Peach",
    "descriptionAr": "زبادي طازج مع قطع الخوخ اللذيذ",
    "categorySlug": "yogurt",
    "categoryNameAr": "الزبادي",
    "basePrice": 65,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 65,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-yogurt-nuts.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "زبادي خوخ",
      "الزبادي",
      "المايسترو"
    ],
    "ingredientsAr": [
      "زبادي",
      "خوخ"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "yg-dates-honey",
    "slug": "yogurt-dates-honey",
    "nameAr": "زبادي بلح وعسل",
    "nameEn": "Yogurt with Dates & Honey",
    "descriptionAr": "زبادي طبيعي مع التمر وعسل النحل",
    "categorySlug": "yogurt",
    "categoryNameAr": "الزبادي",
    "basePrice": 65,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 65,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-yogurt-nuts.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "زبادي بلح وعسل",
      "الزبادي",
      "المايسترو"
    ],
    "ingredientsAr": [
      "زبادي",
      "بلح",
      "عسل نحل"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "yg-apple",
    "slug": "yogurt-apple",
    "nameAr": "زبادي تفاح",
    "nameEn": "Yogurt with Apple",
    "descriptionAr": "زبادي طازج مع قطع التفاح المقرمش",
    "categorySlug": "yogurt",
    "categoryNameAr": "الزبادي",
    "basePrice": 65,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 65,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-yogurt-nuts.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "زبادي تفاح",
      "الزبادي",
      "المايسترو"
    ],
    "ingredientsAr": [
      "زبادي",
      "تفاح"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "yg-mango",
    "slug": "yogurt-mango",
    "nameAr": "زبادي مانجو",
    "nameEn": "Yogurt with Mango",
    "descriptionAr": "زبادي طبيعي مع قطع المانجو الاستوائية",
    "categorySlug": "yogurt",
    "categoryNameAr": "الزبادي",
    "basePrice": 65,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 65,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-yogurt-nuts.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "زبادي مانجو"
    ],
    "ingredientsAr": [
      "زبادي",
      "مانجو قطع"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "yg-kiwi",
    "slug": "yogurt-kiwi",
    "nameAr": "زبادي كيوي",
    "nameEn": "Yogurt with Kiwi",
    "descriptionAr": "زبادي طازج مع قطع الكيوي الغني بفيتامين سي",
    "categorySlug": "yogurt",
    "categoryNameAr": "الزبادي",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-yogurt-nuts.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "زبادي كيوي",
      "الزبادي",
      "المايسترو"
    ],
    "ingredientsAr": [
      "زبادي",
      "كيوي قطع"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "add-chocolate",
    "slug": "extra-chocolate",
    "nameAr": "إضافة شيكولاتة",
    "nameEn": "Chocolate Topping",
    "descriptionAr": "إضافة صوص شوكولاتة فاخر لمشروبك",
    "categorySlug": "addons",
    "categoryNameAr": "الإضافات",
    "basePrice": 15,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 15,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/super-cocktail-icecream.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "إضافة شيكولاتة",
      "الإضافات",
      "المايسترو"
    ],
    "ingredientsAr": [
      "شوكولاتة فاخرة"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "add-honey",
    "slug": "extra-honey",
    "nameAr": "إضافة عسل نحل",
    "nameEn": "Honey Topping",
    "descriptionAr": "إضافة عسل نحل جبلي نقي",
    "categorySlug": "addons",
    "categoryNameAr": "الإضافات",
    "basePrice": 15,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 15,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/super-cocktail-icecream.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "إضافة عسل نحل",
      "الإضافات",
      "المايسترو"
    ],
    "ingredientsAr": [
      "عسل نحل"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "add-icecream",
    "slug": "extra-icecream",
    "nameAr": "إضافة بولة آيس كريم",
    "nameEn": "Ice Cream Scoop",
    "descriptionAr": "إضافة بولة آيس كريم فانيليا غنية",
    "categorySlug": "addons",
    "categoryNameAr": "الإضافات",
    "basePrice": 15,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 15,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/super-cocktail-icecream.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "إضافة بولة آيس كريم",
      "الإضافات",
      "المايسترو"
    ],
    "ingredientsAr": [
      "آيس كريم فانيليا"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "add-fruits",
    "slug": "extra-fruits",
    "nameAr": "إضافة فاكهة قطع",
    "nameEn": "Extra Fruit Chunks",
    "descriptionAr": "إضافة قطع فواكه طازجة مشكلة",
    "categorySlug": "addons",
    "categoryNameAr": "الإضافات",
    "basePrice": 20,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 20,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/super-cocktail-icecream.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "إضافة فاكهة قطع",
      "الإضافات",
      "المايسترو"
    ],
    "ingredientsAr": [
      "قطع فواكه طازجة"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "add-nuts",
    "slug": "extra-nuts",
    "nameAr": "إضافة مكسرات فاخرة",
    "nameEn": "Extra Premium Nuts",
    "descriptionAr": "إضافة مكسرات فاخرة محمصة (كاجو، بندق، فستق)",
    "categorySlug": "addons",
    "categoryNameAr": "الإضافات",
    "basePrice": 30,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 30,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/super-cocktail-icecream.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "مكسرات"
    ],
    "ingredientsAr": [
      "مكسرات محمصة"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "roast-peanut",
    "slug": "peanut-milk",
    "nameAr": "سوداني باللبن",
    "nameEn": "Peanuts with Milk",
    "descriptionAr": "فول سوداني محمص طازج ممزوج بالحليب الطبيعي والعسل",
    "categorySlug": "roastery-juices",
    "categoryNameAr": "عصائر المحمصات",
    "basePrice": 60,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 60,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/walnut-drink.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "محمصات",
      "سوداني باللبن"
    ],
    "ingredientsAr": [
      "فول سوداني محمص",
      "حليب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "roast-seeds",
    "slug": "seeds-milk",
    "nameAr": "لب باللبن",
    "nameEn": "Toasted Seeds with Milk",
    "descriptionAr": "مزيج لب محمص فاخر مع الحليب الطبيعي",
    "categorySlug": "roastery-juices",
    "categoryNameAr": "عصائر المحمصات",
    "basePrice": 60,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 60,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/walnut-drink.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "محمصات"
    ],
    "ingredientsAr": [
      "لب محمص",
      "حليب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "roast-hazelnut",
    "slug": "hazelnut-milk",
    "nameAr": "بندق باللبن",
    "nameEn": "Hazelnut with Milk",
    "descriptionAr": "بندق محمص فاخر ممزوج بالحليب الطبيعي الطازج",
    "categorySlug": "roastery-juices",
    "categoryNameAr": "عصائر المحمصات",
    "basePrice": 100,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 100,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/walnut-drink.png",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "محمصات",
      "بندق باللبن"
    ],
    "ingredientsAr": [
      "بندق محمص",
      "حليب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "roast-cashew",
    "slug": "cashew-milk",
    "nameAr": "كاجو باللبن",
    "nameEn": "Cashew with Milk",
    "descriptionAr": "كاجو محمص فاخر ممزوج بالحليب الطبيعي",
    "categorySlug": "roastery-juices",
    "categoryNameAr": "عصائر المحمصات",
    "basePrice": 100,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 100,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/walnut-drink.png",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "محمصات",
      "كاجو باللبن"
    ],
    "ingredientsAr": [
      "كاجو محمص",
      "حليب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "roast-pistachio",
    "slug": "pistachio-milk",
    "nameAr": "فستق باللبن",
    "nameEn": "Pistachio with Milk",
    "descriptionAr": "فستق حلبي محمص فاخر مع الحليب الطازج",
    "categorySlug": "roastery-juices",
    "categoryNameAr": "عصائر المحمصات",
    "basePrice": 100,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 100,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/pistachio-milkshake.png",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "محمصات",
      "فستق باللبن"
    ],
    "ingredientsAr": [
      "فستق محمص",
      "حليب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "roast-almond",
    "slug": "almond-milk",
    "nameAr": "لوز باللبن",
    "nameEn": "Almond with Milk",
    "descriptionAr": "لوز محمص مقرمش ممزوج بالحليب الطبيعي الغني",
    "categorySlug": "roastery-juices",
    "categoryNameAr": "عصائر المحمصات",
    "basePrice": 100,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 100,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/walnut-drink.png",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "محمصات",
      "لوز باللبن"
    ],
    "ingredientsAr": [
      "لوز محمص",
      "حليب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "choc-mandolin",
    "slug": "mandolin-drink",
    "nameAr": "مندولين",
    "nameEn": "Mandolin Shake",
    "descriptionAr": "مخفوق شوكولاتة مندولين اللذيذ بالحليب والآيس كريم",
    "categorySlug": "chocolate",
    "categoryNameAr": "الشوكولاتة",
    "basePrice": 75,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 75,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/chocolate-milkshake.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "مندولين",
      "الشوكولاتة",
      "المايسترو"
    ],
    "ingredientsAr": [
      "شوكولاتة مندولين",
      "حليب",
      "آيس كريم"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "choc-moro",
    "slug": "moro-drink",
    "nameAr": "مورو",
    "nameEn": "Moro Shake",
    "descriptionAr": "مخفوق شوكولاتة مورو مع النوجا والكراميل والحليب",
    "categorySlug": "chocolate",
    "categoryNameAr": "الشوكولاتة",
    "basePrice": 75,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 75,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/chocolate-milkshake.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "مورو",
      "الشوكولاتة",
      "المايسترو"
    ],
    "ingredientsAr": [
      "شوكولاتة مورو",
      "حليب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "choc-snikers",
    "slug": "snikers-drink",
    "nameAr": "سنيكرز",
    "nameEn": "Snickers Shake",
    "descriptionAr": "مخفوق سنيكرز الشهير بالفول السوداني والكراميل والشوكولاتة",
    "categorySlug": "chocolate",
    "categoryNameAr": "الشوكولاتة",
    "basePrice": 75,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 75,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/snickers-drink.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "سنيكرز"
    ],
    "ingredientsAr": [
      "سنيكرز",
      "حليب",
      "آيس كريم"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "choc-nutella",
    "slug": "nutella-drink",
    "nameAr": "نوتيلا",
    "nameEn": "Nutella Shake",
    "descriptionAr": "مخفوق شوكولاتة نوتيلا الأصلية الكثيف",
    "categorySlug": "chocolate",
    "categoryNameAr": "الشوكولاتة",
    "basePrice": 75,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 75,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/nutella-milkshake.png",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "نوتيلا"
    ],
    "ingredientsAr": [
      "نوتيلا أصلية",
      "حليب",
      "آيس كريم"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "choc-kinder",
    "slug": "kinder-drink",
    "nameAr": "كيندر",
    "nameEn": "Kinder Shake",
    "descriptionAr": "مخفوق كيندر بوينو الشوكولاتة البيضاء والحليبية",
    "categorySlug": "chocolate",
    "categoryNameAr": "الشوكولاتة",
    "basePrice": 75,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 75,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/chocolate-milkshake.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "كيندر"
    ],
    "ingredientsAr": [
      "كيندر",
      "حليب",
      "آيس كريم"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "choc-oreo",
    "slug": "oreo-drink",
    "nameAr": "أوريو",
    "nameEn": "Oreo Shake",
    "descriptionAr": "مخفوق بسكويت أوريو الشهير مع الكريمة والحليب",
    "categorySlug": "chocolate",
    "categoryNameAr": "الشوكولاتة",
    "basePrice": 75,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 75,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/oreo-drink.png",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "أوريو"
    ],
    "ingredientsAr": [
      "بسكويت أوريو",
      "حليب",
      "آيس كريم"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "choc-kitkat",
    "slug": "kitkat-drink",
    "nameAr": "كيت كات",
    "nameEn": "Kit Kat Shake",
    "descriptionAr": "مخفوق كيت كات الويفر المقرمش والشوكولاتة",
    "categorySlug": "chocolate",
    "categoryNameAr": "الشوكولاتة",
    "basePrice": 75,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 75,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/chocolate-milkshake.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "كيت كات",
      "الشوكولاتة",
      "المايسترو"
    ],
    "ingredientsAr": [
      "كيت كات",
      "حليب",
      "آيس كريم"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "choc-galaxy",
    "slug": "galaxy-drink",
    "nameAr": "جلاكسي",
    "nameEn": "Galaxy Shake",
    "descriptionAr": "مخفوق شوكولاتة جلاكسي الناعمة الحريرية",
    "categorySlug": "chocolate",
    "categoryNameAr": "الشوكولاتة",
    "basePrice": 75,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 75,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/galaxy-drink.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "جلاكسي"
    ],
    "ingredientsAr": [
      "جلاكسي",
      "حليب",
      "آيس كريم"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "choc-hohos",
    "slug": "hohos-drink",
    "nameAr": "هوهوز",
    "nameEn": "Hohos Shake",
    "descriptionAr": "مخفوق كيك هوهوز الشوكولاتة والكريمة",
    "categorySlug": "chocolate",
    "categoryNameAr": "الشوكولاتة",
    "basePrice": 75,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 75,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/hohos-drink.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "هوهوز",
      "الشوكولاتة",
      "المايسترو"
    ],
    "ingredientsAr": [
      "كيك هوهوز",
      "حليب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "choc-twinkies",
    "slug": "twinkies-drink",
    "nameAr": "تونيز (توينكيز)",
    "nameEn": "Twinkies Shake",
    "descriptionAr": "مخفوق كيك توينكيز الفانيليا والكريمة",
    "categorySlug": "chocolate",
    "categoryNameAr": "الشوكولاتة",
    "basePrice": 75,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 75,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/twinkies-drink.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "تونيز (توينكيز)",
      "الشوكولاتة",
      "المايسترو"
    ],
    "ingredientsAr": [
      "توينكيز",
      "حليب"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fc-cocktail",
    "slug": "cocktail-cup",
    "nameAr": "كوكتيل قطع",
    "nameEn": "Fruit Cocktail Cup",
    "descriptionAr": "كوب قطع فواكه طازجة مشكلة مع عصير بيور",
    "categorySlug": "fruit-cuts",
    "categoryNameAr": "قطع فواكه",
    "basePrice": 45,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 45,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/cocktail-cup.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "كوكتيل قطع",
      "قطع فواكه",
      "المايسترو"
    ],
    "ingredientsAr": [
      "فواكه طازجة مشكلة"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fc-cocktail-ice",
    "slug": "cocktail-ice",
    "nameAr": "كوكتيل + آيس",
    "nameEn": "Cocktail with Ice Cream",
    "descriptionAr": "كوكتيل قطع فواكه طازجة مع بولة آيس كريم فانيليا",
    "categorySlug": "fruit-cuts",
    "categoryNameAr": "قطع فواكه",
    "basePrice": 55,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 55,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/super-cocktail-icecream.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "كوكتيل + آيس",
      "قطع فواكه",
      "المايسترو"
    ],
    "ingredientsAr": [
      "فواكه مشكلة",
      "آيس كريم"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fc-cocktail-mix",
    "slug": "cocktail-blended",
    "nameAr": "كوكتيل خلط",
    "nameEn": "Blended Cocktail",
    "descriptionAr": "كوكتيل فواكه مخلوط غني ومركز",
    "categorySlug": "fruit-cuts",
    "categoryNameAr": "قطع فواكه",
    "basePrice": 55,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 55,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "كوكتيل خلط",
      "قطع فواكه",
      "المايسترو"
    ],
    "ingredientsAr": [
      "فواكه طبيعية مشكلة"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fc-fruit-salad",
    "slug": "fruit-salad",
    "nameAr": "فروت سالط",
    "nameEn": "Fresh Fruit Salad Bowl",
    "descriptionAr": "طبق سلطة فواكه طازجة مشكلة غني بالفيتامينات",
    "categorySlug": "fruit-cuts",
    "categoryNameAr": "قطع فواكه",
    "basePrice": 85,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 85,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-salad-bowl.png",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "سلطة فواكه"
    ],
    "ingredientsAr": [
      "فواكه طازجة مشكلة"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fc-fruit-salad-ice",
    "slug": "fruit-salad-ice",
    "nameAr": "فروت سالط + آيس",
    "nameEn": "Fruit Salad with Ice Cream",
    "descriptionAr": "طبق سلطة فواكه مع بولة آيس كريم فانيليا فاخرة",
    "categorySlug": "fruit-cuts",
    "categoryNameAr": "قطع فواكه",
    "basePrice": 95,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 95,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-salad-icecream.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "فروت سالط + آيس",
      "قطع فواكه",
      "المايسترو"
    ],
    "ingredientsAr": [
      "فواكه مشكلة",
      "آيس كريم"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fc-bomb",
    "slug": "elmaestro-bomb",
    "nameAr": "قنبلة",
    "nameEn": "El Maestro Bomb",
    "descriptionAr": "قنبلة الفواكه الشهيرة: أرز بلبن وقطع فواكه وعصير وقشطة",
    "categorySlug": "fruit-cuts",
    "categoryNameAr": "قطع فواكه",
    "basePrice": 85,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 85,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/super-elmaestro-bomb.png",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "قنبلة"
    ],
    "ingredientsAr": [
      "أرز باللبن",
      "قطع فواكه",
      "قشطة",
      "عصير"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fc-bomb-nuts",
    "slug": "elmaestro-bomb-nuts",
    "nameAr": "قنبلة مكسرات",
    "nameEn": "Bomb with Premium Nuts",
    "descriptionAr": "قنبلة الفواكه والأرز باللبن والقشطة مغطاة بالمكسرات الفاخرة",
    "categorySlug": "fruit-cuts",
    "categoryNameAr": "قطع فواكه",
    "basePrice": 110,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 110,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/super-elmaestro-bomb.png",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "قنبلة بالمكسرات"
    ],
    "ingredientsAr": [
      "أرز باللبن",
      "قطع فواكه",
      "قشطة",
      "مكسرات فاخرة"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fc-night-calm",
    "slug": "night-calm",
    "nameAr": "هدوء الليل",
    "nameEn": "Night Calm Dessert",
    "descriptionAr": "أرز بلبن + فراولة + قطع فاكهة + قشطة",
    "categorySlug": "fruit-cuts",
    "categoryNameAr": "قطع فواكه",
    "basePrice": 50,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 50,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/rice-pudding.jpg",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "هدوء الليل"
    ],
    "ingredientsAr": [
      "أرز بلبن",
      "فراولة",
      "قطع فاكهة",
      "قشطة"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fc-pomegranate-seeds",
    "slug": "pomegranate-seeds",
    "nameAr": "رمان حب",
    "nameEn": "Pomegranate Seeds Cup",
    "descriptionAr": "كوب حبوب الرمان الطبيعي الطازج المصفى",
    "categorySlug": "fruit-cuts",
    "categoryNameAr": "قطع فواكه",
    "basePrice": 50,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 50,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/pomegranate-seeds-cup.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "رمان حب",
      "قطع فواكه",
      "المايسترو"
    ],
    "ingredientsAr": [
      "رمان حب فريش"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fc-cantaloupe-cuts",
    "slug": "cantaloupe-cuts",
    "nameAr": "كنتالوب قطع",
    "nameEn": "Cantaloupe Chunks",
    "descriptionAr": "قطع كنتالوب طازجة ومثلجة",
    "categorySlug": "fruit-cuts",
    "categoryNameAr": "قطع فواكه",
    "basePrice": 50,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 50,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/cantaloupe-juice.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "كنتالوب قطع",
      "قطع فواكه",
      "المايسترو"
    ],
    "ingredientsAr": [
      "كنتالوب قطع"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fc-orange-cuts",
    "slug": "orange-cuts",
    "nameAr": "برتقال قطع",
    "nameEn": "Orange Chunks",
    "descriptionAr": "شرائح وقطع برتقال طازجة",
    "categorySlug": "fruit-cuts",
    "categoryNameAr": "قطع فواكه",
    "basePrice": 50,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 50,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/orange-juice.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "برتقال قطع",
      "قطع فواكه",
      "المايسترو"
    ],
    "ingredientsAr": [
      "برتقال قطع"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fc-strawberry-cuts",
    "slug": "strawberry-cuts",
    "nameAr": "فراولة قطع",
    "nameEn": "Strawberry Chunks",
    "descriptionAr": "كوب قطع فراولة طازجة ولذيذة",
    "categorySlug": "fruit-cuts",
    "categoryNameAr": "قطع فواكه",
    "basePrice": 60,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 60,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/strawberry-juice.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "فراولة قطع",
      "قطع فواكه",
      "المايسترو"
    ],
    "ingredientsAr": [
      "فراولة قطع"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fc-watermelon-cuts",
    "slug": "watermelon-cuts",
    "nameAr": "بطيخ قطع",
    "nameEn": "Watermelon Chunks Cup",
    "descriptionAr": "كوب مكعبات بطيخ أحمر مثلج ومنعش",
    "categorySlug": "fruit-cuts",
    "categoryNameAr": "قطع فواكه",
    "basePrice": 60,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 60,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/watermelon-chunks-cup.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "بطيخ قطع",
      "قطع فواكه",
      "المايسترو"
    ],
    "ingredientsAr": [
      "بطيخ أحمر"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fc-mango-cuts",
    "slug": "mango-cuts",
    "nameAr": "مانجو قطع",
    "nameEn": "Mango Chunks Cup",
    "descriptionAr": "قطع مكعبات مانجو استوائية طازجة فاخرة",
    "categorySlug": "fruit-cuts",
    "categoryNameAr": "قطع فواكه",
    "basePrice": 75,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 75,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-chunks-cup.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "مانجو قطع"
    ],
    "ingredientsAr": [
      "مانجو فريش قطع"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fc-kiwi-cuts",
    "slug": "kiwi-cuts",
    "nameAr": "كيوي قطع",
    "nameEn": "Kiwi Chunks",
    "descriptionAr": "قطع كيوي فريش منعشة وغنية بفيتامين سي",
    "categorySlug": "fruit-cuts",
    "categoryNameAr": "قطع فواكه",
    "basePrice": 75,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 75,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/kiwi-chunks-cup.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "كيوي قطع",
      "قطع فواكه",
      "المايسترو"
    ],
    "ingredientsAr": [
      "كيوي قطع"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fc-plum-cuts",
    "slug": "plum-cuts",
    "nameAr": "برقوق قطع",
    "nameEn": "Plum Chunks",
    "descriptionAr": "قطع برقوق طازجة ولذيذة",
    "categorySlug": "fruit-cuts",
    "categoryNameAr": "قطع فواكه",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/strawberry-juice.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "برقوق قطع",
      "قطع فواكه",
      "المايسترو"
    ],
    "ingredientsAr": [
      "برقوق"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fc-peach-cuts",
    "slug": "peach-cuts",
    "nameAr": "خوخ قطع",
    "nameEn": "Peach Chunks",
    "descriptionAr": "قطع خوخ طازجة وحلوة المذاق",
    "categorySlug": "fruit-cuts",
    "categoryNameAr": "قطع فواكه",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/orange-juice.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "خوخ قطع",
      "قطع فواكه",
      "المايسترو"
    ],
    "ingredientsAr": [
      "خوخ"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fc-pineapple-cuts",
    "slug": "pineapple-cuts",
    "nameAr": "أناناس قطع",
    "nameEn": "Pineapple Chunks",
    "descriptionAr": "قطع أناناس طبيعي استوائي طازج",
    "categorySlug": "fruit-cuts",
    "categoryNameAr": "قطع فواكه",
    "basePrice": 100,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 100,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/pineapple-chunks-seasonal.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "أناناس قطع",
      "قطع فواكه",
      "المايسترو"
    ],
    "ingredientsAr": [
      "أناناس"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fc-avocado-fatteh",
    "slug": "avocado-fatteh",
    "nameAr": "فتة أفوكادو",
    "nameEn": "Avocado Fatteh Bowl",
    "descriptionAr": "فتة أفوكادو ملكية: موز + تفاح + أفوكادو + مانجو",
    "categorySlug": "fruit-cuts",
    "categoryNameAr": "قطع فواكه",
    "basePrice": 135,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 135,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "فتة أفوكادو"
    ],
    "ingredientsAr": [
      "موز",
      "تفاح",
      "أفوكادو",
      "مانجو"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fc-custom-mix",
    "slug": "custom-fruit-mix",
    "nameAr": "ميكس قطع حسب الاختيار",
    "nameEn": "Custom Fruit Chunks Mix",
    "descriptionAr": "تشكيلة قطع فواكه طازجة حسب اختيار ورغبة العميل",
    "categorySlug": "fruit-cuts",
    "categoryNameAr": "قطع فواكه",
    "basePrice": 60,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 60,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/mixed-fruits-chunks.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "ميكس قطع حسب الاختيار",
      "قطع فواكه",
      "المايسترو"
    ],
    "ingredientsAr": [
      "فواكه حسب اختيار العميل"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "boba-sobya",
    "slug": "boba-sobya",
    "nameAr": "بوبا سوبيا",
    "nameEn": "Boba Sobya",
    "descriptionAr": "سوبيا مثلجة بحبيبات بوبا بنكهة من اختيارك",
    "categorySlug": "boba-corner",
    "categoryNameAr": "بوبا كورنر",
    "basePrice": 50,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 50,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/boba-milkshake-blueberry.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "بوبا سوبيا",
      "بوبا كورنر",
      "المايسترو"
    ],
    "ingredientsAr": [
      "سوبيا",
      "حبيبات بوبا"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "boba-coffee",
    "slug": "boba-coffee",
    "nameAr": "بوبا كوفي",
    "nameEn": "Boba Coffee",
    "descriptionAr": "قهوة مثلجة مع حبيبات بوبا اللذيذة",
    "categorySlug": "boba-corner",
    "categoryNameAr": "بوبا كورنر",
    "basePrice": 50,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 50,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/boba-milkshake-coffee.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "بوبا كوفي"
    ],
    "ingredientsAr": [
      "قهوة مثلجة",
      "حبيبات بوبا"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "boba-caramel",
    "slug": "boba-caramel",
    "nameAr": "بوبا كراميل",
    "nameEn": "Boba Caramel",
    "descriptionAr": "مشروب الكراميل مع حبيبات بوبا المنعشة",
    "categorySlug": "boba-corner",
    "categoryNameAr": "بوبا كورنر",
    "basePrice": 50,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 50,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/boba-milkshake-blueberry.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "بوبا كراميل",
      "بوبا كورنر",
      "المايسترو"
    ],
    "ingredientsAr": [
      "كراميل",
      "حليب",
      "بوبا"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "boba-berries",
    "slug": "boba-berries",
    "nameAr": "بوبا بلو بيري - توت أحمر",
    "nameEn": "Boba Blueberry / Red Berry",
    "descriptionAr": "مشروب التوت المنعش مع حبيبات البوبا",
    "categorySlug": "boba-corner",
    "categoryNameAr": "بوبا كورنر",
    "basePrice": 50,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 50,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/boba-milkshake-blueberry.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "بوبا توت"
    ],
    "ingredientsAr": [
      "توت أزرق وأحمر",
      "بوبا"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "boba-strawberry",
    "slug": "boba-strawberry",
    "nameAr": "بوبا فراولة",
    "nameEn": "Boba Strawberry",
    "descriptionAr": "مشروب الفراولة الطازجة مع حبيبات بوبا",
    "categorySlug": "boba-corner",
    "categoryNameAr": "بوبا كورنر",
    "basePrice": 50,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 50,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/boba-milkshake-strawberry.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "بوبا فراولة",
      "بوبا كورنر",
      "المايسترو"
    ],
    "ingredientsAr": [
      "فراولة",
      "بوبا"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "boba-mango",
    "slug": "boba-mango",
    "nameAr": "بوبا مانجو",
    "nameEn": "Boba Mango",
    "descriptionAr": "عصير مانجو استوائي مع حبيبات البوبا",
    "categorySlug": "boba-corner",
    "categoryNameAr": "بوبا كورنر",
    "basePrice": 50,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 50,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/boba-milkshake-mango.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "بوبا مانجو",
      "بوبا كورنر",
      "المايسترو"
    ],
    "ingredientsAr": [
      "مانجو",
      "بوبا"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "boba-cola",
    "slug": "boba-cola",
    "nameAr": "بوبا كولا",
    "nameEn": "Boba Cola",
    "descriptionAr": "كولا مثلجة مع حبيبات البوبا المنعشة",
    "categorySlug": "boba-corner",
    "categoryNameAr": "بوبا كورنر",
    "basePrice": 50,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 50,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/boba-mojito-jelly-cola.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "بوبا كولا",
      "بوبا كورنر",
      "المايسترو"
    ],
    "ingredientsAr": [
      "كولا",
      "بوبا"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-viva",
    "slug": "viva",
    "nameAr": "فيفا",
    "nameEn": "فيفا",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: موز + بلح + لبن + آيس",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/banana-milk.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "فيفا",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "موز",
      "بلح",
      "لبن",
      "آيس"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-story",
    "slug": "hekayet-fakha",
    "nameAr": "حكاية فاكهة",
    "nameEn": "حكاية فاكهة",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: فراولة + موز + لبن + آيس",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/strawberry-milk.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "حكاية فاكهة",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "فراولة",
      "موز",
      "لبن",
      "آيس"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-golden-mood",
    "slug": "golden-mood",
    "nameAr": "المزاج الذهبي",
    "nameEn": "المزاج الذهبي",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: بلح + كيوي + تفاح + عسل",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/super-vitamin-c.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "المزاج الذهبي",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "بلح",
      "كيوي",
      "تفاح",
      "عسل"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-love-story",
    "slug": "seret-el-hob",
    "nameAr": "سيرة الحب",
    "nameEn": "سيرة الحب",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: رمان حب + جوافة",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/pomegranate-juice.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "سيرة الحب",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "رمان حب",
      "جوافة"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-eternal-tune",
    "slug": "el-lahn-el-khaled",
    "nameAr": "اللحن الخالد",
    "nameEn": "اللحن الخالد",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: بلح + مانجو + آيس + عسل",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-icecream.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "اللحن الخالد",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "بلح",
      "مانجو",
      "آيس",
      "عسل"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-fresh-boost",
    "slug": "fresh-boost",
    "nameAr": "فريش بوست",
    "nameEn": "فريش بوست",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: فراولة + جوافة + موز",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "فريش بوست",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "فراولة",
      "جوافة",
      "موز"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-royal-creation",
    "slug": "royal-creation",
    "nameAr": "الإبداع الملكي",
    "nameEn": "الإبداع الملكي",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: مانجو + زبادي + لبن + آيس",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-yogurt-nuts.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "الإبداع الملكي",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "مانجو",
      "زبادي",
      "لبن",
      "آيس"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-banana-special",
    "slug": "banana-special",
    "nameAr": "موز اسبشيال",
    "nameEn": "موز اسبشيال",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: موز عصير + موز قطع + لبن + آيس",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/special-banana-plate.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "موز اسبشيال",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "موز عصير",
      "موز قطع",
      "لبن",
      "آيس"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-mocha",
    "slug": "mocha-vitamin",
    "nameAr": "موكا",
    "nameEn": "موكا",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: آيس فانيليا + نسكافيه + لبن",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/mocha-milkshake.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "موكا",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "آيس فانيليا",
      "نسكافيه",
      "لبن"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-vitamin-c",
    "slug": "super-vitamin-c",
    "nameAr": "فيتامين سي",
    "nameEn": "فيتامين سي",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: برتقال + جوافة + ليمون + عسل",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/super-vitamin-c.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "فيتامين سي",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "برتقال",
      "جوافة",
      "ليمون",
      "عسل"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-sahr-layali",
    "slug": "sahr-el-layali",
    "nameAr": "سهر الليالي",
    "nameEn": "سهر الليالي",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: أناناس + موز + فراولة + آيس",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 75,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 75,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "سهر الليالي",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "أناناس",
      "موز",
      "فراولة",
      "آيس"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-taqa",
    "slug": "taqa-energy",
    "nameAr": "طاقة",
    "nameEn": "طاقة",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: أوريو + سوداني + بلح + بندق + عسل",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 75,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 75,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/walnut-drink.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "طاقة",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "أوريو",
      "سوداني",
      "بلح",
      "بندق",
      "عسل"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-lahn-khulood",
    "slug": "lahn-el-khulood",
    "nameAr": "لحن الخلود",
    "nameEn": "لحن الخلود",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: تفاح + موز + برتقال",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 75,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 75,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "لحن الخلود",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "تفاح",
      "موز",
      "برتقال"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-saroukh",
    "slug": "saroukh-rocket",
    "nameAr": "صاروخ",
    "nameEn": "صاروخ",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: أناناس + موز + مانجو + آيس",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 75,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 75,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-rocket.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "صاروخ",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "أناناس",
      "موز",
      "مانجو",
      "آيس"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-zi-el-hawa",
    "slug": "zi-el-hawa",
    "nameAr": "زي الهوا",
    "nameEn": "زي الهوا",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: أناناس + كيوي + ليمون",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/kiwi-pineapple.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "زي الهوا",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "أناناس",
      "كيوي",
      "ليمون"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-orchestra",
    "slug": "orchestra",
    "nameAr": "أوركسترا",
    "nameEn": "أوركسترا",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: مانجو + أناناس + لبن + آيس",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 75,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 75,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-pineapple.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "أوركسترا",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "مانجو",
      "أناناس",
      "لبن",
      "آيس"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-oyoun-el-qalb",
    "slug": "oyoun-el-qalb",
    "nameAr": "عيون القلب",
    "nameEn": "عيون القلب",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: أناناس + كيوي + برتقال",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/kiwi-orange.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عيون القلب",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "أناناس",
      "كيوي",
      "برتقال"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-havana",
    "slug": "havana",
    "nameAr": "هافانا",
    "nameEn": "هافانا",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: أناناس + تفاح + برتقال",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 75,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 75,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/pineapple-orange.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "هافانا",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "أناناس",
      "تفاح",
      "برتقال"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-shawwaqna",
    "slug": "shawwaqna",
    "nameAr": "شوقنا",
    "nameEn": "شوقنا",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: كيوي + تفاح + موز",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/kiwi-juice.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "شوقنا",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "كيوي",
      "تفاح",
      "موز"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-pina-colada",
    "slug": "pina-colada",
    "nameAr": "بينا كولادا",
    "nameEn": "بينا كولادا",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: أناناس + برتقال + جوز هند",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 75,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 75,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/pineapple-juice.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "بينا كولادا",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "أناناس",
      "برتقال",
      "جوز هند"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-sawah",
    "slug": "sawah",
    "nameAr": "سواح",
    "nameEn": "سواح",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: كيوي + جريب فروت + أناناس",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/kiwi-juice.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "سواح",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "كيوي",
      "جريب فروت",
      "أناناس"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-royal-refresh",
    "slug": "enteash-el-molook",
    "nameAr": "انتعاش الملوك",
    "nameEn": "انتعاش الملوك",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: كيوي + تفاح + أفوكادو",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 75,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 75,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "انتعاش الملوك",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "كيوي",
      "تفاح",
      "أفوكادو"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-mawred",
    "slug": "mawred",
    "nameAr": "موعد",
    "nameEn": "موعد",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: كيوي + نعناع + ليمون",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/kiwi-juice.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "موعد",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "كيوي",
      "نعناع",
      "ليمون"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-mexici",
    "slug": "mexici",
    "nameAr": "ميكسيكي",
    "nameEn": "ميكسيكي",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: تفاح + أناناس + برتقال + عسل + آيس",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 75,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 75,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "ميكسيكي",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "تفاح",
      "أناناس",
      "برتقال",
      "عسل",
      "آيس"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-ketab-hayati",
    "slug": "ketab-hayati",
    "nameAr": "كتاب حياتي",
    "nameEn": "كتاب حياتي",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: كيوي + ليمون + برتقال",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/kiwi-orange.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "كتاب حياتي",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "كيوي",
      "ليمون",
      "برتقال"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-mega",
    "slug": "mega-mix",
    "nameAr": "ميجا",
    "nameEn": "ميجا",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: أفوكادو + تفاح + موز + لبن",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 90,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 90,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "ميجا",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "أفوكادو",
      "تفاح",
      "موز",
      "لبن"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-half-power",
    "slug": "half-power",
    "nameAr": "هاف باور",
    "nameEn": "هاف باور",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: بلح + كيوي + عسل + لبن + آيس",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 90,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 90,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/dates-milk.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "هاف باور",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "بلح",
      "كيوي",
      "عسل",
      "لبن",
      "آيس"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-africano",
    "slug": "africano",
    "nameAr": "أفريكانو",
    "nameEn": "أفريكانو",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: أناناس + أفوكادو + موز",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 90,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 90,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "أفريكانو",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "أناناس",
      "أفوكادو",
      "موز"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "v-summer-breeze",
    "slug": "naseem-el-seif",
    "nameAr": "نسيم الصيف",
    "nameEn": "نسيم الصيف",
    "descriptionAr": "مزيج فيتامين طبيعي منعش يتكون من: برقوق + تفاح + كيوي + بلح + لبن",
    "categorySlug": "vitamins",
    "categoryNameAr": "الفيتامينات",
    "basePrice": 90,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 90,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "نسيم الصيف",
      "فيتامينات",
      "خلطة المايسترو"
    ],
    "ingredientsAr": [
      "برقوق",
      "تفاح",
      "كيوي",
      "بلح",
      "لبن"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "diet-lahn",
    "slug": "diet-lahn-el-khulood",
    "nameAr": "لحن الخلود (دايت)",
    "nameEn": "لحن الخلود (دايت)",
    "descriptionAr": "مشروب صحي وخفيف مناسب للدايت والحمية: تفاح + موز + برتقال",
    "categorySlug": "diet-corner",
    "categoryNameAr": "دايت كورنر",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/kiwi-orange.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "لحن الخلود (دايت)",
      "دايت",
      "صحي"
    ],
    "ingredientsAr": [
      "تفاح",
      "موز",
      "برتقال"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "diet-zi",
    "slug": "diet-zi-el-hawa",
    "nameAr": "زي الهوا (دايت)",
    "nameEn": "زي الهوا (دايت)",
    "descriptionAr": "مشروب صحي وخفيف مناسب للدايت والحمية: أناناس + كيوي + ليمون",
    "categorySlug": "diet-corner",
    "categoryNameAr": "دايت كورنر",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/kiwi-orange.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "زي الهوا (دايت)",
      "دايت",
      "صحي"
    ],
    "ingredientsAr": [
      "أناناس",
      "كيوي",
      "ليمون"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "diet-oyoun",
    "slug": "diet-oyoun-el-qalb",
    "nameAr": "عيون القلب (دايت)",
    "nameEn": "عيون القلب (دايت)",
    "descriptionAr": "مشروب صحي وخفيف مناسب للدايت والحمية: أناناس + كيوي + برتقال",
    "categorySlug": "diet-corner",
    "categoryNameAr": "دايت كورنر",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/kiwi-orange.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "عيون القلب (دايت)",
      "دايت",
      "صحي"
    ],
    "ingredientsAr": [
      "أناناس",
      "كيوي",
      "برتقال"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "diet-shawwaqna",
    "slug": "diet-shawwaqna",
    "nameAr": "شوقنا (دايت)",
    "nameEn": "شوقنا (دايت)",
    "descriptionAr": "مشروب صحي وخفيف مناسب للدايت والحمية: كيوي + تفاح + موز",
    "categorySlug": "diet-corner",
    "categoryNameAr": "دايت كورنر",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/kiwi-orange.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "شوقنا (دايت)",
      "دايت",
      "صحي"
    ],
    "ingredientsAr": [
      "كيوي",
      "تفاح",
      "موز"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "diet-sawah",
    "slug": "diet-sawah",
    "nameAr": "سواح (دايت)",
    "nameEn": "سواح (دايت)",
    "descriptionAr": "مشروب صحي وخفيف مناسب للدايت والحمية: كيوي + جريب فروت + أناناس",
    "categorySlug": "diet-corner",
    "categoryNameAr": "دايت كورنر",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/kiwi-orange.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "سواح (دايت)",
      "دايت",
      "صحي"
    ],
    "ingredientsAr": [
      "كيوي",
      "جريب فروت",
      "أناناس"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "diet-mawred",
    "slug": "diet-mawred",
    "nameAr": "موعد (دايت)",
    "nameEn": "موعد (دايت)",
    "descriptionAr": "مشروب صحي وخفيف مناسب للدايت والحمية: كيوي + نعناع + ليمون",
    "categorySlug": "diet-corner",
    "categoryNameAr": "دايت كورنر",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/kiwi-orange.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "موعد (دايت)",
      "دايت",
      "صحي"
    ],
    "ingredientsAr": [
      "كيوي",
      "نعناع",
      "ليمون"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "diet-ketab",
    "slug": "diet-ketab-hayati",
    "nameAr": "كتاب حياتي (دايت)",
    "nameEn": "كتاب حياتي (دايت)",
    "descriptionAr": "مشروب صحي وخفيف مناسب للدايت والحمية: كيوي + ليمون + برتقال",
    "categorySlug": "diet-corner",
    "categoryNameAr": "دايت كورنر",
    "basePrice": 70,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 70,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/kiwi-orange.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "كتاب حياتي (دايت)",
      "دايت",
      "صحي"
    ],
    "ingredientsAr": [
      "كيوي",
      "ليمون",
      "برتقال"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "p-elmaestro",
    "slug": "elmaestro-special-power",
    "nameAr": "باور المايسترو",
    "nameEn": "Power المايسترو",
    "descriptionAr": "مشروب طاقة ملكي يتكون من: كاجو + بندق + أفوكادو + حلاوة + قشطة",
    "categorySlug": "power-mix",
    "categoryNameAr": "ميكس باور",
    "basePrice": 100,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 100,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/super-elmaestro-bomb.png",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "المايسترو",
      "ميكس باور",
      "طاقة",
      "المايسترو"
    ],
    "ingredientsAr": [
      "كاجو",
      "بندق",
      "أفوكادو",
      "حلاوة",
      "قشطة"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "p-alf-leila",
    "slug": "alf-leila-wa-leila",
    "nameAr": "باور ألف ليلة وليلة",
    "nameEn": "Power ألف ليلة وليلة",
    "descriptionAr": "مشروب طاقة ملكي يتكون من: أفوكادو + كاجو + كيوي + بلح + آيس",
    "categorySlug": "power-mix",
    "categoryNameAr": "ميكس باور",
    "basePrice": 100,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 100,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/super-elmaestro-bomb.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "ألف ليلة وليلة",
      "ميكس باور",
      "طاقة",
      "المايسترو"
    ],
    "ingredientsAr": [
      "أفوكادو",
      "كاجو",
      "كيوي",
      "بلح",
      "آيس"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "p-el-atlal",
    "slug": "el-atlal",
    "nameAr": "باور الإطلال",
    "nameEn": "Power الإطلال",
    "descriptionAr": "مشروب طاقة ملكي يتكون من: كاجو + مانجو + عسل + لبن + آيس",
    "categorySlug": "power-mix",
    "categoryNameAr": "ميكس باور",
    "basePrice": 100,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 100,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/super-elmaestro-bomb.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "الإطلال",
      "ميكس باور",
      "طاقة",
      "المايسترو"
    ],
    "ingredientsAr": [
      "كاجو",
      "مانجو",
      "عسل",
      "لبن",
      "آيس"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "p-golden-taste",
    "slug": "el-mazag-el-zahaby-power",
    "nameAr": "باور المذاق الذهبي",
    "nameEn": "Power المذاق الذهبي",
    "descriptionAr": "مشروب طاقة ملكي يتكون من: بندق + كاجو + عسل + لبن + آيس",
    "categorySlug": "power-mix",
    "categoryNameAr": "ميكس باور",
    "basePrice": 100,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 100,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/super-elmaestro-bomb.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "المذاق الذهبي",
      "ميكس باور",
      "طاقة",
      "المايسترو"
    ],
    "ingredientsAr": [
      "بندق",
      "كاجو",
      "عسل",
      "لبن",
      "آيس"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "p-king",
    "slug": "the-king-power",
    "nameAr": "باور الكينج",
    "nameEn": "Power الكينج",
    "descriptionAr": "مشروب طاقة ملكي يتكون من: بندق + توينكيز + عسل + لبن + آيس",
    "categorySlug": "power-mix",
    "categoryNameAr": "ميكس باور",
    "basePrice": 100,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 100,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/super-elmaestro-bomb.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "الكينج",
      "ميكس باور",
      "طاقة",
      "المايسترو"
    ],
    "ingredientsAr": [
      "بندق",
      "توينكيز",
      "عسل",
      "لبن",
      "آيس"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "p-dream-theater",
    "slug": "masrah-el-ahlam",
    "nameAr": "باور مسرح الأحلام",
    "nameEn": "Power مسرح الأحلام",
    "descriptionAr": "مشروب طاقة ملكي يتكون من: بندق + لوز + بلح + عسل + لبن + آيس",
    "categorySlug": "power-mix",
    "categoryNameAr": "ميكس باور",
    "basePrice": 100,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 100,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/super-elmaestro-bomb.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "مسرح الأحلام",
      "ميكس باور",
      "طاقة",
      "المايسترو"
    ],
    "ingredientsAr": [
      "بندق",
      "لوز",
      "بلح",
      "عسل",
      "لبن",
      "آيس"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "p-magician",
    "slug": "el-saher",
    "nameAr": "باور الساحر",
    "nameEn": "Power الساحر",
    "descriptionAr": "مشروب طاقة ملكي يتكون من: مانجو + فراولة + خوخ + عسل + آيس",
    "categorySlug": "power-mix",
    "categoryNameAr": "ميكس باور",
    "basePrice": 100,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 100,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/super-elmaestro-bomb.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "الساحر",
      "ميكس باور",
      "طاقة",
      "المايسترو"
    ],
    "ingredientsAr": [
      "مانجو",
      "فراولة",
      "خوخ",
      "عسل",
      "آيس"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "p-jabbar",
    "slug": "jabbar-power",
    "nameAr": "باور جبار",
    "nameEn": "Power جبار",
    "descriptionAr": "مشروب طاقة ملكي يتكون من: أفوكادو + كيوي + موز + زبادي + عسل",
    "categorySlug": "power-mix",
    "categoryNameAr": "ميكس باور",
    "basePrice": 100,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 100,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/super-elmaestro-bomb.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "جبار",
      "ميكس باور",
      "طاقة",
      "المايسترو"
    ],
    "ingredientsAr": [
      "أفوكادو",
      "كيوي",
      "موز",
      "زبادي",
      "عسل"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "p-happy-end",
    "slug": "nehaya-saeeda",
    "nameAr": "باور نهاية سعيدة",
    "nameEn": "Power نهاية سعيدة",
    "descriptionAr": "مشروب طاقة ملكي يتكون من: فستق + كاجو + لبن + آيس",
    "categorySlug": "power-mix",
    "categoryNameAr": "ميكس باور",
    "basePrice": 100,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 100,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/super-elmaestro-bomb.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "نهاية سعيدة",
      "ميكس باور",
      "طاقة",
      "المايسترو"
    ],
    "ingredientsAr": [
      "فستق",
      "كاجو",
      "لبن",
      "آيس"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "p-beethoven",
    "slug": "beethoven-mix",
    "nameAr": "باور بيتهوفن",
    "nameEn": "Power بيتهوفن",
    "descriptionAr": "مشروب طاقة ملكي يتكون من: أفوكادو + كيوي + بلح + آيس + عسل + مانجو",
    "categorySlug": "power-mix",
    "categoryNameAr": "ميكس باور",
    "basePrice": 100,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 100,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/super-elmaestro-bomb.png",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "بيتهوفن",
      "ميكس باور",
      "طاقة",
      "المايسترو"
    ],
    "ingredientsAr": [
      "أفوكادو",
      "كيوي",
      "بلح",
      "آيس",
      "عسل",
      "مانجو"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "p-bent-sultan",
    "slug": "bent-el-sultan",
    "nameAr": "باور بنت السلطان",
    "nameEn": "Power بنت السلطان",
    "descriptionAr": "مشروب طاقة ملكي يتكون من: كاجو + بندق + أفوكادو + حلاوة",
    "categorySlug": "power-mix",
    "categoryNameAr": "ميكس باور",
    "basePrice": 100,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 100,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/super-elmaestro-bomb.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "بنت السلطان",
      "ميكس باور",
      "طاقة",
      "المايسترو"
    ],
    "ingredientsAr": [
      "كاجو",
      "بندق",
      "أفوكادو",
      "حلاوة"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "p-high-energy",
    "slug": "el-taqa-el-aleya",
    "nameAr": "باور الطاقة العالية",
    "nameEn": "Power الطاقة العالية",
    "descriptionAr": "مشروب طاقة ملكي يتكون من: أفوكادو + بلح + كيوي + لبن",
    "categorySlug": "power-mix",
    "categoryNameAr": "ميكس باور",
    "basePrice": 100,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 100,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/super-elmaestro-bomb.png",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "الطاقة العالية",
      "ميكس باور",
      "طاقة",
      "المايسترو"
    ],
    "ingredientsAr": [
      "أفوكادو",
      "بلح",
      "كيوي",
      "لبن"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "moj-mint",
    "slug": "mojito-mint",
    "nameAr": "موهيتو نعناع",
    "nameEn": "موهيتو نعناع",
    "descriptionAr": "موهيتو منعش ومثلج يتكون من: ليمون + نعناع فريش + صودا + ثلج (مع كولا أو سفن حسب طلبك)",
    "categorySlug": "mojito",
    "categoryNameAr": "الموهيتو (كولا - سفن)",
    "basePrice": 55,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 55,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/boba-mojito-lemon-mint.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "موهيتو نعناع",
      "موهيتو",
      "منعش"
    ],
    "ingredientsAr": [
      "ليمون",
      "نعناع فريش",
      "صودا",
      "ثلج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "moj-strawberry",
    "slug": "mojito-strawberry",
    "nameAr": "موهيتو فراولة",
    "nameEn": "موهيتو فراولة",
    "descriptionAr": "موهيتو منعش ومثلج يتكون من: ليمون + نعناع + فراولة + صودا + ثلج (مع كولا أو سفن حسب طلبك)",
    "categorySlug": "mojito",
    "categoryNameAr": "الموهيتو (كولا - سفن)",
    "basePrice": 55,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 55,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/boba-mojito-blueberry.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "موهيتو فراولة",
      "موهيتو",
      "منعش"
    ],
    "ingredientsAr": [
      "ليمون",
      "نعناع",
      "فراولة",
      "صودا",
      "ثلج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "moj-pomegranate",
    "slug": "mojito-pomegranate",
    "nameAr": "موهيتو رمان",
    "nameEn": "موهيتو رمان",
    "descriptionAr": "موهيتو منعش ومثلج يتكون من: ليمون + نعناع + رمان + صودا + ثلج (مع كولا أو سفن حسب طلبك)",
    "categorySlug": "mojito",
    "categoryNameAr": "الموهيتو (كولا - سفن)",
    "basePrice": 55,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 55,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/boba-mojito-blueberry.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "موهيتو رمان",
      "موهيتو",
      "منعش"
    ],
    "ingredientsAr": [
      "ليمون",
      "نعناع",
      "رمان",
      "صودا",
      "ثلج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "moj-curacao",
    "slug": "mojito-blue-curacao",
    "nameAr": "موهيتو بلو كوراسو",
    "nameEn": "موهيتو بلو كوراسو",
    "descriptionAr": "موهيتو منعش ومثلج يتكون من: ليمون + نعناع + بلو كوراسو + صودا + ثلج (مع كولا أو سفن حسب طلبك)",
    "categorySlug": "mojito",
    "categoryNameAr": "الموهيتو (كولا - سفن)",
    "basePrice": 55,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 55,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/boba-mojito-blueberry.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "موهيتو بلو كوراسو",
      "موهيتو",
      "منعش"
    ],
    "ingredientsAr": [
      "ليمون",
      "نعناع",
      "بلو كوراسو",
      "صودا",
      "ثلج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "moj-blueberry",
    "slug": "mojito-blueberry",
    "nameAr": "موهيتو توت أزرق",
    "nameEn": "موهيتو توت أزرق",
    "descriptionAr": "موهيتو منعش ومثلج يتكون من: ليمون + نعناع + توت أزرق + صودا + ثلج (مع كولا أو سفن حسب طلبك)",
    "categorySlug": "mojito",
    "categoryNameAr": "الموهيتو (كولا - سفن)",
    "basePrice": 55,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 55,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/boba-mojito-blueberry.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "موهيتو توت أزرق",
      "موهيتو",
      "منعش"
    ],
    "ingredientsAr": [
      "ليمون",
      "نعناع",
      "توت أزرق",
      "صودا",
      "ثلج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "moj-redberry",
    "slug": "mojito-redberry",
    "nameAr": "موهيتو توت أحمر",
    "nameEn": "موهيتو توت أحمر",
    "descriptionAr": "موهيتو منعش ومثلج يتكون من: ليمون + نعناع + توت أحمر + صودا + ثلج (مع كولا أو سفن حسب طلبك)",
    "categorySlug": "mojito",
    "categoryNameAr": "الموهيتو (كولا - سفن)",
    "basePrice": 55,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 55,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/boba-mojito-blueberry.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "موهيتو توت أحمر",
      "موهيتو",
      "منعش"
    ],
    "ingredientsAr": [
      "ليمون",
      "نعناع",
      "توت أحمر",
      "صودا",
      "ثلج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sob-mango",
    "slug": "sobya-mango",
    "nameAr": "سوبيا مانجو",
    "nameEn": "سوبيا مانجو",
    "descriptionAr": "سوبيا مثلجة طبيعية بنكهة مانجو اللذيذة",
    "categorySlug": "sobya",
    "categoryNameAr": "السوبيا",
    "basePrice": 40,
    "sizes": [
      {
        "id": "sob-mango-sm",
        "nameAr": "حجم صغير",
        "nameEn": "Small",
        "price": 40,
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "sob-mango-lg",
        "nameAr": "حجم كبير",
        "nameEn": "Large",
        "price": 80,
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/sobya-natural.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "سوبيا مانجو",
      "سوبيا"
    ],
    "ingredientsAr": [
      "سوبيا طبيعية",
      "حليب",
      "جوز هند"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sob-strawberry",
    "slug": "sobya-strawberry",
    "nameAr": "سوبيا فراولة",
    "nameEn": "سوبيا فراولة",
    "descriptionAr": "سوبيا مثلجة طبيعية بنكهة فراولة اللذيذة",
    "categorySlug": "sobya",
    "categoryNameAr": "السوبيا",
    "basePrice": 40,
    "sizes": [
      {
        "id": "sob-strawberry-sm",
        "nameAr": "حجم صغير",
        "nameEn": "Small",
        "price": 40,
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "sob-strawberry-lg",
        "nameAr": "حجم كبير",
        "nameEn": "Large",
        "price": 80,
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/sobya-natural.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "سوبيا فراولة",
      "سوبيا"
    ],
    "ingredientsAr": [
      "سوبيا طبيعية",
      "حليب",
      "جوز هند"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sob-pineapple",
    "slug": "sobya-pineapple",
    "nameAr": "سوبيا أناناس",
    "nameEn": "سوبيا أناناس",
    "descriptionAr": "سوبيا مثلجة طبيعية بنكهة أناناس اللذيذة",
    "categorySlug": "sobya",
    "categoryNameAr": "السوبيا",
    "basePrice": 40,
    "sizes": [
      {
        "id": "sob-pineapple-sm",
        "nameAr": "حجم صغير",
        "nameEn": "Small",
        "price": 40,
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "sob-pineapple-lg",
        "nameAr": "حجم كبير",
        "nameEn": "Large",
        "price": 80,
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/sobya-natural.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "سوبيا أناناس",
      "سوبيا"
    ],
    "ingredientsAr": [
      "سوبيا طبيعية",
      "حليب",
      "جوز هند"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sob-fruits",
    "slug": "sobya-fruits",
    "nameAr": "سوبيا فواكه",
    "nameEn": "سوبيا فواكه",
    "descriptionAr": "سوبيا مثلجة طبيعية بنكهة فواكه اللذيذة",
    "categorySlug": "sobya",
    "categoryNameAr": "السوبيا",
    "basePrice": 40,
    "sizes": [
      {
        "id": "sob-fruits-sm",
        "nameAr": "حجم صغير",
        "nameEn": "Small",
        "price": 40,
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "sob-fruits-lg",
        "nameAr": "حجم كبير",
        "nameEn": "Large",
        "price": 80,
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/sobya-natural.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "سوبيا فواكه",
      "سوبيا"
    ],
    "ingredientsAr": [
      "سوبيا طبيعية",
      "حليب",
      "جوز هند"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sob-redberry",
    "slug": "sobya-redberry",
    "nameAr": "سوبيا توت أحمر",
    "nameEn": "سوبيا توت أحمر",
    "descriptionAr": "سوبيا مثلجة طبيعية بنكهة توت أحمر اللذيذة",
    "categorySlug": "sobya",
    "categoryNameAr": "السوبيا",
    "basePrice": 40,
    "sizes": [
      {
        "id": "sob-redberry-sm",
        "nameAr": "حجم صغير",
        "nameEn": "Small",
        "price": 40,
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "sob-redberry-lg",
        "nameAr": "حجم كبير",
        "nameEn": "Large",
        "price": 80,
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/sobya-natural.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "سوبيا توت أحمر",
      "سوبيا"
    ],
    "ingredientsAr": [
      "سوبيا طبيعية",
      "حليب",
      "جوز هند"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sob-blueberry",
    "slug": "sobya-blueberry",
    "nameAr": "سوبيا توت أزرق",
    "nameEn": "سوبيا توت أزرق",
    "descriptionAr": "سوبيا مثلجة طبيعية بنكهة توت أزرق اللذيذة",
    "categorySlug": "sobya",
    "categoryNameAr": "السوبيا",
    "basePrice": 40,
    "sizes": [
      {
        "id": "sob-blueberry-sm",
        "nameAr": "حجم صغير",
        "nameEn": "Small",
        "price": 40,
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "sob-blueberry-lg",
        "nameAr": "حجم كبير",
        "nameEn": "Large",
        "price": 80,
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/sobya-natural.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "سوبيا توت أزرق",
      "سوبيا"
    ],
    "ingredientsAr": [
      "سوبيا طبيعية",
      "حليب",
      "جوز هند"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sob-avocado",
    "slug": "sobya-avocado",
    "nameAr": "سوبيا أفوكادو",
    "nameEn": "سوبيا أفوكادو",
    "descriptionAr": "سوبيا مثلجة طبيعية بنكهة أفوكادو اللذيذة",
    "categorySlug": "sobya",
    "categoryNameAr": "السوبيا",
    "basePrice": 40,
    "sizes": [
      {
        "id": "sob-avocado-sm",
        "nameAr": "حجم صغير",
        "nameEn": "Small",
        "price": 40,
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "sob-avocado-lg",
        "nameAr": "حجم كبير",
        "nameEn": "Large",
        "price": 80,
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/sobya-natural.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "سوبيا أفوكادو",
      "سوبيا"
    ],
    "ingredientsAr": [
      "سوبيا طبيعية",
      "حليب",
      "جوز هند"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sob-pistachio",
    "slug": "sobya-pistachio",
    "nameAr": "سوبيا بيستاشيو",
    "nameEn": "سوبيا بيستاشيو",
    "descriptionAr": "سوبيا مثلجة طبيعية بنكهة بيستاشيو اللذيذة",
    "categorySlug": "sobya",
    "categoryNameAr": "السوبيا",
    "basePrice": 40,
    "sizes": [
      {
        "id": "sob-pistachio-sm",
        "nameAr": "حجم صغير",
        "nameEn": "Small",
        "price": 40,
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "sob-pistachio-lg",
        "nameAr": "حجم كبير",
        "nameEn": "Large",
        "price": 80,
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/sobya-natural.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "سوبيا بيستاشيو",
      "سوبيا"
    ],
    "ingredientsAr": [
      "سوبيا طبيعية",
      "حليب",
      "جوز هند"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sob-lotus",
    "slug": "sobya-lotus",
    "nameAr": "سوبيا لوتس",
    "nameEn": "سوبيا لوتس",
    "descriptionAr": "سوبيا مثلجة طبيعية بنكهة لوتس اللذيذة",
    "categorySlug": "sobya",
    "categoryNameAr": "السوبيا",
    "basePrice": 40,
    "sizes": [
      {
        "id": "sob-lotus-sm",
        "nameAr": "حجم صغير",
        "nameEn": "Small",
        "price": 40,
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "sob-lotus-lg",
        "nameAr": "حجم كبير",
        "nameEn": "Large",
        "price": 80,
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/sobya-natural.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "سوبيا لوتس",
      "سوبيا"
    ],
    "ingredientsAr": [
      "سوبيا طبيعية",
      "حليب",
      "جوز هند"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sob-nutella",
    "slug": "sobya-nutella",
    "nameAr": "سوبيا نوتيلا",
    "nameEn": "سوبيا نوتيلا",
    "descriptionAr": "سوبيا مثلجة طبيعية بنكهة نوتيلا اللذيذة",
    "categorySlug": "sobya",
    "categoryNameAr": "السوبيا",
    "basePrice": 40,
    "sizes": [
      {
        "id": "sob-nutella-sm",
        "nameAr": "حجم صغير",
        "nameEn": "Small",
        "price": 40,
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "sob-nutella-lg",
        "nameAr": "حجم كبير",
        "nameEn": "Large",
        "price": 80,
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/sobya-natural.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "سوبيا نوتيلا",
      "سوبيا"
    ],
    "ingredientsAr": [
      "سوبيا طبيعية",
      "حليب",
      "جوز هند"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sob-caramel",
    "slug": "sobya-caramel",
    "nameAr": "سوبيا كراميل",
    "nameEn": "سوبيا كراميل",
    "descriptionAr": "سوبيا مثلجة طبيعية بنكهة كراميل اللذيذة",
    "categorySlug": "sobya",
    "categoryNameAr": "السوبيا",
    "basePrice": 40,
    "sizes": [
      {
        "id": "sob-caramel-sm",
        "nameAr": "حجم صغير",
        "nameEn": "Small",
        "price": 40,
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "sob-caramel-lg",
        "nameAr": "حجم كبير",
        "nameEn": "Large",
        "price": 80,
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/sobya-natural.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "سوبيا كراميل",
      "سوبيا"
    ],
    "ingredientsAr": [
      "سوبيا طبيعية",
      "حليب",
      "جوز هند"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "rice-plain",
    "slug": "rice-pudding-plain",
    "nameAr": "رز بلبن سادة",
    "nameEn": "Plain Rice Pudding",
    "descriptionAr": "أرز بلبن فلاحي طازج مطهو على أصوله",
    "categorySlug": "rice-pudding",
    "categoryNameAr": "رز بلبن",
    "basePrice": 30,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 30,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/rice-pudding.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "رز بلبن سادة",
      "رز بلبن",
      "المايسترو"
    ],
    "ingredientsAr": [
      "أرز",
      "حليب فلاحي",
      "سكر"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "rice-mango",
    "slug": "rice-pudding-mango",
    "nameAr": "رز بلبن مانجو",
    "nameEn": "Rice Pudding with Mango",
    "descriptionAr": "أرز باللبن مغطى بقطع وصوص المانجو الفريش",
    "categorySlug": "rice-pudding",
    "categoryNameAr": "رز بلبن",
    "basePrice": 40,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 40,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/rice-pudding.jpg",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "رز بلبن مانجو"
    ],
    "ingredientsAr": [
      "أرز باللبن",
      "مانجو فريش"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "rice-strawberry",
    "slug": "rice-pudding-strawberry",
    "nameAr": "رز بلبن فراولة",
    "nameEn": "Rice Pudding with Strawberry",
    "descriptionAr": "أرز باللبن مع قطع الفراولة الطازجة",
    "categorySlug": "rice-pudding",
    "categoryNameAr": "رز بلبن",
    "basePrice": 40,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 40,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/rice-pudding.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "رز بلبن فراولة",
      "رز بلبن",
      "المايسترو"
    ],
    "ingredientsAr": [
      "أرز باللبن",
      "فراولة فريش"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "rice-blueberry",
    "slug": "rice-pudding-blueberry",
    "nameAr": "رز بلبن بلو بيري",
    "nameEn": "Rice Pudding with Blueberry",
    "descriptionAr": "أرز باللبن مع صوص التوت الأزرق الفاخر",
    "categorySlug": "rice-pudding",
    "categoryNameAr": "رز بلبن",
    "basePrice": 40,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 40,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/rice-pudding.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "رز بلبن بلو بيري",
      "رز بلبن",
      "المايسترو"
    ],
    "ingredientsAr": [
      "أرز باللبن",
      "بلوبيري"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "rice-fruits",
    "slug": "rice-pudding-fruits",
    "nameAr": "رز بلبن فواكه",
    "nameEn": "Rice Pudding with Fruit Chunks",
    "descriptionAr": "أرز باللبن مع تشكيلة قطع فواكه طازجة",
    "categorySlug": "rice-pudding",
    "categoryNameAr": "رز بلبن",
    "basePrice": 40,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 40,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/rice-pudding.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "رز بلبن فواكه",
      "رز بلبن",
      "المايسترو"
    ],
    "ingredientsAr": [
      "أرز باللبن",
      "فواكه مشكلة"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "rice-cream",
    "slug": "rice-pudding-cream",
    "nameAr": "رز بلبن قشطة",
    "nameEn": "Rice Pudding with Fresh Cream",
    "descriptionAr": "أرز باللبن فلاحي مع طبقة قشطة بلدي طبيعية",
    "categorySlug": "rice-pudding",
    "categoryNameAr": "رز بلبن",
    "basePrice": 40,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 40,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/rice-pudding.jpg",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "رز بلبن قشطة"
    ],
    "ingredientsAr": [
      "أرز باللبن",
      "قشطة بلدي"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "rice-oriental-sweets",
    "slug": "rice-pudding-kunafa-basbousa",
    "nameAr": "رز بلبن قشطة وكنافة وبسبوسة",
    "nameEn": "Rice Pudding Kunafa & Basbousa",
    "descriptionAr": "ميكس حلويات شرقية فاخر: أرز بلبن مع قشطة وكنافة وبسبوسة",
    "categorySlug": "rice-pudding",
    "categoryNameAr": "رز بلبن",
    "basePrice": 45,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 45,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/rice-pudding.jpg",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "حلويات شرقية"
    ],
    "ingredientsAr": [
      "أرز باللبن",
      "قشطة",
      "كنافة",
      "بسبوسة"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "rice-nuts",
    "slug": "rice-pudding-nuts",
    "nameAr": "رز بلبن مكسرات",
    "nameEn": "Rice Pudding with Nuts",
    "descriptionAr": "أرز باللبن مغطى بالمكسرات المحمصة الفاخرة",
    "categorySlug": "rice-pudding",
    "categoryNameAr": "رز بلبن",
    "basePrice": 50,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 50,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/rice-pudding.jpg",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "رز بلبن مكسرات"
    ],
    "ingredientsAr": [
      "أرز باللبن",
      "مكسرات فاخرة"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-sugarcane",
    "slug": "bottle-sugarcane",
    "nameAr": "عبوة قصب",
    "nameEn": "عبوة قصب",
    "descriptionAr": "عبوة قصب طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 40,
    "sizes": [
      {
        "id": "btl-sugarcane-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 40,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-sugarcane-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 140,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/sugarcane-pure.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة قصب",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-tamarind",
    "slug": "bottle-tamarind",
    "nameAr": "عبوة تمر هندي",
    "nameEn": "عبوة تمر هندي",
    "descriptionAr": "عبوة تمر هندي طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 40,
    "sizes": [
      {
        "id": "btl-tamarind-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 40,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-tamarind-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 140,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/tamarind-natural.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة تمر هندي",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-ennab",
    "slug": "bottle-ennab",
    "nameAr": "عبوة عناب",
    "nameEn": "عبوة عناب",
    "descriptionAr": "عبوة عناب طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 40,
    "sizes": [
      {
        "id": "btl-ennab-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 40,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-ennab-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 140,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/karkadeh-ennab.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة عناب",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-doum",
    "slug": "bottle-doum",
    "nameAr": "عبوة دوم",
    "nameEn": "عبوة دوم",
    "descriptionAr": "عبوة دوم طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 40,
    "sizes": [
      {
        "id": "btl-doum-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 40,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-doum-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 140,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/doum-juice.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة دوم",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-kharroub",
    "slug": "bottle-kharroub",
    "nameAr": "عبوة خروب",
    "nameEn": "عبوة خروب",
    "descriptionAr": "عبوة خروب طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 45,
    "sizes": [
      {
        "id": "btl-kharroub-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 45,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-kharroub-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 160,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/carob-kharroub.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة خروب",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-grapefruit",
    "slug": "bottle-grapefruit",
    "nameAr": "عبوة جريب فروت",
    "nameEn": "عبوة جريب فروت",
    "descriptionAr": "عبوة جريب فروت طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 50,
    "sizes": [
      {
        "id": "btl-grapefruit-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 50,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-grapefruit-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 180,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/orange-juice.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة جريب فروت",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-doum-milk",
    "slug": "bottle-doum-milk",
    "nameAr": "عبوة دوم باللبن",
    "nameEn": "عبوة دوم باللبن",
    "descriptionAr": "عبوة دوم باللبن طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 55,
    "sizes": [
      {
        "id": "btl-doum-milk-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 55,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-doum-milk-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 210,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/doum-milk.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة دوم باللبن",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-sobya",
    "slug": "bottle-sobya",
    "nameAr": "عبوة سوبيا",
    "nameEn": "عبوة سوبيا",
    "descriptionAr": "عبوة سوبيا طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 60,
    "sizes": [
      {
        "id": "btl-sobya-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 60,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-sobya-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 220,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/sobya-natural.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة سوبيا",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-orange",
    "slug": "bottle-orange",
    "nameAr": "عبوة برتقال",
    "nameEn": "عبوة برتقال",
    "descriptionAr": "عبوة برتقال طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 70,
    "sizes": [
      {
        "id": "btl-orange-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 70,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-orange-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 250,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/orange-juice.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة برتقال",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-lemon",
    "slug": "bottle-lemon",
    "nameAr": "عبوة ليمون",
    "nameEn": "عبوة ليمون",
    "descriptionAr": "عبوة ليمون طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 70,
    "sizes": [
      {
        "id": "btl-lemon-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 70,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-lemon-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 250,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/lemon-juice.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة ليمون",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-cantaloupe",
    "slug": "bottle-cantaloupe",
    "nameAr": "عبوة كنتالوب",
    "nameEn": "عبوة كنتالوب",
    "descriptionAr": "عبوة كنتالوب طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 70,
    "sizes": [
      {
        "id": "btl-cantaloupe-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 70,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-cantaloupe-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 250,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/cantaloupe-juice.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة كنتالوب",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-grape",
    "slug": "bottle-grape",
    "nameAr": "عبوة عنب",
    "nameEn": "عبوة عنب",
    "descriptionAr": "عبوة عنب طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 70,
    "sizes": [
      {
        "id": "btl-grape-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 70,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-grape-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 250,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/strawberry-juice.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة عنب",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-strawberry",
    "slug": "bottle-strawberry",
    "nameAr": "عبوة فراولة",
    "nameEn": "عبوة فراولة",
    "descriptionAr": "عبوة فراولة طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 75,
    "sizes": [
      {
        "id": "btl-strawberry-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 75,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-strawberry-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 260,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/strawberry-juice.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة فراولة",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-guava",
    "slug": "bottle-guava",
    "nameAr": "عبوة جوافة",
    "nameEn": "عبوة جوافة",
    "descriptionAr": "عبوة جوافة طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 75,
    "sizes": [
      {
        "id": "btl-guava-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 75,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-guava-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 260,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/guava-juice.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة جوافة",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-lemon-mint",
    "slug": "bottle-lemon-mint",
    "nameAr": "عبوة ليمون نعناع",
    "nameEn": "عبوة ليمون نعناع",
    "descriptionAr": "عبوة ليمون نعناع طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 75,
    "sizes": [
      {
        "id": "btl-lemon-mint-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 75,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-lemon-mint-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 260,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/lemon-mint-juice.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة ليمون نعناع",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-mango",
    "slug": "bottle-mango",
    "nameAr": "عبوة مانجو",
    "nameEn": "عبوة مانجو",
    "descriptionAr": "عبوة مانجو طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 80,
    "sizes": [
      {
        "id": "btl-mango-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 80,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-mango-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 280,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-chunks-bowl.jpg",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة مانجو",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-pomegranate",
    "slug": "bottle-pomegranate",
    "nameAr": "عبوة رمان",
    "nameEn": "عبوة رمان",
    "descriptionAr": "عبوة رمان طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 90,
    "sizes": [
      {
        "id": "btl-pomegranate-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 90,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-pomegranate-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 260,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/pomegranate-juice.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة رمان",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-banana-milk",
    "slug": "bottle-banana-milk",
    "nameAr": "عبوة موز باللبن",
    "nameEn": "عبوة موز باللبن",
    "descriptionAr": "عبوة موز باللبن طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 90,
    "sizes": [
      {
        "id": "btl-banana-milk-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 90,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-banana-milk-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 300,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/banana-milk.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة موز باللبن",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-cocktail",
    "slug": "bottle-cocktail-mix",
    "nameAr": "عبوة كوكتيل خلط",
    "nameEn": "عبوة كوكتيل خلط",
    "descriptionAr": "عبوة كوكتيل خلط طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 90,
    "sizes": [
      {
        "id": "btl-cocktail-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 90,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-cocktail-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 300,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة كوكتيل خلط",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-dates",
    "slug": "bottle-dates",
    "nameAr": "عبوة بلح باللبن",
    "nameEn": "عبوة بلح باللبن",
    "descriptionAr": "عبوة بلح باللبن طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 90,
    "sizes": [
      {
        "id": "btl-dates-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 90,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-dates-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 320,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/dates-milk.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة بلح باللبن",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-peach",
    "slug": "bottle-peach",
    "nameAr": "عبوة خوخ",
    "nameEn": "عبوة خوخ",
    "descriptionAr": "عبوة خوخ طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 90,
    "sizes": [
      {
        "id": "btl-peach-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 90,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-peach-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 320,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/orange-juice.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة خوخ",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-watermelon",
    "slug": "bottle-watermelon",
    "nameAr": "عبوة بطيخ",
    "nameEn": "عبوة بطيخ",
    "descriptionAr": "عبوة بطيخ طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 90,
    "sizes": [
      {
        "id": "btl-watermelon-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 90,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-watermelon-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 320,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/watermelon-juice.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة بطيخ",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-prickly-pear",
    "slug": "bottle-prickly-pear",
    "nameAr": "عبوة تين شوكي",
    "nameEn": "عبوة تين شوكي",
    "descriptionAr": "عبوة تين شوكي طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 90,
    "sizes": [
      {
        "id": "btl-prickly-pear-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 90,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-prickly-pear-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 320,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/prickly-pear-juice.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة تين شوكي",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-kiwi",
    "slug": "bottle-kiwi",
    "nameAr": "عبوة كيوي",
    "nameEn": "عبوة كيوي",
    "descriptionAr": "عبوة كيوي طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 110,
    "sizes": [
      {
        "id": "btl-kiwi-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 110,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-kiwi-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 390,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/kiwi-juice.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة كيوي",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-yogurt-fruits",
    "slug": "bottle-yogurt-fruits",
    "nameAr": "عبوة زبادي فواكه",
    "nameEn": "عبوة زبادي فواكه",
    "descriptionAr": "عبوة زبادي فواكه طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 110,
    "sizes": [
      {
        "id": "btl-yogurt-fruits-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 110,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-yogurt-fruits-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 390,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-yogurt-nuts.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة زبادي فواكه",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-pineapple",
    "slug": "bottle-pineapple",
    "nameAr": "عبوة أناناس",
    "nameEn": "عبوة أناناس",
    "descriptionAr": "عبوة أناناس طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 120,
    "sizes": [
      {
        "id": "btl-pineapple-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 120,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-pineapple-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 390,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/pineapple-juice.png",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة أناناس",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-avo-honey",
    "slug": "bottle-avocado-honey",
    "nameAr": "عبوة أفوكادو عسل",
    "nameEn": "عبوة أفوكادو عسل",
    "descriptionAr": "عبوة أفوكادو عسل طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 180,
    "sizes": [
      {
        "id": "btl-avo-honey-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 180,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-avo-honey-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 600,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة أفوكادو عسل",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "btl-avo-nuts",
    "slug": "bottle-avocado-nuts",
    "nameAr": "عبوة أفوكادو مكسرات",
    "nameEn": "عبوة أفوكادو مكسرات",
    "descriptionAr": "عبوة أفوكادو مكسرات طازج عائلي مناسب للمنزل والعزومات والحفلات بحجم 1 لتر و4 لتر",
    "categorySlug": "bottles",
    "categoryNameAr": "العبوات",
    "basePrice": 250,
    "sizes": [
      {
        "id": "btl-avo-nuts-1l",
        "nameAr": "عبوة 1 لتر",
        "nameEn": "1 Liter Bottle",
        "price": 250,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "btl-avo-nuts-4l",
        "nameAr": "جركن 4 لتر عائلي",
        "nameEn": "4 Liters Jug",
        "price": 700,
        "volumeLabel": "4L",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "عبوة أفوكادو مكسرات",
      "عبوات عائلية",
      "جراكن"
    ],
    "ingredientsAr": [
      "عصير طبيعي طازج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "coffee-turkish",
    "slug": "turkish-coffee",
    "nameAr": "قهوة تركي",
    "nameEn": "Turkish Coffee",
    "descriptionAr": "قهوة تركية محضرة من أجود حبوب البن المحمص الفاخر تتوفر سنجل أو دبل",
    "categorySlug": "coffee",
    "categoryNameAr": "القهوة",
    "basePrice": 20,
    "sizes": [
      {
        "id": "cof-s",
        "nameAr": "فنجان سنجل (S)",
        "nameEn": "Single (S)",
        "price": 20,
        "volumeLabel": "S",
        "isDefault": true,
        "availability": "available"
      },
      {
        "id": "cof-d",
        "nameAr": "فنجان دبل (D)",
        "nameEn": "Double (D)",
        "price": 35,
        "volumeLabel": "D",
        "isDefault": false,
        "availability": "available"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/brand/elmaestro-drinks.jpg",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "قهوة تركي",
      "قهوة",
      "محمصات"
    ],
    "ingredientsAr": [
      "بن محمص فاخر",
      "ماء"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ic-coffee",
    "slug": "iced-coffee",
    "nameAr": "آيس كوفي",
    "nameEn": "Iced Coffee",
    "descriptionAr": "قهوة مثلجة ومنعشة بحبوب البن المحمصة الطازجة والثلج",
    "categorySlug": "iced-coffee",
    "categoryNameAr": "آيس كوفي",
    "basePrice": 65,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 65,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/brand/elmaestro-special.jpg",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "آيس كوفي",
      "قهوة مثلجة"
    ],
    "ingredientsAr": [
      "قهوة مثلجة",
      "ثلج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ic-latte",
    "slug": "iced-latte",
    "nameAr": "آيس لاتيه",
    "nameEn": "Iced Latte",
    "descriptionAr": "إسبريسو غني مع الحليب البارد والثلج لمذاق كريمي منعش",
    "categorySlug": "iced-coffee",
    "categoryNameAr": "آيس كوفي",
    "basePrice": 65,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 65,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/brand/elmaestro-special.jpg",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "آيس لاتيه",
      "لاتيه"
    ],
    "ingredientsAr": [
      "إسبريسو",
      "حليب بارد",
      "ثلج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ic-mocha",
    "slug": "iced-mocha",
    "nameAr": "آيس موكا",
    "nameEn": "Iced Mocha",
    "descriptionAr": "مزيج فاخر من القهوة المثلجة مع صوص الشوكولاتة الغني والحليب",
    "categorySlug": "iced-coffee",
    "categoryNameAr": "آيس كوفي",
    "basePrice": 65,
    "sizes": [
      {
        "id": "standard",
        "nameAr": "حجم عادي",
        "nameEn": "Standard Size",
        "price": 65,
        "volumeLabel": "عادي",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "addon-chocolate",
        "nameAr": "شيكولاتة",
        "nameEn": "Chocolate Sauce",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-honey",
        "nameAr": "عسل نحل",
        "nameEn": "Pure Natural Honey",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-ice-cream",
        "nameAr": "بولة آيس كريم",
        "nameEn": "Ice Cream Scoop",
        "price": 15,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-fruits",
        "nameAr": "فاكهة قطع",
        "nameEn": "Extra Fresh Fruits",
        "price": 20,
        "categoryId": "add-on",
        "availability": "available"
      },
      {
        "id": "addon-nuts",
        "nameAr": "مكسرات فاخرة",
        "nameEn": "Premium Nuts",
        "price": 30,
        "categoryId": "add-on",
        "availability": "available"
      }
    ],
    "image": "/images/brand/elmaestro-special.jpg",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "آيس موكا",
      "موكا"
    ],
    "ingredientsAr": [
      "قهوة",
      "شوكولاتة",
      "حليب",
      "ثلج"
    ],
    "verifiedFromAsset": "المايسترو منيو رسمي",
    "extractionStatus": "verified",
    "availability": "available"
  }
];

