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
// import { DropDown } from "./DropDown";


const Header = ({chosenItems}) => {



  const [selectedCategory, setSelectedCategory] = useState("");
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [header, setHeader] = useState(true)

  

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const menuRef = useRef(null);

  useEffect(() => {
    const handleMenu = (e) => {
      if (menuRef.current) {
        if (menuRef.current.contains(e.target)) {
          setBurgerMenu(true);
          console.log("nia");
        }
      }
    };
    document.addEventListener("click", handleMenu);

    return () => {
      document.removeEventListener("click", handleMenu);
    };
  }, []);



  return (
    <>
      <div className="header-wrapper">
        <div className="logo">
          <img ref={menuRef} className="mobile-menu" src={menu} alt="menu" />
          <NavLink to="smart-web-project">
            <img src={brandimg} alt="brand" onClick={()=>setHeader(true)} />
          </NavLink>
        </div>
        {burgerMenu && <MenuBar setBurgerMenu={setBurgerMenu} />}
        <form>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search"
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
            />

            <select value={selectedCategory} onChange={handleCategoryChange}>
              <option value="all category">All category</option>
              <option value="Automobiles">Automobiles</option>
              <option value="Clothes and wear">Clothes and wear</option>
              <option value="Computer and tech">Computer and tech</option>
              <option value="Tools, equipments">Tools, equipments</option>
              <option value="Sports and outdoor">Sports and outdoor</option>
              <option value="Animal and pets">Animal and pets</option>
              <option value="Machinery tools">Machinery tools</option>
              <option value="Machinery tools">Machinery tools</option>
            </select>
            <button>Search</button>
          </div>
        </form>
        <div className="icons">
          {icons.map((item, id) => (
            <div key={id} className="desktop-icons">
              {item.title === "My cart" ? (
                <NavLink to="/cart">      
                  <img src={item.icon} alt="icon" onClick={()=>setHeader(false)} />
                  <p onClick={()=>setHeader(false)}>{item.title}<span className="number">({chosenItems.length})</span></p>
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
          <img src={card} alt="card" />
          <img src={person} alt="person" />
        </div>
      </div>
      <div className="mobile-form">
        <form>
          <input type="text" placeholder="Search" />
          <img src={search} alt="search" />
        </form>
        <div>
        </div>
      </div>
      <div className="border"></div>
      {header && <div className="category-wrapper">
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
      </div>}
      <div className="border"></div>
    </>
  );
};

export { Header };
