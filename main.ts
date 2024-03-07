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
    
  

const submitBtn: HTMLButtonElement | null = document.getElementById("submitBtn") as HTMLButtonElement | null;

function handleSubmit(event: Event) {
  event.preventDefault();

  const selectedSizeInput: HTMLInputElement | null = document.querySelector('input[name="pizzaSize"]:checked');
  const selectedSizeLabel: HTMLLabelElement | null = selectedSizeInput?.labels?.[0] || null;
  const selectedSize: string = selectedSizeLabel?.textContent?.trim() || 'Not selected';
  
  const selectedToppingsInputs: NodeListOf<HTMLInputElement> | null = document.querySelectorAll('input[name="topping"]:checked');
  const selectedToppings: string[] = Array.from(selectedToppingsInputs || [])
    .map(topping => topping.value) 
    .filter((topping): topping is string => typeof topping === 'string');

  const selectedDeliveryInput: HTMLSelectElement | null = document.getElementById("select") as HTMLSelectElement | null;
  const selectedDelivery: string = selectedDeliveryInput?.value || 'Not selected';

  const selectedItemsDiv: HTMLElement | null = document.getElementById("selectedItems");
  if (selectedItemsDiv) {
    selectedItemsDiv.innerHTML = `
      <h2>Your Order:</h2>
      <p>Size: ${selectedSize}</p>
      <p>Toppings: ${selectedToppings.length ? selectedToppings.join(", ") : "None"}</p>
      <p>Delivery Method: ${selectedDelivery}</p>
      <p>Total Cost: ${totalCost} €</p>`;
  }
  const displayContainer: HTMLElement | null = document.getElementById("displayContainer");
if (displayContainer) {
  displayContainer.style.display = "block";
}
}

 if (submitBtn) {
  submitBtn.addEventListener("click", handleSubmit);
}

