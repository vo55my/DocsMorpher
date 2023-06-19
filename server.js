/* eslint-disable no-use-before-define */
const express = require('express');
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, '/src/public')));
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, '/src/public/uploads');
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, '/dist/index.html'));
});

// Office To pdf
app.post('/upload', upload.single('document'), async (req, res) => {
  try {
    const formData = new FormData();
    formData.append('instructions', JSON.stringify({
      parts: [
        {
          file: 'document',
        },
      ],
    }));
    formData.append('document', fs.createReadStream(req.file.path));
    const response = await axios.post('https://api.pspdfkit.com/build', formData, {
      headers: {
        Authorization: 'Bearer pdf_live_SLMk3WARLHy7UlgUW858BAbTCWrkQ7G7eEUopGgxNpj',
        ...formData.getHeaders(),
      },
      responseType: 'stream',
    });
    const fileName = req.file.filename;
    const filePath = req.file.path;
    const downloadLink = `http://localhost:${port}/download/pdf/${path.parse(fileName).name}.pdf`;
    response.data.pipe(fs.createWriteStream(`public/uploads/${path.parse(fileName).name}.pdf`));
    // Send the PDF download link to the client
    res.json({ downloadLink });
    // Delete the uploaded Word file
    fs.unlinkSync(filePath);
  } catch (e) {
    const errorString = await streamToString(e.response.data);
    console.log(errorString);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// image To Pdf
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const formData = new FormData();
    formData.append('instructions', JSON.stringify({
      parts: [
        {
          file: 'image',
        },
      ],
    }));
    formData.append('image', fs.createReadStream(req.file.path));
    const response = await axios.post('https://api.pspdfkit.com/build', formData, {
      headers: {
        Authorization: 'Bearer pdf_live_SLMk3WARLHy7UlgUW858BAbTCWrkQ7G7eEUopGgxNpj',
        ...formData.getHeaders(),
      },
      responseType: 'stream',
    });
    const fileName = req.file.filename;
    const filePath = req.file.path;
    const downloadLink = `http://localhost:${port}/download/pdf/${path.parse(fileName).name}.pdf`;
    response.data.pipe(fs.createWriteStream(`public/uploads/${path.parse(fileName).name}.pdf`));
    // Send the PDF download link to the client
    res.json({ downloadLink });
    // Delete the uploaded Word file
    fs.unlinkSync(filePath);
  } catch (e) {
    const errorString = await streamToString(e.response.data);
    console.log(errorString);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route untuk mengakses file PDF
app.get('/download/pdf/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, `/src/public/uploads/${filename}`);
  res.download(filePath);
});

function streamToString(stream) {
  const chunks = [];
  return new Promise((resolve, reject) => {
    stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on('error', (err) => reject(err));
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
  });
}

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
