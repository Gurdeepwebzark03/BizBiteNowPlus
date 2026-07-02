import {
  LayoutDashboard,
  Package,
  Boxes,
  Layers3,
  ShoppingCart,
  Truck,
  Gift,
  Store,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

const sidebarConfig = [
{
  id: "dashboard",
  title: "Dashboard",
  icon: LayoutDashboard,
  children: [
    {
      title: "Overview",
      path: "/seller/dashboard",
    },
    {
      title: "Analytics",
      path: "/seller/analytics",
    },
    {
      title: "Reports",
      path: "/seller/reports",
    },
  ],
},

  {
    id: "products",
    title: "Product Management",
    icon: Package,
    children: [
      {
        title: "Products",
        path: "/seller/products",
      },
      {
        title: "Categories",
        path: "/seller/categories",
      },
      {
        title: "Inventory",
        path: "/seller/inventory",
      },
      {
        title: "Variants",
        path: "/seller/variants",
      },
      {
        title: "Combo Builder",
        path: "/seller/combos",
      },
    ],
  },

  {
    id: "orders",
    title: "Orders",
    icon: ShoppingCart,
    children: [
      {
        title: "All Orders",
        path: "/seller/orders",
      },
      {
        title: "Active Orders",
        path: "/seller/orders/active",
      },
      {
        title: "Order History",
        path: "/seller/orders/history",
      },
    ],
  },

  {
    id: "delivery",
    title: "Delivery Management",
    icon: Truck,
    children: [
      {
        title: "Delivery Dashboard",
        path: "/seller/delivery",
      },
      {
        title: "Delivery Partners",
        path: "/seller/delivery/partners",
      },
      {
        title: "Live Tracking",
        path: "/seller/delivery/tracking",
      },
      {
        title: "Delivery Zones",
        path: "/seller/delivery/zones",
      },
    ],
  },

  {
    id: "offers",
    title: "Marketing",
    icon: Gift,
    children: [
      {
        title: "Special Offers",
        path: "/seller/offers",
      },
      {
        title: "Coupons",
        path: "/seller/coupons",
      },
      {
        title: "Promotions",
        path: "/seller/promotions",
      },
    ],
  },

  {
    id: "store",
    title: "Storefront",
    icon: Store,
    children: [
      {
        title: "Store Information",
        path: "/seller/store",
      },
      {
        title: "Branding",
        path: "/seller/store/branding",
      },
      {
        title: "Business Hours",
        path: "/seller/store/hours",
      },
      {
        title: "Store Preview",
        path: "/seller/store/preview",
      },
    ],
  },

  {
    id: "analytics",
    title: "Analytics",
    icon: BarChart3,
    children: [
      {
        title: "Sales",
        path: "/seller/analytics/sales",
      },
      {
        title: "Revenue",
        path: "/seller/analytics/revenue",
      },
      {
        title: "Customers",
        path: "/seller/analytics/customers",
      },
    ],
  },

 {
  id: "settings",
  title: "Settings",
  icon: Settings,
  children: [
    {
      title: "General",
      path: "/seller/settings",
    },
    {
      title: "Store Settings",
      path: "/seller/settings/store",
    },
    {
      title: "Payment Settings",
      path: "/seller/settings/payments",
    },
    {
      title: "Notifications",
      path: "/seller/settings/notifications",
    },
    {
      title: "Security",
      path: "/seller/settings/security",
    },
  ],
},

  {
    id: "logout",
    title: "Logout",
    icon: LogOut,
    path: "/logout",
    danger: true,
  },
];

export default sidebarConfig;