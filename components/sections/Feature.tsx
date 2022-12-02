import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IFeature } from "../../interfaces";
import { urlFor } from "../../lib/sanity";

const Feature = ({ title, image, description, btnText, page }: IFeature) => {
  const router = useRouter();
  return (
    <section className="py-12 bg-black">
      <div className="xl:mx-auto xl:container px-6 flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-3/6 pb-4 md:pb-0 pr-0 md:pr-6">
          <div
            className="mx-auto"
            style={{
              height: "auto",
              maxHeight: 350,
              maxWidth: 350,
              width: "auto",
              position: "relative",
            }}
          >
            <Image
              src={urlFor(image && image).url()}
              alt={image.alt}
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>
        </div>
        <div className="text-white w-full md:w-3/6 text-center md:text-left md:pl-6">
          <h2 className="text-3xl pb-4">{title && title}</h2>
          <p className="pb-4">{description && description}</p>
          <div className="max-w-fit mx-auto flex flex-col group ">
            <Link
              href={
                router.locale === "sv" ? `/sv/${page.slug}` : `/${page.slug}`
              }
            >
              <a className="uppercase blinker font-semibold tracking-wide pb-2 text-lg">
                {btnText && btnText}
              </a>
            </Link>
            <div className="transition-all h-[2px] w-[35px] bg-white mx-auto group-hover:w-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
