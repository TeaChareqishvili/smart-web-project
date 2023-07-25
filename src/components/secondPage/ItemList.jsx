import "./SecondPageStyles.scss";
import gridview from "../../assets/gridview.svg";
import listview from "../../assets/listview.svg";
import { GadgetList } from "./GadgetList";

const ItemList = () => {
  return (
    <div className="itemList-wrapper">
      <div className="select-box">
        <div>
          <p>12,911 items in Mobile accessory</p>
        </div>
        <div className="form">
          <input type="checkbox" />
          <label>Verified only</label>
          <select>
            <option>Featured</option>
          </select>
          <img src={gridview} alt="list" />
          <img src={listview} alt="list" />
        </div>
      </div>
      <GadgetList/>
    </div>
  );
};

export { ItemList };
