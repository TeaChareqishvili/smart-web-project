import "./SecondPageStyles.scss";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [firstInputRating, setFirstInputRating] = useState(null);

  const handleFirstInputClick = (event) => {
    const value = parseInt(event.target.value);
    setFirstInputRating(value+1);
    setRating(value);
  };
//TODO fix rating
  return (
    <div className="rating-wrapper">
         <input
        type="checkbox"
        name="rating"
        value="1"
        onClick={handleFirstInputClick}
        checked={firstInputRating >= 1}
        onChange={(e) => setFirstInputRating(parseInt(e.target.value) + 1)}
      />
      <div className="stars">
      {[...Array(5)].map((_, id) => {
        const ratingValue = id + 1;
        return (
          <label key={id}>
            <input
              type="radio"
              name="rating"
              className="radio"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              style={{
                color: ratingValue <= (hover || rating) ? "#FF9017" : "#BDC4CD",
                transition: "color 400ms",
                cursor: "pointer",
              }}
              size={18}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      </div>
    </div>
  );
};

export { StarRating };
