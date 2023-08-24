import { FirstPage } from "./components/firstPage/FirstPage";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import { ElectronicSecondPage } from "./components/secondPage/ElectronicSecondPage";
import { HomeSourceItems } from "./components/secondPage/secondPageForHome/HomeSourceItems";
import { Clothing } from "./components/thirdPageMain/Clothing";
import { CartPage } from "./components/mycart/CartPage";
import useHeartIconClick from "./components/hook/saveFavorite";
import { useEffect, useRef,useState} from "react";

function App() {

  const [open, setOpen] = useState(false);

  const appRef = useRef(null)
  
  useEffect(() => {
    const handleMenu = (e) => {
      if (appRef.current) {
        if (appRef.current.contains(e.target)) {
          setOpen(false);
        
        }
      }
    };
    document.addEventListener("click", handleMenu);

    return () => {
      document.removeEventListener("click", handleMenu);
    };
  }, [setOpen]);

  const { chosenItems, handleHeartIconClick, handleRemoveItem, handleClearAll } = useHeartIconClick();

  return (
    <div className="App" ref={appRef}>
      <Header  chosenItems={chosenItems} setOpen={setOpen} open={open}/>
      <Routes>
        <Route exact path="/smart-web-project" element={<FirstPage />} />
        <Route path="/second" element={<ElectronicSecondPage handleHeartIconClick={handleHeartIconClick}/>} />
        <Route path="/HomeSourceItems" element={<HomeSourceItems  handleHeartIconClick={handleHeartIconClick} />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/cart" element={<CartPage  chosenItems={chosenItems} handleClearAll={handleClearAll} handleRemoveItem={handleRemoveItem} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
