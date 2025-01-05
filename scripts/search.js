// Initialize products and save to localStorage
const products = [
    { id: 1, name: "Adrak vali Chai", price: 20, image },
    { id: 2, name: "Kashmiri Kahwa", price: 50 },
    { id: 3, name: "Irani Chai", price: 30 },
    { id: 4, name: "Green Tea", price: 40 },
    { id: 5, name: "Butterfly Pea Tea", price: 60 }
];

// Save products to localStorage if not already present
if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(products));
}

// Search function
function performSearch(query) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; // Clear previous results

    // Retrieve products from localStorage
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

    if (query) {
        // Filter products based on query
        const results = storedProducts.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );

        if (results.length > 0) {
            // Display results
            results.forEach((product) => {
                const resultItem = document.createElement("div");
                resultItem.className = "result-item";
                resultItem.textContent = `${product.name} - ₹${product.price}`;

                // Add click event to redirect to a product page
                resultItem.addEventListener("click", () => {
                    // Save the clicked product to localStorage
                    localStorage.setItem("selectedItem", JSON.stringify(product));
                    localStorage.setItem("selectedProduct", JSON.stringify(product));
                    

                    // Redirect to the product page
                    window.location.href = "./secondPage.html"; // Replace with your product page URL
                });

                resultsContainer.appendChild(resultItem);
            });
        } else {
            resultsContainer.textContent = "No results found.";
        }
    }
}

// Event listener for search input
document.getElementById("searchInput").addEventListener("input", (event) => {
    const query = event.target.value.trim();
    performSearch(query);
});
