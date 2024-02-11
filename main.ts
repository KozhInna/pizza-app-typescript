//initial states
let totalCost: number = 0;
let pricePerSize: number = 0;
let deliveryCost: number = 0;
let toppingCost: number = 0;

/* Choosing a pizza size (radio buttons) */
const sizes: NodeListOf<HTMLInputElement> = document.querySelectorAll(".size");
sizes.forEach((size) => {
  size.addEventListener("click", () => {
    if (size.value === "serve2") {
      pricePerSize = 7.5;
      totalCost = pricePerSize + toppingCost + deliveryCost;
    } else if (size.value === "serve4") {
      pricePerSize = 10.5;
      totalCost = pricePerSize + toppingCost + deliveryCost;
    } else if (size.value === "serve6") {
      pricePerSize = 12.5;
      totalCost = pricePerSize + toppingCost + deliveryCost;
    } else {
      pricePerSize = 15.5;
      totalCost = pricePerSize + toppingCost + deliveryCost;
    }
    let price: HTMLElement | null = document.querySelector(".price");
    if (price !== null) {
      price.textContent = String(totalCost) + " €";
    }
  });
});
