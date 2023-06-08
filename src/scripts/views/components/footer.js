class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="container-fluid pt-3 pb-3">
      <p class="text-center">&copy; 2023 DocsMorpher - Made with ❤ for the people of the internet</p>
    </footer>
    `;
  }
}

customElements.define('footer-section', Footer);
