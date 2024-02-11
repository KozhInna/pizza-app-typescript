//initial states
var totalCost = 0;
var pricePerSize = 0;
var deliveryCost = 0;
var toppingCost = 0;
/* Choosing a pizza size (radio buttons) */
var sizes = document.querySelectorAll(".size");
sizes.forEach(function (size) {
    size.addEventListener("click", function () {
        if (size.value === "serve2") {
            pricePerSize = 7.5;
            totalCost = pricePerSize + toppingCost + deliveryCost;
        }
        else if (size.value === "serve4") {
            pricePerSize = 10.5;
            totalCost = pricePerSize + toppingCost + deliveryCost;
        }
        else if (size.value === "serve6") {
            pricePerSize = 12.5;
            totalCost = pricePerSize + toppingCost + deliveryCost;
        }
        else {
            pricePerSize = 15.5;
            totalCost = pricePerSize + toppingCost + deliveryCost;
        }
        var price = document.querySelector(".price");
        if (price !== null) {
            price.textContent = String(totalCost) + " €";
        }
    });
});
