import "./CartPageStyle.scss";
import { MyCart } from "./MyCart";
import { CheckOut } from "./CheckOut";
import { Conditions } from "./Condition";
import { Discount } from "../discountThirdPage/Discount";
import { SavedLater } from "./SavedLater";

const CartPage = () => {
  return (
    <div className="cartPage">
      <div className="my-cart-wrapper">
        <div className="cart-content">
          <MyCart />
          <CheckOut />
        </div>
       <Conditions/>
       <SavedLater/>
       <Discount/>
      </div>
    </div>
  );
};

export { CartPage };
