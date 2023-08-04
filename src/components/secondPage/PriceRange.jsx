import { useState } from "react";
import "./SecondPageStyles.scss";
import expandLess from "../../assets/category_expand.svg";

// TODO price  range change
const PriceRange = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10000);

  return (
    <div className="price-wrapper">
      <div className="category-title">
        <h6>Price range</h6>
        <img src={expandLess} alt="arrow" />
      </div>
      <div className="progress-range">
        {/* <div className="range">
          <div className="progress"></div>
        </div> */}
        <div className="input-range">
          <input
            type="range"
            className="progress-min"
            min="0"
            max="10000"
            onChange={(e) => setMinValue(e.target.value)}
            // value={minValue}
          />
          <input
            type="range"
            className="progress-max"
            min="0"
            max="10000"
            // value={maxValue}
            onChange={(e) => setMaxValue(e.target.value)}
          />
        </div>
      </div>
      <div className="price-range">
        <div>
          <span className="price">min</span>
          <input type="number" value={minValue} />
        </div>
        <div>
          <span className="price">max</span>
          <input type="number" value={maxValue} />
        </div>
      </div>
      <button className="apply-btn">Apply</button>
    </div>
  );
};

export { PriceRange };
