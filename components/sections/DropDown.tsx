import React from "react";
import { IDropDown } from "../../interfaces";
import DropDownItem from "../DropDownItem";

const DropDown = ({ title, listDropDown }: IDropDown) => {
  return (
    <section className="bg-black py-12 flex">
      <div className="xl:container w-full mx-auto px-5">
        <div className="mx-auto">
          <h2 className="text-3xl font-bold text-center text-white">
            {title && title}
          </h2>

          <div className="pt-8 pb-4 max-w-2xl mx-auto">
            {listDropDown &&
              listDropDown.map((item: any) => (
                <DropDownItem
                  key={item._key}
                  title={item.title}
                  description={item.description}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DropDown;
