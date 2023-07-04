import "./FooterStyle.scss";
import brandLogo from "../../assets/logo-colored.svg";
import { footerInfo, link } from "./FooterData";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="media">
        <img src={brandLogo} alt="logo" />
        <p>
          Best information about the company gies here but now lorem ipsum is
        </p>
        <div  className="media-icons">
        {link.map((item) => (
          <div key={item.id} className="icons">
            <a href={item.link} target="_blank" rel="noreferrer">
              <img src={item.icon} alt="media-icon" />
            </a>
          </div>
        ))}
        </div>  
      </div>
      <div className="footer-info">
        {footerInfo.map((item)=>(
            <div key={item.id}>
                <p className="footer-title">{item.title}</p>
                <p>{item.info}</p>
                <p>{item.info2}</p>
                <p>{item.info3}</p>
                <p>{item.info3}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export { Footer };
