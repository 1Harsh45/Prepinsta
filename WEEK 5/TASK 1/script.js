document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.querySelector(".cart-icon");
    const cartSection = document.querySelector(".cart");
    const cartItemsContainer = document.querySelector(".cart-items");
    const totalCostElement = document.getElementById("total-cost");
    const cartCountElement = document.querySelector(".cart-count");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    let cart = [];

    cartIcon.addEventListener("click", () => {
        cartSection.classList.toggle("visible");
    });

    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const productElement = event.target.parentElement;
            const productId = productElement.getAttribute("data-id");
            const productPrice = parseFloat(productElement.getAttribute("data-price"));
            const productName = productElement.querySelector("h3").textContent;

            const existingProduct = cart.find(item => item.id === productId);

            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
            }

            updateCart();
        });
    });

    function updateCart() {
        cartItemsContainer.innerHTML = "";

        cart.forEach(item => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <span>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</span>
                <button class="remove-item" data-id="${item.id}">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        updateTotalCost();
        updateCartCount();
        enableRemoveButtons();
    }

    function updateTotalCost() {
        const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        totalCostElement.textContent = totalCost.toFixed(2);
    }

    function updateCartCount() {
        const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
        cartCountElement.textContent = totalCount;
    }

    function enableRemoveButtons() {
        const removeButtons = document.querySelectorAll(".remove-item");
        removeButtons.forEach(button => {
            button.addEventListener("click", (event) => {
                const productId = event.target.getAttribute("data-id");
                cart = cart.filter(item => item.id !== productId);
                updateCart();
            });
        });
    }
});
