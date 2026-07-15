import API from "./axios"; // adjust the relative path

const BASE = "/loyalty";

// Seller
export const getLoyaltySettings = async () => {
  const { data } = await API.get(`${BASE}/settings`);
  return data;
};

export const updateLoyaltySettings = async (settings) => {
  const { data } = await API.patch(`${BASE}/settings`, settings);
  return data;
};

export const getStampLevelBreakdown = async () => {
  const { data } = await API.get(`${BASE}/engagement`);
  return data;
};

// Customer
export const getCustomerLoyaltyStatus = async (customerId) => {
  const { data } = await API.get(
    `${BASE}/customers/${customerId}/status`
  );
  return data;
};