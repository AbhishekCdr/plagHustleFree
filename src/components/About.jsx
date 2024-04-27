// import { Button } from "@material-tailwind/react";

const About = () => {
  return (
    <div
      className="flex h-screen items-center justify-around  bg-cover bg-center bg-no-repeat px-5 font-customFont1 text-white lg:flex-row"
      style={{ backgroundImage: "url('/static/image/waves2.svg')" }}
      id="objective"
    >
      <div className="flex h-full flex-col justify-evenly gap-5 p-4 sm:gap-20">
        <div className=" flex flex-col gap-2">
          <h1 className="text-center text-3xl underline underline-offset-4 sm:text-4xl">
            Objective
          </h1>
          <ul className="flex flex-col gap-1 font-customFont sm:text-center sm:text-xl">
            <li>
              Plag & Hustle Free Academy aim to provide well researched and
              articulated dissertation and article.
            </li>
            <li>
              However, our sole purpose is to bring Authenticity and
              Transparency as providing relevant content.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 sm:gap-5">
          <h1 className="text-center text-3xl underline underline-offset-4 sm:text-4xl">
            Our Story
          </h1>
          <ul className="flex flex-col gap-1 font-customFont sm:gap-3 sm:text-center sm:text-xl">
            <li>
              One of the Co Founder of Plag & Hustle Free Academy have herself
              hustled alot to get her dissertation submitted. She came across
              fraudsters and incompetent people, delivering dissertation and
              providing messed up irrelevant content.
            </li>
            <li>
              Thus to help the students with genuine work from scholars who
              themselves have sound knowledge of the field. With this idea and
              purpose, the foundation of Plag & Hustle Free Academy is laid
              down.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
