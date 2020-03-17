import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Footer from '../components/Footer';
import Main from '../components/Main';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Strona główna" />
      <Main data={data} />
      <Gallery />
      <About />
      <Footer />
    </>
  );
};
export const query = graphql`
  {
    datoCmsMain {
      title
      subtitle
      description
      image {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;
