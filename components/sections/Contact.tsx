import { useRouter } from "next/router";
import React, { useState } from "react";
import { IContact } from "../../interfaces";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    fetch("https://webbtopia.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then(() => {
        toast.success(
          router.locale === "sv"
            ? `E-postmeddelandet har skickats!`
            : `Email sent successfully`
        );
      })
      .catch(() => {
        toast.error(
          router.locale === "sv"
            ? `Det gick inte att skicka e-post.`
            : `Error sending email`
        );
      });
  };

  return (
    <section className="pt-[80px] bg-black min-h-screen h-full flex items-center justify-center">
      <div className="mx-auto px-6 py-12 container">
        <div>
          <div className="pb-8">
            <h1 className="text-3xl text-center text-white pb-4">
              {title && title}
            </h1>
            <p className="text-lg text-center text-white">
              {description && description}
            </p>
          </div>
          <form className="max-w-3xl mx-auto" onSubmit={handleSubmit}>
            <div className="flex pb-4">
              <input
                className="w-full placeholder-white bg-black mr-4 border-b-2 border-white text-white mt-2 p-3 focus:outline-none focus:shadow-outline"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="namne"
                placeholder={
                  router.pathname.startsWith("/sv") ? `Namn *` : `Name *`
                }
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
              placeholder={
                router.pathname.startsWith("/sv") ? `Meddelande *` : `Message *`
              }
              required
            ></textarea>
            <button
              type="submit"
              className="text-md mt-4 mx-auto tracking-wide text-white focus:outline-none focus:shadow-outline transition duration-150 border-b-2 mt-[2] border-transparent hover:border-white"
            >
              {btnText && btnText}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
