export default {
  name: "blogList",
  type: "document",
  title: "Blog List",
  fields: [
    {
      name: "title",
      type: "string",
      title: "title",
    },
    { name: "btnText", type: "string", title: "Button Text" },
    {
      title: "Page",
      name: "page",
      description:
        "Choose a page for button should link to. Leave blank for redirect to home page",
      type: "reference",
      to: [{ type: "pages" }],
    },
    {
      name: "listBlog",
      type: "array",
      title: "List",
      of: [{ type: "reference", to: { type: "blog" } }],
    },
    {
      name: "listLinkTitle",
      type: "string",
      title: "Link title for each blog post example (Read more)",
    },
  ],
};
