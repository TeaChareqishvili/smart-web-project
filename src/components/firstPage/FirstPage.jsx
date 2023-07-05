import { DealAndOffers } from "../dealAndOffers/DealAndOffers";
import { Banner } from "../firstPageBanner/Banner"
 import { ElectorinicsSource } from "../sourceNow/ElectronicsSource";
 import { HomeAndOutdoor } from "../sourceNow/HomeAndOutdoor";
import { Subscribe } from "../subscribe/Subscribe";
 import { Suppliers } from "../suppliers/Suppliers";
import "./Style.scss";

const FirstPage = ()=>{
    return (
        <div className="main-wrapper">
            <Banner/>
             <DealAndOffers/> 
             <HomeAndOutdoor/>
            <ElectorinicsSource/>
            <Suppliers/> 
            <Subscribe/>
        </div>
    )
}

export {FirstPage}