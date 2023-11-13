import React from "react";

function Main() {
  return (
    <div class="d-flex flex-column justify-content-center align-items-center">
      <img
        src="./asset/bootstrap-logo.svg.png"
        alt="Bootstrap"
        width="50"
        height="42"
      />
      <h2 class="my-4">Create Account</h2>
      <p class="w-50 text-center">
        Below is an example form built entirely with Bootstrap’s form controls.
        Each required form group has a validation state that can be triggered by
        attempting to submit the form without completing it.
      </p>
    </div>
  );
}

export default Main;

