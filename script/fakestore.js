let cartStorage = [];

function saveCart()
{
    localStorage.setItem('savedCart', JSON.stringify(cartStorage));
}

async function loadCart() 
{
    const cart = localStorage.getItem('savedCart');

    if (cart)
    {
        cartStorage = await JSON.parse(cart);
        updateCart();
    }

    // var quantityInputs = document.getElementsByClassName('cart-quantity-input');

    // for(var i = 0; i < quantityInputs.length; i++)
    // {
    //     var input = quantityInputs[i];
    //     input.addEventListener('change', quantityChanged);
    // }
}

function addItem(id)
{
    let selectedItem = foodItems.find(i => id === i.id);
    let itemInCart = cartStorage.find(i => id === i.selectedItem.id); 
    
    if (itemInCart)
    {
        itemInCart.quantity++; 
        console.log('Ökar antal');
    }
    else
    {
        cartStorage.push({selectedItem, quantity: 1});
        console.log('Lägger till');
    }
    updateCart();
    saveCart();

}

function purchaseClicked()
{
    alert('Thank you for your purchase!');

    cartStorage = [];
    
    updateCart();
    updateCartTotal();
    saveCart();
}

function updateCart()
{
    var cartItems = document.getElementsByClassName('cart-items')[0];
    cartItems.innerHTML = '';

    cartStorage.forEach(i => 
        {
            var cartRow = document.createElement('div');
            cartRow.classList.add('cart-row');

            cartRow.innerHTML = `
            <div class="cart-item cart-column">
                <span class="cart-item-title">${i.selectedItem.title}</span>
            </div>
            <span class="cart-price cart-column">${i.selectedItem.price}</span>
                <div class="cart-quantity cart-column">
                    <input class="cart-quantity-input" type="number" value="${i.quantity}">
                    <button class="btn btn-danger" type="button" onclick="removeCartItem(${i.selectedItem.id})">REMOVE</button>
                </div>`;
            
                cartItems.appendChild(cartRow);
        });

        
        updateCartTotal();
}

function quantityChanged(event)
{
    var input = event.target
    if (input.value <= 0)
    {
        input.value = 1
    }
    updateCartTotal()
}

function removeCartItem(id)
{
   cartStorage = cartStorage.filter(x => x.selectedItem.id !== id);

    updateCart();
    saveCart();
}

function updateCartTotal()
{
    var total = 0

    cartStorage.forEach(x => 
    {
        total += x.selectedItem.price * x.quantity
    });

    total = Math.round(total * 100) / 100

    document.getElementsByClassName('cart-total-price')[0].innerText = total + "€"
}

loadCart();
updateCart();