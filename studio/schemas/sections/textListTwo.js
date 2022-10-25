export default {
  name: "textListTwo",
  type: "document",
  title: "Text List Two",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "listTextTwo",
      type: "array",
      title: "List",
      of: [{ type: "reference", to: { type: "textListItemTwo" } }],
    },
  ],
};
