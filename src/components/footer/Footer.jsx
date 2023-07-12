import "./FooterStyle.scss";
import brandLogo from "../../assets/logo-colored.svg";
import { footerInfo, link } from "./FooterData";
import google from "../../assets/market-button.svg";
import apple from "../../assets/apple.svg";
import Usa from "../../assets/USA.png";
import German from "../../assets/flag.png";
import expandUp from "../../assets/expand_less.svg";
import expandDown from "../../assets/expand_more.png";
import { useState, useRef, useEffect } from "react";

const Footer = () => {
  const [arrowUp, setArrowUp] = useState(true);
  const [arrowDown, setArrowDown] = useState(false);

  const arrowUpRef = useRef(null);
  const arrowDownRef = useRef(null);

  useEffect(() => {
    const click = (e) => {
      if (arrowUpRef.current && arrowDownRef) {
        if (arrowUpRef.current.contains(e.target)) console.log("cool");
        setArrowUp(false);
        setArrowDown(true);
      } else if (arrowDownRef.current.contains(e.target)) {
        console.log("nia");
        setArrowDown(false);
        setArrowUp(true);
      }
    };

    document.addEventListener("click", click);

    return () => {
      document.removeEventListener("click", click);
    };
  }, []);

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
            {arrowUp ? (
              <img src={Usa} alt="flag" />
            ) : (
              <img src={German} alt="flag" />
            )}

            {arrowUp ? <p>English</p> : <p>German</p>}
            <div>
              {arrowUp && (
                <div ref={arrowUpRef}>
                  <img src={expandUp} alt="arrow" />
                </div>
              )}
              {arrowDown && (
                <div ref={arrowDownRef}>
                  <img src={expandDown} alt="arrow" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Footer };
