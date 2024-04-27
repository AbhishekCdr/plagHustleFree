import { Typography } from "@material-tailwind/react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
// import { PricingCard } from "./PricingCard";
import Price from "./Price";

export function FooterWithLogo() {
  const pricing = [
    {
      topic: "dissertation",
      price: "5000",
      under: "/100pg",
      p1: "Plagirism Free",
      p2: "Well Researched",
      p3: "As per university guidlines",
      p4: "Relevant Content",
      p5: "Well Formatted",
    },
    {
      topic: "Article",
      price: "0.5-1",
      under: "/word",
      p1: "Well Researched",
      p2: "Proper reference",
      p3: "Amendment as per your need",
      p4: "Relevant Content",
      p5: "Plagirism Free",
    },
  ];

  return (
    <div
      className="flex  flex-col  items-center gap-4 bg-cover bg-center bg-no-repeat px-5 pb-3 pt-5 font-customFont1 text-white"
      style={{ backgroundImage: "url('/static/image/bottom.svg')" }}
    >
      <div className="w-4/5 sm:w-80" id="pricing">
        <Price pricing={pricing} />
      </div>
      <footer
        className="flex h-full w-full flex-col justify-end gap-3"
        id="contact"
      >
        <div>
          <Typography
            as="a"
            color="blue-gray"
            className=" p-5 text-center text-3xl transition-colors sm:text-4xl"
          >
            Outsource Us
          </Typography>
        </div>
        <div className="flex flex-row items-center justify-center gap-x-12 gap-y-6 ">
          <ul className="flex flex-wrap items-center gap-x-20 sm:gap-x-32">
            <li>
              <Typography
                as="a"
                href="https://wa.me/917779883234"
                target="_blank"
                rel="noopener noreferrer"
                color="blue-gray"
                className=" transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                <FaWhatsapp className="size-10" />
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="https://www.instagram.com/plaghustlefree/"
                target="_blank"
                rel="noopener noreferrer"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                <FaInstagramSquare className="size-10" />
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="mailto:plaghustlefreeacademy@gmail.com"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                <IoMdMail className="size-10" />
              </Typography>
            </li>
          </ul>
        </div>
        <hr className="border-blue-gray-50 my-7" />
        <Typography color="blue-gray" className="text-center font-mono">
          &copy; 2024 Plag & Hustle Free Academy
        </Typography>
      </footer>
    </div>
  );
}
