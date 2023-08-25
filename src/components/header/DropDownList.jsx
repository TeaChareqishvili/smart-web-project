import flag from "../../assets/flag.png";
import expand from "../../assets/expand_more.png";
import { listFlag } from "./HeaderData";
import { useRef, useEffect, useState } from "react";
import "./HeaderStyles.scss";

const DropDownList = ({ flags, setFlags }) => {
  const flagRef = useRef(null);

  const [selectedFlag, setSelectedFlag] = useState(null);

  const handleFlagClick = (flagImage) => {
    setSelectedFlag(flagImage);
    setFlags(false); 
  };

  useEffect(() => {
    const handleMenu = (e) => {
      if (flagRef.current) {
        if (flagRef.current.contains(e.target)) {
          setFlags(true);
          console.log('hhh')
        }
      }
    };
    document.addEventListener("click", handleMenu);

    return () => {
      document.removeEventListener("click", handleMenu);
    };
  }, [setFlags]);

  return (
    <div className="dropDown">
      <p>Ship to</p>
      <img className="flag"  src={selectedFlag || flag} alt="flag" />
      <img src={expand} alt="expand-more" ref={flagRef} />
      {flags && (
        <div className="list">
          {listFlag.map((item, id) => (
            <ul key={id}>
              <li onClick={() => handleFlagClick(item.image)}>
                <img src={item.image} alt="flag" />
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export { DropDownList };
