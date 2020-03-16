const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const sessionTemplate = path.resolve('src/layouts/SessionLayout.js');
  const result = await graphql(
    `
      query CMSPage {
        allDatoCmsSession {
          nodes {
            id
            slug
          }
        }
      }
    `
  );

  result.data.allDatoCmsSession.nodes.forEach(({ id, slug }) => {
    createPage({
      path: `sesje/${slug}`,
      component: sessionTemplate,
      context: {
        id,
      },
    });
  });
};
