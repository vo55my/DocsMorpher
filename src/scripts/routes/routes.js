import Home from '../views/pages/home';
import About from '../views/pages/about';
import PdfImg from '../views/pages/pdf-img';
import ExcelPdf from '../views/pages/excel-pdf';
import ImgPdf from '../views/pages/img-pdf';
import PowerpointPdf from '../views/pages/powerpoint-pdf';
import WordPdf from '../views/pages/word-pdf';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/about': About,
  '/pdf-img': PdfImg,
  '/excel-pdf': ExcelPdf,
  '/img-pdf': ImgPdf,
  '/powerpoint-pdf': PowerpointPdf,
  '/word-pdf': WordPdf,
};

export default routes;
