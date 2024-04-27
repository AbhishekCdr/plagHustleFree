import ScrollTriggeredCountUp from "./ScrollTriggeredCountUp";
import Crowsel from "./Crowsel";

const Delivered = () => {
  const review = [
    {
      name: "Ravi Kumar",
      city: "Noida",
      description:
        "My mentor approved the format and content. It is well researched.",
      rate: 5,
    },
    {
      name: "Soni Bist",
      city: "Dehradun",
      description:
        "You helped me submitted my dissertation on time, otherwise it would be too hectic.",
      rate: 5,
    },
    {
      name: "Sakshi",
      city: "Punjab",
      description:
        "Best thing I like about your team, they constantly reply to my query after outsourcing my work.",
      rate: 5,
    },
    {
      name: "Manju Srivastava",
      city: "Delhi",
      description: "Thanku, my dissertation got submitted.",
      rate: 4,
    },
    {
      name: "Shweta Singh",
      city: "Lucknow",
      description:
        "I liked the way you people cooperate with students. And you delivered the work before due date.",
      rate: 5,
    },
    {
      name: "Rupesh Rajput ",
      city: "Dehradun",
      description:
        "Thankyou, would definitely refer you to my friends as well as juniors.",
      rate: 4,
    },
  ];
  return (
    <div
      className="flex flex-col justify-around gap-y-24 bg-cover bg-center bg-no-repeat px-5 pb-20 font-customFont1 text-white"
      style={{ backgroundImage: "url('/static/image/scatter.svg')" }}
    >
      <div className="flex w-full flex-1 flex-col gap-10">
        <h1 className="text-center text-3xl underline underline-offset-4 sm:text-4xl">
          Projects Delivered
        </h1>
        <div className=" flex flex-col items-center  justify-evenly gap-10 sm:flex-row">
          <div className="flex h-28 w-4/5 flex-col items-center justify-center rounded-xl border-b-2 border-l-2 border-[#FA7268] bg-[#C62368] p-2 text-center text-3xl shadow-md shadow-[#FA7268] sm:w-1/3">
            <span className="animate-pulse">Dissertation</span>
            <div className="flex flex-row gap-1">
              <ScrollTriggeredCountUp
                start={0}
                end={100}
                duration={5}
                delay={0}
              />
              +
            </div>
          </div>
          <div className="flex h-28 w-4/5 flex-col items-center justify-center rounded-xl border-b-2 border-l-2 border-[#FA7268] bg-[#C62368] p-2 text-center text-3xl shadow-md shadow-[#FA7268] sm:w-1/3">
            <span className="animate-pulse">Article</span>
            <div className="flex flex-row gap-1">
              <ScrollTriggeredCountUp
                start={0}
                end={70}
                duration={5}
                delay={0}
              />
              +
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-1 flex-col gap-10" id="sample">
        <h1 className="text-center text-3xl underline underline-offset-4 sm:text-4xl">
          Sample Work
        </h1>
        <div
          className=" flex h-28 flex-row gap-3 text-center font-customFont sm:h-28 sm:gap-10 sm:px-14
        "
        >
          <a
            className="relative  flex flex-1 items-center justify-center rounded-xl transition-transform hover:-translate-y-2 hover:scale-110 hover:cursor-pointer"
            href="https://drive.google.com/file/d/1HqaLDoCbTqGi9kvJmXMcNLSODNjnHc5e/view?usp=drive_link"
            target="_blank"
          >
            <img src="/static/image/doc.svg" alt="doc" className="h-full" />
            <span className="absolute bottom-3 text-sm">Dissertation</span>
          </a>
          <a
            className="relative  flex flex-1 items-center justify-center rounded-xl transition-transform hover:-translate-y-2 hover:scale-110"
            href="https://drive.google.com/file/d/1uZ5BcJOCYc-r7-Ad10oFKw8mqyj4Ef9F/view?usp=drive_link"
            target="_blank"
          >
            <img src="/static/image/doc.svg" alt="doc" className="h-full" />
            <span className="absolute bottom-3 text-sm">Article</span>
          </a>
          <a
            className="relative  flex flex-1 items-center justify-center rounded-xl transition-transform hover:-translate-y-2 hover:scale-110"
            href="https://drive.google.com/file/d/1fk3rI87GivrQyQi0O-KIFiCPtV0fKpPS/view?usp=drive_link"
            target="_blank"
          >
            <img src="/static/image/doc.svg" alt="doc" className="h-full" />
            <span className="absolute bottom-3 text-sm">Moot Court</span>
          </a>
        </div>
      </div>
      <div className="flex w-full flex-col gap-10">
        <h1 className="text-center text-3xl underline underline-offset-4 sm:text-4xl">
          Students Review
        </h1>
        <div className="h-32 px-5 font-customFont sm:px-48">
          <Crowsel review={review} />
        </div>
      </div>
    </div>
  );
};

export default Delivered;
