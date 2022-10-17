export default {
  name: "links",
  type: "document",
  title: "Links",
  i18n: true,

  fields: [
    {
      title: "Title",
      type: "string",
      name: "title",
    },
    {
      title: "Page",
      name: "page",
      description:
        "Choose a page to link. Leave blank for redirect to home page",
      type: "reference",
      to: [{ type: "pages" }],
    },
    {
      title: "Parent Menu (Optional)",
      name: "parent",
      type: "reference",
      description: "Choose if this link should be in navigation dropdown",
      to: [{ type: "links" }],
    },
  ],
};
