import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slide from "./Slide";

interface IProps {
  listWork: any;
}

const CarouselWork = ({ listWork }: IProps) => {
  const customRenderItem = (item: any, props: any) => (
    <item.type {...item.props} {...props} />
  );

  return (
    <Carousel
      renderItem={customRenderItem}
      showThumbs={false}
      infiniteLoop={true}
      interval={3000}
      autoPlay
      showStatus={false}
    >
      {listWork &&
        listWork.map((item: any) => (
          <Slide
            image={item.image}
            title={item.image.alt}
            key={item._id}
            link={item.link}
          />
        ))}
    </Carousel>
  );
};

export default CarouselWork;
