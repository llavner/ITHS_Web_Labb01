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
    if(cartStorage.length < 1)
    {
        alert('Please add some items into the cart.')
    }
    else
    {
        alert('Thank you for your purchase!');
    }

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
            <div style="border: 0.1rem solid; margin-bottom: 0.5rem; padding: 1rem;">
                <div class="row">
                    <div class="cart-img">
                        <img src="${i.selectedItem.imgSrc}" width="50px">
                    </div>
                    <div class="cart-item cart-column">
                        <span class="cart-item-title">${i.selectedItem.title}</span>
                    </div>
                </div>
                <span class="product-price cart-column">${i.selectedItem.price} €</span>
                    <div class="cart-quantity cart-column">
                        <p class="cart-quantity-input">Amount: ${i.quantity}</p>
                        <button class="btn btn-primary" type="button" onclick="addItem(${i.selectedItem.id})">ADD</button>
                        <button class="btn btn-danger" type="button" onclick="removeCartItem(${i.selectedItem.id})">REMOVE</button>
                    </div>
            </div>`;
            
                cartItems.appendChild(cartRow);
        });

        updateCartTotal();
}

function removeCartItem(id)
{
    let itemToRemove = cartStorage.find(x => id === x.selectedItem.id);
    
    if(itemToRemove.quantity < 2 )
    {
        cartStorage = cartStorage.filter(x => x.selectedItem.id !== id);
    }
    else
    {
        itemToRemove.quantity--;
    }

    
    updateCart();
    saveCart();
}

function updateCartTotal()
{
    var total = 0;
    let quantityCombined = 0;

    cartStorage.forEach(x => 
    {
        total += x.selectedItem.price * x.quantity;

        quantityCombined += x.quantity;
    });

    total = Math.round(total * 100) / 100;

    document.getElementsByClassName('cart-total-price')[0].innerText = total + "€";
    document.getElementsByClassName('quantity-cart')[0].innerText = quantityCombined.toString();
    
}

loadCart();
updateCart();