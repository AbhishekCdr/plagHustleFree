/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Price = ({ pricing }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  function CheckIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-3 w-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    );
  }

  return (
    <Slider {...settings}>
      {pricing.map((pricing, index) => (
        <div key={index} className="p-1">
          <Card
            variant="gradient"
            className="w-full max-w-[20rem] bg-white p-8  font-customFont text-black"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 mb-5 rounded-none border-b border-white/10 pb-5 text-center"
            >
              <Typography variant="lead" className="font-normal uppercase">
                {pricing.topic}
              </Typography>
              <span className="self-start text-base">Starting from</span>
              <Typography
                variant="h1"
                className="mt-3 flex justify-center gap-1 text-nowrap text-7xl font-normal"
              >
                <span className="mt-2 text-xl">₹</span>
                {pricing.price}
                <span className="self-end text-xl">{pricing.under}</span>
              </Typography>
            </CardHeader>
            <CardBody className="p-0">
              <ul className="flex flex-col gap-4 text-nowrap">
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="case font-normal">
                    {pricing.p1}
                  </Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className=" font-normal">{pricing.p2}</Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal">{pricing.p3}</Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal">{pricing.p4}</Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal">{pricing.p5}</Typography>
                </li>
              </ul>
            </CardBody>
            <CardFooter className="mt-12 flex rounded-lg p-0">
              <a
                href="https://wa.me/917779883234"
                target="_blank"
                className="h-full w-full"
              >
                <Button
                  size="lg"
                  className="h-10 bg-[#d4236d] text-white hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                  ripple={false}
                  fullWidth={true}
                  href
                >
                  Contact Now
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      ))}
    </Slider>
  );
};

export default Price;
