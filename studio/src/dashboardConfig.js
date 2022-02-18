export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "620eec9cda9fa087e10aedc2",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-thm-studio",
                  apiId: "0e5656f4-51b8-4f67-a7b5-e4d44e44d9f0",
                },
                {
                  buildHookId: "620eec9ca7c764835eabe127",
                  title: "Blog Website",
                  name: "sanity-gatsby-thm",
                  apiId: "e33e511e-0147-4300-bc50-8627626f7079",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/kingluddite/sanity-gatsby-thm",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-thm.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
