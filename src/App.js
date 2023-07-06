import { Routes, Route } from "react-router-dom";
import { FirstPage } from "./components/firstPage/FirstPage"; import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";


function App() {
  return (
    <div className="App">
     <Header/>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        {/* <Route path="/products" element={<Products />}>
		<Route path="/admin/dashboard" element={<Dashboard />}> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
