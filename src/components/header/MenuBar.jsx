import "./HeaderStyles.scss";
import avatar from "../../assets/Avatar.png";
import clear from "../../assets/clear.png";
import { userMenu, userMenuAdd } from "./HeaderData";
import { useRef, useEffect } from "react";

const MenuBar = ({ setBurgerMenu }) => {
  const divRef = useRef(null);
  const imgRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (divRef.current && imgRef.current && wrapperRef.current) {
        if (
          divRef.current.contains(e.target) &&
          !wrapperRef.current.contains(e.target)
        ) {
          setBurgerMenu(false);
          console.log("nia");
        }
        if (imgRef.current.contains(e.target)) {
          setBurgerMenu(false);
          console.log("nia2");
        }
      }
    };

    document.addEventListener("click", close);

    return () => {
      document.removeEventListener("click", close);
    };
  }, [setBurgerMenu]);
  return (
    <div className="burger-bar-wrapper" ref={divRef}>
      <div className="menu-wrapper" ref={wrapperRef}>
        <div className="avatar">
          <div>
            <img src={avatar} alt="avatar" />
            <p>Sign in | Register</p>
          </div>
          <div>
            <img ref={imgRef} src={clear} alt="clear" />
          </div>
        </div>
        <div className="menu-list">
          {userMenu.map((item, id) => (
            <div key={id} className="list">
              <img src={item.icon} alt="icon" />
              <p>{item.title}</p>
            </div>
          ))}
          <div className="border-menu"></div>
        </div>
        <div className="menu-list">
          {userMenuAdd.map((item, id) => (
            <div key={id} className="list">
              <img src={item.icon} alt="icon" />
              <p>{item.title}</p>
            </div>
          ))}
          <div className="border-menu"></div>

          <div className="add-list">
            <p>User agreement</p>
            <p>Partnership</p>
            <p>Privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MenuBar };
