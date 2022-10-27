import React from "react";
import { INotFoundSection } from "../../interfaces";

const NotFoundSection = ({ title, description }: INotFoundSection) => {
  return (
    <section className="h-screen">
      <div className="w-full h-full flex py-12 items-center relative bg-black">
        <div className="container mx-auto px-6 text-center max-w-3xl text-white">
          <h1 className="text-6xl font-bold pb-4">{title && title}</h1>
          <p>{description && description}</p>
        </div>
      </div>
    </section>
  );
};

export default NotFoundSection;
