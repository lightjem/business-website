import Home from "./Home";
import Security from "./Security";
import Nav from "./Nav";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import CarConsultant from "./CarConsultant";
import DigitalMarketing from "./DigitalMarketing";
import Contact from "./Contact";
import About from "./About";

function App() {
  return (
    <>
      <Nav />
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/security" element={<Security />} />
        <Route path="/car" element={<CarConsultant />} />
        <Route path="/marketing" element={<DigitalMarketing />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;