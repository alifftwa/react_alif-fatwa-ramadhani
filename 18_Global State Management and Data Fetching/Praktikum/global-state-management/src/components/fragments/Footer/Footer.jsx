import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="">
        <div class="container">
          <footer class="row row-cols-5 py-5 my-5 border-top">
            <div class="col">
              <h3>ARSHA</h3>
              <p>A108 Adam Street</p>
              <p>United States</p>
              <div className="d-flex justify-content-center">
                <div className="mt-4">
                  <div className="d-flex">
                    <p className="fw-semibold">Phone: </p>
                    <p> +1 5589 55488 55</p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-semibold">Email: </p>
                    <p>info@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col"></div>

            <div class="col">
              <h5>Useful Links</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    About Us
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Services
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Terms of service
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>

            <div class="col">
              <h5>Our Services</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Web Design
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Web Development
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    PProduct Management
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Marketing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Graphic Design
                  </a>
                </li>
              </ul>
            </div>

            <div class="col">
              <h5>Our Social Networks</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Cras fermentum odio eu feugiat lide par naso tierra videa
                    magna derita valies
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
        <footer>
          <div className="footer-end d-flex row gx-5">
            <div className="col mx-3 text-start">
              <p className="">© Copyright Arsha. All Rights Reserved</p>
            </div>
            <div className="col mx-4 text-end">
              <p>Designed by BootstrapMade</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
