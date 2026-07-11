const currentOrder = {
  id: "ORD-2026-001",

  status: "Out for Delivery",

  date: "11 Jul 2026",

  estimatedDelivery: "15 mins",

  deliveryPartner: {
    name: "Rahul Sharma",
    phone: "+91 9876543210",
    vehicle: "HR 01 AB 1234",
  },

  tracking: {
    currentStep: 3,

    steps: [
      {
        id: 1,
        title: "Order Placed",
        completed: true,
        time: "12:10 PM",
      },
      {
        id: 2,
        title: "Preparing Food",
        completed: true,
        time: "12:18 PM",
      },
      {
        id: 3,
        title: "Out for Delivery",
        completed: true,
        time: "12:45 PM",
      },
      {
        id: 4,
        title: "Delivered",
        completed: false,
        time: "",
      },
    ],
  },

  items: [
    {
      id: 1,
      name: "Margherita Pizza",
      quantity: 2,
      price: 299,
      total: 598,
      image:
        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3",
    },
    {
      id: 2,
      name: "Cold Coffee",
      quantity: 2,
      price: 149,
      total: 298,
      image:
        "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
    },
  ],

  subtotal: 896,

  deliveryFee: 40,

  tax: 81,

  discount: 100,

  total: 917,
};

const orderHistory = [
  {
    id: "ORD-2026-0001",

    status: "Delivered",

    date: "08 Jul 2026",

    total: 849,

    items: [
      {
        id: 1,
        name: "Chocolate Lava Cake",
        quantity: 2,
        total: 358,
        image:
          "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
      },
      {
        id: 2,
        name: "Cold Coffee",
        quantity: 1,
        total: 149,
        image:
          "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
      },
    ],
  },

  {
    id: "ORD-2026-0002",

    status: "Delivered",

    date: "05 Jul 2026",

    total: 1249,

    items: [
      {
        id: 3,
        name: "Classic Chicken Burger",
        quantity: 2,
        total: 498,
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      },
      {
        id: 4,
        name: "Creamy Alfredo Pasta",
        quantity: 2,
        total: 558,
        image:
          "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
      },
    ],
  },

  {
    id: "ORD-2026-0003",

    status: "Cancelled",

    date: "29 Jun 2026",

    total: 499,

    items: [
      {
        id: 5,
        name: "Veg Pizza",
        quantity: 1,
        total: 499,
        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      },
    ],
  },
];

export {
  currentOrder,
  orderHistory,
};

export default orderHistory;