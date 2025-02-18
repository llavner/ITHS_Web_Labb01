const pizzaItems = [
    {
        imgSrc: "/img/menu/marinara.png",
        title: "Marinara",
        discription: "Tomato sauce, garlic, fresh oregano, fresh basil and olive oil.",
        price: "10.99"
    },
    {
        imgSrc: "/img/menu/nduja.png",
        title: "Nduja",
        discription: "Tomato sauce, mozzarella, Nduja, fresh basil and olive oil.",
        price: "13.99"
    },
    {
        imgSrc: "/img/menu/proscuitto.png",
        title: "Proscuitto",
        discription: "Tomato sauce, parmesan, proscuitto, black pepper and olive oil.",
        price: "13.99"
    }];
const pastaItems = [
    {
        imgSrc: "/img/menu/carbonara.png",
        title: "Classic Carbonara",
        discription: "Spaghetti, Guanciale, Pecorino, gran padano, egg yolks and black pepper.",
        price: "12.99"
    },
    {
        imgSrc: "/img/menu/norma.png",
        title: "Pasta alla Norma",
        discription: "Pasta sedani, plum tomatoes, eggplant, riccotta, onion, basil, peanut oil and olive oil.",
        price: "12.99"
    },
    {
        imgSrc: "/img/menu/tonnarelli.png",
        title: "Tonnarelli Cacio e Pepe",
        discription: "Tonnarelli or spaghetti, Pecorino and peppercorns.",
        price: "10.99"
    }
];

function LoadMenu(){
    let pizzaItemList = document.getElementById('pizzas');
    let pastaItemList = document.getElementById('pastas');

    pizzaItems.forEach(item => {
        let menuDiv = document.createElement('div');
            menuDiv.innerHTML = `
                <div class="card" style="width: 14rem;">
                    <img src="${item.imgSrc}" class="card-img-top" alt="Product Image">
                    <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.discription}</p>
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="product-price">${item.price} €</span>
                    </div>
                    <a href="#" class="btn btn-primary">Add to cart</a>
                    </div>
                </div>
            `;            
        pizzaItemList.appendChild(menuDiv);
    }); 

    pastaItems.forEach(item => {
        let menuDiv = document.createElement('div');
            menuDiv.innerHTML = `
                <div class="card" style="width: 14rem;">
                    <img src="${item.imgSrc}" class="card-img-top" alt="Product Image">
                    <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.discription}</p>
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="product-price">${item.price} €</span>
                    </div>
                    <a href="#" class="btn btn-primary">Add to cart</a>
                    </div>
                </div>
            `;            
        pastaItemList.appendChild(menuDiv);
    }); 

    
}

LoadMenu();