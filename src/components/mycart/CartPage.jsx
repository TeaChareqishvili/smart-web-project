import "./CartPageStyle.scss";
import { MyCart } from "./MyCart";
import { CheckOut } from "./CheckOut";

const CartPage = () => {
  return (
    <div className="cartPage">
      <div className="my-cart-wrapper">
        <div className="cart-content">
          <MyCart />
          <CheckOut />
        </div>
      </div>
    </div>
  );
};

export { CartPage };
