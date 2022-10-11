export default {
  name: "clients",
  title: "Clients",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "imageurl",
      title: "ImageURL",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "feedback",
      title: "Feedback",
      type: "string",
    },
  ],
};
