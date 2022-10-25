import React from "react";
import { IHero } from "../../interfaces";

const Hero = ({ title, description }: IHero) => {
  return (
    <section className="h-screen bg-gradient-to-br from-fuchsia-800 via-black to-sky-800 ">
      <div className="bg-black bg-opacity-50 h-full overflow-hidden">
        <div className="h-full px-6 xl:mx-auto xl:container">
          <div className="w-full flex justify-center items-center h-full slide">
            <div className="text-white text-center hero py-24 max-w-lg">
              <h1 className="text-3xl tracking-widest xs:text-5xl xs:tracking-widest blinker uppercase font-semibold pb-4">
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

export default Hero;
