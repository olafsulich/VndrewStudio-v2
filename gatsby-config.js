require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Vndrew Studio',
    description: "It's photographer website",
    author: 'Olaf Sulich',
  },
  plugins: [
    'gatsby-plugin-layout',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Montserrat',
            variants: ['400', '600', '700', '800'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.API_DATO_CMS,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-transition-link',
  ],
};
