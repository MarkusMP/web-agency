import { RiLayoutTop2Line } from "react-icons/ri";

export default {
  name: "header",
  type: "document",
  title: "Header Navigation",
  i18n: true,
  icon: RiLayoutTop2Line,
  fields: [
    {
      title: "Title for internal reference",
      description:
        "This won't show up for users, just make sure you add a descriptive name which will make it easy to find this page later when adding link or searching & browsing the CMS.",
      type: "string",
      name: "title",
    },
    {
      title: "Logo",
      name: "logo",
      type: "string",
    },
    {
      name: "menu",
      type: "array",
      title: "Menu Links List",
      of: [{ type: "reference", to: { type: "links" } }],
    },
  ],
};
