import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../assets/icons/Toolixir.svg";
import "../styles/components/Navbar.css";
import { AiFillMoon } from "react-icons/ai";

function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand me-0 tw-w-fit" href="#">
            <img src={logo} alt="" className="img-fluid tw-w-[55%]" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 pe-5">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tools
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="dark-mode-icon">
              <AiFillMoon className="fs-2 hover:tw-cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
