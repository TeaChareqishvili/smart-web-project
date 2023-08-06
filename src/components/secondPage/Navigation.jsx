import "./SecondPageStyles.scss";
import arrowRight from "../../assets/chevron_right.svg";
import { NavLink } from "react-router-dom";

const Navigation = ()=>{
    return(
        <div className="list">
        <NavLink to="/smart-web-project">
          <p>Home</p>
        </NavLink>
        <img src={arrowRight} alt="arrow" />
        <NavLink to="/clothing">
          <p>Clothings</p>
        </NavLink>
        <img src={arrowRight} alt="arrow" />
        <NavLink to="/second">
        <p>Electorinics</p>
        </NavLink>
        <img src={arrowRight} alt="arrow" />
        <NavLink to="/HomeSourceItems">
        <p>For Home</p>
        </NavLink>
      
      </div>
    )
}

export {Navigation}