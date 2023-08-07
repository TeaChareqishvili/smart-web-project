import "./ConditionStyle.scss";
import { related } from "../thirdPagedescription/sliderdata";
import cart from "../../assets/cart.svg";


const SavedLater = ()=>{
    return(
        <div className="related-items-wrapper">
        <h5>Saved for later</h5>
        <div className="related-items">
          {related.map((item, id) => (
            
            <div key={id} className="related">
              <div>
                <img src={item.image} alt="item" />
                <div className="cover"></div>
              </div>
              <p>{item.title}</p>
              <span>{item.price}</span>
              <button className="move">
                <img src={cart} alt="cart-icon"/>
                Move to cart
              </button>
            </div>
          
          ))}
        </div>
      </div>
    )
}

export {SavedLater}