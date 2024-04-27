import Type from "./Type";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@material-tailwind/react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div
      className="flex h-screen items-start justify-around bg-cover bg-center bg-no-repeat px-5 pt-24 font-customFont1 text-white sm:items-center sm:pt-0"
      style={{ backgroundImage: "url('/static/image/waves.svg')" }}
      id="top"
    >
      <div className="flex h-full flex-col items-center gap-x-14 gap-y-4 sm:flex-row-reverse sm:pr-10">
        <div className="relative flex justify-center">
          <img
            src="/static/image/back.png"
            alt="profile"
            className="absolute w-48 sm:w-60 lg:w-72"
          />
          <img
            src="/static/image/text.png"
            alt="back"
            className="z-10 w-48 animate-spin-slow1 p-4 sm:w-60 lg:w-72"
          />
        </div>
        <div className="flex h-1/2 w-full flex-col items-center justify-evenly gap-x-10 gap-y-5 text-center text-xl">
          <div className="flex flex-col gap-5">
            <h1 className=" text-4xl">Welcome to Plag & Hustle Free Academy</h1>
            <q className="font-customFont">
              We assist you till your Submission
            </q>
          </div>
          <div className="flex w-full flex-col gap-1 text-nowrap text-3xl ">
            <h1 className="text-nowrap">OutSource Us</h1>

            <Type />
          </div>
        </div>
      </div>
      <div className="top-1/5 absolute right-0 mr-1">
        <ul className="text- yellow-50 flex flex-col gap-4 text-4xl sm:text-5xl">
          <a href="https://wa.me/917779883234" target="_blank">
            <li className="transition-colors hover:text-pink-300 focus:text-pink-300 ">
              <FaWhatsapp />
            </li>
          </a>
          <a href="https://www.instagram.com/plaghustlefree/" target="_blank">
            <li className=" transition-colors hover:text-pink-300 focus:text-pink-300">
              <FaInstagramSquare />
            </li>
          </a>
        </ul>
      </div>
      <div className="absolute bottom-2 animate-bounce ">
        <Link
          to="objective"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Button
            variant="gradient"
            className="flex items-center gap-1 font-mono text-sm shadow-none"
          >
            Know More <MdOutlineKeyboardDoubleArrowDown />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
