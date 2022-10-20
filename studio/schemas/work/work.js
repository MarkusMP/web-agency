import { MdWorkOutline } from "react-icons/md";

export default {
  name: "work",
  type: "document",
  title: "Work",
  icon: MdWorkOutline,
  i18n: true,

  fields: [
    {
      title: "Image",
      description: "Upload image here.",
      name: "image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    { type: "string", name: "title", title: "Title" },
    { type: "string", name: "description", title: "Description" },
    { type: "string", name: "btnText", title: "Button Text" },
    { type: "string", name: "link", title: "Link to projct" },
  ],
};
