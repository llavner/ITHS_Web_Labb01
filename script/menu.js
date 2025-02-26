const foodItems = [
    {
        id: 1,
        imgSrc: "./img/menu/marinara.png",
        title: "Marinara",
        discription: "Tomato sauce, garlic, fresh oregano, fresh basil and olive oil.",
        info: "Historical Roots: Pizza Marinara was created in Naples, the birthplace of many classic pizzas. It's a staple in traditional Neapolitan pizzerias. It is also is the oldest tomato-based pizza, dating back to 1734.",
        price: "10.99"
    },
    {
        id: 2,
        imgSrc: "./img/menu/nduja.png",
        title: "Nduja",
        discription: "Tomato sauce, mozzarella, Nduja, fresh basil and olive oil.",
        info: "Nduja has its origins in the small town of Spilinga in Calabria. It was traditionally made by peasants using leftover pork cuts, which were then seasoned and cured.",
        price: "13.99"
    },
    {
        id: 3,
        imgSrc: "./img/menu/proscuitto.png",
        title: "Proscuitto",
        discription: "Tomato sauce, parmesan, proscuitto, black pepper and olive oil.",
        info: " Prosciutto is not only tasty but also a good source of protein. It's relatively low in fat compared to other cured meats, making it a popular choice for those looking to enjoy a flavorful yet lighter pizza topping.",
        price: "13.99"
    },
    {
        id: 4,
        imgSrc: "./img/menu/carbonara.png",
        title: "Carbonara",
        discription: "Spaghetti, Guanciale, Pecorino, gran padano, egg yolks and black pepper.",
        info: "Both the pasta and pizza versions of Carbonara have their roots in Rome. The dish is believed to have been created during or just after World War II.",
        price: "12.99"
    },
    {
        id: 5,
        imgSrc: "./img/menu/norma.png",
        title: "Pasta alla Norma",
        discription: "Pasta sedani, plum tomatoes, eggplant, riccotta, onion, basil, peanut oil and olive oil.",
        info: "Both the pasta and pizza versions of alla Norma hail from Sicily, specifically the city of Catania. The dish is named after the opera \"Norma\" by Vincenzo Bellini, a famous composer from Catania.",
        price: "12.99"
    },
    {
        id: 6,
        imgSrc: "./img/menu/tonnarelli.png",
        title: "Tonnarelli Cacio e Pepe",
        discription: "Tonnarelli or spaghetti, Pecorino and peppercorns.",
        info: "The original Cacio e Pepe pasta has ancient roots, believed to have been created by shepherds who needed a simple yet hearty meal. They used ingredients that were easy to carry and didn't spoil quickly.",
        price: "10.99"
    }
];

function showInfo(id)
{
    let selectedItem = foodItems.find(i => id === i.id);
    let modalInfo = document.getElementById('modalinfo');
    modalInfo.innerText = selectedItem.info;
}

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
                    <div class="col-1">
                        <button id="addbutton" class="btn btn-primary shop-item-button" onclick="addItem(${item.id})" type="button">Add to Cart</button>
                        <button id="infobutton" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2" onclick="showInfo(${item.id})">Info</button>
                    </div>
                    </div>
                </div>

                <!-- Modal -->
                    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Information</h1>
                        </div>
                        <div class="modal-body" id="modalinfo"></div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Ok</button>
                        </div>
                        </div>
                    </div>
                    </div>



            `;            
        foodItemList.appendChild(menuDiv);
    });
}

loadMenu()