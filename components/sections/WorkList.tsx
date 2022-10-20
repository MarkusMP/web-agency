import React from "react";
import { IWorkList } from "../../interfaces";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slide from "../Slide";
import Link from "next/link";
import { useRouter } from "next/router";

const WorkList = ({ title, listWork, btnText, page }: IWorkList) => {
  const router = useRouter();

  const customRenderItem = (item: any, props: any) => (
    <item.type {...item.props} {...props} />
  );

  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <div>
          <h2 className="text-3xl font-bold text-center">{title && title}</h2>
        </div>

        <div className="relative mt-8">
          <Carousel
            renderItem={customRenderItem}
            showThumbs={false}
            infiniteLoop={true}
            interval={3000}
            autoPlay
            showStatus={false}
          >
            {listWork &&
              listWork.map((item) => (
                <Slide
                  image={item.image}
                  title={item.image.alt}
                  key={item._id}
                  link={item.link}
                />
              ))}
          </Carousel>
        </div>
        <div className="max-w-fit mx-auto flex flex-col group pt-8">
          <Link
            href={
              router.pathname.startsWith("/sv")
                ? `/sv/${page.slug}`
                : `/${page.slug}`
            }
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
