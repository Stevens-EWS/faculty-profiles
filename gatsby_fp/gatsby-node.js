global.fetch = require("node-fetch")
const path = require("path")
const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type MarkdownRemark implements Node {
      facultyImg: File @link(from: "facultyImg___NODE")
    }
    type service_university implements Node @infer {
      org: String
      member_type: String
    }
    type service_professional implements Node @infer { 
      title: String
      org: String
    }
    type education implements Node @infer {
      dty_comp: String
      deg: String
      degother: String
      school: String
      state: String
      country: String
      major: String
    }
    type member implements Node @infer {
      org: String
      status: String
      orgabbr: String
    }
    type intellcont implements Node @infer {
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
      intellcont_auth: [intellcont_auth] @link(by: "id", from: "intellcont_auth___NODE")
    }
    type intellcont_auth implements Node @infer {
      mname: String
      fname: String
      lname: String
    }
    type pf_work_phone implements Node @infer {
      human_readable: String
      url: String
    }
    type profiles implements Node @infer {
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
      pf_work_phone: [pf_work_phone] @link(by: "id", from: "pf_work_phone___NODE")
      pf_title: String
      pf_username: String
      website: String
      research: String
      room: String
      photo_base64: String
      notable_courses: String
      school: String
      ses_department: String
      service_university: [service_university] @link(by: "id", from: "service_university___NODE")
      service_professional: [service_professional] @link(by: "id", from: "professional___NODE")
      education: [education] @link(by: "id", from: "education___NODE")
      member: [member] @link(by: "id", from: "member___NODE")
      intellcont: [intellcont] @link(by: "id", from: "intellcont___NODE")
    }
  `)
}

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  store,
  cache, 
  createNodeId
}) => {
  try {
    if (node.internal.type === "profiles" && node.photo_url) {
      let fileNode = await createRemoteFileNode({
        url: node.photo_url,
        parentNodeId: node.id,
        createNode, // helper function in gatsby-node to generate the node
        createNodeId,
        cache, // Gatsby's cache
        store, // Gatsby's Redux store
      })

      if (fileNode) {
        node.facultyImg___NODE = fileNode.id
      }
    }
  } catch (err) {
      // separate request made to retrieve status code
      // err returns a string value with no ability to
      // get the status code without searching for it within the string
      (async function getStatusCodeUsingFetch() {
        const response = await fetch(node.photo_url) 
        if(response.status != 404 ){
          throw new Error(`Invalid Status Code [${response.status}] for photo_url of user ${node.pf_username}`)
        }
      })()
  }
  
}

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
