import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import useWindowDimensions from "../hooks/useWindowsDimensions";

const Dropdown = ({ item, data, path }: any) => {
  const [openDropwdown, setOpenDropdown] = useState(false);
  const menuRef = useRef(null);
  const { width }: any = useWindowDimensions();

  useEffect(() => {
    if (width < 1024) {
      setOpenDropdown(false);
    }

    const handler = (e: any) => {
      // @ts-ignore: Unreachable code error
      if (!menuRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [width]);
  let swap = (arr: any, i: any, j: any) =>
    data.map((e: any, k: any) => (k - i ? (k - j ? e : arr[i]) : arr[j]));
  return (
    <li className="px-0 lg:pl-6 relative mx-auto" ref={menuRef} key={item._id}>
      <button
        type="button"
        className="mx-auto uppercase transition duration-150 border-b-2 mt-[2] border-transparent hover:border-white blinker tracking-wider text-lg cursor-pointer flex items-center"
        onClick={() => setOpenDropdown((prevstate) => !prevstate)}
      >
        {item.title && item.title}
        <RiArrowDownSLine />
      </button>

      <ul
        className={
          openDropwdown
            ? "relative lg:absolute px-0 bg-black rounded lg:px-4 py-0 lg:py-2 w-64 lg:mt-3 text-center lg:text-left"
            : "relative lg:absolute px-0 bg-black rounded lg:px-4 py-0 lg:py-2 hidden text-center lg:text-left"
        }
      >
        {data &&
          swap(data, 0, 2).map((item: any) => (
            <li className="py-2 lg:py-1" key={item._id}>
              <Link
                href={!path ? `/${item.page.slug}` : `/sv/${item.page.slug}`}
              >
                <a className="transition uppercase duration-150 border-b-2 mt-[2] border-transparent hover:border-white blinker tracking-wider text-lg cursor-pointer">
                  {item.title && item.title}
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </li>
  );
};

export default Dropdown;
