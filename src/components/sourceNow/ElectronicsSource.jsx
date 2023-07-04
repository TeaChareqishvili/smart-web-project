import "../sourceNow/SourceStyle.scss";
import electronics from "../../assets/electronics.png";
import { electroinics } from "./SourceData";

const ElectorinicsSource = () => {
  return (
    <div className="home-offer-wrapper">
      <div className="main-img">
        <img src={electronics} alt="home" />
        <div className="home-text">
          <h4>Home and outdoor</h4>
          <button>Source now</button>
        </div>
      </div>
      {electroinics.map((item) => (
        <div key={item.id} className="home-items">
          <div className="about-item">
            <p className="item-title">{item.title}</p>
            <p className="item-price">{item.price}</p>
          </div>
          <img className="item-imgs" src={item.image} alt="item" />
        </div>
      ))}
    </div>
  );
};

export { ElectorinicsSource };
