import React from 'react'

export default function Footer() {
  return (
    <>
        {/* Footer */}
      <footer
        style={{ background: "#08142b", color: "white" }}
        className="py-5"
      >
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
              <p>Home</p>
              <p>About Us</p>
              <p>Contact Us</p>
            </div>

            <div className="col-md-3">
              <h5>Our Services</h5>
              <p>CCTV & Security</p>
              <p>Car Dealership</p>
              <p>Digital Marketing</p>
            </div>

            <div className="col-md-3">
              <h5>Contact Info</h5>
              <p>123 Business Avenue</p>
              <p>contact@multiservice.com</p>
              <p>+1 555 123 4567</p>
            </div>

          </div>
        </div>
      </footer>
    </>
  )
}
