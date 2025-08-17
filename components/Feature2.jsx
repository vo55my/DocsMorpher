import React from "react";
import Image from "next/image";

const Feature2 = () => {
  return (
    <div className="grid grid-cols-1 justify-center items-center text-center px-5">
      <Image
        src="/ilustration/manager.webp"
        alt="Feature-2"
        width={200}
        height={200}
        className="mx-auto"
      />
      <h1 className="text-xl md:text-2xl font-bold text-slate-900 mt-5">
        Mudah dan Cepat
      </h1>
      <p className="text-base md:text-lg text-gray-500">
        Membuka pintu ke dunia konversi file yang tak terbatas, memungkinkan
        Anda mengubah format dengan mudah dan hasil yang sempurna.
      </p>
    </div>
  );
};

export default Feature2;
