// ==============================
// Seller Dashboard Mock Data
// Replace with API data later
// ==============================

export const stats = [
  {
    id: 1,
    title: "Today's Revenue",
    value: "₹18,540",
    change: "+12.5%",
    trend: "up",
    color: "emerald",
  },
  {
    id: 2,
    title: "Orders",
    value: "42",
    change: "+8.2%",
    trend: "up",
    color: "blue",
  },
  {
    id: 3,
    title: "Products",
    value: "126",
    change: "+6",
    trend: "up",
    color: "amber",
  },
  {
    id: 4,
    title: "Customers",
    value: "318",
    change: "+15",
    trend: "up",
    color: "purple",
  },
];

export const salesData = [
  { day: "Mon", sales: 4500 },
  { day: "Tue", sales: 6200 },
  { day: "Wed", sales: 7100 },
  { day: "Thu", sales: 5300 },
  { day: "Fri", sales: 8800 },
  { day: "Sat", sales: 11000 },
  { day: "Sun", sales: 9300 },
];

export const recentOrders = [
  {
    id: "#ORD1001",
    customer: "Rahul Sharma",
    amount: "₹420",
    status: "Delivered",
  },
  {
    id: "#ORD1002",
    customer: "Priya Singh",
    amount: "₹650",
    status: "Preparing",
  },
  {
    id: "#ORD1003",
    customer: "Ankit Kumar",
    amount: "₹250",
    status: "Pending",
  },
  {
    id: "#ORD1004",
    customer: "Simran Kaur",
    amount: "₹870",
    status: "Delivered",
  },
];

export const lowStock = [
  {
    id: 1,
    name: "Paneer Burger",
    stock: 4,
  },
  {
    id: 2,
    name: "French Fries",
    stock: 6,
  },
  {
    id: 3,
    name: "Cold Coffee",
    stock: 3,
  },
];

export const topProducts = [
  {
    id: 1,
    name: "Cheese Pizza",
    sold: 182,
  },
  {
    id: 2,
    name: "Chicken Burger",
    sold: 154,
  },
  {
    id: 3,
    name: "Veg Wrap",
    sold: 121,
  },
  {
    id: 4,
    name: "Cold Coffee",
    sold: 118,
  },
];

export const activities = [
  {
    id: 1,
    type: "order",
    title: "New Order Received",
    description: "Order #ORD-1035 has been placed by Rahul Sharma.",
    time: "2 min ago",
  },
  {
    id: 2,
    type: "payment",
    title: "Payment Received",
    description: "₹1,250 payment received via UPI.",
    time: "18 min ago",
  },
  {
    id: 3,
    type: "product",
    title: "Product Updated",
    description: "Cheese Pizza price updated successfully.",
    time: "45 min ago",
  },
  {
    id: 4,
    type: "delivery",
    title: "Order Assigned",
    description: "Order assigned to Aman Kumar for delivery.",
    time: "1 hour ago",
  },
];

export const quickActions = [
  {
    id: 1,
    title: "Add Product",
  },
  {
    id: 2,
    title: "View Orders",
  },
  {
    id: 3,
    title: "Manage Inventory",
  },
  {
    id: 4,
    title: "Delivery Board",
  },
];