const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  // Query for markdown nodes to use when creating pages during build
  const { createPage } = actions
  const result = await graphql(`
        {
            allProfiles {
                nodes {
                    pf_username
                }
            }
        }
    `)
  return Promise.all(
    result.data.allProfiles.nodes.map(async node => {
      await createPage({
        path: "/" + node.pf_username,
        component: path.resolve("src/components/Layout.js"),
        context: {
          pagePath: node.pf_username
        }
      })
    })
  )
}
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type service_university implements Node @infer{
      org: String
      member_type: String
    }
    type service_professional implements Node @infer{
      title: String
      org: String
    }
    type education implements Node @infer{
      dty_comp: String
      deg: String
      degother: String
      school: String
      state: String
      country: String
      major: String
    }
    type member implements Node @infer{
      org: String
      status: String
      orgabbr: String
    }
    type intellcont_auth implements Node @infer{
      mname: String
      fname: String
      lname: String
    }
    type intellcont implements Node @infer{
      contype: String
      contypeother: String
      pagenum: String
      status: String
      title: String
      title_secondary: String
      volume: String
      publisher: String
      pubctyst: String
      issue: String
      dty_pub: String
      dty_acc: String
      dty_sub: String
      web_address: String
      intellcont_auth: [intellcont_auth]
    }
    type pf_work_phone implements Node @infer{
      human_readable: String
      url: String
    }
    type profiles implements Node @infer{
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
      pf_work_phone: [pf_work_phone] @link
      pf_title: String
      pf_username: String
      website: String
      research: String
      room: String
      photo_base64: String
      notable_courses: String
      school: String
      ses_department: String
      service_university: [service_university] @link
      service_professional: [service_professional] @link
      education: [education] @link
      member: [member] @link
      intellcont: [intellcont] @link
    }
  `
  createTypes(typeDefs)
}
