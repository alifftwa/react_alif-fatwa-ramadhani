import React from "react";

const Form = () => {
  return (
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
        {/* <div class="input-group">
    <div class="custom-file mx-3 mb-4 border border-primary">
      <input
        type="file"
        class="custom-file-input"
        id="inputGroupFile01"
        aria-describedby="inputGroupFileAddon01"
      />
    </div>
  </div> */}
        <div className="radio mx-3">
          <p>Product Freshness</p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
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
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
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
            />
          </div>
        </div>
        <div className="">
          <button className="w-100 btn btn-lg bg-primary text-white border rounded my-4">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
