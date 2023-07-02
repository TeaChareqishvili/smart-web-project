import "./BannerStyle.scss";
import { categories } from "../header/HeaderData";

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="category-list">
        <nav>
          {categories.map((item) => (
            <ul key={item.id}>
              <li>{item.title}</li>
            </ul>
          ))}
        </nav>
      </div>
      <div>dvd</div>
      <div>vdv</div>
    </div>
  );
};

export { Banner };
