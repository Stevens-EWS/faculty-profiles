require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `Faculty Profile | Stevens Institute of Technology`,
    description: `Displays faculty profiles using external data sources.`,
    author: `Stevens Institute of Technology`,
  },
  plugins: [
    {
      resolve: "gatsby-source-multi-api-FORKED",
      options: {
        apis: [
          `https://${process.env.PEOPLEAPI_USER}:${process.env.PEOPLEAPI_PASS}@${process.env.PEOPLEAPI_HOST}`,
        ],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: [
            "Chaparral W01_n3",
            "Chaparral W01",
            "Chaparral W01_i3",
            "Chaparral W01",
            "Chaparral W01_n4",
            "Chaparral W01",
            "Chaparral W01_i4",
            "Chaparral W01",
            "Trade Gothic W01_n3",
            "Trade Gothic W01",
            "Trade Gothic W01_i3",
            "Trade Gothic W01",
            "Trade Gothic W01_n7",
            "Trade Gothic W01",
            "Trade Gothic W01_n8",
            "Trade Gothic W01",
            "Trade Gothic W01_i8",
            "Trade Gothic W01",
          ],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicons/favicon-194x194.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
