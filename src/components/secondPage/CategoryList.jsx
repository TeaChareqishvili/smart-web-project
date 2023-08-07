import "./SecondPageStyles.scss";
import expandLess from "../../assets/category_expand.svg";
import { brandList } from "./ListData";
import { listCheckBox } from "./ListData";
import { featureList } from "./ListData";
import { conditionLits } from "./ListData";
import { StarRating } from "./StarRating";
import { PriceRange } from "./PriceRange";


const CategoryList = ({ selectedItems, handleItemClick }) => {



  return (
    <div className="category-list-wrapper">
      <div className="list-wrapper">
        <div className="border-list"></div>
        <div className="category-title">
          <h6>Category</h6>
          <img src={expandLess} alt="arrow" />
        </div>
        {brandList.map((item) => (
          <div className="expanded-list" key={item.id}>
            <p   onClick={() => handleItemClick(item)}>{item.title}</p>
          </div>
        ))}
        <span>see all</span>
        <div className="border-list"></div>
        <div className="category-title">
          <h6>Brands</h6>
          <img src={expandLess} alt="arrow" />
        </div>
        {listCheckBox.map((item, id) => (
          <div key={id} className="checkbox">
            <input type="checkbox" />
            <label  onClick={() => handleItemClick(item)}>{item.title}</label>
          </div>
        ))}
        <span>see all</span>
        <div className="border-list"></div>
        <div className="category-title">
          <h6>Features</h6>
          <img src={expandLess} alt="arrow" />
        </div>
        {featureList.map((item, id) => (
          <div key={id} className="checkbox">
            <input type="checkbox" />
            <label  onClick={() => handleItemClick(item)}>{item.title}</label>
          </div>
        ))}
        <span>see all</span>
        <div className="border-list"></div>
        <div>
           <PriceRange/>
        </div>
        <div className="border-list"></div>
        <div className="category-title">
          <h6>Condition</h6>
          <img src={expandLess} alt="arrow" />
        </div>
        {conditionLits.map((item,id)=>(
             <div key={id} className="checkbox">
             <input type="radio" name="condition"/>
             <label  onClick={() => handleItemClick(item)}>{item.title}</label>
           </div>
        ))}
           <div className="border-list"></div>
           <div className="category-title">
          <h6>Ratings</h6>
          <img src={expandLess} alt="arrow" />
        </div>
        <StarRating/>
        <StarRating/>
        <StarRating/>
        <StarRating/>
      </div>
    </div>
  );
};

export { CategoryList };

