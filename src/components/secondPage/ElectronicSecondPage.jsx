import "./SecondPageStyles.scss";
import { CategoryList } from "./CategoryList";
import { ItemList } from "./ItemList";
import { Subscribe } from "../subscribe/Subscribe";
import { Navigation } from "./Navigation";


const ElectronicSecondPage = () => {
  return (
    <>
      <div className="main-wrapper">
        <div className="content-wrapper">
            <Navigation/>
          <div className="main-content">
            <CategoryList />
            <ItemList />
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
};

export { ElectronicSecondPage };
