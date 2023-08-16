import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./DropDownStyle.scss";
import expand from "../../assets/expand_more.png";
import expandLessflag from "../../assets/expand_less.svg";
import flag from "../../assets/flag.png";
import { region } from "../suppliersRegion/RegionData";

const DropDown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [expandMore, setExpandMore] = useState(true);
//   const [expandLess, setExpandLess] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(true);
  
   
  };

//   const close = ()=>{
//       setExpandLess(false)
//       setExpandMore(true)
//       setShowDropdown(false);
     
//   }
  return (
    <Dropdown show={showDropdown} onToggle={()=>toggleDropdown()}>
      {expandMore && <img src={expand} alt="arrow" onClick={()=>toggleDropdown()} />}
      {/* {expandLess && (
        <img src={expandLessflag} alt="arrow" onClick={()=>close()} />
      )} */}
      <Dropdown.Menu>
        <Dropdown.Item  className="dropdown-item">
            {region.map((item,id)=>(
                <div key={id} className="country-menu">
                       <img src={item.image} alt="Option 2" className="dropdown-icon" />
                </div>
            ))}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export { DropDown };
