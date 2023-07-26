import "./GadgetListStyle.scss";
import { WholeData } from "../allData/AllData";
import { useState } from "react";
import right from "../../assets/chevron-right.png";
import left from "../../assets/chevron-left.svg";
// import { Rating } from "react-simple-star-rating";

const GadgetList = () => {
  const getRandomItems = (arr, count) => {
    const shuffled = arr.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  const [randomElectroData, setRandomElectroData] = useState(
    getRandomItems(
      WholeData.filter((item) => item.type === "electro"),
      6
    )
  );

  const handleRefresh = () => {
    setRandomElectroData(
      getRandomItems(
        WholeData.filter((item) => item.type === "electro"),
        6
      )
    );
  };

  console.log("randomElectroData: ", randomElectroData);

  return (
    <>
      {randomElectroData.map((item, id) => (
        <div className="gadget-wrapper" key={id}>
          <div className="gadget-img">
            <img src={item.item} alt="elecctronic-img" />
          </div>
          <div className="gadget-info">
            <div className="gadget-title">
              <p>{item.title}</p>
              <img src={item.favorite} alt="heart-icon" />
            </div>
            <div className="gadget-price">
                
              <span className="price">{item.price}</span>
              <span className="sale">{item.sale}</span>
            </div>
            <div className="gadget-shipping">
            {/* <Rating className="rating" /> // TODO style  */}
              <span></span>
              <p className="orders">{item.orders}</p>
              <span></span>
              <p className="shipping">{item.shipping}</p>
            </div>
            <p className="description">{item.description}</p>
            <span className="details">{item.details}</span>
          </div>
        </div>
        
      ))}
     <div className="pages">
      <select>
        <option>Show 10</option>
      </select>
        <img src={left} alt="arrow"/>
        <button onClick={()=>handleRefresh()}>1</button>
        <button onClick={()=>handleRefresh()}>2</button>
        <button onClick={()=>handleRefresh()}>3</button>
        <img src={right} alt="arrow"/>
     </div>
    </>
  );
};

export { GadgetList };
