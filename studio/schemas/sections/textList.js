export default {
  name: "textList",
  type: "document",
  title: "Text List",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "listText",
      type: "array",
      title: "List",
      of: [{ type: "reference", to: { type: "textListItem" } }],
    },
  ],
};
