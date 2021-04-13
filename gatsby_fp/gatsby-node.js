require("dotenv").config()
const path = require("path")
const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type MarkdownRemark implements Node {
      facultyImg: File @link(from: "facultyImg___NODE")
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

  if (node.internal.type === "profiles" && node.photo_url) {
    let fileNode = await createRemoteFileNode({
      url: node.photo_url,
      parentNodeId: node.id,
      createNode, // helper function in gatsby-node to generate the node
      createNodeId,
      cache, // Gatsby's cache
      store, // Gatsby's Redux store
      auth: {htaccess_user: process.env.PEOPLEAPI_USER, htaccess_pass: process.env.PEOPLEAPI_PASS}
    })

    if (fileNode) {
      node.facultyImg___NODE = fileNode.id
    }
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
