class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="jumbotron py-5 my-5 d-flex">
      <div class="container text-center py-5 my-5 col-lg-8 text-center align-items-center justify-content-center">
        <h1 class="display-1 fw-bold" id="judul">Welcome to DocsMorpher</h1>
        <p class="fs-4 pt-3">Change Documents Easily, Generate Quick Solutions.</p>
        <a href="#tools" class="btn btn-primary shadow-lg fs-5 border-0 p-2">Explore All</a>
      </div>
    </section>
    `;
  }
}

customElements.define('jumbotron-section', Jumbotron);
