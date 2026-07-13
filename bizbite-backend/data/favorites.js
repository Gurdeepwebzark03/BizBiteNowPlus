const favorites = [];

// =======================================
// Get Customer Favorites
// =======================================

const getFavorites = (customerId) => {
  return favorites.filter(
    (item) => item.customerId === customerId
  );
};

// =======================================
// Check Favorite
// =======================================

const isFavorite = (
  customerId,
  productId
) => {
  return favorites.some(
    (item) =>
      item.customerId === customerId &&
      item.productId === productId
  );
};

// =======================================
// Add Favorite
// =======================================

const addFavorite = ({
  customerId,
  productId,
  storeId,
}) => {
  if (
    isFavorite(
      customerId,
      productId
    )
  ) {
    return null;
  }

  const favorite = {
    id: `FAV_${Date.now()}`,

    customerId,

    productId,

    storeId,

    createdAt:
      new Date().toISOString(),
  };

  favorites.push(favorite);

  return favorite;
};

// =======================================
// Remove Favorite
// =======================================

const removeFavorite = (
  customerId,
  productId
) => {
  const index =
    favorites.findIndex(
      (item) =>
        item.customerId === customerId &&
        item.productId === productId
    );

  if (index === -1)
    return false;

  favorites.splice(index, 1);

  return true;
};

// =======================================
// Toggle Favorite
// =======================================

const toggleFavorite = (data = {}) => {
  console.log("toggleFavorite received:", data);

  const {
    customerId,
    productId,
    storeId,
  } = data;

  console.log("customerId:", customerId);
  console.log("productId:", productId);
  console.log("storeId:", storeId);

  if (!customerId || !productId) {
    console.log("Missing values");
    throw new Error(
      "customerId and productId are required."
    );
  }

  const exists = isFavorite(
    customerId,
    productId
  );

  console.log("exists:", exists);

  if (exists) {
    console.log("Removing favorite");

    removeFavorite(
      customerId,
      productId
    );

    console.log("Returning false");

    return {
      favorite: false,
    };
  }

  console.log("Adding favorite");

  const added = addFavorite({
    customerId,
    productId,
    storeId,
  });

  console.log("Added:", added);

  console.log("Returning true");

  return {
    favorite: true,
  };
};
module.exports = {
  getFavorites,

  isFavorite,

  addFavorite,

  removeFavorite,

  toggleFavorite,
};