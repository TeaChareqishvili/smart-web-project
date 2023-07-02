import "./HeaderStyles.scss";
import brandimg from "../../assets/logo-colored.svg";
import { icons } from "./HeaderData";
import { useState } from "react";
import { categories } from "./HeaderData";
import menu from "../../assets/menu.svg";
import expand from "../../assets/expand_more.png";
import flag from "../../assets/flag.png";

const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <div className="header-wrapper">
        <div className="logo">
          <img src={brandimg} alt="brand" />
        </div>
        <form>
          <div>
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
          </div>
          <button>Search</button>
        </form>
        <div className="icons">
          {icons.map((item) => (
            <div key={item.id}>
              <img src={item.icon} alt="icon" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border"></div>
      <div className="category-wrapper">
        <div className="categories">
          <img src={menu} alt="menu" />
          {categories.map((item) => (
            <div className="category" key={item.id}>
              <p>{item.title}</p>
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
            <img src={expand} alt="expand-more" />
          </div>
        </div>
      </div>
      <div className="border"></div>
    </>
  );
};

export { Header };
