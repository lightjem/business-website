import "bootstrap/dist/css/bootstrap.min.css";
import "./CarConsultant.css";
import brezza from "./assets/car/Brezza.jpg";
import baleno from "./assets/car/baleno.jpg";
import vitara from "./assets/car/vitara.jpg";
import {useNavigate} from "react-router-dom"

function CarConsultant() {
    const navigate = useNavigate();

  return (
    <div className="car-page">

      {/* Hero Section */}
      <div className="car-hero text-center text-white">
        <div className="container">
          <h1 className="display-4 fw-bold">Premium Car Consulting</h1>
          <p className="lead">
            Find your dream car with expert guidance and trusted dealerships.
          </p>

          <button className="btn btn-warning btn-lg rounded-pill mt-3" onClick={() => navigate("/contact")}>
           Contact now
          </button>
        </div>
      </div>


      {/* Services Section */}
      <div className="container py-5">

        <h2 className="text-center mb-5">Our Car Services</h2>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="car-card">
              <h4>🚗 Car Buying Assistance</h4>
              <p>
                We help you choose the perfect car that fits your lifestyle
                and budget.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="car-card">
              <h4>💰 Best Price Negotiation</h4>
              <p>
                Our experts negotiate with dealers to get you the best
                possible deal.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="car-card">
              <h4>📋 Car Inspection</h4>
              <p>
                Professional vehicle inspection to ensure quality and
                reliability.
              </p>
            </div>
          </div>

        </div>

      </div>


      {/* Featured Cars */}

<div className="container pb-5">

  <h2 className="text-center mb-5">Latest Maruti Suzuki Cars</h2>

  <div className="row g-4">

    <div className="col-md-4">
      <div className="car-showcase">
        <img src={brezza} className="img-fluid" alt="Brezza"/>
        <h5>Maruti Suzuki Brezza</h5>
        <p>₹8,34,000</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="car-showcase">
        <img src={baleno} className="img-fluid" alt="Baleno"/>
        <h5>Maruti Suzuki Baleno</h5>
        <p>₹6,66,000</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="car-showcase">
        <img src={vitara} className="img-fluid" alt="Grand Vitara"/>
        <h5>Maruti Suzuki Grand Vitara</h5>
        <p>₹10,99,000</p>
      </div>
    </div>

  </div>

</div>

    </div>
  );
}

export default CarConsultant;