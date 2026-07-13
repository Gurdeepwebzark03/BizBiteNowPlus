/*
  Demo active offers — stand-in for GET /api/offers/active until that
  endpoint is live. discountType matches the seller-builder/couponsData
  convention: "percentage" | "flat" | "delivery".
*/

const today = new Date();
const iso = (d) => d.toISOString().slice(0, 10);
const addDays = (n) => {
  const copy = new Date(today);
  copy.setDate(copy.getDate() + n);
  return iso(copy);
};

export const DEMO_ACTIVE_OFFERS = [
  {
    id: "diwali-2026",
    label: "Diwali Dhamaka",
    description: "Diwali ki hardik shubhkamnayein! Festive season discount.",
    discountType: "percentage",
    discountValue: 20,
    minOrder: 299,
    maxDiscount: 150,
    code: "DIWALI20",
    validityStart: addDays(-1),
    validityEnd: addDays(4),
  },
  {
    id: "weekend-flat",
    label: "Weekend Special",
    description: "Flat discount on weekend orders.",
    discountType: "flat",
    discountValue: 50,
    minOrder: 499,
    maxDiscount: 50,
    code: "WEEKEND50",
    validityStart: addDays(-2),
    validityEnd: addDays(2),
  },
  {
    id: "free-delivery",
    label: "Free Delivery Days",
    description: "No delivery fee, no minimum fuss.",
    discountType: "delivery",
    discountValue: 0,
    minOrder: 199,
    maxDiscount: 40,
    code: "FREEDEL",
    validityStart: addDays(-1),
    validityEnd: addDays(6),
  },
];