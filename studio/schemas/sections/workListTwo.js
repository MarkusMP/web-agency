export default {
  name: "workListTwo",
  type: "document",
  title: "Work List Two",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "listWorkTwo",
      type: "array",
      title: "List",
      of: [{ type: "reference", to: { type: "work" } }],
    },
  ],
};
