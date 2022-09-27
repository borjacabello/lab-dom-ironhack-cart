// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let priceDOM = product.querySelector(".price span")
  let quantityDOM = product.querySelector(".quantity input")

  let subtotalPriceValue = priceDOM.innerText * quantityDOM.value;

  let subTotalDOM = product.querySelector(".subtotal span")
  subTotalDOM.innerText = subtotalPriceValue;

  return subtotalPriceValue;
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let productsDOM = document.querySelectorAll(".product")

  let counter = 0;

  productsDOM.forEach( (eachProduct) => {
    counter += updateSubtotal(eachProduct);
  })

  // ITERATION 3
  let totalDOM = document.querySelector("#total-value span")
  totalDOM.innerText = counter;
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  let parentElement = target.parentNode.parentNode;
  parentElement.remove();

  calculateAll();
}

// ITERATION 5

function createProduct() { // no me sale bien

  let newProductDOM = document.querySelectorAll(".create-product input")

  let newPushedElementDOM = document.createElement("tr")

  newPushedElementDOM.innerHTML = `
          <td class="name">
            <span>${newProductDOM[0].value}</span>
          </td>

          <td class="price">$<span>${newProductDOM[1].value}</span></td>

          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>

          <td class="subtotal">$<span>0</span></td>

          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>`;

  let tableRowDOM = document.querySelector("tbody");
  tableRowDOM.append(newPushedElementDOM);
  
  newPushedElementDOM.classList.add("product")
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductsBtn = document.querySelectorAll('.btn-remove');
  removeProductsBtn.forEach( (eachProduct) => {
    eachProduct.addEventListener('click', removeProduct);
  });

  const createProductsBtn = document.querySelectorAll("#create");
  createProductsBtn.forEach( (eachProduct) => {
    eachProduct.addEventListener("click", createProduct);
  })
});
