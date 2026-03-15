import Home from "./Home";
import Security from "./Security";
import Nav from "./nav";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import CarConsultant from "./CarConsultant";
import DigitalMarketing from "./DigitalMarketing";

function App() {
  return (
       <>
       <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Security" element={<Security />} />
      <Route path="/car" element={<CarConsultant />} />
      <Route path="/marketing" element={<DigitalMarketing />} />

        </Routes>
        <Footer />
       </>



  )
}

export default App;