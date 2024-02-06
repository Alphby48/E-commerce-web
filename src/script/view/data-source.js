import stores from "./../database/store.js";

const listProduk = document.querySelector(".list-product");

stores.forEach((store) => {
  listProduk.innerHTML += `
        <div class="item-product">
        <img src="${store.imgPrdt}" alt="" />
        <h4>${store.jdlPrdt}</h4>
        <p>${store.harga}</p>
        <a href="${store.link}"><button>check&nbsp;and&nbsp;buy</button></a>
        </div>
        `;
});
