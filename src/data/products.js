import placeholderImg from "../assets/BIZ BITE NOW Icon.png";

export const categories = [
  {
    id: 1,
    name: "Starters",
    products: [
      { id: 1, name: "Paneer Tikka", price: 180, description: "Grilled cottage cheese marinated in aromatic spices, served with mint chutney.", image: placeholderImg, category: "Starters" },
      { id: 2, name: "Veg Spring Rolls", price: 120, description: "Crispy golden rolls filled with mixed vegetables and glass noodles.", image: placeholderImg, category: "Starters" },
      { id: 3, name: "Samosa (2 pcs)", price: 60, description: "Classic fried pastry filled with spiced potato and peas.", image: placeholderImg, category: "Starters" },
    ],
  },
  {
    id: 2,
    name: "Main Course",
    products: [
      { id: 4, name: "Dal Makhani", price: 220, description: "Slow cooked black lentils simmered overnight in a rich buttery gravy.", image: placeholderImg, category: "Main Course" },
      { id: 5, name: "Paneer Butter Masala", price: 260, description: "Soft cottage cheese cubes in a creamy, mildly spiced tomato sauce.", image: placeholderImg, category: "Main Course" },
      { id: 6, name: "Veg Biryani", price: 200, description: "Fragrant basmati rice layered with spiced seasonal vegetables.", image: placeholderImg, category: "Main Course" },
      { id: 7, name: "Chole Bhature", price: 150, description: "Spicy Punjabi chickpea curry served with fluffy deep-fried bread.", image: placeholderImg, category: "Main Course" },
    ],
  },
  {
    id: 3,
    name: "Desserts",
    products: [
      { id: 8, name: "Gulab Jamun", price: 80, description: "Soft milk solid dumplings soaked in rose-flavoured sugar syrup.", image: placeholderImg, category: "Desserts" },
      { id: 9, name: "Rasgulla", price: 70, description: "Light spongy cottage cheese balls dipped in chilled sugar syrup.", image: placeholderImg, category: "Desserts" },
      { id: 10, name: "Kheer", price: 90, description: "Creamy slow-cooked rice pudding with cardamom and dry fruits.", image: placeholderImg, category: "Desserts" },
    ],
  },
];

export const allProducts = categories.flatMap((c) => c.products);
