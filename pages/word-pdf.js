import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileConvert from "@/components/FileConvert";

export default function WordPdf() {
  const title = "Word to PDF";
  const imageSrc = "/icons/LOGO DOC PDF.webp";
  const fileHelpText = "DOC or DOCX (MAX. 5MB).";

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
