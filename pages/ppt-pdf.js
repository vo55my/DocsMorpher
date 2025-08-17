import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileConvert from "@/components/FileConvert";

export default function PPTPdf() {
  const title = "PowerPoint to PDF";
  const imageSrc = "/icons/LOGO PPT PDF.webp";
  const fileHelpText = "PPT or PPTX (MAX. 5MB).";

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
