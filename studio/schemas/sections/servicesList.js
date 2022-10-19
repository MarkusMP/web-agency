export default {
  name: "servicesList",
  type: "document",
  title: "Services List",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "listService",
      type: "array",
      title: "List",
      of: [{ type: "reference", to: { type: "services" } }],
    },
  ],
};
