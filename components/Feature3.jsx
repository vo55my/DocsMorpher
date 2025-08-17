import React from "react";
import Image from "next/image";

const Feature3 = () => {
  return (
    <div className="grid grid-cols-1 justify-center items-center text-center px-5">
      <Image
        src="/ilustration/marketer.webp"
        alt="Feature-3"
        width={200}
        height={200}
        className="mx-auto"
      />
      <h1 className="text-xl md:text-2xl font-bold mb-2 text-slate-900 mt-5">
        Tampilan Menarik dan Mudah Dipahami
      </h1>
      <p className="text-base md:text-lg text-gray-500">
        Tampilan yang interaktif, menarik, serta memudahkan penggunaan
        fitur-fitur yang ada bagi pengguna baru.
      </p>
    </div>
  );
};

export default Feature3;
