const PdfWord = {
  async render() {
    return `
    <section class="container d-flex justify-content-center my-4 py-5">
            <div class="bg-primary text-center rounded py-5 my-4 col-lg-8">
                <h1>Word to PDF</h1>
                <img src="/icons/LOGO PDF DOC.png" alt="Word to PDF" class="w-25 img-fluid">
                <div class="row justify-content-center">
                    <label for="formFileLg" class="form-label">Silahkan Upload File</label>
                    <div class="col-7 col-lg-8 col-md-8 col-sm-8"><input class="form-control" id="formFileLg" type="file" placeholder="Pilih File"></div>
                    <div class="col-4 col-lg-2 col-md-2 col-sm-2"><button type="button" class="btn btn-success">Convert</button></div>
                </div>
            </div>
        </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default PdfWord;
