import "../sourceNow/SourceStyle.scss";
import home from "../../assets/home.png";
import { homeItems } from "./SourceData";
import arrowRight from "../../assets/arrow_forward.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
      {homeItems.map((item,id) => (
        <div key={id} className="home-items">
          <div className="about-item">
            <p className="item-title">{item.title}</p>
            <p className="item-price">from <br/>{item.price}</p>
          </div>
          <div className="item-imgs-wrapper">
            <img className="item-imgs" src={item.image} alt="item" />
          </div>
        </div>
      ))}
      <div className="mobile-wrapper">
       <h5>Home and outdoor</h5>
       <Swiper  slidesPerView="auto" className="mobile-slide">
        {homeItems.map((item,id)=>(
          <SwiperSlide key={id} className='mobile-item'>
          <img src={item.image} alt="furniture"/>
          <p className="title">{item.title}</p>
          <p className="price">from {item.price}</p>
          </SwiperSlide>
        ))}
       </Swiper>
       <div className="source">
           <p>Source now</p>
           <img src={arrowRight} alt="arrow"/>
        </div>
      </div>
    </div>
    
  );
};

export { HomeAndOutdoor };
