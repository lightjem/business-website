import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import heo from "./assets/home.png";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="text-white d-flex align-items-center"
        style={{
          background: "linear-gradient(90deg,#0b1b3b,#0e2a5a)",
          minHeight: "100vh",
        }}
      >
        <div className="container">
          <div className="row align-items-center text-center text-lg-start">

            {/* LEFT */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="fw-bold display-5 display-lg-4">
                Secure. Drive.{" "}
                <span className="text-primary">Succeed.</span>
              </h1>

              <p className="mt-3 px-2 px-lg-0">
                We are your ultimate partner, offering top-tier CCTV security,
                premium vehicles, and innovative digital marketing strategies
                to accelerate your growth.
              </p>

              <div className="mt-4 d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
                <button
                  className="btn btn-primary btn-lg px-4"
                  onClick={() => navigate("/contact")}
                >
                  Get a Free Quote
                </button>

                <button
                  className="btn btn-outline-light btn-lg px-4"
                  onClick={() => navigate("/car")}
                >
                  Browse Cars
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-6 text-center">
              <img
                src={heo}
                className="img-fluid rounded-4 shadow"
                alt="team"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-5 bg-light">
        <div className="container text-center">

          <h6 className="text-primary">WHAT WE DO</h6>
          <h2 className="fw-bold mb-5">Our Core Services</h2>

          <div className="row g-4">

            {/* CARD 1 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 p-4 border-0 shadow-sm text-center text-md-start">
                <h4>CCTV & Security</h4>
                <p>
                  Protect your home and business with advanced camera systems
                  and 24/7 monitoring.
                </p>
                <Link className="text-decoration-none fw-semibold" to="/security">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div
                className="card h-100 p-4 text-white border-0 shadow"
                style={{ background: "#2f6df6" }}
              >
                <h4>Car Dealership</h4>
                <p>
                  Discover premium new and pre-owned cars at the best prices.
                </p>
                <Link className="text-white text-decoration-none fw-semibold" to="/car">
                  Browse Inventory →
                </Link>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="col-12 col-md-6 col-lg-4 mx-auto">
              <div className="card h-100 p-4 border-0 shadow-sm text-center text-md-start">
                <h4>Digital Marketing</h4>
                <p>
                  Grow your brand with SEO, social media, and high-converting
                  websites.
                </p>
                <Link className="text-decoration-none fw-semibold" to="/marketing">
                  Boost Traffic →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 text-center">
        <div className="container">

          <h2 className="fw-bold">
            Ready to Upgrade Your Business?
          </h2>

          <p className="mt-3 px-2 px-md-5">
            Contact our team today for security solutions, vehicles, or digital
            marketing services tailored to your needs.
          </p>

          <button
            className="btn btn-primary btn-lg rounded-pill px-4 mt-3"
            onClick={() => navigate("/contact")}
          >
            Contact Us Today
          </button>

        </div>
      </section>
    </>
  );
}

export default Home;