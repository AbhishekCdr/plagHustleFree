import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0  z-20 w-full overflow-hidden bg-[#C62368] font-mono text-white">
      <div className="mx-auto px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex-shrink-0 text-xl hover:cursor-pointer">
            <Link to="top" spy={true} smooth={true} offset={-70} duration={500}>
              Plag Hustle Free
            </Link>
          </div>

          {/* Navigation links */}
          <div className="hidden md:block">
            <Link
              to="top"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-4 hover:cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="objective"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-4 hover:cursor-pointer"
            >
              Objective
            </Link>
            <Link
              to="sample"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-4 hover:cursor-pointer"
            >
              Sample Work
            </Link>
            <Link
              to="pricing"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-4 hover:cursor-pointer"
            >
              Pricing
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-4 hover:cursor-pointer"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="focus:outline-none" onClick={toggleMenu}>
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M4 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="flex flex-col gap-2 px-1 py-3 md:hidden">
            <Link
              to="top"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block px-4 hover:cursor-pointer"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="objective"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block px-4 hover:cursor-pointer"
              onClick={toggleMenu}
            >
              Objective
            </Link>
            <Link
              to="sample"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block px-4 hover:cursor-pointer"
              onClick={toggleMenu}
            >
              Sample Work
            </Link>
            <Link
              to="pricing"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block px-4 hover:cursor-pointer"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block px-4 hover:cursor-pointer"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
