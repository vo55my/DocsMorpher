import 'regenerator-runtime';
import '../styles/main.css';
import Main from './views/main';
import swRegister from './utils/sw-register';

const main = new Main({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  main.renderPage();
});

window.addEventListener('load', () => {
  main.renderPage();
  swRegister();
});
