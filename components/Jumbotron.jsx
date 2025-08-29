import React from "react";
import Link from "next/link";

const Jumbotron = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    const target = document.querySelector("#main-feature");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="container max-w-4xl mx-5 text-center text-white">
        <h1
          id="judul"
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Welcome to DocsMorpher
        </h1>
        <p className="text-lg md:text-xl pt-4">
          Change Documents Easily, Generate Quick Solutions.
        </p>
        <Link
          href="#main-feature"
          passHref
          onClick={handleScroll}
          className="inline-block mt-6 bg-white text-blue-600 text-lg px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Explore All
        </Link>
      </div>
    </section>
  );
};

export default Jumbotron;
