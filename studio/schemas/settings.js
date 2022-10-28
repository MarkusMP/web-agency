export default {
  name: "settings",
  type: "document",
  title: "Global Settings",
  fields: [
    {
      title: "Title for internal reference",
      description:
        "This won't show up for users, just make sure you add a descriptive name which will make it easy to find this page later when adding link or searching & browsing the CMS.",
      name: "title",
      type: "string",
    },
    {
      title: "URL",
      name: "url",
      type: "url",
      description: "The main site url. Used to create canonical url",
    },
  ],
};
