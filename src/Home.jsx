import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

  return (
    <>
     
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(90deg,#0b1b3b,#0e2a5a)",
          padding: "100px 0",
          color: "white",
        }}
      >
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6">
              <h1 className="display-4 fw-bold">
                Secure. Drive. <span className="text-primary">Succeed.</span>
              </h1>

              <p className="mt-3">
                We are your ultimate partner, offering top-tier CCTV security,
                premium Maruti Suzuki vehicles, and innovative digital
                marketing strategies to accelerate your growth.
              </p>

              <div className="mt-4">
                <button className="btn btn-primary btn-lg me-3" onClick={() => navigate("/contact")}>
                  Get a Free Quote
                </button>

                <button className="btn btn-outline-light btn-lg" onClick={() => navigate("/car")}>
                  Browse Cars
                </button>
              </div>
            </div>

            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                className="img-fluid rounded shadow"
                alt="team"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">

          <h6 className="text-primary">WHAT WE DO</h6>
          <h2 className="fw-bold mb-5">Our Core Services</h2>

          <div className="row">

            <div className="col-md-4">
              <div className="card p-4 shadow-sm border-0">
                <h4>CCTV & Security</h4>

                <p>
                  Protect your home and business with state-of-the-art camera
                  installations and 24/7 monitoring systems.
                </p>

                <Link className="nav-link" to="/security">Learn More →</Link>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-4 text-white border-0 shadow"
                style={{background:"#2f6df6"}}>
                <h4>Car Dealership</h4>

                <p>
                  Find your dream Maruti Suzuki vehicle. We offer premium new
                  and certified pre-owned cars at the best prices.
                </p>

               <Link className="nav-link" to="/car"> Browse Inventory →</Link>
                 
            
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-4 shadow-sm border-0">
                <h4>Digital Marketing</h4>

                <p>
                  Boost your digital presence with expert SEO, tailored social
                  media strategies, and high-conversion web development.
                </p>

                <Link className="nav-link" to="/marketing">Boost Traffic →</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 text-center">
        <div className="container">

          <h2 className="fw-bold">
            Ready to Upgrade Your Business?
          </h2>

          <p className="mt-3">
            Contact our diverse team of experts today. Whether you need an
            impenetrable security system, a brand new car, or aggressive
            marketing.
          </p>

          <button className="btn btn-primary btn-lg rounded-pill mt-3" onClick={() => navigate("/contact")}>
            Contact Us Today
          </button>

        </div>
      </section>

    </>
  );
}

export default Home;