import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.scss';
import AOS from 'aos';
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

AOS.init({
  once: false,
  mirror: true,
  duration: 700,
});
