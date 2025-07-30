const products = [
    { id: 1, name: "Laptop", price: 700, image: "assets/images/laptop.jpg" },
    { id: 2, name: "Smartphone", price: 400, image: "assets/images/phone.jpg" },
    {
      id: 3,
      name: "Headphones",
      price: 100,
      image: "assets/images/headphones.jpg",
    },
  ];
  
  const productList = document.getElementById("product-list");
  
  if (productList) {
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product");
      productCard.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
              <h3>${product.name}</h3>
              <p>$${product.price}</p>
              <button onclick="addToCart(${product.id})">Add to Cart</button>
          `;
      productList.appendChild(productCard);
    });
  }
