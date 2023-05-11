const GridCell = (array, container) => {
  let cell = ``;
  array.map((element) => {
    cell =
      cell +
      `
        <div class="cell">
        <div class="text-image">${element.name}        
            <br />
            
        </div>
        <div class="price">${element.price}€        
            <br />
            
        </div>
        <img
            src=${element.image}
            class="img-fluid"
            alt="..."
        />
        <button class="add-to-basket${element.id} butt">
            ajouter au panier
        </button>
        </div> `;
  });
  container.innerHTML = cell;

  array.map((element) => {
    const myButton = document.querySelector(".add-to-basket" + element.id);
    myButton.addEventListener("click", () => addBasket(element));
  });
};

//test
const addToBasket = (prod) => {
  alert("le produit  " + prod.name + " ajouté au panier");
};
/////

const products = [
  {
    id: 1,
    name: "Rubys",
    image: "../images/ruby-stone-gb210f9d4a_1280.jpg",
    price: 1500,
    type: "precise",
  },
  {
    id: 2,
    name: "Saphires",
    image: "../images/blue-gems-g2b821c703_1280.jpg",
    price: 1200,
    type: "precise",
  },
  {
    id: 3,
    name: "Pierres brutes",
    image: "../images/ruby1.jpg",
    price: 1500,
    type: "precise",
  },
  {
    id: 4,
    name: "Diamants",
    image: "../images/pexels-rūdolfs-klintsons-7568017.jpg",
    price: 3000,
    type: "precise",
  },
  {
    id: 5,
    name: "Vente en gros",
    image: "../images/pexels-murilo-fonseca-10582459.jpg",
    price: 1700,
    type: "precise",
  },
  {
    id: 6,
    name: "Émeraudes",
    image: "../images/pexels-jimmy-chan-13648455.jpg",
    price: 2000,
    type: "precise",
  },
  {
    id: 7,
    name: "ArtA1",
    image: "../images/pexels-dima-valkov-3266700.jpg",
    price: 10,
    type: "articles",
  },
  {
    id: 8,
    name: "ArtA2",
    image: "../images/pexels-e-pro-1573236.jpg",
    price: 11,
    type: "articles",
  },
  {
    id: 9,
    name: "ArtA3",
    image: "../images/pexels-jacqueline-kabrel-10499788.jpg",
    price: 12,
    type: "articles",
  },
  {
    id: 10,
    name: "ArtA4",
    image: "../images/pexels-michelle-leman-6765812.jpg",
    price: 13,
    type: "articles",
  },
  {
    id: 11,
    name: "ArtA5",
    image: "../images/pexels-the-glorious-studio-7093761.jpg",
    price: 14,
    type: "articles",
  },
  {
    id: 12,
    name: "ArtA6",
    image: "../images/pexels-the-glorious-studio-7618574.jpg",
    price: 15,
    type: "articles",
  },
  {
    id: 13,
    name: "ArtA7",
    image: "../images/pexels-the-glorious-studio-9953654.jpg",
    price: 16,
    type: "articles",
  },
  {
    id: 14,
    name: "ArtA8",
    image: "../images/pexels-the-glorious-studio-9953655.jpg",
    price: 17,
    type: "articles",
  },
  {
    id: 15,
    name: "ArtA9",
    image: "../images/pexels-the-glorious-studio-12026055.jpg",
    price: 18,
    type: "articles",
  },
  {
    id: 16,
    name: "ArtA10",
    image: "../images/pexels-the-glorious-studio-15204302.jpg",
    price: 19,
    type: "articles",
  },
  {
    id: 17,
    name: "ArtA11",
    image: "../images/pexels2876036.jpg",
    price: 20,
    type: "articles",
  },
  {
    id: 18,
    name: "ArtA12",
    image: "../images/pexels-kristina-paukshtite-1839714.jpg",
    price: 21,
    type: "articles",
  },
  {
    id: 19,
    name: "ArtB1",
    image: "../images/jewellery-gb278554cc_1280.jpg",
    price: 30,
    type: "biju",
  },
  {
    id: 20,
    name: "ArtB2",
    image: "../images/pexels-ecrin-7992686.jpg",
    price: 31,
    type: "biju",
  },
  {
    id: 21,
    name: "ArtB3",
    image: "../images/pexels-git-stephen-gitau-1670723.jpg",
    price: 32,
    type: "biju",
  },
  {
    id: 22,
    name: "ArtB4",
    image: "../images/pexels-hatice-genç-14856437.jpg",
    price: 33,
    type: "biju",
  },
  {
    id: 23,
    name: "ArtB5",
    image: "../images/pexels-marta-branco-1395306.jpg",
    price: 34,
    type: "biju",
  },
  {
    id: 24,
    name: "ArtB6",
    image: "../images/pexels-superlens-photography-4595724.jpg",
    price: 35,
    type: "biju",
  },
  {
    id: 25,
    name: "ArtB7",
    image: "../images/pexels-superlens-photography-4595716.jpg",
    price: 36,
    type: "biju",
  },
  {
    id: 26,
    name: "ArtB8",
    image: "../images/pexels-superlens-photography-4595721.jpg",
    price: 37,
    type: "biju",
  },
  {
    id: 27,
    name: "ArtO1",
    image: "../images/first.jpg",
    price: 40,
    type: "orniment",
  },
  {
    id: 28,
    name: "ArtO2",
    image: "../images/HealingCrystals_Com.jpg",
    price: 41,
    type: "orniment",
  },
  {
    id: 29,
    name: "ArtO3",
    image: "../images/AmethystChevron.jpg",
    price: 42,
    type: "orniment",
  },
  {
    id: 30,
    name: "ArtO4",
    image: "../images/malachite-g7fd0ec141_1280.jpg",
    price: 43,
    type: "orniment",
  },
  {
    id: 31,
    name: "ArtO5",
    image: "../images/RoseQuartz.png",
    price: 44,
    type: "orniment",
  },
  {
    id: 32,
    name: "ArtO6",
    image: "../images/pexels-madison-inouye-8350475.jpg",
    price: 45,
    type: "orniment",
  },
  {
    id: 33,
    name: "ArtO7",
    image: "../images/pexels-mikhail-nilov-6945064.jpg",
    price: 46,
    type: "orniment",
  },
  {
    id: 34,
    name: "ArtO8",
    image: "../images/pexels-meruyert-gonullu-6243227.jpg",
    price: 47,
    type: "orniment",
  },
  {
    id: 35,
    name: "ArtO9",
    image: "../images/pexels-peter-döpper-2363577.jpg",
    price: 48,
    type: "orniment",
  },
  {
    id: 36,
    name: "ArtS1",
    image: "../images/multipierres.jpg",
    price: 50,
    type: "semi",
  },
  {
    id: 37,
    name: "ArtS2",
    image: "../images/pexels-abdul-matloob-13300169.jpg",
    price: 51,
    type: "semi",
  },
  {
    id: 38,
    name: "ArtS3",
    image: "../images/pexels-abdul-matloob-13300951.jpg",
    price: 52,
    type: "semi",
  },
  {
    id: 39,
    name: "ArtS4",
    image: "../images/pexels-abdul-matloob-13303468.jpg",
    price: 53,
    type: "semi",
  },
  {
    id: 40,
    name: "ArtS5",
    image: "../images/pexels-arjiv-exports-5378800.jpg",
    price: 54,
    type: "semi",
  },
  {
    id: 41,
    name: "ArtS6",
    image: "../images/pexels-karolina-grabowska-4040587.jpg",
    price: 55,
    type: "semi",
  },
  {
    id: 42,
    name: "ArtS7",
    image: "../images/12_clichés.jpg",
    price: 56,
    type: "semi",
  },
  {
    id: 43,
    name: "ArtS8",
    image: "../images/diamond-gd0dc65b7b_1280.jpg",
    price: 57,
    type: "semi",
  },
  {
    id: 44,
    name: "ArtS9",
    image: "../images/Tourmaline.png",
    price: 58,
    type: "semi",
  },
  {
    id: 45,
    name: "ArtS10",
    image: "../images/gem-g83d7bf170_1280.jpg",
    price: 59,
    type: "semi",
  },
  {
    id: 46,
    name: "ArtS11",
    image: "../images/amethyst-g1d3358204_1280.jpg",
    price: 60,
    type: "semi",
  },
];

