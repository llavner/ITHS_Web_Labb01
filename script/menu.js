const foodItems = [
    {
        id: 1,
        imgSrc: "./img/menu/marinara.png",
        title: "Marinara",
        discription: "Tomato sauce, garlic, fresh oregano, fresh basil and olive oil.",
        price: "10.99"
    },
    {
        id: 2,
        imgSrc: "./img/menu/nduja.png",
        title: "Nduja",
        discription: "Tomato sauce, mozzarella, Nduja, fresh basil and olive oil.",
        price: "13.99"
    },
    {
        id: 3,
        imgSrc: "./img/menu/proscuitto.png",
        title: "Proscuitto",
        discription: "Tomato sauce, parmesan, proscuitto, black pepper and olive oil.",
        price: "13.99"
    },
    {
        id: 4,
        imgSrc: "./img/menu/carbonara.png",
        title: "Carbonara",
        discription: "Spaghetti, Guanciale, Pecorino, gran padano, egg yolks and black pepper.",
        price: "12.99"
    },
    {
        id: 5,
        imgSrc: "./img/menu/norma.png",
        title: "Pasta alla Norma",
        discription: "Pasta sedani, plum tomatoes, eggplant, riccotta, onion, basil, peanut oil and olive oil.",
        price: "12.99"
    },
    {
        id: 6,
        imgSrc: "./img/menu/tonnarelli.png",
        title: "Tonnarelli Cacio e Pepe",
        discription: "Tonnarelli or spaghetti, Pecorino and peppercorns.",
        price: "10.99"
    }
];

function loadMenu(){
    let foodItemList = document.getElementById('food');

    foodItems.forEach(item => {
        let menuDiv = document.createElement('div');
            menuDiv.innerHTML = `
                <div class="card" style="width: 12rem;">
                    <img src="${item.imgSrc}" class="card-img-top" alt="Product Image">
                    <div class="card-body">
                    <h2 class="card-title">${item.title}</h2>
                    <p class="card-text">${item.discription}</p>
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="product-price">${item.price} €</span>
                    </div>
                    <button class="btn btn-primary shop-item-button" onclick="addItem(${item.id})" type="button">Add to Cart</button>
                    </div>
                </div>
            `;            
        foodItemList.appendChild(menuDiv);
    });
}

loadMenu()