

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
    discountType: "percent",
    discountValue: 20,
    code: "DIWALI20",
    validityStart: addDays(-1),
    validityEnd: addDays(4),
  },
  {
    id: "flat-off",
    label: "Weekend Special",
    discountType: "amount",
    discountValue: 50,
    code: "WEEKEND50",
    validityStart: addDays(-2),
    validityEnd: addDays(2),
  },
];