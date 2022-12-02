import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IFooter } from "../interfaces";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

type Props = {
  data?: IFooter;
};

const Footer = ({ data }: Props) => {
  const router = useRouter();

  return (
    <footer className="bg-black">
      <div className="xl:container mx-auto pt-6 text-white w-full px-6 md:flex md:justify-between">
        <div className="flex flex-col">
          <Link href={router.locale === "sv" ? "/sv" : "/"}>
            <span className="text-white blinker uppercase font-semibold text-3xl tracking-wider cursor-pointer">
              {data?.logo && data.logo}
            </span>
          </Link>
          {data?.email && (
            <p className="pt-2 text-grey">
              <strong>Email: </strong>
              <a href={`mailto:${data.email}`}>{data.email}</a>
            </p>
          )}
          <div className="mt-auto flex py-4">
            {data?.social &&
              data.social.map((item: any) => (
                <a
                  key={item._key}
                  href={`${item?.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={
                    (item?.media === "facebook" && "facebook") ||
                    (item?.media === "instagram" && "instagram") ||
                    (item?.media === "twitter" && "twitter") ||
                    (item?.media === "linkedin" && "linkedin") ||
                    ((item?.media === "youtube" && "youtube") as string)
                  }
                  className="text-grey hover:text-white transition text-2xl pr-4 transition"
                >
                  {item?.media === "facebook" && <FaFacebook />}
                  {item?.media === "instagram" && <FaInstagram />}
                  {item?.media === "twitter" && <FaTwitter />}
                  {item?.media === "linkedin" && <FaLinkedin />}
                  {item?.media === "youtube" && <FaYoutube />}
                </a>
              ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:gap-8">
          <div>
            <h3 className="mb-2 text-white blinker uppercase font-semibold text-lg tracking-wider border-b-2 mt-[2] border-white">
              {data?.links && data.links}
            </h3>
            <ul>
              {data?.linksList &&
                data.linksList.map((item: any) => (
                  <li className="mb-2" key={item._id}>
                    <Link
                      href={
                        item.page && item.page.slug ? `/${item.page.slug}` : "/"
                      }
                    >
                      <a className="transition uppercase duration-150 border-b-2 mt-[2] border-transparent hover:border-white blinker tracking-wider cursor-pointer">
                        {item?.title && item.title}
                      </a>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-white blinker uppercase font-semibold text-lg tracking-wider border-b-2 mt-[2] border-white">
              {data?.services && data.services}
            </h3>
            <ul>
              {data?.menu &&
                data.menu.map((item: any) => (
                  <li className="mb-2" key={item._id}>
                    <Link
                      href={
                        item.page && item.page.slug ? `/${item.page.slug}` : "/"
                      }
                    >
                      <a className="transition uppercase duration-150 border-b-2 mt-[2] border-transparent hover:border-white blinker tracking-wider cursor-pointer break-words w-full inline-block">
                        {item?.title && item.title}
                      </a>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-white py-4 xl:container mx-auto px-6">
        {/* <p>{data?.copyright && `2022 Copyright © ${data.copyright}.`}</p> */}
      </div>
    </footer>
  );
};

export default Footer;
