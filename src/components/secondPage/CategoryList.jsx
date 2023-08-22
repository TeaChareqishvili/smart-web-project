import "./SecondPageStyles.scss";
import expandLess from "../../assets/category_expand.svg";
import { brandList } from "./ListData";
import { listCheckBox } from "./ListData";
import { featureList } from "./ListData";
import { conditionLits } from "./ListData";
import { StarRating } from "./StarRating";
import { PriceRange } from "./PriceRange";
import { useRef, useState, useEffect } from "react";

const CategoryList = ({ handleItemClick }) => {
  const categoryRef = useRef(null);
  const brandRef = useRef(null);
  const featureRef = useRef(null);
  const conditionRef = useRef(null);
  const starRef = useRef(null);

  const [visible, setVisible] = useState(true);
  const [brand, setBrand] = useState(true);
  const [feature, setFeature] = useState(true);
  const [condition, setCondition] = useState(true);
  const [star, setStar] = useState(true);

  useEffect(() => {
    const refsAndStates = [
      { ref: categoryRef, stateSetter: setVisible },
      { ref: brandRef, stateSetter: setBrand },
      { ref: featureRef, stateSetter: setFeature },
      { ref: conditionRef, stateSetter: setCondition },
      {ref: starRef, stateSetter: setStar},
    ];

    const handleVisible = (e) => {
      refsAndStates.forEach(({ ref, stateSetter }) => {
        if (ref.current && ref.current.contains(e.target)) {
          stateSetter((prevState) => !prevState);
        }
      });
    };

    document.addEventListener("click", handleVisible);

    return () => {
      document.removeEventListener("click", handleVisible);
    };
  }, [categoryRef, brandRef, featureRef, conditionRef]);

  return (
    <div className="category-list-wrapper">
      <div className="list-wrapper">
        <div className="border-list"></div>
        <div className="category-title">
          <h6>Category</h6>
          <img src={expandLess} alt="arrow" ref={categoryRef} />
        </div>

        {visible &&
          brandList.map((item) => (
            <div className="expanded-list" key={item.id}>
              <p onClick={() => handleItemClick(item)}>{item.title}</p>
            </div>
          ))}
        <span>see all</span>
        <div className="border-list"></div>
        <div className="category-title">
          <h6>Brands</h6>
          <img src={expandLess} alt="arrow" ref={brandRef} />
        </div>
        {brand &&
          listCheckBox.map((item, id) => (
            <div key={id} className="checkbox">
              <input type="checkbox" onClick={() => handleItemClick(item)} />
              <label onClick={() => handleItemClick(item)}>{item.title}</label>
            </div>
          ))}
        <span>see all</span>
        <div className="border-list"></div>
        <div className="category-title">
          <h6>Features</h6>
          <img src={expandLess} alt="arrow" ref={featureRef} />
        </div>
        {feature &&
          featureList.map((item, id) => (
            <div key={id} className="checkbox">
              <input type="checkbox" onClick={() => handleItemClick(item)} />
              <label onClick={() => handleItemClick(item)}>{item.title}</label>
            </div>
          ))}
        <span>see all</span>
        <div className="border-list"></div>
        <div>
          <PriceRange />
        </div>
        <div className="border-list"></div>
        <div className="category-title">
          <h6>Condition</h6>
          <img src={expandLess} alt="arrow" ref={conditionRef} />
        </div>
        {condition &&
          conditionLits.map((item, id) => (
            <div key={id} className="checkbox">
              <input
                type="radio"
                name="condition"
                onClick={() => handleItemClick(item)}
              />
              <label onClick={() => handleItemClick(item)}>{item.title}</label>
            </div>
          ))}
        <div className="border-list"></div>
        <div className="category-title">
          <h6>Ratings</h6>
          <img src={expandLess} alt="arrow" ref={starRef} />
        </div>
        {star && (
          <div>
            <StarRating />
            <StarRating />
            <StarRating />
            <StarRating />
          </div>
        )}
      </div>
    </div>
  );
};

export { CategoryList };
