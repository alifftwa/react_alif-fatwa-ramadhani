// let productNameInput = document.getElementById("product-name-input").value
// let productNameError = document.getElementById("product-name-Error")
// let emptyProductNameError = document.getElementById("empty-product-name")

// let productCategoryInput = document.getElementById("product-category-input")
// let productCategoryError = document.getElementById("product-category-Error")
// let emptyProductCategoryError = document.getElementById("empty-product-category")

// let additionalDescriptionInput = document.getElementById("additional-description-input")
// let additionalDescriptionError = document.getElementById("additional-description-Error")
// let additionalDescriptionError = document.getElementById("empty-additional-description")

// let submitButton = document.getElementById("submit-button")

// let validClasses = document.getElementById("valid")
// let invalidClasses = document.getElementById("error")

const form = document.getElementById("form");
const productName = document.getElementById("product-name");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const productNameValue = productName.ariaValueMax.trim();

  if (productNameValue === "") {
    setErrorFor(productName, "Username tidak boleh kosong!");
  } else {
    setSuccesFor(productName);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccesFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
