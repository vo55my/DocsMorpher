import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileConvert from "@/components/FileConvert";

export default function ExcelPdf() {
  const title = "Excel to PDF";
  const imageSrc = "/icons/LOGO XSL PDF.webp";
  const fileHelpText = "XLS or XLSX (MAX. 5MB).";

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
