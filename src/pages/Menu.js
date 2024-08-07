import React, { useState } from "react";
import SlideInSection from "../components/SlideInSection";

const categories = ["All", "Chicken", "Dish", "Appetizer", "Drink"];

const menuItems = [
  {
    category: "Chicken",
    name: "Classic Fried Chicken",
    description: "Crispy fried chicken with a seasoned coating.",
    price: "$17.00",
    img: "./assets/dishes/chicken-regular.jpg",
  },
  {
    category: "Chicken",
    name: "Spicy Chicken",
    description: "Crispy fried chicken with a spicy coating.",
    price: "$17.00",
    img: "./assets/dishes/chicken-spicy.jpg",
  },
  {
    category: "Chicken",
    name: "Soy Garlic Chicken",
    description: "Tender chicken with a fiery spicy glaze.",
    price: "$17.00",
    img: "./assets/dishes/chicken-soygarlic.jpg",
  },
  {
    category: "Dish",
    name: "Korean BBQ Chicken",
    description: "Grilled chicken with a sweet and savory Korean BBQ sauce.",
    price: "$28.00",
    img: "./assets/dishes/dish-bbqchicken.jpg",
  },
  {
    category: "Appetizer",
    name: "Kimchi",
    description: "Traditional Korean fermented vegetables.",
    price: "$7.00",
    img: "./Assets/dishes/appetizer-kimuchi.jpg",
  },
  {
    category: "Appetizer",
    name: "Seasoned Fries",
    description: "Crispy fries with a blend of Korean spices.",
    price: "$10.00",
    img: "./Assets/dishes/appetizer-fries.jpg",
  },
  {
    category: "Drink",
    name: "Korean Iced Tea",
    description: "Refreshing iced tea with a hint of Korean flavors.",
    price: "$8.00",
    img: "./Assets/dishes/drink-icedTea.jpg",
  },
  {
    category: "Drink",
    name: "Soju",
    description: "Korean distilled spirit with a smooth finish.",
    price: "$12.00",
    img: "./assets/dishes/drink-soju.jpg",
  },
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMenuItems = menuItems.filter((item) =>
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  return (
    <section className="py-16 bg-gray-100 flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/4 bg-white border-r border-gray-300 p-4 lg:sticky lg:top-0">
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              className={`main-title cursor-pointer mb-2 p-2 rounded ${
                selectedCategory === category
                  ? "bg-gray-200"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full min-h-[400px] lg:w-3/4 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">{selectedCategory}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredMenuItems.map((item, index) => (
            <SlideInSection key={index}>
              <div className="bg-white border-2 border-lightText p-5 rounded-lg shadow-md flex flex-col h-full">
                <img
                  className="w-full h-48 object-cover rounded-md mb-4"
                  src={item.img}
                  alt={item.name}
                />
                <h3 className="text-xl font-semibold mb-2 main-title flex-grow">
                  {item.name}
                </h3>
                <p className="text-gray-700 mb-4 flex-grow">
                  {item.description}
                </p>
                <p className="text-lg font-bold">{item.price}</p>
              </div>
            </SlideInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
