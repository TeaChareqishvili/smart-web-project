import { Navigation } from "../secondPage/Navigation";
import "../secondPage/SecondPageStyles.scss";
import { InStock } from "../thirdPageInStock/InStock";
import { Description } from "../thirdPagedescription/Description";

const Clothing = () => {
  return (
    <div className="main-wrapper">
      <div className="content-wrapper">
        <Navigation />
        <InStock />
        <div className="description-section">
          <Description/>
          <div>hbcjbckajbckjabcajkscb</div>
        </div>
      </div>
     
    </div>
  );
};

export { Clothing };
