export default {
  name: "cta",
  type: "document",
  title: "Call to Action (CTA)",
  fields: [
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
