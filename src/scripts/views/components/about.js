class About extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container py-5">
      <h1 class="text-center pt-5">Our Team</h1>
      <div class="row text-center py-3">
        <div class="col-sm-6 col-md-6 col-lg-3 py-3">
          <img data-src="/about/Hilmy.webp" alt="Hilmy" class="w-75 rounded-circle pb-3 lazyload">
          <p>Dhaifullah Hilmy</p>
          <p>Universitas Pasundan</p>
          <a class="fs-3 px-2 text-decoration-none text-dark" href="https://www.instagram.com/si_hilmy/" target="_blank" rel="noreferrer"><i class="bi bi-instagram"></i></a>
          <a class="fs-3 px-2 text-decoration-none text-dark" href="https://www.linkedin.com/in/dhaifullah-hilmy/" target="_blank" rel="noreferrer"><i class="bi bi-linkedin"></i></a>
          <a class="fs-3 px-2 text-decoration-none text-dark" href="https://www.github.com/vo55my" target="_blank" rel="noreferrer"><i class="bi bi-github"></i></a>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-3 py-3">
          <img data-src="/about/Wulan.webp" alt="Wulan" class="w-75 rounded-circle pb-3 lazyload">
          <p>Lutfiyah Wulan Kamilah</p>
          <p>Universitas Gunadarma</p>
          <a class="fs-3 px-2 text-decoration-none text-dark" href="https://www.instagram.com/lutfiwukaa/" target="_blank" rel="noreferrer"><i class="bi bi-instagram"></i></a>
          <a class="fs-3 px-2 text-decoration-none text-dark" href="https://www.linkedin.com/in/lutfiwuka" target="_blank" rel="noreferrer"><i class="bi bi-linkedin"></i></a>
          <a class="fs-3 px-2 text-decoration-none text-dark" href="https://github.com/lutfiwuka" target="_blank" rel="noreferrer"><i class="bi bi-github"></i></a>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-3 py-3">
          <img data-src="/about/Ihsan.webp" alt="Ihsan" class="w-75 rounded-circle pb-3 lazyload">
          <p>Maulana Ihsan</p>
          <p>Universitas Telkom</p>
          <a class="fs-3 px-2 text-decoration-none text-dark" href="https://www.instagram.com/ikhsan_x42/" target="_blank" rel="noreferrer"><i class="bi bi-instagram"></i></a>
          <a class="fs-3 px-2 text-decoration-none text-dark" href="https://www.linkedin.com/in/maulanaihsan4/" target="_blank" rel="noreferrer"><i class="bi bi-linkedin"></i></a>
          <a class="fs-3 px-2 text-decoration-none text-dark" href="https://github.com/Maulanaikh" target="_blank" rel="noreferrer"><i class="bi bi-github"></i></a>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-3 py-3">
          <img data-src="/about/Rivalda.webp" alt="Rivalda" class="w-75 rounded-circle pb-3 lazyload">
          <p>Rivalda Fatah Rachman Hernawan</p>
          <p>Universitas Komputer Indonesia</p>
          <a class="fs-3 px-2 text-decoration-none text-dark" href="https://www.instagram.com/rivalda_fatah/" target="_blank" rel="noreferrer"><i class="bi bi-instagram"></i></a>
          <a class="fs-3 px-2 text-decoration-none text-dark" href="https://www.linkedin.com/in/rivalda-fatah/" target="_blank" rel="noreferrer"><i class="bi bi-linkedin"></i></a>
          <a class="fs-3 px-2 text-decoration-none text-dark" href="https://github.com/rivaldafatah" target="_blank" rel="noreferrer"><i class="bi bi-github"></i></a>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('about-section', About);
