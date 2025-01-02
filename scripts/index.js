document.querySelectorAll('.submenu a').forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        // Get item details
        const name = item.getAttribute('data-name');
        const price = item.getAttribute('data-price');
        const image = item.getAttribute('data-image');

        // Store item details in localStorage
        localStorage.setItem('selectedItem', JSON.stringify({ name, price, image }));

        // Redirect to the next page
        window.location.href = 'secondPage.html';
    });
});



// Add event listener for "Add to Cart" button
// document.getElementById('add-to-cart').addEventListener('click', () => {
//     alert('1 item added');
// });

// console.log(selectedItem); // Verify the object
// console.log('Name:', selectedItem.name);
// console.log('Price:', selectedItem.price);