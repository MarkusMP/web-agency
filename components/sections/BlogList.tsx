import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IBlogList } from "../../interfaces";

const BlogList = ({
  btnText,
  listBlog,
  listLinkTitle,
  page,
  title,
}: IBlogList) => {
  const router = useRouter();

  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center uppercase text-white">
          {title && title}
        </h2>
        <div className="flex flex-col pt-8 justify-center w-full">
          {listBlog &&
            listBlog.map((item) => (
              <div
                key={item._id}
                className="border-[1px] border-white px-3 pb-2 pt-1 max-w-xl w-full mx-auto"
              >
                <Link
                  href={
                    router.pathname.startsWith("/sv")
                      ? `/${item.slug.current}`
                      : `/${item.slug.current}`
                  }
                >
                  <h3 className="text-lg text-white mt-2 mb-4 cursor-pointer max-w-fit">
                    {item.title}
                  </h3>
                </Link>

                <Link
                  href={
                    router.pathname.startsWith("/sv")
                      ? `/${item.slug.current}`
                      : `/${item.slug.current}`
                  }
                >
                  <a className="transition text-grey duration-150 border-b-2 mt-[2] border-transparent hover:border-white cursor-pointer4">
                    {listLinkTitle && listLinkTitle}
                  </a>
                </Link>
              </div>
            ))}
        </div>
        <div className="max-w-fit mx-auto flex flex-col group pt-8">
          <Link
            href={
              router.pathname.startsWith("/sv")
                ? `/sv/${page.slug}`
                : `/${page.slug}`
            }
          >
            <a className="uppercase blinker text-white font-semibold tracking-wide font-semibold  text-lg">
              {btnText && btnText}
            </a>
          </Link>
          <div className="transition-all h-[2px] w-[35px] bg-white mx-auto group-hover:w-full"></div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
