class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
    <nav class="navbar navbar-expand-lg fixed-top bg-light border-bottom" aria-label="Offcanvas navbar large">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img data-src="/icons/Logo.webp" alt="Logo" class="lazyload">
        </a>
        <button id="hamburgerButton" class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
          <div class="offcanvas-header">
            <img data-src="/icons/Logo.webp" alt="Logo" class="lazyload">
            <button type="button" class="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div id="navigationDrawer" class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#/home">Home</a>
              </li>
              <li class="nav-item dropdown-center">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PDF Tools
                </a>
                <ul class="dropdown-menu dropdown-menu-end pe-5">
                  <li><a class="dropdown-item" href="#/word-pdf"><img data-src="/icons/LOGO DOC PDF.webp" alt="Word to PDF" class="w-25 lazyload"> Word to PDF</a></li>
                  <li><a class="dropdown-item" href="#/jpg-pdf"><img data-src="/icons/LOGO JPG PDF.webp" alt="JPG to PDF" class="w-25 lazyload"> JPG to PDF</a></li>
                  <li><a class="dropdown-item" href="#/powerpoint-pdf"><img data-src="/icons/LOGO PPT PDF.webp" alt="Powerpoint to PDF" class="w-25 lazyload"> Powerpoint to PDF</a></li>
                  <li><a class="dropdown-item" href="#/excel-pdf"><img data-src="/icons/LOGO XSL PDF.webp" alt="Excel to PDF" class="w-25 lazyload"> Excel to PDF</a></li>
                  <li><a class="dropdown-item" href="#/pdf-word"><img data-src="/icons/LOGO PDF DOC.webp" alt="PDF to Word" class="w-25 lazyload"> PDF to Word</a></li>
                  <li><a class="dropdown-item" href="#/pdf-jpg"><img data-src="/icons/LOGO PDF JPG.webp" alt="PDF to JPG" class="w-25 lazyload"> PDF to JPG</a></li>
                  <li><a class="dropdown-item" href="#/pdf-powerpoint"><img data-src="/icons/LOGO PDF PPT.webp" alt="PDF to Powerpoint" class="w-25 lazyload"> PDF to Powerpoint</a></li>
                  <li><a class="dropdown-item" href="#/pdf-excel"><img data-src="/icons/LOGO PDF XSL.webp" alt="PDF to Excel" class="w-25 lazyload"> PDF to Excel</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#/about">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
    `;
  }
}

customElements.define('header-section', Header);
