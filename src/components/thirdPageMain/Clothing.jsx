
import { Navigation } from "../secondPage/Navigation";
import "../secondPage/SecondPageStyles.scss";
import { InStock } from "../thirdPageInStock/InStock";

const Clothing = ()=>{
    return(
        <div className="main-wrapper">
        <div className="content-wrapper">
            <Navigation/>
          <div>
        <InStock/>
          </div>
        </div>
      </div>
    )
}

export {Clothing}