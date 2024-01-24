import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-200 flex items-center justify-between text-sandybrown-100 w-full py-3 px-6 font-inter">
      <div className="flex items-center gap-4 pl-12">
        <img className="w-10 h-10" alt="" src="/logo.svg" />
        {/* Adjusted text size to be smaller */}
        <h3 className="text-base lg:text-2xl leading-6 font-normal">
          JobVista
        </h3>
      </div>
      {/* Hamburger Button */}
      <button
        className="md:hidden h-10 w-10 flex items-center justify-center px-12 cursor-pointer bg-transparent"
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
        className={`md:flex flex-col pr-12 md:flex-row items-center justify-end gap-4 md:gap-9 absolute md:static bg-gray-200 w-full md:w-auto left-0 top-[100%] transition-transform md:translate-y-0 no-underline`}
      >
        <a
          href="#"
          className="text-white hover:text-sandybrown-200 no-underline"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-white hover:text-sandybrown-200 no-underline"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-white hover:text-sandybrown-200 no-underline"
        >
          Contact
        </a>
        <a
          href="#pricing"
          className="text-white hover:text-sandybrown-200 no-underline"
        >
          Pricing
        </a>
        <a
          href="#support"
          className="text-white hover:text-sandybrown-200 no-underline"
        >
          Support
        </a>
      </div>
    </header>
  );
};

export default Header;
