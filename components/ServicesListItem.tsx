import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IServiceListItem } from "../interfaces";
import { urlFor } from "../lib/sanity";

type Props = {
  data?: IServiceListItem;
};

const ServicesListItem = ({ data }: Props) => {
  const router = useRouter();

  return (
    <div className="text-light text-center serviceItem inline-block w-full max-w-[300px] p-4 flex-none mx-auto">
      <div>
        <div
          className="mx-auto"
          style={{
            height: "auto",
            maxHeight: 60,
            maxWidth: 60,
            width: "auto",
            position: "relative",
          }}
        >
          <Image
            src={urlFor(data?.image && data?.image).url()}
            alt={data?.image.alt}
            width="100%"
            height="100%"
            layout="responsive"
          />
        </div>
        <div className="py-2">
          <Link
            href={
              router.locale === "sv"
                ? `/sv/${data?.page.slug}`
                : `/${data?.page.slug}`
            }
          >
            <a className="text-xl text-white transition w-fit mx-auto uppercase duration-150 border-b-2 border-transparent hover:border-white">
              {data?.title && data?.title}
            </a>
          </Link>
        </div>
        <p>{data?.description && data?.description}</p>
      </div>
    </div>
  );
};

export default ServicesListItem;
