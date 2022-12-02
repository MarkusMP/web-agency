import React from "react";
import { IWorkList } from "../../interfaces";
import Link from "next/link";
import { useRouter } from "next/router";
import CarouselWork from "../CarouselWork";

const WorkList = ({ title, listWork, btnText, page }: IWorkList) => {
  const router = useRouter();

  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <div>
          <h2 className="text-3xl font-bold text-center">{title && title}</h2>
        </div>

        <div className="relative mt-8">
          <CarouselWork listWork={listWork} />
        </div>
        <div className="max-w-fit mx-auto flex flex-col group pt-8">
          <Link
            href={router.locale === "sv" ? `/sv/${page.slug}` : `/${page.slug}`}
          >
            <a className="uppercase blinker text-black font-semibold tracking-wide font-semibold  text-lg">
              {btnText && btnText}
            </a>
          </Link>
          <div className="transition-all h-[2px] w-[35px] bg-black mx-auto group-hover:w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default WorkList;
