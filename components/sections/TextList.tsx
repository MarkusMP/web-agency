import React from "react";
import { ITextList } from "../../interfaces";

const TextList = ({ description, title, listText }: ITextList) => {
  return (
    <section className="pt-[80px] bg-black">
      <div className="mx-auto py-12 px-6 container">
        <h1 className="text-3xl text-center text-white">{title && title}</h1>
        <div className="border-[1px] border-white py-6 px-4 my-8 max-w-3xl w-full mx-auto">
          <p className="mx-auto w-full text-white">
            {description && description}
          </p>
        </div>
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {listText &&
            listText.map((item) => (
              <div
                key={item._id}
                className="border-[1px] border-white py-4 px-4 max-w-3xl w-full mx-auto"
              >
                <p className="mx-auto w-full text-white">{item.description}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TextList;
