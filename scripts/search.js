// // Initialize products and save to localStorage
// // const products = [
// //     { id: 1, name: "Adrak vali Chai", price: 20, image },
// //     { id: 2, name: "Kashmiri Kahwa", price: 50 },
// //     { id: 3, name: "Irani Chai", price: 30 },
// //     { id: 4, name: "Green Tea", price: 40 },
// //     { id: 5, name: "Butterfly Pea Tea", price: 60 }
// // ];

// // Save products to localStorage if not already present
// if (!localStorage.getItem("products")) {
//     localStorage.setItem("products", JSON.stringify(products));
// }

// // Search function
// function performSearch(query) {
//     const resultsContainer = document.getElementById("results");
//     resultsContainer.innerHTML = ""; // Clear previous results

//     // Retrieve products from localStorage
//     const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

//     if (query) {
//         // Filter products based on query
//         const results = storedProducts.filter((product) =>
//             product.name.toLowerCase().includes(query.toLowerCase())
//         );

//         if (results.length > 0) {
//             // Display results
//             results.forEach((product) => {
//                 const resultItem = document.createElement("div");
//                 resultItem.className = "result-item";
//                 resultItem.textContent = `${product.name} - ₹${product.price}`;

//                 // Add click event to redirect to a product page
//                 resultItem.addEventListener("click", () => {
//                     // Save the clicked product to localStorage
//                     localStorage.setItem("selectedItem", JSON.stringify(product));
//                     localStorage.setItem("selectedProduct", JSON.stringify(product));
                    

//                     // Redirect to the product page
//                     window.location.href = "./secondPage.html"; // Replace with your product page URL
//                 });

//                 resultsContainer.appendChild(resultItem);
//             });
//         } else {
//             resultsContainer.textContent = "No results found.";
//         }
//     }
// }

// // Event listener for search input
// document.getElementById("searchInput").addEventListener("input", (event) => {
//     const query = event.target.value.trim();
//     performSearch(query);
// });






// Load products from localStorage
function getProducts() {
    // Parse stored products from localStorage
    const products = JSON.parse(localStorage.getItem('products')) || [];

    // Add selectedItem to products if it exists
    const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));
    if (selectedItem) {
        products.push(selectedItem); // Add dynamically selected item
    }

    return products;
}

// Perform search on products
function performSearch(query) {
    const products = getProducts(); // Fetch all products including selectedItem
    const resultsContainer = document.querySelector("#results");
    resultsContainer.innerHTML = ""; // Clear previous results

    if (query) {
        // Filter products based on query
        const results = products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );

        // Display results
        if (results.length > 0) {
            results.forEach(product => {
                const li = document.createElement("li");
                li.textContent = product.name;
                li.style.cursor = "pointer";

                // Redirect on click
                li.addEventListener("click", () => {
                    // Store clicked product in localStorage
                    localStorage.setItem('selectedProduct', JSON.stringify(product));

                    // Redirect to product details page
                    window.location.href = "./secondPage.html";
                });

                resultsContainer.appendChild(li);
            });
        } else {
            resultsContainer.textContent = "No results found.";
        }
    }
}

// Add event listener for search input
document.querySelector("#searchInput").addEventListener("input", (event) => {
    const query = event.target.value;
    performSearch(query);
});
