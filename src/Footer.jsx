import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: "#08142b", color: "white" }} className="py-5">
      <div className="container">
        <div className="row">

          <div className="col-md-3">
            <h4>🛡 MultiService</h4>
            <p>
              Your trusted partner for modern security solutions,
              premium auto sales, and results-driven digital marketing.
            </p>
          </div>

          <div className="col-md-3">
            <h5>Quick Links</h5>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About Us</Link>
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </div>

          <div className="col-md-3">
            <h5>Our Services</h5>
             <Link className="nav-link" to="/security">CCTV & Security</Link>
            <Link className="nav-link" to="/car">Car Dealership</Link>
            <Link className="nav-link" to="/marketing">Digital Marketing</Link>
          </div>

          <div className="col-md-3">
            <h5>Contact Info</h5>
            <p>luxara vanithavalam, palakkad, kerala</p>
            <p>jamshedjamshedrahman@gmail.com</p>
            <p>7025513859</p>
          </div>

        </div>
      </div>
    </footer>
  )
}