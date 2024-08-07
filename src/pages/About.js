// src/pages/About.js
import React from "react";
import AboutSection from "../components/AboutSection";

const About = () => {
  const title = "About Us";
  const paragraphs = [
    "Welcome to our restaurant, where culinary excellence meets a welcoming atmosphere.",
    "Founded with a passion for great food and exceptional service, we strive to create a dining experience that delights the senses and exceeds expectations.",
    "Whether you're here for a casual meal or a special occasion, our commitment to quality and guest satisfaction is at the heart of everything we do.",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <AboutSection
        title={title}
        paragraphs={paragraphs}
        bgColor={"gray - 100"}
      />
    </div>
  );
};

export default About;
