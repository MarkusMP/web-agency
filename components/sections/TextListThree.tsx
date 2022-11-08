import React from "react";
import { ITextListThree } from "../../interfaces";

const TextListThree = ({ listTextThree }: ITextListThree) => {
  return (
    <section className="bg-black">
      <div className="container mx-auto px-6 py-12">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {listTextThree &&
            listTextThree.map((item) => (
              <div
                key={item._id}
                className="border-[1px] relative border-white py-4 px-4 mt-8 max-w-3xl w-full mx-auto"
              >
                <p className="mx-auto w-full text-white">{item.description}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TextListThree;
