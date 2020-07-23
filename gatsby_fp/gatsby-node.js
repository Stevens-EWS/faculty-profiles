const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
        {
            allProfiles {
                nodes {
                    pf_username
                }
            }
        }
    `);
  return Promise.all(
    result.data.allProfiles.nodes.map(async node => {
      await createPage({
        path: "/" + node.pf_username,
        component: path.resolve("src/components/Layout.js"),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          pagePath: node.pf_username
        }
      });
    })
  );
};
// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions
//   const profileTemplate = path.resolve("src/components/Layout.js")

//   return graphql(`
//   {
//     allMultiApiSourcePeopleFaculty {
//           edges {
//               node {
//                   pf_username
//               }
//             }
//         }
//   }
// `).then(res => {
//     console.log(res)
//     if (res.errors) {
//       return Promise.reject(res.errors)
//     }
//     res.data.allMultiApiSourcePeopleFaculty.edges.forEach(({ node }) => {
//       var path = "/" + node.pf_username
//       createPage({
//         path,
//         component: profileTemplate,
//         context: {
//           pagePath: node.pf_username
//         }
//       })
//     })
//   })
// }
