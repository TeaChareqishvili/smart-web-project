import { FirstPage } from "./components/firstPage/FirstPage";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
 import { ElectronicSecondPage } from "./components/secondPage/ElectronicSecondPage";
 import { HomeSourceItems } from "./components/secondPage/secondPageForHome/HomeSourceItems";
 import { Clothing } from "./components/thirdPageMain/Clothing";

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/smart-web-project" element={<FirstPage />} />
          <Route path="/second" element={<ElectronicSecondPage />} />
          <Route path="/HomeSourceItems" element={<HomeSourceItems />} />
          <Route path="/clothing" element={<Clothing />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
