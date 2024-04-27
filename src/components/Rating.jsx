/* eslint-disable react/prop-types */
import { Rating } from "@material-tailwind/react";

export function DefaultRating({ rate }) {
  return (
    <Rating
      value={rate}
      readonly
      className="flex flex-row justify-end text-yellow-500"
    />
  );
}