//precise
const containerPrecise = document.querySelector("#precise");
const precise = products.filter((product) => product.type === "precise");
if (containerPrecise) GridCell(precise, containerPrecise);

//articles
const containerArticles = document.querySelector("#articles");
const articles = products.filter((product) => product.type === "articles");
if (containerArticles) GridCell(articles, containerArticles);

//biju
const containerBiju = document.querySelector("#biju");
const biju = products.filter((product) => product.type === "biju");
if (containerBiju) GridCell(biju, containerBiju);

//orniment
const containerOrniment = document.querySelector("#orniment");
const orniment = products.filter((product) => product.type === "orniment");
if (containerOrniment) GridCell(orniment, containerOrniment);

//semi
const containerSemi = document.querySelector("#semi");
const semi = products.filter((product) => product.type === "semi");
if (containerSemi) GridCell(semi, containerSemi);

/////basket////////
function saveBasket(basket) {
  localStorage.setItem("basket", JSON.stringify(basket));
}

function getBasket() {
  let basket = localStorage.getItem("basket");
  if (basket == null) {
    return [];
  } else {
    return JSON.parse(basket);
  }
}

function addBasket(product) {
  let basket = getBasket();

  let foundProduct = "";
  if (Object.keys(basket).length) {
    foundProduct = basket.find((p) => p.id == product.id);
  }
  if (foundProduct != undefined && foundProduct != "") {
    foundProduct.quantity++;
  } else {
    product.quantity = 1;
    basket.push(product);
  }
  saveBasket(basket);
}

function removeFromBasket(product) {
  let basket = getBasket();
  basket = basket.filter((p) => p.id != product.id);
  saveBasket(basket);
}

function changeQuantity(product, quantity) {
  let basket = getBasket();
  let foundProduct = basket.find((p) => p.id != product.id);
  if (foundProduct != undefined) {
    foundProduct.quantity += quantity;
    if (foundProduct.quantity <= 0) {
      removeFromBasket(foundProduct);
    } else {
      saveBasket(basket);
    }
  }
}

function getNumberProduct() {
  let basket = getBasket();
  let number = 0;
  for (let product of basket) {
    number += product.quantity;
  }
  return number;
}
function getTotalPrice() {
  let basket = getBasket();
  let total = 0;
  for (let product of basket) {
    total += product.quantity * product.price;
  }
  return total;
}

//shoppingcart
const containerShoppingcart = document.getElementById("datacart");
const shopCart = getBasket();
let cell1 = ``;
shopCart.forEach((element) => {
  cell1 =
    cell1 +
    `
        
        <div class="cell">${element.name}</div>
        <div class="cell">${element.quantity}in </div>
        <div class="cell">${element.price}€ </div>

        `;
});
containerShoppingcart.innerHTML = cell1;
