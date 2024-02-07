import stores from "./../database/store.js";

const listProduk = document.querySelector(".list-product");

stores.forEach((store) => {
  listProduk.innerHTML += `
  <div class="item-product">
  <img src="${store.imgPrdt}" alt="" id="listImage"/>
  <h4>${store.jdlPrdt}</h4>
  <p>Rp ${store.harga}</p>
  <a href="${store.link}" target="_blank"><button>check&nbsp;and&nbsp;buy</button></a>
  <div class="lemek">
    <div class="pop-up">
      <img src="${store.imgPrdt}" alt="" " class="img-pp"/>
      <div class="span-harga">
      <h5>Rp ${store.harga}</h5>
      <a href="${store.link}" target="_blank"><button class="btn-chc">check&nbsp;and&nbsp;buy</button></a>
      </div>
      <p class="btnpp"><i class="fa-regular fa-circle-xmark"></i></p>
    </div>
  </div>
  </div>
        `;
});

const popUP = document.querySelectorAll("#listImage");
const btnPP = document.querySelectorAll(".btnpp");
popUP.forEach((image) => {
  image.onclick = (e) => {
    e.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display =
      "flex";
  };
});

btnPP.forEach((links) => {
  links.onclick = (e) => {
    e.target.parentElement.parentElement.parentElement.style.display = "none";
  };
});
