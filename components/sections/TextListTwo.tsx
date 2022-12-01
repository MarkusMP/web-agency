import React from "react";
import { ITextListTwo } from "../../interfaces";

const TextListTwo = ({ title, listTextTwo }: ITextListTwo) => {
  return (
    <section className="bg-black">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-white text-3xl text-center pb-8">
          {title && title}
        </h2>
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listTextTwo &&
            listTextTwo.map((item) => (
              <div
                key={item._id}
                className="border-[1px] relative border-white py-4 px-4 mt-2 max-w-3xl w-full mx-auto"
              >
                <h2 className="text-white text-lg font-semibold absolute px-2 top-[-16px] bg-black">
                  {item.title && item.title}
                </h2>
                <p className="mx-auto w-full text-white">{item.description}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TextListTwo;
