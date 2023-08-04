import "./RelatedItemsStyle.scss";
import { related } from "../thirdPagedescription/sliderdata";

const RelatedItems = () => {
  return (
    <div className="related-items-wrapper">
      <h5>Related products</h5>
      <div className="related-items">
        {related.map((item, id) => (
          <div key={id} className="related">
            <div>
              <img src={item.image} alt="item" />
              <div className="cover"></div>
            </div>
            <p>{item.title}</p>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { RelatedItems };
