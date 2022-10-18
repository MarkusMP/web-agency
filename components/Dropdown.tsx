import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const Dropdown = ({ item, data, path }: any) => {
  const [openDropwdown, setOpenDropdown] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
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
  }, []);

  return (
    <li className="px-0 md:pl-6 relative mx-auto" ref={menuRef} key={item._id}>
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
            ? "relative md:absolute px-0 bg-black rounded md:px-4 py-0 md:py-2 w-64 md:mt-3 text-center md:text-left"
            : "relative md:absolute px-0 bg-black rounded md:px-4 py-0 md:py-2 hidden text-center md:text-left"
        }
      >
        {data &&
          data.map((item: any) => (
            <li className="py-2 md:py-1" key={item._id}>
              <Link href={!path ? item.page.slug : `/sv/${item.page.slug}`}>
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