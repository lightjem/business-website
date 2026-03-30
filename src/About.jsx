import React from "react";
import { ShieldCheck, Megaphone, CarFront, CodeSlash } from "react-bootstrap-icons";

export default function About() {
  return (
    <div style={{ background: "#0b1a35", color: "white" }}>
      
      {/* Hero Section */}
      <div className="text-center py-5 px-3">
        <h1 className="fw-bold display-5">About Our Company</h1>
        <p className="text-light mt-3">
          We provide smart solutions in Security, Marketing, Automotive Consulting & Web Development.
        </p>
      </div>

      {/* About Content */}
      <div className="container py-5">
        <div className="row align-items-center g-4">
          
          <div className="col-md-6">
            <h3 className="fw-bold mb-3">Who We Are</h3>
            <p className="text-light">
              We are a multi-service company offering cutting-edge CCTV security solutions,
              result-driven digital marketing strategies, expert car consultancy, and modern web development services.
            </p>
            <p className="text-light">
              Our mission is to deliver quality, innovation, and trust to our customers.
            </p>
          </div>

          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
              alt="about"
              className="img-fluid rounded"
            />
          </div>

        </div>
      </div>

      {/* Services Section */}
      <div className="container pb-5">
        <h3 className="text-center mb-5 fw-bold">Our Services</h3>

        <div className="row g-4">

          <div className="col-md-3 col-sm-6">
            <div className="p-4 rounded text-center h-100" style={{ background: "#132a52" }}>
              <ShieldCheck size={40} className="mb-3 text-primary" />
              <h5>CCTV Security</h5>
              <p className="text-light small">
                Advanced surveillance systems for homes and businesses.
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="p-4 rounded text-center h-100" style={{ background: "#132a52" }}>
              <Megaphone size={40} className="mb-3 text-primary" />
              <h5>Digital Marketing</h5>
              <p className="text-light small">
                SEO, Ads & Social Media strategies to grow your business.
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="p-4 rounded text-center h-100" style={{ background: "#132a52" }}>
              <CarFront size={40} className="mb-3 text-primary" />
              <h5>Car Consultancy</h5>
              <p className="text-light small">
                Expert advice for buying, selling, and maintaining vehicles.
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="p-4 rounded text-center h-100" style={{ background: "#132a52" }}>
              <CodeSlash size={40} className="mb-3 text-primary" />
              <h5>Web Development</h5>
              <p className="text-light small">
                Modern websites and web apps tailored for your business.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container pb-5">
        <h3 className="text-center mb-4 fw-bold">Why Choose Us?</h3>

        <div className="row text-center g-4">
          <div className="col-md-3 col-6">
            <h2 className="text-primary">100+</h2>
            <p>Projects Completed</p>
          </div>
          <div className="col-md-3 col-6">
            <h2 className="text-primary">50+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="col-md-3 col-6">
            <h2 className="text-primary">5+</h2>
            <p>Years Experience</p>
          </div>
          <div className="col-md-3 col-6">
            <h2 className="text-primary">24/7</h2>
            <p>Support</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-5" style={{ background: "#132a52" }}>
        <h3 className="fw-bold">Ready to Work With Us?</h3>
        <p className="text-light">Let’s build something amazing together.</p>
        <button className="btn btn-primary px-4">Contact Us</button>
      </div>

    </div>
  );
}