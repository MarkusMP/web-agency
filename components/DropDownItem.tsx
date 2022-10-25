import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const DropDownItem = ({ title, description }: any) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="py-4">
      <div
        className="flex items-center justify-between cursor-pointer border-t-2 border-grey pt-4"
        onClick={() => setOpen((prevOpen) => !prevOpen)}
      >
        <h3 className="font-semibold text-white text-xl">{title && title}</h3>
        {open ? (
          <button>
            <AiOutlineMinus
              className="text-2xl text-white"
              aria-label={
                router.pathname.startsWith("/sv")
                  ? `Öppna för mer information om ${
                      title && title.toLowerCase()
                    }`
                  : `Open for more infortmation about  ${
                      title && title.toLowerCase()
                    }`
              }
            />
          </button>
        ) : (
          <button>
            <AiOutlinePlus
              className="text-2xl text-white"
              aria-label={
                router.pathname.startsWith("/sv")
                  ? `Öppna för mer information om ${
                      title && title.toLowerCase()
                    }`
                  : `Open for more infortmation about  ${
                      title && title.toLowerCase()
                    }`
              }
            />
          </button>
        )}
      </div>
      <div
        className={open ? "block pt-4 max-w-screen-sm text-white" : "hidden"}
      >
        <p>{description && description}</p>
      </div>
    </div>
  );
};

export default DropDownItem;
