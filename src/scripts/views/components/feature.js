class Feature extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="tools" class="tools py-5">
      <div class="container py-5 d-flex">
        <div class="row align-items-center">
          <div class="col-sm-12 col-lg-6 text-center">
            <h1 class="display-4 fw-bold" data-aos="fade-up">Kenapa DocsMorpher???</h1>
            <p class="fs-5 pt-3" data-aos="fade-down">Nikmati pengalaman konversi file yang lebih baik, lebih cepat, dan lebih efektif dengan platform yang responsif dan hemat biaya.</p>
          </div>
          <div class="col-sm-12 col-lg-6">
            <div id="carouselExample" class="carousel slide" data-aos="flip-left">
              <div class="carousel-inner">
                <div class="carousel-item active text-center">
                  <img data-src="/icons/LOGO PDF DOC.webp" class="justify-content-center w-75 lazyload" alt="PDF to Word">
                </div>
                <div class="carousel-item text-center">
                  <img data-src="/icons/LOGO IMG PDF.webp" class="justify-content-center w-75 lazyload" alt="IMG to PDF">
                </div>
                <div class="carousel-item text-center">
                  <img data-src="/icons/LOGO PDF DOC.webp" class="justify-content-center w-75 lazyload" alt="PDF to Word">
                </div>
                <div class="carousel-item text-center">
                  <img data-src="/icons/LOGO PDF IMG.webp" class="justify-content-center w-75 lazyload" alt="PDF to IMG">
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

    <section id="feature-1" class="feature-1 py-5">
      <div class="container pb-5 d-flex">
        <div class="row text-center align-items-center">
          <div class="col-sm-12 col-lg-6">
            <img data-src="/ilustration/manager.webp" alt="Feature-1" class="img-fluid w-75 lazyload" data-aos="zoom-out">
          </div>
          <div class="col-sm-12 col-lg-6 pt-2">
            <h1 class="display-4 fw-bold" data-aos="fade-down-right">Mudah dan Cepat</h1>
            <p class="fs-5 pt-3" data-aos="fade-up">Membuka pintu ke dunia konversi file yang tak terbatas, memungkinkan Anda mengubah format dengan mudah dan hasil yang sempurna.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="feature-2" class="feature-2 py-5">
      <div class="container py-5 d-flex">
        <div class="row text-center align-items-center">
          <div class="col-sm-12 col-lg-6">
            <h1 class="display-4 fw-bold" data-aos="fade-down-right">Tampilan Menarik dan Mudah Dipahami</h1>
            <p class="fs-5 pt-3" data-aos="fade-down">Tampilan yang interaktif, menarik, serta memudahkan penggunaan fitur-fitur yang ada bagi pengguna baru.</p>
          </div>
          <div class="col-sm-12 col-lg-6 pb-2">
            <img data-src="/ilustration/marketer.webp" alt="Feature-2" class="img-fluid w-75 lazyload" data-aos="flip-up">
          </div>
        </div>
      </div>
    </section>

    <section id="feature-3" class="feature-3 py-5">
      <div class="container py-5 d-flex">
        <div class="row text-center align-items-center">
          <div class="col-sm-12 col-lg-6">
            <img data-src="/ilustration/validation.webp" alt="Feature-3" class="img-fluid w-75 lazyload" data-aos="zoom-in">
          </div>
          <div class="col-sm-12 col-lg-6 pt-2">
            <h1 class="display-4 fw-bold" data-aos="fade-down-right">Data Aman dan Terjamin</h1>
            <p class="fs-5 pt-3" data-aos="fade-up">Keamanan data pengguna dengan enkripsi dan kontrol izin yang kuat serta memberikan jaminan bahwa dokumen penting tetap aman dan hanya dapat diakses oleh pengguna.</p>
          </div>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define('feature-section', Feature);
