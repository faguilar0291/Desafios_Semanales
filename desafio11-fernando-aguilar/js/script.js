//Declaro el array de productos

const productsMenu = [
    {
        id: "menu-01",
        title: "Bacon Burguer",
        img: "./img/bacon_simple_burguer.png",
        text: "Pan de papa - 160g de carne - fetas de bacon",
        price: 1000
    },
    {
        id: "menu-02",
        title: "Bacon Burguer Veg",
        img: "./img/bacon_simple_burguer.png",
        text: "Pan de papa - 160g de carne veggie - simil bacon",
        price: 1200
    },
    {
        id: "menu-03",
        title: "Lomito Tucumano completo",
        img: "./img/lomito.png",
        text: "Completo con huevo, jyq, tomate y lechuga",
        price: 1300
    },
    {
        id: "menu-04",
        title: "Porción de papas fritas",
        img: "./img/papas_porcion.png",
        text: "Papas fritas caseras - 200g",
        price: 750
    },
    {
        id: "menu-05",
        title: "Wrap completo",
        img: "./img/wrap.png",
        text: "Carne mechada, tomate, lechuga y salsas",
        price: 800
    },
    {
        id: "menu-06",
        title: "Lata de Pepsi",
        img: "./img/pepsi_lata.png",
        text: "Lata de 354cc",
        price: 500
    },

]

//busco objetos en el DOM
const productContainer = document.querySelector(".main__container");
const categoryButtons = document.querySelectorAll(".navbar__button");
let selectedProducts = document.querySelectorAll(".product__add");
const cartNumber = document.querySelector(".item--number");

//función para mostrar productos

function showProducts() {

    productsMenu.forEach( product => {
        let figure = document.createElement("figure");
        figure.classList.add("product");
        figure.innerHTML = `
        <img class="product__image" src="${product.img}" alt="${product.title}">
        <div class="product__info">
            <h3 class="product__title">${product.title}</h3>
            <p class="product__text">${product.text}</p>
            <p class="product__price">$${product.price}</p>
            <button class="product__add" id="${product.id}">Agregar</button>
        </div>
        `;

        productContainer.append(figure);
    })

    loadSelectedProducts();
}

// muestro los productos
showProducts();



// busco los botones agregar

function loadSelectedProducts() {
    selectedProducts = document.querySelectorAll(".product__add");

    selectedProducts.forEach( button => {
        button.addEventListener("click", addToCart);
    })
}

//creo el array para los productos que voy a agregar
let productsInCart;

let productsInCartLS = localStorage.getItem("products-in-cart");

if (productsInCartLS) {
    productsInCart = JSON.parse(productsInCartLS);
    refreshNumber();
} else {
    productsInCart = [];
}

//función para agregar el producto seleccionado al carrito
function addToCart(e) {

    const buttonId = e.currentTarget.id;
    const addedProduct = productsMenu.find(product => product.id === buttonId);

    if (productsInCart.some(product => product.id === buttonId)){
        const index = productsInCart.findIndex(product => product.id === buttonId);
        productsInCart[index].quantity++;
    } else {
        addedProduct.quantity = 1;
        productsInCart.push(addedProduct);
    }

    refreshNumber();

    localStorage.setItem("products-in-cart", JSON.stringify(productsInCart))
}

function refreshNumber() {
    let cartNumberAdd = productsInCart.reduce((acu, product) => acu + product.quantity, 0);
    cartNumber.innerText = cartNumberAdd;
}

/* */