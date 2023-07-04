import "../dealAndOffers/DealAndOffersStyle.scss";
import React, { useState, useEffect } from "react";
//  import { Swiper, SwiperSlide } from 'swiper/react';
import { offers } from "./OffersData";
import 'swiper/css';

const DealAndOffers = () => {
  const [days, setDays] = useState(4);
  const [hours, setHours] = useState(13);
  const [minutes, setMinutes] = useState(34);
  const [seconds, setSeconds] = useState(56);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  useEffect(() => {
    if (seconds < 0) {
      if (minutes > 0) {
        setMinutes((prevMinutes) => prevMinutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours((prevHours) => prevHours - 1);
        setMinutes(59);
        setSeconds(59);
      } else if (days > 0) {
        setDays((prevDays) => prevDays - 1);
        setHours(23);
        setMinutes(59);
        setSeconds(59);
      }
    }
  }, [seconds, minutes, hours, days]);

  return (
    <div className="offer-wrapper">
      <div className="time-wrapper">
        <h4>Deals and offers</h4>
        <p>Hygiene equipments</p>
        <div className="time">
          <div>
            <span>{days}</span>
            <p>Days</p>
          </div>
          <div>
            <span>{hours}</span>
            <p>Hour</p>
          </div>
          <div>
            <span>{minutes}</span>
            <p>Min</p>
          </div>
          <div>
            <span>{seconds}</span>
            <p>Sec</p>
          </div>
        </div>
      </div>
      <div className="slide-wrapper">
      
      {offers.map((item)=>(
        <div key={item.id} className="tech">
           <img src={item.image} alt="tech"/>
           <p>{item.title}</p>
           <span>{item.price}</span>
        </div>
      ))}

   
      </div>
    </div>
  );
};

export { DealAndOffers };
