import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">

          <Link className="navbar-brand fw-bold" to="/">
            🛡 MultiService
          </Link>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu">

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/security">Security</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/car">Car Dealership</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/marketing">Marketing</Link>
              </li>

            </ul>

            <button className="btn btn-primary rounded-pill ms-3">
              Get Quote
            </button>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;