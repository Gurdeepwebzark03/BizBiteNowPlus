const storeData = {
  id: "store-001",

  name: "BizBite Café",

  tagline: "Fresh Food • Fast Delivery",

  description:
    "Experience freshly prepared meals, premium coffee, and delicious desserts crafted with quality ingredients. Order online or dine in with BizBite Café.",

  logo: "/images/store/logo.png",

  coverImage: "/images/store/cover.jpg",

  rating: 4.8,

  totalReviews: 2847,

  totalOrders: 18560,

  averageDeliveryTime: "25-35 min",

  distance: "2.4 km",

  isOpen: true,

  openingHours: {
    open: "09:00 AM",
    close: "11:00 PM",
  },

  address: {
    line1: "Sector 17 Market",
    city: "Chandigarh",
    state: "Punjab",
    country: "India",
    pincode: "160017",
  },

  contact: {
    phone: "+91 9876543210",
    email: "support@bizbite.com",
  },

  delivery: {
    available: true,
    minimumOrder: 199,
    deliveryCharge: 40,
    freeDeliveryAbove: 499,
  },

  offers: [
    {
      id: 1,
      title: "20% OFF",
      description: "On orders above ₹499",
    },
    {
      id: 2,
      title: "Free Delivery",
      description: "Above ₹499",
    },
  ],

  socialLinks: {
    instagram: "",
    facebook: "",
    website: "",
  },

  theme: {
    primary: "#16522D",
    secondary: "#FFC700",
    accent: "#F8FAFC",
  },
};

export default storeData;