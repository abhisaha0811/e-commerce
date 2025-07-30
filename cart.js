let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productId) {
    let product = products.find(p => p.id === productId);
    let existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
}

document.addEventListener("DOMContentLoaded", updateCartCount);
