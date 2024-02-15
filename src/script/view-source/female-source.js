import CatalogData from "../category-view/data-source.js";
const finding = async () => {
  const datacari = "wanita";
  try {
    const result = await CatalogData.searchcatalog(datacari);
    renderResulting(result);
  } catch (message) {
    fallbackResulting(message);
  }
};

const renderResulting = (results) => {
  const ad = document.querySelector("#wanita");
  ad.innerHTML = ``;

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

    ad.appendChild(storeElement);
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
};

const fallbackResulting = (message) => {
  ad.innerHTML = ``;
  ad.innerHTML += `
        <h2 class="placeholder">${message}</h2>
      `;
  document.querySelector(".btn-close").addEventListener("click", () => {
    ad.style.display = "none";
  });
};

document.addEventListener("DOMContentLoaded", finding);
