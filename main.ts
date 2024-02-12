//initial states
let totalCost: number = 0;
let pricePerSize: number = 0;
let deliveryCost: number = 0;
let toppingCost: number = 0;
let price: HTMLElement | null = document.querySelector(".price");
/* Choosing a pizza size (radio buttons) */
const sizes: NodeListOf<HTMLInputElement> = document.querySelectorAll(".size");

sizes.forEach((size) => {
  size.addEventListener("click", () => {
    if (size.value === "serve2") {
      pricePerSize = 7.5;
    } else if (size.value === "serve4") {
      pricePerSize = 10.5;
    } else if (size.value === "serve6") {
      pricePerSize = 12.5;
    } else {
      pricePerSize = 15.5;
    }

    totalCost = pricePerSize + toppingCost + deliveryCost;

    if (price !== null) {
      price.textContent = String(totalCost) + " €";
    }
  });
});

const toppings: NodeListOf<HTMLInputElement> =
  document.querySelectorAll(".topping");
toppings.forEach((topping) => {
  topping.addEventListener('click', () => {
    let checkboxElems = document.getElementsByTagName('input');
    let count = 0;
    for (let i = 0; i < checkboxElems.length; i++) {
      if (
        checkboxElems[i].type === 'checkbox' &&
        checkboxElems[i].checked === true
      ) {
        count++;
      }
    }
   
    if (count > 4) {
      toppingCost = (count - 4) * 0.5;
    } else {
      toppingCost = 0;
    }

    totalCost = pricePerSize + toppingCost + deliveryCost;

   
    if (price !== null) {
      price.textContent = String(totalCost) + " €";
    }
  });
});


const delivery =
  document.getElementById("select") as HTMLInputElement;

  delivery.addEventListener('change', () => {
    if(delivery.value === 'home'){
      deliveryCost = 5;
    } else {
      deliveryCost = 0;
    }
    totalCost = pricePerSize + toppingCost + deliveryCost;

    if (price !== null) {
      price.textContent = String(totalCost) + " €";
    };
  });
    
    