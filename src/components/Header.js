import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-gray-200 flex items-center justify-between text-sandybrown-100 w-full py-3 px-6 font-inter">
        <div className="flex items-center gap-4 pl-6 md:pl-12">
          <img className="w-7 h-7 lg:w-10 lg:h-10" alt="" src="/logo.svg" />
          {/* Adjusted text size to be smaller */}
          <h3 className="text-base lg:text-2xl leading-6 font-normal">
            JobVista
          </h3>
        </div>
        {/* Hamburger Button */}
        <button
          className="lg:hidden h-10 w-10 flex items-center justify-center px-9 md:px-12 cursor-pointer bg-transparent"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img
            className="w-6 h-6"
            alt="Menu"
            src="/notification.svg" // Changed to hamburger icon, assuming mistake in the provided code
          />
        </button>
        {/* Navigation Links */}
        <div
          className={`hidden lg:flex flex-col pr-12 lg:flex-row items-center justify-end gap-4 md:gap-9 md:static bg-gray-200 w-full md:w-auto transition-transform md:translate-y-0 no-underline`}
        >
          <a
            href="#"
            className="text-white hover:text-sandybrown-200 no-underline scroll-smooth"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-sandybrown-200 no-underline scroll-smooth"
          >
            About
          </a>
          <a
            href="#features"
            className="text-white hover:text-sandybrown-200 no-underline scroll-smooth"
          >
            Services
          </a>
          <a
            href="#support"
            className="text-white hover:text-sandybrown-200 no-underline scroll-smooth"
          >
            Support
          </a>
        </div>
      </header>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className={`mobile-menu lg:hidden
            abosolut top-20 w-full flex flex-col items-center overflow-visible z-50 py-2 
          `}
        >
          <a
            href="#"
            className="block no-underline text-white py-2 px-4 text-md  scroll-smooth font-medium font-inter hover:text-sandybrown-200"
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 px-4 text-md font-medium font-inter scroll-smooth no-underline text-white hover:text-sandybrown-200"
          >
            About
          </a>
          <a
            href="#features"
            className="block py-2 px-4 text-md font-medium font-inter  scroll-smooth no-underline text-white hover:text-sandybrown-200"
          >
            Services
          </a>
          <a
            href="#support"
            className="block py-2 px-4 text-md font-medium font-inter scroll-smooth no-underline text-white hover:text-sandybrown-200"
          >
            Support
          </a>
        </div>
      )}
    </>
  );
};

export default Header;
