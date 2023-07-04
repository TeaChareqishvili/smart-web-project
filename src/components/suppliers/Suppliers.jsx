import "../suppliers/SuppliersStyle.scss";
import supply from "../../assets/supply.png";
// import expand from "../../assets/expand_more.png";

const Suppliers = () => {
  return (
    <div className="supply-wrapper">
      <img src={supply} alt="supply" />
      <div className="overlay"></div>
      <div className="supply-text">
        <h2>An easy way to send requests to all suppliers</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
      </div>
      <div className="supply-form">
        <form>
            <h4>Send quote to suppliers</h4>
            <div>
                <input className="text" type="text" placeholder="What item you need?"/>
            </div>
            <div className="text">
            <textarea className="text" cols="30" rows="4" placeholder="Type more details"></textarea>
            </div>
            <div>
              <input type="number" placeholder="Quantity"/>
              <input type='number' placeholder="Pcs"/>
              {/* <img src={expand} alt="expand" class="input-icon" /> */}
            </div>
            <div>
                <button>Send inquiry</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export { Suppliers };
