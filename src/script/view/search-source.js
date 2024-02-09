import stores from "../database/store.js";

class DataProduct {
  static searchProduct(keyword) {
    return new Promise((resolve, reject) => {
      const filterProduk = stores.filter((store) =>
        store.jdlPrdt.toUpperCase().includes(keyword.toUpperCase())
      );

      if (filterProduk.length) {
        resolve(filterProduk);
      } else {
        reject(`${keyword} tidak ada`);
      }
    });
  }
}

const findElement = document.querySelector("#kolomCari");
const buttonFindElement = document.querySelector("#tombolCari");
const searchBar = document.querySelector(".bc-sc-bar");

const findListElement = document.createElement("div");
findListElement.setAttribute("class", "search-list");
searchBar.appendChild(findListElement);

const onButtonSearchClicked = async () => {
  try {
    const result = await DataProduct.searchProduct(findElement.value);
    renderResult(result);
  } catch (message) {
    fallbackResult(message);
  }
};

const renderResult = (results) => {
  findListElement.innerHTML = `
    <button class="btn-close"><i class="fa-regular fa-circle-xmark"></i></button>
  `;

  results.forEach((store) => {
    const { imgPrdt, jdlPrdt, harga, link } = store;
    const storeElement = document.createElement("div");
    storeElement.setAttribute("class", "store");

    storeElement.innerHTML = `
    <div class="item-product">
  <img src="${imgPrdt}" alt="" id="listImages"/>
  <h4>${jdlPrdt}</h4>
  <p>Rp ${harga}</p>
  <a href="${link}" target="_blank"><button>check&nbsp;and&nbsp;buy</button></a>
    <div class="lemek">
      <div class="pop-up">
      <img src="${imgPrdt}" alt="" " class="img-pp"/>
        <div class="span-harga">
      <h5>Rp ${harga}</h5>
      <a href="${link}" target="_blank"><button class="btn-chc">check&nbsp;and&nbsp;buy</button></a>
        </div>
        <p class="btnpp"><i class="fa-regular fa-circle-xmark"></i></p>
      </div>
    </div>
    </div>
    `;

    findListElement.appendChild(storeElement);
  });

  const popUPp = document.querySelectorAll("#listImages");
  const btnPP = document.querySelectorAll(".btnpp");
  popUPp.forEach((image) => {
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

  document.querySelector(".btn-close").addEventListener("click", () => {
    findListElement.style.display = "none";
  });
};

const fallbackResult = (message) => {
  findListElement.innerHTML = ` <button class="btn-close"><i class="fa-regular fa-circle-xmark"></i></button>`;
  findListElement.innerHTML += `
    <h2 class="placeholder">${message}</h2>
  `;
  document.querySelector(".btn-close").addEventListener("click", () => {
    findListElement.style.display = "none";
  });
};

buttonFindElement.addEventListener("click", () => {
  onButtonSearchClicked();
  findListElement.style.display = "flex";
});
