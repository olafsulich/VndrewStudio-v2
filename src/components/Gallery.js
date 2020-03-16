import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import SessionsList from './SessionsList';

const query = graphql`
  {
    allDatoCmsSession {
      nodes {
        id
        title
        slug
        subtitle
        description
        featuredImage {
          fluid {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`;

const Gallery = () => {
  const data = useStaticQuery(query);
  const sessionItems = [...data.allDatoCmsSession.nodes];
  return <SessionsList sessionItems={sessionItems} />;
};

export default Gallery;
