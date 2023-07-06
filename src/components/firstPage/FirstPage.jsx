import { DealAndOffers } from "../dealAndOffers/DealAndOffers";
import { Banner } from "../firstPageBanner/Banner";
import { Items} from "../recommendedItems/Items";
import { ElectorinicsSource } from "../sourceNow/ElectronicsSource";
import { HomeAndOutdoor } from "../sourceNow/HomeAndOutdoor";
import { Subscribe } from "../subscribe/Subscribe";
import { Suppliers } from "../suppliers/Suppliers";
import { Regions } from "../suppliersRegion/Regions";
import "./Style.scss";

const FirstPage = () => {
  return (
    <>
      <div className="main-wrapper">
        <Banner />
        <DealAndOffers />
        <HomeAndOutdoor />
        <ElectorinicsSource />
        <Suppliers />
        <Items/>
        <Regions />
      </div>
      <div>
        <Subscribe />
      </div>
    </>
  );
};

export { FirstPage };
