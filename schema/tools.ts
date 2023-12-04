export default {
  name: "tools",
  title: "Tools",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tools Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
  ],
};
