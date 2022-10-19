export default {
  name: "feature",
  type: "document",
  title: "Feature Section",
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
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "btnText",
      type: "string",
      title: "Button Text",
    },
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
