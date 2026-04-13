import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "./assets/log.png";

export default function Footer() {
  return (
    <footer
      className="text-white pt-5 pb-3"
      style={{ background: "linear-gradient(135deg,#08142b,#0b1b3b)" }}
    >
      <div className="container">

        <div className="row g-4 text-center text-md-start">

          {/* BRAND */}
          <div className="col-12 col-md-6 col-lg-3">
            <h4 className="fw-bold"> <img
                        src={logo}
                        alt="Luxara Logo"
                        className="img-fluid"
                        style={{ maxHeight: "40px" }}
                      /> MultiService</h4>
            <p className="small mt-3">
              Your trusted partner for modern security solutions,
              premium auto sales, and results-driven digital marketing.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-3 d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#" className="text-white fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="col-6 col-md-3 col-lg-3">
            <h5 className="fw-semibold mb-3">Quick Links</h5>

            <Link className="footer-link d-block mb-2" to="/">Home</Link>
            <Link className="footer-link d-block mb-2" to="/about">About Us</Link>
            <Link className="footer-link d-block" to="/contact">Contact Us</Link>
          </div>

          {/* SERVICES */}
          <div className="col-6 col-md-3 col-lg-3">
            <h5 className="fw-semibold mb-3">Our Services</h5>

            <Link className="footer-link d-block mb-2" to="/security">CCTV & Security</Link>
            <Link className="footer-link d-block mb-2" to="/car">Car Dealership</Link>
            <Link className="footer-link d-block" to="/marketing">Digital Marketing</Link>
          </div>

          {/* CONTACT */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="fw-semibold mb-3">Contact Info</h5>

            <p className="small mb-2">
              Luxara, Vandithavalam <br />
              Palakkad, Kerala
            </p>

            <p className="small mb-2">
              <a href="mailto:jamshedjamshedrahman@gmail.com" className="footer-link">
                jadeert28@gmail.com
              </a>
            </p>

            <p className="small">
              <a href="tel:+917293513857" className="footer-link">
                +91 7293513857
              </a>
            </p>
          </div>

        </div>

        {/* DIVIDER */}
        <hr className="border-light my-4" />

        {/* BOTTOM */}
        <div className="text-center small d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <span>© {new Date().getFullYear()} Luxara. All rights reserved.</span>

          <span>
            Designed by <strong>Jamshed</strong>
          </span>
        </div>

      </div>
    </footer>
  );
}