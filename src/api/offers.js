

const BASE = "/api/offers";

async function request(path, init) {
  const res = await fetch(`${BASE}${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    ...init,
  });
  if (!res.ok) {
    throw new Error(`Offers API error (${res.status}): ${await res.text()}`);
  }
  return res.json();
}

// ---- Checkout (customer side) ----

export function saveCustomerBirthday(customerId, day, month) {
  return request(`/customers/${customerId}/birthday`, {
    method: "PUT",
    body: JSON.stringify({ day, month }),
  });
}

// ---- Dashboard (seller side) ----

export function getOccasionTemplates() {
  return request("/templates");
}

export function sendManualOffer(payload) {
  return request("/send", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function getCampaigns() {
  return request("/campaigns");
}