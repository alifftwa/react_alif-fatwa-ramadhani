import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="wrap-nav">
        <div class="fContainer d-flex flex-row">
          <nav class="wrapper d-flex flex-row justify-content-between align-items-center fs-5 p-3 w-100 h-1 bg-white shadow-sm p-3 mb-5 bg-white rounded">
            <div class="brand d-flex flex-row fs-4">
              <div class="firstName text-black">Simple</div>
              <div class="lastName text-black px-2">Header</div>
            </div>

            <ul class="nav justify-content-end nav-pills nav-fill">
              <li class="nav-item">
                <button
                  className="bg-transparent border-0"
                  onClick={() => navigate("/")}
                >
                  <a class="nav-link active" href="#">
                    Home
                  </a>
                </button>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  FAQs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <button
                  className="bg-transparent border-0"
                  onClick={() => navigate("/create-product")}
                >
                  <a class="nav-link" href="#">
                    Create Product
                  </a>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
