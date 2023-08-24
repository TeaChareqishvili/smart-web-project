import "./HeaderStyles.scss";
import brandimg from "../../assets/logo-colored.svg";
import { icons } from "./HeaderData";
import { useState, useRef, useEffect } from "react";
import { categories } from "./HeaderData";
import menu from "../../assets/menu.svg";
import expand from "../../assets/expand_more.png";
import flag from "../../assets/flag.png";
import card from "../../assets/shopping_cart.svg";
import person from "../../assets/person-mobile.svg";
import search from "../../assets/mobilesearch.svg";
import { MenuBar } from "./MenuBar";
import { NavLink } from "react-router-dom";
import { select } from "./HeaderData";

const Header = ({ chosenItems, setOpen, open }) => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [header, setHeader] = useState(true);

  const menuRef = useRef(null);
  const searchRef = useRef(null);
  const navigationRef = useRef(null);

  useEffect(() => {
    const handleMenu = (e) => {
      if (menuRef.current) {
        if (menuRef.current.contains(e.target)) {
          setBurgerMenu(true);
        }
      }
    };
    document.addEventListener("click", handleMenu);

    return () => {
      document.removeEventListener("click", handleMenu);
    };
  }, []);

  useEffect(() => {
    const handleSearch = (e) => {
      if (searchRef.current) {
        if (searchRef.current.contains(e.target)) {
          setOpen(true);
          console.log('truee')
        }
      }
      if (navigationRef.current) {
        if (navigationRef.current.contains(e.target)) {
          setOpen(false);
        }
      }
    };
    document.addEventListener("click", handleSearch);

    return () => {
      document.removeEventListener("click", handleSearch);
    };
  }, [setOpen]);

  return (
    <>
      <div className="header-wrapper">
        <div className="logo">
          <img ref={menuRef} className="mobile-menu" src={menu} alt="menu" />
          <NavLink to="smart-web-project">
            <img src={brandimg} alt="brand" onClick={() => setHeader(true)} />
          </NavLink>
        </div>
        {burgerMenu && <MenuBar setBurgerMenu={setBurgerMenu} />}
        <form>
          <input className="input" type="text" placeholder="Search" />
          <div className="search-category" ref={searchRef}>
            <p> All category</p>
            <img src={expand} alt="expand" />
          </div>
          <button className="search-button">Search</button>
          {open && (
            <div className="select-search" ref={navigationRef}>
              {select.map((item, id) => (
                <div key={id}>
                  <ul>
                    <li>{item.title}</li>
                  </ul>
                </div>
              ))}
            </div>
          )}
        </form>

        <div className="icons">
          {icons.map((item, id) => (
            <div key={id} className="desktop-icons">
              {item.title === "My cart" ? (
                <NavLink to="/cart">
                  <img
                    src={item.icon}
                    alt="icon"
                    onClick={() => setHeader(false)}
                  />
                  <p onClick={() => setHeader(false)}>
                    {item.title}
                    <span className="number">({chosenItems.length})</span>
                  </p>
                </NavLink>
              ) : (
                <>
                  <img src={item.icon} alt="icon" />
                  <p>{item.title}</p>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="mobile-icons">
          <NavLink to="/cart">
            <img src={card} alt="card" />
          </NavLink>

          <img src={person} alt="person" />
          <span className="mobile-number">({chosenItems.length})</span>
        </div>
      </div>
      <div className="mobile-form">
        <form>
          <input type="text" placeholder="Search" />
          <img src={search} alt="search" />
        </form>
        <div></div>
      </div>
      <div className="border"></div>
      {header && (
        <div className="category-wrapper">
          <div className="categories">
            <img src={menu} alt="menu" />
            {categories.map((item, id) => (
              <div className="category" key={id}>
                <ul>
                  <li>{item.title}</li>
                </ul>
              </div>
            ))}
            <img src={expand} alt="expand-more" />
          </div>
          <div className="countries">
            <div>
              <p>English, USD</p>
              <img src={expand} alt="expand-more" />
            </div>
            <div>
              <p>Ship to</p>
              <img className="flag" src={flag} alt="flag" />
              {/* <DropDown/> */}
              <img src={expand} alt="expand-more" />
            </div>
          </div>
        </div>
      )}
      <div className="border"></div>
    </>
  );
};

export { Header };
