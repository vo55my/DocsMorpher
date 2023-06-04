class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="jumbotron pt-5 mt-5 d-flex">
      <div class="container text-center py-5 my-5 col-8 text-center align-items-center justify-content-center">
        <h1 class="display-1">Welcome to DocsMorpher</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui omnis numquam unde excepturi harum laboriosam distinctio suscipit dolorem aliquid id!</p>
        <button type="button" class="btn btn-primary shadow-lg">Explore All PDF Tools</button>
      </div>
    </section>
    `;
  }
}

customElements.define('jumbotron-section', Jumbotron);
