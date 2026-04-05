import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "./assets/log.png";
import "./Nav.css";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-2">
      <div className="container">

        {/* LOGO */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img
            src={logo}
            alt="Luxara Logo"
            className="img-fluid"
            style={{ maxHeight: "40px" }}
          />
          <span className="fw-bold brand-text">Luxara</span>
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="menu">

          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3 text-center">

            <li className="nav-item">
              <Link className={`nav-link ${isActive("/") ? "active-link" : ""}`} to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${isActive("/security") ? "active-link" : ""}`} to="/security">
                Security
              </Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${isActive("/car") ? "active-link" : ""}`} to="/car">
                Car
              </Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${isActive("/marketing") ? "active-link" : ""}`} to="/marketing">
                Marketing
              </Link>
            </li>

            {/* BUTTON */}
            <li className="nav-item mt-3 mt-lg-0">
              <button
                className="btn btn-primary rounded-pill px-4 nav-btn"
                onClick={() => navigate("/contact")}
              >
                Get Quote
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;