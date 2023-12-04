export default {
  name: "Portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    {
      title: "Portfolio Title",
      name: "portfolioTitle",
      type: "string",
    },
    {
      title: "Portfolio Description",
      name: "portfolioDescription",
      type: "text",
    },
    {
      title: "Portfolio URL",
      name: "portfolioURL",
      type: "url",
    },
    {
      title: "Portfolio Feature Image",
      name: "portfolioFeatureImage",
      type: "image",
    },
    {
      name: "tools",
      title: "Tools",
      type: "reference",
      to: { type: "tools" },
    },
  ],
};
