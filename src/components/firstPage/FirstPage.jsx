import { DealAndOffers } from "../dealAndOffers/DealAndOffers";
import { Banner } from "../firstPageBanner/Banner"
import { Suppliers } from "../suppliers/Suppliers";
import "./Style.scss";

const FirstPage = ()=>{
    return (
        <div className="main-wrapper">
            <Banner/>
            <DealAndOffers/>
            <Suppliers/>
        </div>
    )
}

export {FirstPage}