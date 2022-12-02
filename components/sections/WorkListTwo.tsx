import Image from "next/image";
import React from "react";
import { IWorkListTwo } from "../../interfaces";
import { urlFor } from "../../lib/sanity";

const WorkListTwo = ({ title, listWorkTwo }: IWorkListTwo) => {
  return (
    <section className="bg-black pt-[80px]">
      <div className="mx-auto container px-6 py-12">
        <div>
          <h1 className="text-white text-3xl text-center">{title && title}</h1>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 pt-8">
          {listWorkTwo &&
            listWorkTwo.map((item) => (
              <div
                className="bg-white shadow-md h-full relative"
                key={item._id}
              >
                <div>
                  <a
                    href={`${item.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative w-full h-full imageContainer cursor-pointer">
                      <Image
                        className="image"
                        loader={() => urlFor(item.image && item.image).url()}
                        src={urlFor(item.image && item.image).url()}
                        alt={item.title}
                        unoptimized={true}
                        width="100%"
                        height="0"
                        objectFit="contain"
                      />
                    </div>
                  </a>

                  <div className="p-6">
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-dark cursor-pointer">
                      <a
                        href={`${item.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title && item.title}
                      </a>
                    </h2>

                    <p className="mb-5 text-dark">
                      {item.description && item.description}
                    </p>
                    <div className="flex justify-between items-center absolute bottom-3">
                      <a
                        href={`${item.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center font-medium text-black hover:underline"
                      >
                        {item.btnText}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WorkListTwo;
