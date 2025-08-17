import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileConvert from "@/components/FileConvert";

export default function ImgPdf() {
  const title = "Image to PDF";
  const imageSrc = "/icons/LOGO IMG PDF.webp";
  const fileHelpText = "JPG or PNG (MAX. 5MB).";

  return (
    <>
      <Header />
      <FileConvert
        title={title}
        imageSrc={imageSrc}
        fileHelpText={fileHelpText}
      />
      <Footer />
    </>
  );
}
