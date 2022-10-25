export default {
  name: "textListThree",
  type: "document",
  title: "Text List Three",
  fields: [
    {
      name: "listTextThree",
      type: "array",
      title: "List",
      of: [{ type: "reference", to: { type: "textListItem" } }],
    },
  ],
};
