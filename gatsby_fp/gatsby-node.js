global.fetch = require("node-fetch")
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
  getCache,
  createNodeId
}) => {
  try {
    if (node.internal.type === "profiles" && node.photo_url) {
      const urlObject = new URL(node.photo_url)
      let fileNode = await createRemoteFileNode({
        url: `https://${urlObject.username}:${urlObject.password}@${urlObject.host}${urlObject.pathname}${urlObject.search}`,
        parentNodeId: node.id,
        getCache, // Gatsby's cache
        createNode, // helper function in gatsby-node to generate the node
        createNodeId,
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
