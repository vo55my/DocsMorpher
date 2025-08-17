import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-8 bg-slate-800">
      <p className="text-center text-sm text-gray-400">
        &copy; {currentYear} DocsMorpher — Made with{" "}
        <span className="text-red-500">❤</span> for the people of the internet
      </p>
    </footer>
  );
};

export default Footer;
