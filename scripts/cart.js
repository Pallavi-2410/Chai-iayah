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
        const price = parseFloat(item.price);
        totalPrice += price;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
                    <span><strong>${item.name}</strong>                   
                    <span> &#8377; ${item.price}</span>
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

// Place Order functionality
function placeOrder() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Your cart is empty! Add items before placing an order.");
        return;
    }

    // Clear the cart
    // localStorage.removeItem("cart");

    // Confirmation message
    alert("Thank you for your order! Redirecting to payment page..");

    // Reload the cart view
    loadCart();

    // Optional: Redirect to a confirmation page
    window.location.href = "payment.html";
}

// Attach the place order event
document.getElementById("place-order").addEventListener("click", placeOrder);

// Load cart items on page load
document.addEventListener("DOMContentLoaded", loadCart);



document.querySelectorAll('.submenu a').forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        
        // Redirect to the next page
        window.location.href = 'secondPage.html';
    });
});