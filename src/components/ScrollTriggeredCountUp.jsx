/* eslint-disable react/prop-types */
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const ScrollTriggeredCountUp = ({ start, end, duration, delay }) => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      {counterOn && (
        <CountUp start={start} end={end} duration={duration} delay={delay} />
      )}
    </ScrollTrigger>
  );
};

export default ScrollTriggeredCountUp;
