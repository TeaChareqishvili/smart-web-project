import "./DescriptionStyles.scss";
import { description } from "./DescriptionData";
import { FaCheck} from "react-icons/fa";

const Description = () => {
  return (
    <div className="description-wrapper">
      <div className="nav-bar">
        <ul>
          <li>Description</li>
          <li>Reviews</li>
          <li>Shipping</li>
          <li>About seller</li>
        </ul>
      </div>
      <div className="border"></div>
      <div>
        {description.map((item, id) => (
          <div key={id}>
            <p className={id === 0 ? 'description-lorem' : ''}>{item.text}</p>
            <div className="details">
                <p className={id>0 ? "model" : " "}>{item.model}</p>
                <p className={id>0 ? "modelType" : " "}>{item.modelNumber}</p>
            </div>
          </div>
        ))}
        <div className="checked-items">
        {description.map((item,id)=>(
             <div key={id} className="checked">
               {id> 0 && id<5 &&<FaCheck className="facheck"/>}
             <p>{item.title}</p>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export { Description };
