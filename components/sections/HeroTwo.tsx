import React from "react";
import { IHero } from "../../interfaces";

const HeroTwo = ({ title, description }: IHero) => {
  return (
    <section className="h-[60vh] bg-gradient-to-br from-fuchsia-800 via-black to-sky-800">
      <div className="bg-black bg-opacity-50 h-full overflow-hidden py-[80px]">
        <div className="h-full px-6 xl:mx-auto xl:container">
          <div className="w-full flex justify-center items-center h-full slide ">
            <div className="text-white text-center hero py-14 max-w-lg w-full">
              <h1 className="text-2xl break-words w-full inline-block tracking-widest xs:text-4xl xs:tracking-widest blinker uppercase font-semibold pb-4">
                {title && title}
              </h1>
              <p className="blinker uppercase tracking-wider">
                {description && description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTwo;
