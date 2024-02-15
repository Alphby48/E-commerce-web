class Mobile extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="sidebar-mobile">
        
        <div class="side-bottom">
        <div class="dip">
          <h2>fitur ini dalam tahap pengembangan. akan segera hadir nanti</h2>
          <button class="dibtn">Mengerti</button>
        </div>
          <i class="fa-solid fa-bars gaktau"></i>
          <i class="fa-solid fa-user come"></i>
          <a href=""><i class="fa-solid fa-house"></i></a>
          <i class="fa-solid fa-bag-shopping tas"></i>
        </div>
      </div>
      <div class="sb-mobile">
        <span><i class="fa-regular fa-circle-xmark"></i></span>
        <h1>menu</h1>
        <ul class="ul-navigasi">
          <li><a href="#">home</a></li>
          <li><a href="#product">produk</a></li>
          <li class="menu-mobile">
            <a href="#product"
              >category&nbsp;<i class="fa-solid fa-caret-right"></i
            ></a>
            <div class="ul-navigasi-down">
              <ul>
                <li>
                  <a href="src/index/index-category/male.html"
                    >male&nbsp;fashion</a
                  >
                </li>
                <li>
                  <a href="src/index/index-category/female.html"
                    >female&nbsp;fashion</a
                  >
                </li>
                <li>
                  <a href="src/index/index-category/dapur.html"
                    >kitchen&nbsp;tool</a
                  >
                </li>
                <li><a href="src/index/elektronik.html">electronic</a></li>
              </ul>
            </div>
          </li>
          <li><a href="">contact</a></li>
        </ul>

        <ul class="ul-social">
          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-tiktok"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
        `;
  }
}

customElements.define("mobile-scale", Mobile);
