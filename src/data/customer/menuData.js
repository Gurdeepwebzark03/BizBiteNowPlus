const categories = [
  {
    id: "all",
    name: "All",
    icon: "🍽️",
  },
  {
    id: "pizza",
    name: "Pizza",
    icon: "🍕",
  },
  {
    id: "burger",
    name: "Burger",
    icon: "🍔",
  },
  {
    id: "pasta",
    name: "Pasta",
    icon: "🍝",
  },
  {
    id: "drinks",
    name: "Drinks",
    icon: "🥤",
  },
  {
    id: "desserts",
    name: "Desserts",
    icon: "🍰",
  },
];

const menuData = [
  {
    id: 1,
    sku: "PIZ001",

    name: "Margherita Pizza",

    description:
      "Classic Italian pizza with mozzarella cheese, tomato sauce and fresh basil.",

    category: "pizza",

    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3",

    gallery: [
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3",
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    ],

    price: 299,
    originalPrice: 349,

    rating: 4.8,
    reviews: 412,

    preparationTime: "20-25 min",

    available: true,
    featured: true,
    bestseller: true,

    isVeg: true,
    spicy: false,

    calories: 720,

    variants: [
      {
        id: "small",
        name: "Small",
        price: 299,
      },
      {
        id: "medium",
        name: "Medium",
        price: 449,
      },
      {
        id: "large",
        name: "Large",
        price: 599,
      },
    ],

    addons: [
      {
        id: 1,
        name: "Extra Cheese",
        price: 60,
      },
      {
        id: 2,
        name: "Olives",
        price: 40,
      },
      {
        id: 3,
        name: "Jalapenos",
        price: 35,
      },
    ],
  },

  {
    id: 2,
    sku: "BRG001",

    name: "Classic Chicken Burger",

    description:
      "Grilled chicken patty with lettuce, tomato, cheese and signature sauce.",

    category: "burger",

    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",

    gallery: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    ],

    price: 249,

    originalPrice: 299,

    rating: 4.7,
    reviews: 288,

    preparationTime: "15-20 min",

    available: true,
    featured: true,
    bestseller: false,

    isVeg: false,
    spicy: false,

    calories: 640,

    variants: [
      {
        id: "regular",
        name: "Regular",
        price: 249,
      },
      {
        id: "double",
        name: "Double Patty",
        price: 369,
      },
    ],

    addons: [
      {
        id: 1,
        name: "French Fries",
        price: 99,
      },
      {
        id: 2,
        name: "Extra Cheese",
        price: 50,
      },
    ],
  },

  {
    id: 3,
    sku: "PAS001",

    name: "Creamy Alfredo Pasta",

    description:
      "Rich and creamy white sauce pasta topped with herbs and parmesan.",

    category: "pasta",

    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",

    gallery: [
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
    ],

    price: 279,

    rating: 4.6,
    reviews: 201,

    preparationTime: "20 min",

    available: true,
    featured: false,
    bestseller: false,

    isVeg: true,

    calories: 580,

    variants: [
      {
        id: "regular",
        name: "Regular",
        price: 279,
      },
    ],

    addons: [
      {
        id: 1,
        name: "Mushrooms",
        price: 50,
      },
      {
        id: 2,
        name: "Garlic Bread",
        price: 89,
      },
    ],
  },

  {
    id: 4,
    sku: "DRK001",

    name: "Cold Coffee",

    description:
      "Refreshing chilled coffee blended with ice cream.",

    category: "drinks",

    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c",

    gallery: [
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
    ],

    price: 149,

    rating: 4.9,
    reviews: 512,

    preparationTime: "5 min",

    available: true,
    featured: true,
    bestseller: true,

    isVeg: true,

    calories: 280,

    variants: [
      {
        id: "regular",
        name: "Regular",
        price: 149,
      },
      {
        id: "large",
        name: "Large",
        price: 199,
      },
    ],

    addons: [],
  },

  {
    id: 5,
    sku: "DES001",

    name: "Chocolate Lava Cake",

    description:
      "Warm chocolate cake with molten chocolate center.",

    category: "desserts",

    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",

    gallery: [
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    ],

    price: 179,

    rating: 4.9,
    reviews: 344,

    preparationTime: "10 min",

    available: true,
    featured: true,
    bestseller: true,

    isVeg: true,

    calories: 390,

    variants: [
      {
        id: "regular",
        name: "Regular",
        price: 179,
      },
    ],

    addons: [
      {
        id: 1,
        name: "Vanilla Ice Cream",
        price: 50,
      },
    ],
  },
];

export {
  categories,
  menuData,
};

export default menuData;