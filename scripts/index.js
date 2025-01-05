// function for menu

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
        console.log(selectedItem)
    });
});

// function for signUp button

let signup = document.querySelector("#signUp");
signup.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'signUp.html';
})

// function for Index images

document.querySelectorAll('.mainCard img').forEach(item => {
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

