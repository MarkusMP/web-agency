import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ICta } from "../../interfaces";

const Cta = ({ title, btnText, description, page }: ICta) => {
  const router = useRouter();

  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center border-2 border-white py-12 px-8 max-w-xl w-full mx-auto">
          <h2 className="text-white text-xl pb-4">{title && title}</h2>
          <p className="max-w-md mx-auto w-full text-white">
            {description && description}
          </p>
          <div className="max-w-fit mx-auto flex flex-col group pt-8">
            <Link
              href={
                router.locale === "sv" ? `/sv/${page.slug}` : `/${page.slug}`
              }
            >
              <a className="uppercase blinker text-white font-semibold tracking-wide font-semibold  text-lg">
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

export default Cta;
