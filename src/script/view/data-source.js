import stores from "./../database/store.js";

const listProduk = document.querySelector(".list-product");

stores.forEach((store) => {
  listProduk.innerHTML += `
        <div class="item-product">
        <img src="${store.imgPrdt}" alt="" id="listImage"/>
        <h4>${store.jdlPrdt}</h4>
        <p>Rp ${store.harga}</p>
        <a href="${store.link}" target="_blank"><button>check&nbsp;and&nbsp;buy</button></a>
        </div>
        `;
});

const listImage = document.querySelectorAll("#listImage");
const lemek = document.createElement("div");
lemek.setAttribute("class", "lemek");
const popUp = document.createElement("div");
popUp.setAttribute("class", "pop-up");
const popImg = document.createElement("img");
popImg.setAttribute(
  "src",
  "https://down-aka-id.img.susercontent.com/14e8395f72d590b20eba7bb8417bf7c5.webp"
);

const btncls = document.createElement("button");
btncls.innerText = "Close";
btncls.setAttribute("class", "btncls");

popUp.appendChild(btncls);
popUp.appendChild(popImg);

lemek.appendChild(popUp);
document.querySelector(".list-product").appendChild(lemek);
listImage.forEach((image) => {
  image.onclick = () => {
    lemek.style.display = "flex";
    popImg.src = image.getAttribute("src");
  };
});

btncls.addEventListener("click", () => {
  lemek.style.display = "none";
});
