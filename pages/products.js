const product = {
  id: "",
  title: "",
  price: 0,
  quantity: 0,
};

const GridCell = (array, container) => {
  let cell = ``;
  let buttons = [];
  array.forEach((element, index) => {
    cell =
      cell +
      `
        <div class="cell">
        <div class="text-image">${element[0]}        
            <br />
            <br />
        </div>
        <img
            src=${element[1]}
            class="img-fluid"
            alt="..."
        />
        <button class="add-to-basket${index}">
            ajouter au panier
        </button>
        </div> `;
  });
  container.innerHTML = cell;

  array.forEach((element, index) => {
    let myButton = buttons[index];
    myButton = document.querySelector(".add-to-basket" + index);
    myButton.addEventListener("click", () => addToBasket(element[0]));
  });
};

//test
const addToBasket = (prod) => {
  alert("testt " + prod);
};
/////

//precise
const containerPrecise = document.querySelector("#precise");
const precise = [
  ["Rubys", "../images/ruby-stone-gb210f9d4a_1280.jpg"],
  ["Saphires", "../images/blue-gems-g2b821c703_1280.jpg"],
  ["Pierres brutes", "../images/ruby1.jpg"],
  ["Diamants", "../images/pexels-rūdolfs-klintsons-7568017.jpg"],
  ["Vente en gros", "../images/pexels-murilo-fonseca-10582459.jpg"],
  ["Émeraudes", "../images/pexels-jimmy-chan-13648455.jpg"],
];
if (containerPrecise) GridCell(precise, containerPrecise);

//articles
const containerArticles = document.querySelector("#articles");
const articles = [
  ["ArtA1", "../images/pexels-dima-valkov-3266700.jpg"],
  ["ArtA2", "../images/pexels-e-pro-1573236.jpg"],
  ["ArtA3", "../images/pexels-jacqueline-kabrel-10499788.jpg"],
  ["ArtA4", "../images/pexels-michelle-leman-6765812.jpg"],
  ["ArtA5", "../images/pexels-the-glorious-studio-7093761.jpg"],
  ["ArtA6", "../images/pexels-the-glorious-studio-7618574.jpg"],
  ["ArtA7", "../images/pexels-the-glorious-studio-9953654.jpg"],
  ["ArtA8", "../images/pexels-the-glorious-studio-9953655.jpg"],
  ["ArtA9", "../images/pexels-the-glorious-studio-12026055.jpg"],
  ["ArtA10", "../images/pexels-the-glorious-studio-15204302.jpg"],
  ["ArtA11", "../images/pexels2876036.jpg"],
  ["ArtA12", "../images/pexels-kristina-paukshtite-1839714.jpg"],
];

if (containerArticles) GridCell(articles, containerArticles);

//biju
const containerBiju = document.querySelector("#biju");
const biju = [
  ["ArtB1", "../images/jewellery-gb278554cc_1280.jpg"],
  ["ArtB2", "../images/pexels-ecrin-7992686.jpg"],
  ["ArtB3", "../images/pexels-git-stephen-gitau-1670723.jpg"],
  ["ArtB4", "../images/pexels-hatice-genç-14856437.jpg"],
  ["ArtB5", "../images/pexels-marta-branco-1395306.jpg"],
  ["ArtB6", "../images/pexels-superlens-photography-4595724.jpg"],
  ["ArtB7", "../images/pexels-superlens-photography-4595716.jpg"],
  ["ArtB8", "../images/pexels-superlens-photography-4595721.jpg"],
];

if (containerBiju) GridCell(biju, containerBiju);

//orniment
const containerOrniment = document.querySelector("#orniment");
const orniment = [
  ["ArtO1", "../images/first.jpg"],
  ["ArtO2", "../images/HealingCrystals_Com.jpg"],
  ["ArtO3", "../images/AmethystChevron.jpg"],
  ["ArtO4", "../images/malachite-g7fd0ec141_1280.jpg"],
  ["ArtO5", "../images/RoseQuartz.png"],
  ["ArtO6", "../images/pexels-madison-inouye-8350475.jpg"],
  ["ArtO7", "../images/pexels-mikhail-nilov-6945064.jpg"],
  ["ArtO8", "../images/pexels-meruyert-gonullu-6243227.jpg"],
  ["ArtO9", "../images/pexels-peter-döpper-2363577.jpg"],
];

if (containerOrniment) GridCell(orniment, containerOrniment);

//semi
const containerSemi = document.querySelector("#semi");
const semi = [
  ["ArtS1", "../images/multipierres.jpg"],
  ["ArtS2", "../images/pexels-abdul-matloob-13300169.jpg"],
  ["ArtS3", "../images/pexels-abdul-matloob-13300951.jpg"],
  ["ArtS4", "../images/pexels-abdul-matloob-13303468.jpg"],
  ["ArtS5", "../images/pexels-arjiv-exports-5378800.jpg"],
  ["ArtS6", "../images/pexels-karolina-grabowska-4040587.jpg"],
  ["ArtS7", "../images/12_clichés.jpg"],
  ["ArtS8", "../images/diamond-gd0dc65b7b_1280.jpg"],
  ["ArtS9", "../images/Tourmaline.png"],
  ["ArtS10", "../images/gem-g83d7bf170_1280.jpg"],
  ["ArtS11", "../images/amethyst-g1d3358204_1280.jpg"],
];

if (containerSemi) GridCell(semi, containerSemi);

//basket
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
  let foundProduct = basket.find((p) => p.id == product.id);
  if (foundProduct != undefined) {
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
