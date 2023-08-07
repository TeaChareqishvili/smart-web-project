import "./CheckOutStyle.scss";
import express from "../../assets/payment.svg";
import bank from "../../assets/Logo.svg";
import P from "../../assets/Logo1.svg";
import visa from "../../assets/Logo2.svg";
import pay from "../../assets/image 21.png";

const CheckOut = () => {
  return (
    <div className="main-checkout-wrapper">
      <div className="coupon">
        <p>Have a coupon?</p>
        <div>
          <input type="text" placeholder="Add coupon" />
          <button>Apply</button>
        </div>
      </div>
      <div className="checkout-wrapper">
        <div className="coupon-checkout">
          <div>
            <p>Subtotal:</p>
            <p>Discoun:t</p>
            <p>Tax:</p>
          </div>
          <div>
            <span className="grey">$1403.97</span>
            <span className="red">-$60.00</span>
            <span className="green">+$14.00</span>
          </div>
        </div>
        <div className="border"></div>
        <div className="checkout">
          <div>
            <h6>Total:</h6>
            <h4>$1357.97</h4>
          </div>
          <button>Checkout</button>
        </div>
        <div className="pay-icons">
          <img src={express} alt="pay-logo" />
          <img src={bank} alt="pay-logo" />
          <img src={P} alt="pay-logo" />
          <img src={visa} alt="pay-logo" />
          <img src={pay} alt="pay-logo" />
        </div>
      </div>
    </div>
  );
};
export { CheckOut };
