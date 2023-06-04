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
          <img src="/icons/Logo.png" alt="Logo">
        </a>
        <button id="hamburgerButton" class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
          <div class="offcanvas-header">
            <img src="/icons/Logo.png" alt="Logo">
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
                  <li><a class="dropdown-item" href="#/word-pdf"><img src="/icons/LOGO DOC PDF.png" alt="Word to PDF" class="w-25"> Word to PDF</a></li>
                  <li><a class="dropdown-item" href="#/jpg-pdf"><img src="/icons/LOGO JPG PDF.png" alt="JPG to PDF" class="w-25"> JPG to PDF</a></li>
                  <li><a class="dropdown-item" href="#/powerpoint-pdf"><img src="/icons/LOGO PPT PDF.png" alt="Powerpoint to PDF" class="w-25"> Powerpoint to PDF</a></li>
                  <li><a class="dropdown-item" href="#/excel-pdf"><img src="/icons/LOGO XSL PDF.png" alt="Excel to PDF" class="w-25"> Excel to PDF</a></li>
                  <li><a class="dropdown-item" href="#/pdf-word"><img src="/icons/LOGO PDF DOC.png" alt="PDF to Word" class="w-25"> PDF to Word</a></li>
                  <li><a class="dropdown-item" href="#/pdf-jpg"><img src="/icons/LOGO PDF JPG.png" alt="PDF to JPG" class="w-25"> PDF to JPG</a></li>
                  <li><a class="dropdown-item" href="#/pdf-powerpoint"><img src="/icons/LOGO PDF PPT.png" alt="PDF to Powerpoint" class="w-25"> PDF to Powerpoint</a></li>
                  <li><a class="dropdown-item" href="#/pdf-excel"><img src="/icons/LOGO PDF XSL.png" alt="PDF to Excel" class="w-25"> PDF to Excel</a></li>
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
