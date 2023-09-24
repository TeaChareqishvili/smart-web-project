import "./SecondPageStyles.scss";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const StarRating = () => {


 

  return (
    <div>
    <div className="rating-wrapper">
      <input type="checkbox" name="rating" />
      <div className="stars">
        {[...Array(5)].map((_, id) => {
          return (
            <label key={id}>
              <input
                type="radio"
                name="rating"
                className="radio"
              />
              <FaStar
                style={{
                  color: "#FF9017",
                }}
                size={18}
              />
            </label>
          );
        })}
      </div>
    </div>

    <div className="rating-wrapper">
      <input type="checkbox" name="rating" />
      <div className="stars">
        {[...Array(5)].map((_, id) => {
          return (
            <label key={id}>
              <input
                type="radio"
                name="rating"
                className="radio"
              />
              <FaStar
                style={{
                  color: "#FF9017",
                }}
                size={18}
              />
            </label>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export { StarRating };
