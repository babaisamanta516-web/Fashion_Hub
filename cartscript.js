/* Step-by-Step Implementation */

function addToCart(productId, productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('fashion_cart')) || [];

    // 2. Check if the product already exists in the cart
    let existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        // If it exists, just bump up the quantity
        existingProduct.quantity += 1;
    } else {
        // If it's new, create a product object and push it to the cart
        let newProduct = {
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1
        };
        cart.push(newProduct);
    }

    // 3. Save the updated cart back to local storage
    localStorage.setItem('fashion_cart', JSON.stringify(cart));
    
    alert(`${productName} added to cart!`);

    //Total count calling.
   // display totalCount();
}

/* Step B: Displaying the Cart on the Cart Page */

function displayCart() {
    let cart = JSON.parse(localStorage.getItem('fashion_cart')) || [];
    let cartContainer = document.getElementById('cart-container'); // Your HTML container
    let totalContainer = document.getElementById('cart-total');
    let buy = document.getElementById('buy');
    
    // Clear container first to avoid duplication
    cartContainer.innerHTML = ""; 
    
    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your fashion hub cart is empty!</p><br>&#8377;";
        totalContainer.innerText = "0.00";
        return;
    }

    let totalPrice = 0;
	
    cart.forEach(item => {
        let itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        // Create HTML structure for each item
      /*  cartContainer.innerHTML += `
            <div class="cart-item" style="border:2px solid; align:center;">
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p>Price: &#8377 ${item.price}</p>
                    <p>Qty: ${item.quantity}</p>
		    <p>Subtotal: ${itemTotal}</p>
                </div> 
                <button onclick="removeFromCart('${item.id}')">Remove</button>
            </div>
        `;
    });*/
    cartContainer.innerHTML += `
            <div class="cart-item" style="border:2px solid; width:450px; display:block;">
             <table cellspacing=10 cellpadding=5><tr>   <div class="item-details">
                    <th>Product Name</th><th>Price</th><th>Quantity</th><th>Subtotal</th></tr><tr><td><strong>${item.name}</strong></td>
                    <td>&#8377 ${item.price}</td>
                    <td>${item.quantity}</td>
		    <td>&#8377 ${itemTotal}</td>
                </div> 
                <td><button onclick="removeFromCart('${item.id}')">Remove</button></td></tr></table>
            </div><br>
        `;
    });

 totalContainer.innerHTML=`<div><strong><font size=5>Grand Total : &#8377 ${totalPrice.toFixed(2)}</font></strong></div>`;
buy.innerHTML=`<input type="button" value="Buy Now" onclick="show_hide()">`;
}



/* Step C: Removing an Item from the Cart*/

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('fashion_cart')) || [];

    // Filter out the product that matches the ID
    cart = cart.filter(item => item.id !== productId);

    // Save the new array back to local storage
    localStorage.setItem('fashion_cart', JSON.stringify(cart));

    // Refresh the cart display so the user sees the change instantly
    displayCart();
    
}

function show_hide(){
let sh=document.getElementById('Customer_info');
if(sh.style.display===""){
  sh.style.display=block;}
else{
 sh.style.display="";
}
}

function paymethod(){
let rh=document.getElementById('paymeth');
if(rh.style.display===""){
  rh.style.display=block;}
else{
 rh.style.display="";
}
}

function checkmeth(){
let rd1=document.getElementById('cash');
let rd2=document.getElementById('onlin');
if(rd1.checked===false)
{
rd2.checked=true;
paymethod();
}
else if(rd2.checked===false){
rd1.checked=true;
}
else{
rd2.checked=false;
rd1.checked=false;
}
}
/*function checkmeth(clicked) {
    const cash = document.getElementById('cash');
    const online = document.getElementById('onlin');

    if (clicked === cash && cash.checked) {
        online.checked = false;
    }

    if (clicked === online && online.checked) {
        cash.checked = false;
        paymethod();
    }
}*/
/* My */
/*Step D: Total counter of all product*/
/*let countProduct=0;
function totalCount(productId) {
    let cart = JSON.parse(localStorage.getItem('fashion_cart')) || [];

    // 2. Check if the product exists in the cart
    let findProduct = cart.find(item => item.id);
      
         if (findProduct) {
        // If it exists, just bump up the quantity
        countProduct += 1;
    } 
}*/

