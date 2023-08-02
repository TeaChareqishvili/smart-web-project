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
        <p>Men's wear</p>
        <img src={arrowRight} alt="arrow" />
        <p>Summer clothing</p>
      </div>
    )
}

export {Navigation}