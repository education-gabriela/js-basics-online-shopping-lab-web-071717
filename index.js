var cart = [];

function getCart() {
    return cart;
}

function setCart(c) {
    cart = c;
    return cart;
}

function addToCart(item) {
    let price = Math.floor(Math.random() * 100);
    cart.push({[item]: price});
    console.log(`${item} has been added to your cart.`);
    return cart;
}

function printTwoItems() {
    let items = []
    for (let i = 0; i < cart.length; i++) {
        let itemName = Object.keys(cart[i])[0];
        let item = `${itemName} at $${cart[i][itemName]}`;
        items.push(item);
    }
    return "In your cart, you have " + items.join(" and ");
}

function printMultipleItems() {
    let items = ""

    for (let j = 0; j < cart.length; j++) {
        let itemName = Object.keys(cart[j])[0];
        let item;

        if (j != cart.length - 1) {
            item = `${itemName} at $${cart[j][itemName]}, `;
        } else {
            item = `and ${itemName} at $${cart[j][itemName]}`;
        }
        items += item
    }
    return "In your cart, you have " + items;
}

function viewCart() {
    let cartDescription = ""

    switch (cart.length) {
        case 0:
            cartDescription = "Your shopping cart is empty";
            break;
        case 1:
            let itemName = Object.keys(cart[0])[0];
            let item = `${itemName} at $${cart[0][itemName]}`;
            cartDescription = "In your cart, you have " + item;
            break;
        case 2:
            cartDescription = printTwoItems();
            break;
        default:
            cartDescription = printMultipleItems();
            break;
    }
    console.log(cartDescription + ".");
}

function total() {
    let totalSum = 0;
    for (let i = 0; i < cart.length; i++) {
        let itemName = Object.keys(cart[i])[0];
        totalSum += cart[i][itemName];
    }
    return totalSum;
}

function removeFromCart(item) {
    let removed = false;
    for(let i = 0; i < cart.length; i++) {
        if (cart[i].hasOwnProperty(item)) {
            removed = cart.splice(i, 1);
        }
    }

    console.log(removed ? "Item removed from your cart" : "That item is not in your cart.");
    return cart;
}

function placeOrder(cardNumber) {
    // write your code here
}
