// Navigation logic
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
}

/* --- Touchstone 3.2: Shopping Cart (sessionStorage) --- */

function addToCart(bookName) {
    let cart = JSON.parse(sessionStorage.getItem('bookHavenCart')) || [];
    cart.push(bookName);
    sessionStorage.setItem('bookHavenCart', JSON.stringify(cart));
    alert(bookName + " added to the cart.");
}

function viewCart() {
    let cart = JSON.parse(sessionStorage.getItem('bookHavenCart')) || [];
    if (cart.length === 0) {
        alert("Your cart is currently empty!");
    } else {
        alert("Items in your cart (Saved in Session):\n" + cart.join("\n"));
    }
}

function clearCart() {
    sessionStorage.removeItem('bookHavenCart');
    alert("Cart cleared.");
}

function processOrder() {
    let cart = JSON.parse(sessionStorage.getItem('bookHavenCart')) || [];
    if (cart.length === 0) {
        alert("Add items first!");
    } else {
        alert("Thank you for your order of " + cart.length + " items!");
        sessionStorage.removeItem('bookHavenCart');
    }
}

/* --- Touchstone 3.2: Contact Form (localStorage) --- */

function saveAndSubmit() {
    const name = document.getElementById('userName').value;
    const details = document.getElementById('userRequest').value;
    localStorage.setItem('storedCustomerName', name);
    localStorage.setItem('storedRequest', details);
    alert("Thank you, " + name + ". Your message has been saved to Local Storage.");
}

// Subscribe Logic: Browser-native validation prevents firing unless email is valid
function subscribeAlert() {
    alert("Thank you for subscribing");
    document.getElementById("newsletterEmail").value = "";
}
