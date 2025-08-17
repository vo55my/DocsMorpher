import React from "react";
import Image from "next/image";

const Feature1 = () => {
  return (
    <div className="grid grid-cols-1 justify-center items-center text-center px-5">
      <Image
        src="/icons/LOGO DOC PDF.webp"
        alt="Word to PDF"
        width={200}
        height={200}
        className="mx-auto"
      />
      <h1 className="text-xl md:text-2xl font-bold text-slate-900 mt-5">
        Kenapa DocsMorpher???
      </h1>
      <p className="text-base md:text-lg text-gray-500">
        Nikmati pengalaman konversi file yang lebih baik, lebih cepat, dan lebih
        efektif dengan platform yang responsif dan hemat biaya.
      </p>
    </div>
  );
};

export default Feature1;
