import React from "react";
import Navbar from "../../components/fragments/Navbar/Navbar";
import "./LandingPage.css";
import HeroImage from "../../assets/hero-img.png";
import Footer from "../../components/fragments/Footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="section-1 row">
        <div className="col  d-flex justify-content-end align-items-center">
          <div className=" mx-5 d-flex ">
            <div className=" mx-5 text-start ">
              <p className="text-white fs-1 fw-bold">
                Better Solutions For Your <br /> Business
              </p>
              <p className="text2-section1 fs-4">
                We are team of talented designers making websites with <br />{" "}
                Bootstrap
              </p>

              <div className="my-5 d-flex gap-4">
                <div>
                  <button className="button-start px-3 py-2 border-0 rounded-pill fw-semibold text-white ">
                    Get Started
                  </button>
                </div>
                <div>
                  <button className="button-watch px-3 py-2 bg-transparent border-0 fw-regular text-white">
                    <p> Watch Video</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image col d-flex text-start">
          <img src={HeroImage} alt="" />
        </div>
      </div>

      {/* Section-2 */}
      <div className="section-2">
        <div className="py-5">
          <p className="text2-section2 fw-bold fs-3">join Our Newsletter</p>
          <p className="fw-reguler">
            Tamen quem nulla quae legam multos aute sint culpa legam noster
            magna
          </p>
          <div className="d-flex justify-content-center w-100">
            <span className="w-100 d-flex justify-content-center">
              <input
                type="email"
                className="form-control w-50"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <button className="button-subscribe px-3 border-0 text-white rounded-end">
                Subscribe
              </button>
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
