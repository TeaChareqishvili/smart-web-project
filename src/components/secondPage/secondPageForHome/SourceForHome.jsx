import "../SecondPageStyles.scss";
import gridview from "../../../assets/gridview.svg";
import listview from "../../../assets/listview.svg";
import { useState } from "react";
import { HomeListView } from "./HomeListView";
import { HomeGridView } from "./HomeGridView";


const SourceForHome = ()=>{

    const [view, setView] = useState(true)

    return(
        <div className="itemList-wrapper">
      <div className="select-box">
        <div>
          <p>12,911 items in Mobile accessory</p>
        </div>
        <div className="form">
          <input type="checkbox" />
          <label>Verified only</label>
          <select>
            <option>Featured</option>
          </select>
          <img className="view-list" onClick={()=>setView(false)} src={gridview} alt="list" />
          <img className="view-grid" onClick={()=>setView(true)} src={listview} alt="list" />
        </div>
      </div>
     {view ? (  <HomeListView />) : <HomeGridView/>}
      
      
    
    </div>
    )
}

export {SourceForHome}