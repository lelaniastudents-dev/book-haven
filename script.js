// Navigation logic
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
}

/* --- Shopping Cart (sessionStorage) --- */
function addToCart(bookName) {
    let cart = JSON.parse(sessionStorage.getItem('bookHavenCart')) || [];
    cart.push(bookName);
    sessionStorage.setItem('bookHavenCart', JSON.stringify(cart));
    alert(bookName + " added to the cart.");
}

// RESTORED POP-UP MODAL LOGIC
function viewCart() {
    let cart = JSON.parse(sessionStorage.getItem('bookHavenCart')) || [];
    let cartItemsHtml = cart.length === 0 ? "<li>Your cart is empty!</li>" : cart.map(item => `<li>${item}</li>`).join("");

    // Create the modal overlay
    const modal = document.createElement("div");
    modal.id = "cartModal";
    modal.style = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7); display:flex; justify-content:center; align-items:center; z-index:2000;";

    // Create the modal content box
    modal.innerHTML = `
        <div style="background:#fff; color:#333; padding:30px; border-radius:8px; width:500px; position:relative; text-align:left; font-family: 'Calibri', sans-serif;">
            <span onclick="closeCart()" style="position:absolute; top:10px; right:20px; cursor:pointer; font-size:24px; font-weight:bold;">&times;</span>
            <h3 style="margin-top:0;">Your Cart</h3>
            <ul style="list-style:disc; padding-left:20px; margin-bottom:20px;">
                ${cartItemsHtml}
            </ul>
            <div style="display:flex; gap:10px;">
                <button onclick="clearCart(); closeCart();" style="background:#5C2E5C; color:#fff; border:none; padding:10px 15px; cursor:pointer;">Clear Cart</button>
                <button onclick="processOrder(); closeCart();" style="background:#5C2E5C; color:#fff; border:none; padding:10px 15px; cursor:pointer;">Process Order</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function closeCart() {
    const modal = document.getElementById("cartModal");
    if (modal) modal.remove();
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

/* --- Contact Form (localStorage) --- */
function saveAndSubmit() {
    const name = document.getElementById('userName').value;
    const details = document.getElementById('userRequest').value;
    if(!name || !details) {
        alert("Please fill out all fields.");
        return;
    }
    localStorage.setItem('storedCustomerName', name);
    localStorage.setItem('storedRequest', details);
    alert("Thank you, " + name + ". Your message has been saved.");
}

/* --- Newsletter Validation --- */
function subscribeAlert() {
    const emailInput = document.getElementById("newsletterEmail");
    // This allows the browser to show its "Please fill out this field" bubble first
    if (emailInput.checkValidity() && emailInput.value !== "") {
        alert("Thank you for subscribing");
        emailInput.value = "";
    }
}