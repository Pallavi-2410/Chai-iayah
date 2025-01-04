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


let signup = document.querySelector("#signUp");
signup.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'signUp.html';
})


document.querySelectorAll('#mainCard img').forEach(item => {
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
