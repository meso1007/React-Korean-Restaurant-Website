import React from "react";
import Main from "../components/Main";
import AboutSection from "../components/AboutSection";
import Review from "../components/Review";

const Home = () => {
  const para = [
    "Experience exceptional dining in a welcoming atmosphere.",
    "Discover gourmet flavors and a memorable experience with us.",
  ];

  const reviews = [
    {
      text: "Amazing food and great atmosphere! The best dining experience I have ever had.",
      img: "/assets/customer/customer1.jpg",
      name: "John Doe",
      bestDish: "Spicy Grilled Chicken",
      rating: 4.5,
    },
    {
      text: "The service was exceptional and the dishes were absolutely delicious.",
      img: "/assets/customer/customer2.jpg",
      name: "Jane Smith",
      rating: 5,
      bestDish: "Spicy Grilled Chicken",
    },
    {
      text: "A wonderful experience from start to finish. Highly recommend it!",
      img: "/assets/customer/customer3.jpg",
      name: "Emily Johnson",
      rating: 4,
      bestDish: "Spicy Grilled Chicken",
    },
  ];

  return (
    <div className="text-center">
      <Main />
      <AboutSection
        title="KOREAN CHICKEN"
        paragraphs={para}
        bgColor={"black"}
      />
      <div>
        <Review reviews={reviews} />
      </div>{" "}
    </div>
  );
};

export default Home;
