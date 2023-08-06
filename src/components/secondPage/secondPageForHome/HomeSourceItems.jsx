import "../SecondPageStyles.scss";
// import arrowRight from "../../../assets/chevron_right.svg";
import { CategoryList } from "../CategoryList";
import { Subscribe } from "../../subscribe/Subscribe";
import { SourceForHome } from "./SourceForHome";
import { Navigation } from "../Navigation";

const HomeSourceItems = ()=>{
     return (
     <div>
         <div className="main-wrapper">
        <div className="content-wrapper">
        <Navigation/>
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