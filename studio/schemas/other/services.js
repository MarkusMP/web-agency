export default {
  name: "services",
  type: "document",
  title: "Services",
  i18n: true,

  fields: [
    {
      name: "image",
      type: "image",
      description: "Upload icon here",
      title: "Icon",
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
    {
      title: "Page",
      name: "page",
      description:
        "Choose a page for button should link to. Leave blank for redirect to home page",
      type: "reference",
      to: [{ type: "pages" }],
    },
  ],
};
