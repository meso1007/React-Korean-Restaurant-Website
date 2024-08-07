import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const ReviewCard = ({ text, img, name, rating, bestDish }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="w-full bg-white border-2 border-lightText p-5 rounded-lg shadow-md relative z-10">
      <div className="flex flex-row justify-center align-middle items-center mb-4 gap-4">
        <img className="rounded-full w-1/4" src={img} alt="Review" />
        <h3 className="font-semibold">{name}</h3>
        <div className="flex flex-row justify-center mb-4">
          {[...Array(fullStars)].map((_, index) => (
            <BsStarFill key={index} className="text-brightcolor" />
          ))}
          {hasHalfStar && <BsStarHalf className="text-brightcolor" />}
          {[...Array(emptyStars)].map((_, index) => (
            <BsStarFill
              key={index + fullStars + (hasHalfStar ? 1 : 0)}
              className="text-gray-300"
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <p className="text-lightText">{text}</p>
      </div>
      {bestDish && (
        <div className="mt-4 pt-4 border-t border-gray-300">
          <h4 className="text-lg font-semibold mb-2">Most Delicious Dish:</h4>
          <p className="text-gray-700">{bestDish}</p>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
