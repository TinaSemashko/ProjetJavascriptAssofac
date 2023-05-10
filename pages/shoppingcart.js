const containerShoppingcart = document.querySelector(".container-shoppingcard");
console.log(containerShoppingcart);
let cell = `<div class="cell">Produit</div>
      <div class="cell">Quantité</div>
      <div class="cell">Prix</div>`;
products = localStorage.getItem("basket");
array = JSON.parse(basket);

array.forEach((element, index) => {
  cell =
    cell +
    `
        <div class="cell">${element[0]}
        
        </div> `;
});
containerShoppingcart.innerHTML = cell;
