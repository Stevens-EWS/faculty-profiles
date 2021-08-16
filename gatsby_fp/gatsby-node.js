const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
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
  if (result.errors) {
    reporter.panic("error loading events", result.errors)
    return
  }
  return Promise.all(
    result.data.allProfiles.nodes.map(async node => {
      await createPage({
        path: node.pf_username,
        component: path.resolve("./src/components/Layout.js"),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          pagePath: node.pf_username,
        }
      });
    })
  );
};
