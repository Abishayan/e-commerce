const API = "http://localhost:5000/api";

fetch(API + "/products")
  .then((res) => res.json())
  .then((products) => {
    const div = document.getElementById("products");
    products.forEach((p) => {
      div.innerHTML += `
        <div class="card">
          <h3>${p.name}</h3>
          <p>$${p.price}</p>
          <a href="product.html?id=${p._id}">View</a>
        </div>
      `;
    });
  });
