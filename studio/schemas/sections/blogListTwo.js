export default {
  name: "blogListTwo",
  type: "document",
  title: "Blog List Two",
  fields: [
    {
      name: "title",
      type: "string",
      title: "title",
    },
    {
      name: "listBlog",
      type: "array",
      title: "List",
      of: [{ type: "reference", to: { type: "blog" } }],
    },
  ],
};
