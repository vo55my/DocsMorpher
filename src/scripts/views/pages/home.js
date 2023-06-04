const Home = {
  async render() {
    return `
    <jumbotron-section></jumbotron-section>
    <feature-section></feature-section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
