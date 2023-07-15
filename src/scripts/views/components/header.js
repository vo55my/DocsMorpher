class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
    <nav class="navbar navbar-expand-lg fixed-top" aria-label="Offcanvas navbar large">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img data-src="/icons/Logo.webp" alt="Logo" class="lazyload">
        </a>
        <button id="hamburgerButton" class="navbar-toggler border-0 p-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Hamburger Button">
          <span class="navbar-toggler-icon fs-2"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
          <div class="offcanvas-header">
            <img data-src="/icons/Logo.webp" alt="Logo" class="lazyload">
            <button type="button" class="btn-close btn-close-black fs-3 p-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div id="navigationDrawer" class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1">
              <li class="nav-item">
                <a class="nav-link fw-bold p-3" aria-current="page" href="#/home">Home</a>
              </li>
              <li class="nav-item dropdown-center">
                <a class="nav-link dropdown-toggle fw-bold p-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PDF Tools
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><a class="dropdown-item" href="#/word-pdf"><img data-src="/icons/LOGO DOC PDF.webp" alt="Word to PDF" class="w-25 lazyload"> Word to PDF</a></li>
                  <li><a class="dropdown-item" href="#/powerpoint-pdf"><img data-src="/icons/LOGO PPT PDF.webp" alt="Powerpoint to PDF" class="w-25 lazyload"> PPT to PDF</a></li>
                  <li><a class="dropdown-item" href="#/excel-pdf"><img data-src="/icons/LOGO XSL PDF.webp" alt="Excel to PDF" class="w-25 lazyload"> Excel to PDF</a></li>
                  <li><a class="dropdown-item" href="#/img-pdf"><img data-src="/icons/LOGO IMG PDF.webp" alt="IMG to PDF" class="w-25 lazyload"> IMG to PDF</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold p-3" aria-current="page" href="#/about">About Us</a>
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
