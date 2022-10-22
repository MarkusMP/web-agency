import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IBlogListTwo } from "../../interfaces";
import { urlFor } from "../../lib/sanity";
import { FiArrowRight } from "react-icons/fi";
import "moment/locale/sv";
import Moment from "react-moment";
import { useRouter } from "next/router";

const BlogListTwo = ({ title, listBlog }: IBlogListTwo) => {
  const router = useRouter();

  return (
    <section className="bg-black pt-[80px] min-h-screen">
      <div className="px-6 container mx-auto py-12">
        <div>
          <h1 className="text-white text-3xl text-center">{title && title}</h1>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 pt-8">
          {listBlog &&
            listBlog.map((item) => (
              <article
                className="bg-white shadow-md h-full relative"
                key={item._id}
              >
                <div>
                  <Link href={`/${item.slug.current}`}>
                    <div className="relative w-full h-full imageContainer cursor-pointer">
                      <Image
                        className="image"
                        loader={() =>
                          urlFor(item.mainImage && item.mainImage).url()
                        }
                        src={urlFor(item.mainImage && item.mainImage).url()}
                        alt={item.title}
                        unoptimized={true}
                        width="100%"
                        height="0"
                        objectFit="contain"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex justify-between items-center text-p">
                      <span className="text-sm">
                        <Moment locale="sv" fromNow>
                          {item.publishedAt}
                        </Moment>
                      </span>
                    </div>
                    <Link href={`/${item.slug.current}`}>
                      <h2 className="mb-2 text-2xl font-bold tracking-tight text-dark cursor-pointer">
                        <a href="#">{item.title && item.title}</a>
                      </h2>
                    </Link>
                    <p className="mb-5 text-dark">
                      {item.description && item.description}
                    </p>
                    <div className="flex justify-between items-center absolute bottom-3">
                      <Link href={`/${item.slug.current}`}>
                        <a className="inline-flex items-center font-medium text-black hover:underline">
                          {router.pathname.startsWith("/sv")
                            ? `Läs mer `
                            : `Read more `}
                          <FiArrowRight />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BlogListTwo;
