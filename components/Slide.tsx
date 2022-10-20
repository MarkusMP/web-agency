import Image from "next/image";
import { urlFor } from "../lib/sanity";

const Slide = ({ image, title, link }: any) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Image
        src={urlFor(image && image).url()}
        alt={title}
        width={100}
        height={55}
        layout="responsive"
      />
    </a>
  );
};

export default Slide;
