import "./SecondPageStyles.scss";
import expandLess from "../../assets/category_expand.svg";


// TODO price  range change
const PriceRange = () => {
  return (
    <div className="price-wrapper">
      <div className="category-title">
        <h6>Price range</h6>
        <img src={expandLess} alt="arrow" />
      </div>
      <div className="progress-range">
        <div className="range">
            <div className="progress"></div>
        </div>
        <div className="input-range">
        <input type="range" className="progress-min" min="0" max="10000"/>
        <input type="range"  className="progress-max" min="0" max="10000" />
        </div>
      
      </div>
      <div className="price-range">
        <div>
          <span className="price">min</span>
          <input type="number" value="0" />
        </div>
        <div>
          <span className="price">max</span>
          <input type="number" value="999999" />
        </div>
       
      </div>
      <button className="apply-btn">Apply</button>
    </div>
  );
};

export { PriceRange };
