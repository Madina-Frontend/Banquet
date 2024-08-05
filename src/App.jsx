import { Route, Routes } from "react-router-dom";
import Header from "./HeaderFooter/Header";
import Home from "./Pages/Home";
import Footer from "./HeaderFooter/Footer";
import Xizmatlar from "./Pages/Xizmatlar";
import { CircularProgress } from "@chakra-ui/react";
import Loading from "./Pages/Loading";
import ArendaXizmati from "./Pages/ArendaXizmati";
import CofeeBreack from "./Pages/CofeeBreack";
import Oddiy from "./Pages/Oddiy";
import Standart from "./Pages/Standart";
import Premium from "./Pages/Premium";


function App() {

  return (
    <>
      <div>
        <Header />
        <div className=" max-w-[1368px] mx-auto pt-5 px-4">
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Xizmatlar" element={<Xizmatlar/>}/>
          <Route path="*"  element={<Loading/>}/>
          <Route path="/ArendaXizmati" element={<ArendaXizmati/>}/>
          <Route path="/CofeeBreack" element={<CofeeBreack/>}/>
          <Route path="/Oddiy" element={<Oddiy/>}/>
          <Route path="/Standart" element={<Standart/>}/>
          <Route path="/Premium" element={<Premium/>}/>
         </Routes>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
