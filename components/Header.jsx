import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-slate-900 text-white fixed">
      <nav
        className="flex items-center justify-between p-6 lg:px-10 bg-gradient-to-r from-blue-500 to-indigo-600"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 items-center">
          <Link href="/" passHref>
            <Image
              src="/icons/LOGO.webp"
              alt="DocsMorpher Logo"
              width={150}
              height={0}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 bg-white text-blue-600 hover:bg-blue-50"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <FiMenu className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
              type="button"
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-4 py-2 text-md font-semibold bg-white text-blue-600 hover:bg-blue-50"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={toggleDropdown}
            >
              Tools{" "}
              <svg
                className="-mr-1 size-5 text-blue-600"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-35 bg-white shadow-lg rounded-md">
                <Link
                  href="/word-pdf"
                  passHref
                  className="flex items-center px-4 py-2 text-sm text-gray-800 hover:bg-blue-50"
                >
                  <Image
                    src="/icons/LOGO DOC PDF.webp"
                    alt="Word to PDF"
                    width={20}
                    height={20}
                    className="h-5 w-5 mr-2"
                  />
                  Word to PDF
                </Link>
                <Link
                  href="/excel-pdf"
                  passHref
                  className="flex items-center px-4 py-2 text-sm text-gray-800 hover:bg-blue-50"
                >
                  <Image
                    src="/icons/LOGO XSL PDF.webp"
                    alt="Excel to PDF"
                    width={20}
                    height={20}
                    className="h-5 w-5 mr-2"
                  />
                  Excel to PDF
                </Link>
                <Link
                  href="/ppt-pdf"
                  passHref
                  className="flex items-center px-4 py-2 text-sm text-gray-800 hover:bg-blue-50"
                >
                  <Image
                    src="/icons/LOGO PPT PDF.webp"
                    alt="PPT to PDF"
                    width={20}
                    height={20}
                    className="h-5 w-5 mr-2"
                  />
                  PPT to PDF
                </Link>
                <Link
                  href="/img-pdf"
                  passHref
                  className="flex items-center px-4 py-2 text-sm text-gray-800 hover:bg-blue-50"
                >
                  <Image
                    src="/icons/LOGO IMG PDF.webp"
                    alt="IMG to PDF"
                    width={20}
                    height={20}
                    className="h-5 w-5 mr-2"
                  />
                  IMG to PDF
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/about"
            className="ml-4 inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold bg-white text-blue-600 hover:bg-blue-50"
          >
            About
          </Link>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-slate-900 opacity-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" passHref className="-m-1.5 p-1.5">
                <span className="sr-only">DocsMorpher</span>
                <Image
                  src="/icons/LOGO.webp"
                  alt="DocsMorpher Logo"
                  width={150}
                  height={0}
                />
                \{" "}
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 bg-white text-blue-600 hover:bg-blue-50"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Close menu</span>
                <FiX className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6">
                  <Link
                    href="/word-pdf"
                    passHref
                    className="-mx-3 flex items-center rounded-lg px-3 py-2.5 text-base/7 font-semibold text-slate-900 hover:bg-blue-50"
                  >
                    <Image
                      src="/icons/LOGO DOC PDF.webp"
                      alt="Word to PDF"
                      width={20}
                      height={20}
                      className="h-5 w-5 mr-2"
                    />
                    Word to PDF
                  </Link>
                  <Link
                    href="/excel-pdf"
                    passHref
                    className="-mx-3 flex items-center rounded-lg px-3 py-2.5 text-base/7 font-semibold text-slate-900 hover:bg-blue-50"
                  >
                    <Image
                      src="/icons/LOGO XSL PDF.webp"
                      alt="Excel to PDF"
                      width={20}
                      height={20}
                      className="h-5 w-5 mr-2"
                    />
                    Excel to PDF
                  </Link>
                  <Link
                    href="/ppt-pdf"
                    passHref
                    className="-mx-3 flex items-center rounded-lg px-3 py-2.5 text-base/7 font-semibold text-slate-900 hover:bg-blue-50"
                  >
                    <Image
                      src="/icons/LOGO PPT PDF.webp"
                      alt="PPT to PDF"
                      width={20}
                      height={20}
                      className="h-5 w-5 mr-2"
                    />
                    PPT to PDF
                  </Link>
                  <Link
                    href="/img-pdf"
                    passHref
                    className="-mx-3 flex items-center rounded-lg px-3 py-2.5 text-base/7 font-semibold text-slate-900 hover:bg-blue-50"
                  >
                    <Image
                      src="/icons/LOGO IMG PDF.webp"
                      alt="IMG to PDF"
                      width={20}
                      height={20}
                      className="h-5 w-5 mr-2"
                    />
                    IMG to PDF
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
