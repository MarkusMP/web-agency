import { RiLayoutBottom2Line } from "react-icons/ri";

export default {
  name: "footer",
  type: "document",
  title: "Footer",
  i18n: true,
  icon: RiLayoutBottom2Line,
  fields: [
    {
      title: "Title for internal reference",
      description:
        "This won't show up for users, just make sure you add a descriptive name which will make it easy to find this page later when adding link or searching & browsing the CMS.",
      type: "string",
      name: "title",
    },
    {
      title: "Text after © symbol",
      description: "Keep empty if you don't want copyright text to show up",
      type: "string",
      name: "copyright",
    },
    {
      title: "Logo",
      name: "logo",
      type: "string",
    },
    {
      title: "Links",
      name: "links",
      type: "string",
    },
    {
      name: "linksList",
      type: "array",
      title: "Links List",
      of: [{ type: "reference", to: { type: "links" } }],
    },
    {
      title: "Services",
      name: "services",
      type: "string",
    },
    {
      name: "menu",
      type: "array",
      title: "Services List",
      of: [{ type: "reference", to: { type: "links" } }],
    },
    {
      title: "Email",
      name: "email",
      type: "string",
    },
    {
      name: "social",
      type: "array",
      title: "Social Links",
      description: "Enter your Social Media URLs",
      validation: (Rule) => Rule.unique(),
      of: [
        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "media",
              title: "Choose Social Media",
              options: {
                list: [
                  { title: "Twitter", value: "twitter" },
                  { title: "Facebook", value: "facebook" },
                  { title: "Instagram", value: "instagram" },
                  { title: "Linkedin", value: "linkedin" },
                  { title: "Youtube", value: "youtube" },
                ],
              },
            },
            {
              type: "url",
              name: "url",
              title: "Full Profile URL",
            },
          ],
          preview: {
            select: {
              title: "media",
              subtitle: "url",
            },
          },
        },
      ],
    },
  ],
};
