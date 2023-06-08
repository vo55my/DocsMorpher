import { loader, failedLoad } from '../templates/template-creator';

const About = {
  async render() {
    return `
    <div class="loading"></div>
    <about-section></about-section>
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

export default About;
