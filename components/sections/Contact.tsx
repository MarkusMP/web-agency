import { useRouter } from "next/router";
import React, { useState } from "react";
import { IContact } from "../../interfaces";

const Contact = ({
  title,
  description,
  email: emailRecieve,
  btnText,
}: IContact) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  return (
    <section className="pt-[80px] bg-black min-h-screen h-full flex items-center justify-center">
      <div className="mx-auto px-6 py-12 container">
        <div>
          <div className="pb-8">
            <h1 className="text-3xl text-center text-white pb-2">
              {title && title}
            </h1>
            <p className="text-lg text-center text-white">
              {description && description}
            </p>
          </div>
          <form className="max-w-3xl mx-auto">
            <div className="flex pb-4">
              <input
                className="w-full placeholder-white bg-black mr-4 border-b-2 border-white text-white mt-2 p-3 focus:outline-none focus:shadow-outline"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="namne"
                placeholder="Namn *"
                required
              />
              <input
                className="w-full placeholder-white bg-black ml-4 border-b-2 border-white text-white mt-2 p-3 focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="Email *"
                required
              />
            </div>
            <textarea
              className="w-full placeholder-white bg-black border-b-2 border-white text-white mt-2 p-3 focus:outline-none focus:shadow-outline"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Meddelande *"
              required
            ></textarea>
            <button className="text-md mt-4 mx-auto tracking-wide text-white focus:outline-none focus:shadow-outline transition duration-150 border-b-2 mt-[2] border-transparent hover:border-white">
              {btnText && btnText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
