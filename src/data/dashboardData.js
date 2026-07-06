// ==============================
// Seller Dashboard Mock Data
// Replace with API data later
// ==============================
import {
  IndianRupee,
  ShoppingCart,
  Package,
  Users,
} from "lucide-react";

export const stats = [
  {
    id: 1,
    title: "Today's Revenue",
    value: "₹8,540",
    trend: 12.5,
    subtitle: "vs yesterday",
    icon: IndianRupee,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: 2,
    title: "Orders",
    value: "42",
    trend: 8.2,
    subtitle: "vs yesterday",
    icon: ShoppingCart,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 3,
    title: "Products",
    value: "20",
    trend: 6,
    subtitle: "this week",
    icon: Package,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    id: 4,
    title: "Customers",
    value: "318",
    trend: 15,
    subtitle: "this month",
    icon: Users,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
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
    image: "https://placehold.co/80x80?text=🍕",
    sold: 182,
    revenue: 82400,
    stock: "In Stock",
  },
  {
    id: 2,
    name: "Chicken Burger",
    image: "https://placehold.co/80x80?text=🍔",
    sold: 154,
    revenue: 63500,
    stock: "Low Stock",
  },
  {
    id: 3,
    name: "Veg Wrap",
    image: "https://placehold.co/80x80?text=🌯",
    sold: 121,
    revenue: 45600,
    stock: "In Stock",
  },
  {
    id: 4,
    name: "Cold Coffee",
    image: "https://placehold.co/80x80?text=☕",
    sold: 118,
    revenue: 28800,
    stock: "Out of Stock",
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