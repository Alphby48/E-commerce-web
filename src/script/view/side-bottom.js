document.querySelector(".gaktau").addEventListener("click", () => {
  document.querySelector(".sb-mobile").classList.toggle("cokr");
});

document.querySelector(".tas").addEventListener("click", () => {
  document.querySelector(".catalog").classList.toggle("geser");
});

const kelik = (tombol1, tombol2, tgret) => {
  document.addEventListener("click", (e) => {
    if (!tombol1.contains(e.target) && !tombol2.contains(e.target)) {
      tombol2.classList.remove(tgret);
    }
  });
};

function klikDalam(tomLam, tombol2, tgret) {
  tomLam.addEventListener("click", () => {
    tombol2.classList.remove(tgret);
  });
}
const tmb1 = document.querySelector(".gaktau");
const tmb2 = document.querySelector(".sb-mobile");
const tmb3 = document.querySelector(".sb-mobile span");
const ttggr = "cokr";

kelik(tmb1, tmb2, ttggr);
klikDalam(tmb3, tmb2, ttggr);

const clk1 = document.querySelector(".tas");
const clk2 = document.querySelector(".catalog");
const clk3 = document.querySelector(".catalog span");
const tttgr = "geser";

kelik(clk1, clk2, tttgr);
klikDalam(clk3, clk2, tttgr);
