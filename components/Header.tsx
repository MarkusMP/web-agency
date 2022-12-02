import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { IHeader } from "../interfaces";
import Dropdown from "./Dropdown";

type Props = {
  data?: IHeader;
};

const Header = ({ data }: Props) => {
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const btnRef = useRef();
  const menuRef = useRef(null);
  const router = useRouter();

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    if (router.locale === "en" ? false : true) {
      setPath(true);
    } else {
      setPath(false);
    }
    const handler = (e: any) => {
      // @ts-ignore: Unreachable code error
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }

    document.addEventListener("mousedown", handler);
    window.addEventListener("scroll", changeBackground);
    return () => {
      document.removeEventListener("mousedown", handler);
      window.removeEventListener("scroll", changeBackground);
    };
  }, [router, open]);

  return (
    <header>
      <nav
        className={
          navbar
            ? "bg-black flex items-center fixed w-full z-[3]"
            : "bg-transparent flex items-center fixed w-full z-[3]"
        }
        style={{ height: "80px" }}
        ref={menuRef}
      >
        <div className="xl:mx-auto xl:container w-full px-6 lg:flex lg:items-center lg:justify-between bg-transparent z-[3]">
          <div className="flex justify-between items-center z-[3]">
            <Link href={router.locale === "sv" ? "/sv" : "/"} replace>
              <a className="text-white blinker uppercase font-semibold text-2xl xs:text-3xl tracking-wider cursor-pointer z-[3]">
                {data?.logo && data.logo}
              </a>
            </Link>

            <button
              ref={btnRef as any}
              className={
                open
                  ? "open text-black z-[3] cursor-pointer text-xl leading-none hamburger flex items-center px-3 py-1 lg:hidden outline-none focus:outline-none"
                  : "text-black cursor-pointer z-[3] text-xl leading-none hamburger flex items-center px-3 py-1 lg:hidden outline-none focus:outline-none"
              }
              type="button"
              onClick={() => setOpen((prevState) => !prevState)}
              aria-label="Hamburger menu"
            >
              <span className="hamburger-top bg-white"></span>
              <span className="hamburger-middle bg-white"></span>
              <span className="hamburger-bottom bg-white"></span>
            </button>
          </div>
          <div
            className={
              open
                ? `absolute lg:relative top-[80px] z-[-1] lg:z-[3] lg:top-[0px] ${
                    navbar ? "bg-secondary " : "bg-transparent"
                  } w-full left-0 py-2 lg:py-0 transition-all lg:transition-none`
                : "absolute lg:relative top-[-400px] z-[-1] lg:z-[3] lg:top-[0px] bg-transparent w-full left-0 py-2 lg:py-0"
            }
          >
            <div className="text-white text-center flex xl:container mx-auto px-5 lg:px-0 flex-col lg:flex-row w-full">
              <ul className="flex flex-col lg:flex-row lg:ml-auto">
                {data?.menu &&
                  data?.menu.map((item) =>
                    item.page && item.page.slug === "#" ? (
                      <Dropdown
                        path={path}
                        data={data.children}
                        item={item}
                        key={item._id}
                      />
                    ) : (
                      <li className="px-0 lg:pl-6 py-2 lg:py-0" key={item._id}>
                        <Link
                          href={
                            item.page && item.page.slug
                              ? !path
                                ? `/${item.page.slug}`
                                : `/sv/${item.page.slug}`
                              : router.locale === "sv"
                              ? "/sv"
                              : "/"
                          }
                          replace
                        >
                          <a className="transition uppercase duration-150 border-b-2 mt-[2] border-transparent hover:border-white blinker tracking-wider text-lg cursor-pointer">
                            {item.title && item.title}
                          </a>
                        </Link>
                      </li>
                    )
                  )}
              </ul>
              <ul className="lg:ml-auto">
                {path ? (
                  <li className="px-0 lg:pl-6 py-2 lg:py-0">
                    <Link replace href={"/"} locale="en">
                      <a
                        className="blinker tracking-wider text-lg cursor-pointer"
                        aria-label={`Change language of the website to English`}
                      >
                        ENG
                      </a>
                    </Link>
                  </li>
                ) : (
                  <li className="px-0 lg:pl-6 py-2 lg:py-0">
                    <Link replace href={"/sv"} locale="sv">
                      <a
                        className="blinker tracking-wider text-lg cursor-pointer"
                        aria-label={`Change language of the website to Swedish`}
                      >
                        SV
                      </a>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
