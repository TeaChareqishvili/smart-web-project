import "./MayLikeStyle.scss";
import { slider } from "./sliderdata";
 import { Swiper, SwiperSlide } from "swiper/react";
 import "swiper/css";

const MayLike = () =>{
    return(
      <div className="may-like-slider">
         <h6>You may like</h6>
         <Swiper className="slider-wrapper"  slidesPerView="auto" direction="vertical" >
          {slider.map((item,id)=>(
            <SwiperSlide key={id} className="slider" >
            <div className="may-like-img">
                <img src={item.image} alt="clothes"/>
            </div>
            <div className="may-like-description">
                <h5>{item.title}</h5>
                <p>{item.price}</p>
            </div>
            </SwiperSlide>
          ))}
         </Swiper>
      </div>
    )
}

export {MayLike}
