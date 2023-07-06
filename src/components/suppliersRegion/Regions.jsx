import "./RegionsStyle.scss";
import { region } from "./RegionData";

const Regions = () => {
  return (
    <div className="region-wrapper">
      <div>
        <h3>Suppliers by region</h3>
      </div>
      <div className="regions">
        {region.map((item, id) => (
          <div key={id}>
            <div className="region">
              <img src={item.image} alt="flag" />
              <div>
                <p className="country-name">{item.country}</p>
                <a href={item.link}><p>{item.link}</p></a>
              </div>
            </div>
            <div className="region">
              <img src={item.image2} alt="flag" />
              <div>
                <p className="country-name">{item.country2}</p>
               <a href={item.link2}><p>{item.link2}</p></a> 
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Regions };
