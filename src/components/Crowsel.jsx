/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DefaultRating } from "./Rating";

const Crowsel = ({ review }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      {review.map((review, index) => (
        <div key={index}>
          <div className="flex h-full w-full flex-col justify-between gap-3 px-3 py-2">
            <div className="flex flex-col gap-2 text-sm">
              <DefaultRating rate={review.rate} />
              <p>{review.description}</p>
            </div>
            <div className=" bottom-0 flex flex-col justify-end">
              <h1 className="text-sm">{review.name}</h1>
              <p className="text-xs">{review.city}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Crowsel;
