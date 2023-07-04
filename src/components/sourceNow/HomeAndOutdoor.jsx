import "../sourceNow/SourceStyle.scss";
import home from "../../assets/home.png";
import { homeItems } from "./SourceData";

const HomeAndOutdoor = () => {
  return (
    <div className="home-offer-wrapper">
      <div className="main-img">
        <img src={home} alt="home" />
        <div className="home-text">
          <h4>Home and outdoor</h4>
          <button>Source now</button>
        </div>
      </div>
      {homeItems.map((item) => (
        <div key={item.id} className="home-items">
          <div className="about-item">
            <p className="item-title">{item.title}</p>
            <p className="item-price">from <br/>{item.price}</p>
          </div>
          <div className="item-imgs-wrapper">
            <img className="item-imgs" src={item.image} alt="item" />
          </div>
        </div>
      ))}
    </div>
  );
};

export { HomeAndOutdoor };
