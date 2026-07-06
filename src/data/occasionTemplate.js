/*
  Default occasion templates — seed data / fallback if /api/offers/templates
  isn't ready yet. Real copy should eventually be owned by content, but this
  keeps the builder from being a blank page in the meantime.
  Spec: orientation §08 — "pre-written Hindi/English templates (Diwali, Eid,
  Holi, New Year, generic)."
*/

export const DEFAULT_TEMPLATES = [
  {
    id: "diwali",
    label: "Diwali",
    body:
      "Diwali ki hardik shubhkamnayein! 🪔 Use code {code} for 20% off your next order. — {shop}\n\nHappy Diwali! Use code {code} for 20% off your next order.",
  },
  {
    id: "eid",
    label: "Eid",
    body:
      "Eid Mubarak! 🌙 {code} code se aapko milega 15% off. — {shop}\n\nEid Mubarak! Use code {code} for 15% off.",
  },
  {
    id: "holi",
    label: "Holi",
    body:
      "Holi hai! 🎨 Rang bhi, offer bhi — {code} se 20% off. — {shop}\n\nHappy Holi! Use code {code} for 20% off.",
  },
  {
    id: "newyear",
    label: "New Year",
    body:
      "Naya saal, nayi shuruaat! 🎉 {code} se 25% off pehle order pe. — {shop}\n\nHappy New Year! Use code {code} for 25% off your next order.",
  },
  {
    id: "generic",
    label: "Generic",
    body: "Aapke liye khaas offer! Use code {code} for a discount on your next order. — {shop}",
  },
];

export function fillTemplate(body, { code, shop }) {
  return body.replaceAll("{code}", code).replaceAll("{shop}", shop);
}