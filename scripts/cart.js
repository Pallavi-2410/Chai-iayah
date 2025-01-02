function loadCart() {
    const cartContainer = document.getElementById("cart-container");
    const totalPriceElem = document.getElementById("total-price");

    // Fetch cart items from local storage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalPrice = 0;

    // Clear the container
    cartContainer.innerHTML = "";

    // Populate cart items
    cart.forEach((item, index) => {
        totalPrice += item.price;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
                    <span><strong>${item.name}</strong> - ${item.description}</span>
                    <span>$${item.price}</span>
                    <button onclick="removeFromCart(${index})">Remove</button>
                `;
        cartContainer.appendChild(cartItem);
    });

    // Update total price
    totalPriceElem.textContent = totalPrice.toFixed(2);
}

function removeFromCart(index) {
    // Fetch cart items from local storage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Remove item at the specified index
    cart.splice(index, 1);

    // Save the updated cart back to local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Reload the cart
    loadCart();
}

// Load cart items on page load
loadCart();