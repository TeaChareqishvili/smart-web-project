import "../SecondPageStyles.scss";
import arrowRight from "../../../assets/chevron_right.svg";
import { CategoryList } from "../CategoryList";
import { Subscribe } from "../../subscribe/Subscribe";
import { SourceForHome } from "./SourceForHome";

const HomeSourceItems = ()=>{
     return (
     <div>
         <div className="main-wrapper">
        <div className="content-wrapper">
          <div className="list">
            <p>Home</p>
            <img src={arrowRight} alt="arrow" />
            <p>Clothings</p>
            <img src={arrowRight} alt="arrow" />
            <p>Men's wear</p>
            <img src={arrowRight} alt="arrow" />
            <p>Summer clothing</p>
          </div>
          <div className="main-content">
            <CategoryList />
           <SourceForHome/>
          </div>
        </div>
      </div>
      <Subscribe />
     </div>
     )
}

export {HomeSourceItems}