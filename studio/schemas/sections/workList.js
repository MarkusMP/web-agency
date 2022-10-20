export default {
  name: "workList",
  type: "document",
  title: "Work List",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "listWork",
      type: "array",
      title: "List",
      of: [{ type: "reference", to: { type: "work" } }],
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
  ],
};
