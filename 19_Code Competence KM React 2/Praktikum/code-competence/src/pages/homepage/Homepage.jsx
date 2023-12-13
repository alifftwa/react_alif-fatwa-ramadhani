import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Homepage.style.css";
import { Hero } from "../../Image";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <div className="hero">
          <img className="hero-img" src={Hero} />
          {/* <div className="hero-content">
            <div className="text-white fs-1 ">Selamat Datang</div>
            <div className="text-white fs-4 ">
              di website praktikum Pemrograman Website
            </div>
          </div> */}
        </div>

        <div class="container contact-form py-5 px-5">
          <form method="post">
            <h3>Contact Us</h3>
            <div class="row">
              <div class="col-md-6 d-flex flex-column gap-2">
                <div class="form-group">
                  <input
                    type="text"
                    name="txtName"
                    class="form-control"
                    placeholder="Your Name *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="txtEmail"
                    class="form-control"
                    placeholder="Your Email *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="txtPhone"
                    class="form-control"
                    placeholder="Your Phone Number *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    name="btnSubmit"
                    class="btnContact bg-primary text-white border-0 rounded py-2 px-2"
                    value="Send Message"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <textarea
                    name="txtMsg"
                    class="form-control"
                    placeholder="Your Message *"
                    style={{ width: "100%", height: "150px" }}
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
