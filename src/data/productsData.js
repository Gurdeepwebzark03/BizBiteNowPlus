// ========================================
// Product Management Mock Data
// Replace with API later
// ========================================

export const categories = [
  "All",
  "Pizza",
  "Burger",
  "Beverages",
  "Desserts",
  "Snacks",
];

export const products = [
  {
    id: 1,
    name: "Chicken Burger",
    category: "Burger",
    price: 249,
    stock: 28,
    available: true,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
  },
  {
    id: 2,
    name: "Veg Supreme Pizza",
    category: "Pizza",
    price: 399,
    stock: 15,
    available: true,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
  },
  {
    id: 3,
    name: "Cold Coffee",
    category: "Beverages",
    price: 149,
    stock: 40,
    available: true,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400",
  },
  {
    id: 4,
    name: "French Fries",
    category: "Snacks",
    price: 129,
    stock: 5,
    available: true,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400",
  },
  {
    id: 5,
    name: "Chocolate Brownie",
    category: "Desserts",
    price: 179,
    stock: 0,
    available: false,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400",
  },
  {
    id: 6,
    name: "Paneer Tikka Pizza",
    category: "Pizza",
    price: 449,
    stock: 12,
    available: true,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400",
  },
];

export const productStats = {
  totalProducts: 126,
  activeProducts: 118,
  outOfStock: 8,
  categories: 6,
};