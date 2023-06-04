import Home from '../views/pages/home';
import About from '../views/pages/about';
import PdfExcel from '../views/pages/pdf-excel';
import PdfJpg from '../views/pages/pdf-jpg';
import PdfPowerpoint from '../views/pages/pdf-powerpoint';
import PdfWord from '../views/pages/pdf-word';
import ExcelPdf from '../views/pages/excel-pdf';
import JpgPdf from '../views/pages/jpg-pdf';
import PowerpointPdf from '../views/pages/powerpoint-pdf';
import WordPdf from '../views/pages/word-pdf';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/about': About,
  '/pdf-excel': PdfExcel,
  '/pdf-jpg': PdfJpg,
  '/pdf-powerpoint': PdfPowerpoint,
  '/pdf-word': PdfWord,
  '/excel-pdf': ExcelPdf,
  '/jpg-pdf': JpgPdf,
  '/powerpoint-pdf': PowerpointPdf,
  '/word-pdf': WordPdf,
};

export default routes;
