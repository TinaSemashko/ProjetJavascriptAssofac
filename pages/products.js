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
  ["Pierres brutes", "../images/ruby-stone-gb210f9d4a_1280.jpg"],
  ["Diamants", "../images/pexels-rūdolfs-klintsons-7568017.jpg"],
  ["Vente en gros", "../images/pexels-murilo-fonseca-10582459.jpg"],
  ["Émeraudes", "../images/pexels-jimmy-chan-13648455.jpg"],
];
if (containerPrecise) GridCell(precise, containerPrecise);

//articles
const containerArticles = document.querySelector("#articles");
const articles = [
  ["Rubys", "../images/pexels-dima-valkov-3266700.jpg"],
  ["Saphires", "../images/pexels-e-pro-1573236.jpg"],
  ["Pierres brutes", "../images/pexels-jacqueline-kabrel-10499788.jpg"],
  ["Diamants", "../images/pexels-michelle-leman-6765812.jpg"],
  ["Vente en gros", "../images/"],
  ["Émeraudes", "../images/"],
  ["Émeraudes", "../images/"],
  ["Émeraudes", "../images/"],
];

if (containerArticles) GridCell(articles, containerArticles);

//biju
const containerBiju = document.querySelector("#biju");
const biju = [
  ["Rubys", "../images/jewellery-gb278554cc_1280.jpg"],
  ["Saphires", "../images/pexels-ecrin-7992686.jpg"],
  ["Pierres brutes", "../images/pexels-git-stephen-gitau-1670723.jpg"],
  ["Diamants", "../images/pexels-hatice-genç-14856437.jpg"],
  ["Vente en gros", "../images/pexels-marta-branco-1395306.jpg"],
  ["Émeraudes", "../images/"],
  ["Émeraudes", "../images/"],
  ["Émeraudes", "../images/"],
];

if (containerBiju) GridCell(biju, containerBiju);

//orniment
const containerOrniment = document.querySelector("#orniment");
const orniment = [
  ["Rubys", "../images/first.jpg"],
  ["Saphires", "../images/HealingCrystals_Com.jpg"],
  ["Pierres brutes", "../images/"],
  ["Diamants", "../images/"],
  ["Vente en gros", "../images/"],
  ["Émeraudes", "../images/"],
  ["Émeraudes", "../images/"],
  ["Émeraudes", "../images/"],
];

if (containerOrniment) GridCell(orniment, containerOrniment);

//semi
const containerSemi = document.querySelector("#semi");
const semi = [
  ["Rubys", "../images/multi pierres.jpg"],
  ["Saphires", "../images/pexels-abdul-matloob-13300169.jpg"],
  ["Pierres brutes", "../images/pexels-abdul-matloob-13300951.jpg"],
  ["Diamants", "../images/pexels-abdul-matloob-13303468.jpg"],
  ["Vente en gros", "../images/pexels-arjiv-exports-5378800.jpg"],
  ["Émeraudes", "../images/pexels-karolina-grabowska-4040587.jpg"],
  ["Émeraudes", "../images/"],
  ["Émeraudes", "../images/"],
];

if (containerSemi) GridCell(semi, containerSemi);
