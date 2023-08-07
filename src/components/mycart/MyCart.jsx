import useHeartIconClick from "../hook/saveFavorite";
import "./CartPageStyle.scss";
import back from "../../assets/arrow_back.svg";
import { NavLink } from "react-router-dom";

const MyCart = () => {
  const { chosenItems, handleRemoveItem } = useHeartIconClick();
 
  const handleRemoveButtonClick = (itemId) => {
    handleRemoveItem(itemId); 
  };
  

  return (
    <div>
      <div className="chosenItemsNumber">
        <h3>My cart ({chosenItems.length})</h3>
      </div>
      <div className="cart-wrapper">
        {chosenItems &&
          chosenItems.map((item) => (
            <>
              <div key={item.id} className="cart-grid-wrapper">
                <div className="cart-img">
                  <img src={item.item} alt="img" />
                </div>
                <div className="cart-description">
                  <p className="cart-title">{item.title}</p>
                  <p className="cart-size">
                    Size: medium, Color:blue, Material: Plastic
                  </p>
                  <span>Seller: Artel Market</span>
                  <div>
                    <button onClick={() => handleRemoveButtonClick(item.id)}>Remove</button>
                    <button>Save for later</button>
                  </div>
                </div>
                <div className="cart-price">
                  <p>{item.price}</p>
                  <input type="number" className="cart" placeholder="Pcs 1" />
                </div>
              </div>
              <div className="cart-border"></div>
            </>
          ))}
        <NavLink to="/second">
          <button className="back">
            <img src={back} alt="back" /> Back to Shop
          </button>
        </NavLink>
      </div>
    </div>
  );
};
///TODO add remove all button
export { MyCart };
