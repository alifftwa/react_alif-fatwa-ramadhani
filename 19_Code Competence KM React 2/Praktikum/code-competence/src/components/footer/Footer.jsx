import React from "react";
import "./Footer.style.css";
import { logoilab } from "../../Image";

const Footer = () => {
  return (
    <>
      <div className="footer d-flex justify-content-center">
        <div className="footer-menu col d-flex justify-content-center">
          <div className="row">
            <div className="d-flex flex-column">
              <div className="text-center">
                <img className="footer-logo" src={logoilab} />
              </div>
              <div className="footer-copyright text-center py-3">
                Copyright © 2023. Alifftwa
              </div>
            </div>
          </div>

          <div className="row">
            <label className="fw-bold">Service</label>
            <ul className="list-unstyled mt-4 d-flex flex-column gap-2">
              <li>
                <a href="">Email Marketing</a>
              </li>
              <li>
                <a href=""> Campaigns</a>
              </li>
              <li>
                <a href="">Branding</a>
              </li>
              <li>
                <a href="">Offline</a>
              </li>
            </ul>
          </div>

          <div className="row">
            <label className="fw-bold">About</label>
            <ul className="list-unstyled mt-4 d-flex flex-column gap-2">
              <li>
                <a href="">Our Story</a>
              </li>
              <li>
                <a href="">Benefits</a>
              </li>
              <li>
                <a href="">Team</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
            </ul>
          </div>

          <div className="row">
            <label className="fw-bold">Follow Us</label>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <a href="https://www.linkedin.com/in/alifftwa/">Linked In</a>
              </li>
              <li>
                <a href="https://www.instagram.com/alifftwa/">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
