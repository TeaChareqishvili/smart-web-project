import "./CartPageStyle.scss";
import { MyCart } from "./MyCart";
import { CheckOut } from "./CheckOut";
import { Conditions } from "./Condition";

const CartPage = () => {
  return (
    <div className="cartPage">
      <div className="my-cart-wrapper">
        <div className="cart-content">
          <MyCart />
          <CheckOut />
        </div>
       <Conditions/>
      </div>
    </div>
  );
};

export { CartPage };
