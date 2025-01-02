// Fetch item details from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));

    // Update the page with item details
    if (selectedItem) {
        document.getElementById('item-image').src = selectedItem.image;
        document.getElementById('item-name').textContent = selectedItem.name;
        document.getElementById('item-price').textContent = `Price: ₹ ${selectedItem.price}`;
    }
});

