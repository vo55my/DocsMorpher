import React from "react";
import Feature1 from "./Feature1";
import Feature2 from "./Feature2";
import Feature3 from "./Feature3";
import Feature4 from "./Feature4";

const MainFeature = () => {
  return (
    <section id="main-feature" className="lg:h-screen flex items-center justify-center py-20 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Feature1 />
        <Feature2 />
        <Feature3 />
        <Feature4 />
      </div>
    </section>
  );
};

export default MainFeature;
