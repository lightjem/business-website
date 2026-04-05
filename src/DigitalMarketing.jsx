import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DigitalMarketing.css";
import { useNavigate } from "react-router-dom";
import heroImage from "./assets/marketing-slide.png";

function DigitalMarketing() {
  const navigate = useNavigate();

  return (
    <div className="marketing-page">

      {/* HERO */}
      <section
        className="marketing-hero d-flex align-items-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <div className="container text-center">
          <h1 className="fw-bold hero-title mb-3">
            Digital Marketing Solutions
          </h1>

          <p className="lead hero-text mx-auto">
            Grow your business online with powerful, result-driven strategies
            that deliver real growth.
          </p>

          <button
            className="btn btn-warning btn-lg rounded-pill px-4 mt-3 shadow"
            onClick={() => navigate("/contact")}
          >
            🚀 Start Your Campaign
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-5 bg-light">
        <div className="container text-center">

          <h2 className="fw-bold mb-5 section-title">
            Our Marketing Services
          </h2>

          <div className="row g-4">

            <div className="col-12 col-md-6 col-lg-4">
              <div className="marketing-card h-100 p-4 shadow-sm">
                <h5>🔎 SEO Optimization</h5>
                <p>
                  Improve search rankings and drive organic traffic with
                  advanced SEO strategies.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="marketing-card h-100 p-4 shadow-sm">
                <h5>📱 Social Media Marketing</h5>
                <p>
                  Build brand awareness and connect with your audience across
                  all platforms.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mx-auto">
              <div className="marketing-card h-100 p-4 shadow-sm">
                <h5>💰 Google Ads</h5>
                <p>
                  Run high-converting campaigns that turn visitors into
                  customers.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-5">
        <div className="container">

          <div className="row align-items-center g-5">

            {/* IMAGE */}
            <div className="col-12 col-lg-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                className="img-fluid rounded-4 shadow-lg"
                alt="marketing"
              />
            </div>

            {/* CONTENT */}
            <div className="col-12 col-lg-6 text-center text-lg-start">

              <h2 className="fw-bold mb-3 section-title">
                Why Choose Our Experts?
              </h2>

              <ul className="list-unstyled marketing-list mt-3">
                <li>✔ Data-Driven Strategies</li>
                <li>✔ Proven SEO Results</li>
                <li>✔ Creative Campaigns</li>
                <li>✔ ROI-Focused Ads</li>
                <li>✔ 24/7 Support</li>
              </ul>

              <button
                className="btn btn-primary rounded-pill px-4 mt-3"
                onClick={() => navigate("/contact")}
              >
                Get Started
              </button>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default DigitalMarketing;