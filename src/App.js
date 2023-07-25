import { FirstPage } from "./components/firstPage/FirstPage";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
 import { ElectronicSecondPage } from "./components/secondPage/ElectronicSecondPage";

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/smart-web-project" element={<FirstPage />} />
          <Route path="/second" element={<ElectronicSecondPage />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
