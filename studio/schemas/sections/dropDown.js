export default {
  name: "dropDown",
  type: "document",
  title: "DropDown",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "listDropDown",
      type: "array",
      title: "List",
      of: [{ type: "dropDownItem" }],
    },
  ],
};
