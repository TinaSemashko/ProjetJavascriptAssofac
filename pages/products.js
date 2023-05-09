const containerPrecise = document.querySelector(".container-prod-precise");
let cell = ``;
let buttons = [];
const product = {
  id: "",
  title: "",
  price: 0,
  quantity: 0,
};

const precise = [
  ["Rubys", "../images/ruby-stone-gb210f9d4a_1280.jpg"],
  ["Saphires", "../images/blue-gems-g2b821c703_1280.jpg"],
  ["Pierres brutes", "../images/ruby-stone-gb210f9d4a_1280.jpg"],
  ["Diamants", "../images/pexels-rūdolfs-klintsons-7568017.jpg"],
  ["Vente en gros", "../images/pexels-murilo-fonseca-10582459.jpg"],
  ["Émeraudes", "../images/pexels-jimmy-chan-13648455.jpg"],
];

const addToBasket = (prod) => {
  alert("testt " + prod);
};

precise.forEach((element, index) => {
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
containerPrecise.innerHTML = cell;

precise.forEach((element, index) => {
  let myButton = buttons[index];
  myButton = document.querySelector(".add-to-basket" + index);
  console.log(myButton);
  myButton.addEventListener("click", () => addToBasket(element[0]));
});
