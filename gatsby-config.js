/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Todo App`,
    description: `To Do App with ReactJS`,
    siteUrl: `https://cs-todo-app.netlify.app/`,
    image: `/screenshot.jpg`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
  ],
};
