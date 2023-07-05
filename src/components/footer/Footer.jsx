import "./FooterStyle.scss";
import brandLogo from "../../assets/logo-colored.svg";
import { footerInfo, link } from "./FooterData";
import google from "../../assets/market-button.svg";
import apple from "../../assets/apple.svg";
import Usa from "../../assets/USA.png";
// import German from "../../assets/flag.png";
import expandLess from "../../assets/expand_less.svg";
import expandMore from "../../assets/expand_more.png";
import { useState } from "react";

const Footer = () => {
  //  const moreRef = useRef(null)
  //  const lessRef = useRef(null)
  const [expand, setExpand] = useState(false);

  // useEffect(()=>{
  //     const checkRef = (e) => {
  //         if (lessRef.current && moreRef.current) {
  //           if (lessRef.current.contains (e.target)) {
  //             setExpand(true);
  //             console.log('less')
  //           } else if (moreRef.current.contains(e.target)) {
  //             setExpand(false);
  //             console.log('More')
  //           }
  //         }
  //       };
  //       document.addEventListener("click", checkRef);

  //       return () => {
  //         document.removeEventListener("click", checkRef);
  //       };
  // },[])

  //TODO გასასწორებელია

  return (
    <>
      <div className="footer-wrapper">
        <div className="media">
          <img src={brandLogo} alt="logo" />
          <p>
            Best information about the company gies here but now lorem ipsum is
          </p>
          <div className="media-icons">
            {link.map((item, id) => (
              <div key={id} className="icons">
                <a href={item.link} target="_blank" rel="noreferrer">
                  <img src={item.icon} alt="media-icon" />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-info">
          {footerInfo.map((item, id) => (
            <div key={id}>
              <p className="footer-title">{item.title}</p>
              <p>{item.info}</p>
              <p>{item.info2}</p>
              <p>{item.info3}</p>
              <p>{item.info3}</p>
            </div>
          ))}
        </div>
        <div className="get-app">
          <p>Gett app</p>
          <div>
            <img src={apple} alt="apple-icon" />
          </div>
          <div>
            <img src={google} alt="google-icon" />
          </div>
        </div>
      </div>
      <div className="ecommerce-wrapper">
        <div className="ecommerce">
          <div className="ecommerce-text">
            <p>© 2023 Ecommerce. </p>
          </div>
          <div className="language">
            <img src={Usa} alt="flag" />
            <p>English</p>
            <div>
              {expand ? (
                <img  src={expandMore} alt="arrow" />
              ) : (
                <img  src={expandLess} alt="arrow" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Footer };
