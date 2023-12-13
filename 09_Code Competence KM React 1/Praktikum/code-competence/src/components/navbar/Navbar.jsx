import React from "react";
import "./Navbar.style.css";
import { logoilab } from "../../Image";

const navbar = () => {
  return (
    <>
      <div className="nav-wrap d-flex">
        <div className="nav-wrap-logo">
          <img className="nav-logo" src={logoilab} alt="" />
        </div>
        <div className="nav-menu-item d-flex align-items-center justify-space-between">
          <div>
            <a className="fw-semibold" href="">
              Home
            </a>
          </div>
          <div>
            <a className="fw-semibold" href="">
              About Us
            </a>
          </div>
          <div>
            <a className="fw-semibold" href="">
              Contact
            </a>
          </div>
        </div>
        <div className="nav-btn-menu d-flex gap-2 end">
          <button className="btn-signup bg-transparent rounded">
            <a className="fw-semibold" href="">
              Sign Up
            </a>
          </button>
          <button className="btn-login bg-primary rounded border-0 ">
            <a className="fw-semibold text-white" href="">
              Login
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default navbar;
