const API = "http://localhost:5000/api";
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartDiv = document.getElementById("cart");
let total = 0;

cart.forEach((p) => {
  total += p.price;
  cartDiv.innerHTML += `<p>${p.name} - $${p.price}</p>`;
});

document.getElementById("total").innerText = "Total: $" + total;

function checkout() {
  fetch(API + "/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      products: cart,
      total: total,
    }),
  }).then(() => {
    alert("Order placed!");
    localStorage.removeItem("cart");
    location.reload();
  });
}
