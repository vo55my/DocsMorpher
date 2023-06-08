import { loader, failedLoad } from '../templates/template-creator';

const ExcelPdf = {
  async render() {
    return `
    <div class="loading"></div>
    <section class="container d-flex justify-content-center my-4 py-5">
            <div class="input text-center rounded py-5 my-4 col-lg-8">
                <h1 class="display-4 fw-bold">Excel to PDF</h1>
                <img data-src="/icons/LOGO XSL PDF.webp" alt="Excel to PDF" class="w-25 img-fluid lazyload">
                <div class="row justify-content-center">
                    <label for="formFileLg" class="form-label fs-5 py-3">Silahkan Upload File</label>
                    <div class="px-5 mx-5"><input class="form-control fs-5" id="formFileLg" type="file" placeholder="Pilih File"></div>
                    <div class="pt-3"><button type="button" class="btn btn-primary shadow-lg fs-5 border-0">Convert</button></div>
                </div>
            </div>
        </section>
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

export default ExcelPdf;
