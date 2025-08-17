import React from "react";
import Image from "next/image";

const Feature4 = () => {
  return (
    <div className="grid grid-cols-1 justify-center items-center text-center px-5">
      <Image
        src="/ilustration/validation.webp"
        alt="Feature-4"
        width={200}
        height={200}
        className="mx-auto"
      />
      <h1 className="text-xl md:text-2xl font-bold mb-2 text-slate-900 mt-5">
        Data Aman dan Terjamin
      </h1>
      <p className="text-base md:text-lg text-gray-500">
        Keamanan data pengguna dengan enkripsi dan kontrol izin yang kuat serta
        memberikan jaminan bahwa dokumen penting tetap aman dan hanya dapat
        diakses oleh pengguna.
      </p>
    </div>
  );
};

export default Feature4;
