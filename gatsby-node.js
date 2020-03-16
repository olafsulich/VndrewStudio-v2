const path = require('path');
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const sessionTemplate = path.resolve('src/layouts/SessionLayout.js');
  const result = await graphql(
    `
      query CMSPage {
        allDatoCmsSession {
          nodes {
            id
            title
          }
        }
      }
    `,
  );

  result.data.allDatoCmsSession.nodes.forEach(session => {
    const slugifiedTitle = slugify(session.title, {
      lower: true,
    });
    createPage({
      path: `sesje/${slugifiedTitle}`,
      component: sessionTemplate,
      context: {
        id: session.id,
      },
    });
  });
};
