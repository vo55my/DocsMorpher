import { loader, failedLoad } from '../templates/template-creator';

const WordPdf = {
  async render() {
    return `
    <div class="loading"></div>
    <section class="container d-flex justify-content-center pt-5 mt-5">
            <div class="input text-center rounded py-4 col-lg-8 shadow-lg">
                <h1 class="display-4 fw-bold">Word to PDF</h1>
                <img data-src="/icons/LOGO DOC PDF.webp" alt="Word to PDF" class="w-25 img-fluid lazyload">
                <div class="row justify-content-center text-center">
                  <form action="http://localhost:5000/upload" method="post" enctype="multipart/form-data">
                    <label for="formFileLg" class="form-label fs-5 py-3">Silahkan Upload File DOC/DOCX (Maks. 5MB)</label>
                    <div class="px-5"><input class="form-control fs-5" id="formFileLg" type="file" name="document" accept=".docx, .doc" placeholder="Pilih File"></div>
                    <div class="pt-3"><button type="submit" value="Upload" class="btn btn-primary shadow-lg fs-5 border-0 p-2">Convert</button></div>
                  </form>   
                </div>
            </div>
        </section>
        <footer-section class="fixed-bottom"></footer-section>
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

export default WordPdf;
