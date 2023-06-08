import { loader, failedLoad } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="loading"></div>
    <jumbotron-section></jumbotron-section>
    <feature-section></feature-section>
    `;
  },

  async afterRender() {
    const load = document.querySelector('.loading');
    try {
      load.innerHTML = loader();
      load.style.display = 'none';
    } catch (error) {
      load.innerHTML = failedLoad();
    }
  },
};

export default Home;
