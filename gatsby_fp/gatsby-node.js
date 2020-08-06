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
          pagePath: node.pf_username
        }
      });
    })
  );
};
