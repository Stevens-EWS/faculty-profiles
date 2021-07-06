require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `Faculty Profile | Stevens Institute of Technology`,
    description: `Displays faculty profiles using external data sources.`,
    author: `Stevens Institute of Technology`,
  },
  plugins: [
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: `https://${process.env.PEOPLEAPI_USER}:${process.env.PEOPLEAPI_PASS}@${process.env.PEOPLEAPI_HOST}`,
        rootKey: 'profiles',
        schemas: {
          profiles: `
            pf_username: String
            appointment: String
            bio: String
            building: String
            consult_service: String
            experience: String
            grant_contract: String
            honor_award: String
            innovate_enterpreneur: String
            patent_invention: String
            pf_email: String
            pf_work_fax: String
            pf_first_name: String
            pf_last_name: String
            pf_work_phone: [pf_work_phone]
            pf_title: String
            pf_username: String
            website: String
            research: String
            room: String
            photo_base64: String
            notable_courses: String
            school: String
            ses_department: String
            alt_publications: String
            notable_publications: String
            service_university: [service_university]
            service_professional: [service_professional]
            education: [education]
            member: [member]
            intellcont: [intellcont]
          `,
          service_university: `
            org: String
            member_type: String
          `,
          service_professional: `
            title: String
            org: String
          `,
          education: `
            dty_comp: String
            deg: String
            degother: String
            school: String
            state: String
            country: String
            major: String
          `,
          member: `
            org: String
            status: String
            orgabbr: String
          `,
          intellcont: `
            contype: String
            contypeother: String
            pagenum: String
            status: String
            title: String
            title_secondary: String
            journal_name: String
            volume: String
            publisher: String
            pubctyst: String
            issue: String
            dty_pub: String
            dty_acc: String
            dty_sub: String
            web_address: String
            intellcont_auth: [intellcont_auth]
          `,
          intellcont_auth: `
            mname: String
            fname: String
            lname: String
          `,
          pf_work_phone: `
            human_readable: String
            url: String
          `,
        }
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
