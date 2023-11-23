import React from "react";
import BootstrapLogo from "../../../assets/bootstrap-logo.png";
import "./Form.css";
import { useState } from "react";

const Form = () => {

  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");
  const [freshness, setFreshness] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    if (regEx.test(product, category, freshness, price)) {
      setMessage("Is Valid");
    } else if (
      (!regEx.test(product, category, freshness, price) && product,
      category,
      freshness,
      price !== "")
    ) {
      setMessage("Not Valid");
    } else {
      setMessage("");
    }
  };

  const handleOnChange = (e) => {
    setProduct(e.target.value);
    setCategory(e.target.value);
    setFreshness(e.target.value);
    setPrice(e.target.value);
  };

  return (
    <div className="" id="wrapper">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div className="">
          <img className="boostrap-logo" src={BootstrapLogo} alt="Bootstrap" />
        </div>
        <h2 class="my-4">Create Account</h2>
        <p class="w-50 text-center">
          Below is an example form built entirely with Bootstrap’s form
          controls. Each required form group has a validation state that can be
          triggered by attempting to submit the form without completing it.
        </p>
      </div>

      <div className="d-flex flex-column w-100 my-5">
        <div className="d-flex m-auto">
          <h3>Detail Product</h3>
        </div>
        <form className="mx-auto my-5">
          <div className="d-flex flex-row">
            <div className="mb-3 mx-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Product Name
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="mb-4 mx-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Product Category
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3 mx-3">
            <label htmlFor="formFileMultiple" className="form-label">
              Image of Product
            </label>
            <input
              className="form-control"
              type="file"
              id="formFileMultiple"
              multiple=""
            />
          </div>

          <div className="radio mx-3">
            <p>Product Freshness</p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onChange={handleOnChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Brand New
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Second Hand
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Refufbished
              </label>
            </div>
          </div>
          <div className="">
            <div className="my-3 mx-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3 mx-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Example textarea
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={""}
              />
            </div>
            <div className="my-3 mx-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Product Price
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="">
            <button className="w-100 btn btn-lg bg-primary text-white border rounded my-4">
              Create Account
            </button>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
