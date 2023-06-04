class Feature extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="tools">
      <div class="container py-5 d-flex">
        <div class="row align-items-center">
          <div class="col-sm-12 col-lg-6 text-center">
            <h1>Most Popular PDF Tools</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero asperiores facilis voluptatum quibusdam libero omnis corporis facere harum atque.</p>
          </div>
          <div class="col-sm-12 col-lg-6">
            <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active text-center">
                  <img data-src="/icons/LOGO PDF DOC.webp" class="justify-content-center w-75 lazyload" alt="PDF to Word">
                </div>
                <div class="carousel-item text-center">
                  <img data-src="/icons/LOGO JPG PDF.webp" class="justify-content-center w-75 lazyload" alt="JPG to PDF">
                </div>
                <div class="carousel-item text-center">
                  <img data-src="/icons/LOGO PDF DOC.webp" class="justify-content-center w-75 lazyload" alt="PDF to Word">
                </div>
                <div class="carousel-item text-center">
                  <img data-src="/icons/LOGO PDF JPG.webp" class="justify-content-center w-75 lazyload" alt="PDF to JPG">
                </div>
                <div class="carousel-item text-center">
                  <img data-src="/icons/LOGO PDF PPT.webp" class="justify-content-center w-75 lazyload" alt="PDF to Powerpoint">
                </div>
                <div class="carousel-item text-center">
                  <img data-src="/icons/LOGO PDF XSL.webp" class="justify-content-center w-75 lazyload" alt="PDF to Excel">
                </div>
                <div class="carousel-item text-center">
                  <img data-src="/icons/LOGO PPT PDF.webp" class="justify-content-center w-75 lazyload" alt="Powerpoint to PDF">
                </div>
                <div class="carousel-item text-center">
                  <img data-src="/icons/LOGO XSL PDF.webp" class="justify-content-center w-75 lazyload" alt="Excel to PDF">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="feature-1">
      <div class="container pb-5 d-flex">
        <div class="row text-center align-items-center">
          <div class="col-sm-12 col-lg-6">
            <img data-src="/ilustration/manager.webp" alt="Feature-1" class="img-fluid w-75 lazyload">
          </div>
          <div class="col-sm-12 col-lg-6 pt-2">
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed incidunt quaerat vitae maxime suscipit iure magnam tenetur debitis aperiam cumque?</p>
          </div>
        </div>
      </div>
    </section>

    <section class="feature-2">
      <div class="container py-5 d-flex">
        <div class="row text-center align-items-center">
          <div class="col-sm-12 col-lg-6">
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed incidunt quaerat vitae maxime suscipit iure magnam tenetur debitis aperiam cumque?</p>
          </div>
          <div class="col-sm-12 col-lg-6 pb-2">
            <img data-src="/ilustration/marketer.webp" alt="Feature-2" class="img-fluid w-75 lazyload">
          </div>
        </div>
      </div>
    </section>

    <section class="feature-3">
      <div class="container py-5 d-flex">
        <div class="row text-center align-items-center">
          <div class="col-sm-12 col-lg-6">
            <img data-src="/ilustration/validation.webp" alt="Feature-3" class="img-fluid w-75 lazyload">
          </div>
          <div class="col-sm-12 col-lg-6 pt-2">
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed incidunt quaerat vitae maxime suscipit iure magnam tenetur debitis aperiam cumque?</p>
          </div>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define('feature-section', Feature);
