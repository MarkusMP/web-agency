import React from "react";
// Special component that renders the src for a given `_type: "image"` object
import { Image } from "sanity-plugin-asset-source-ogimage";
import style from "./BlogPostTwitterLayout.module.css";

export const blogPostTwitterLayout = {
  name: "blogPostTwitter",
  title: "Page poster (Twitter, Facebook, LinkedIn)",
  // Start defining the form editors will fill to change the final image
  fields: [
    {
      name: "logo",
      type: "string",
    },
    {
      name: "title",
      type: "string",
    },
  ],
  prepare: (document) => {
    return {
      title: document.title,
      logo: document.logo,
    };
  },
  dimensions: {
    width: 1200,
    height: 630,
  },
  component: ({ title, logo }) => (
    <div className={style.root}>
      <div className={style.bg}>
        <div className={style.nav}>
          <h1 style={{ color: "#fff" }}>{logo}</h1>
        </div>
        <div className={style.body}>
          <h1>{title || "Please insert a title"}</h1>
        </div>
      </div>
    </div>
  ),
};
