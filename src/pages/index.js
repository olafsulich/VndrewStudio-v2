import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Footer from '../components/Footer';
import Main from '../components/Main';

const StyledLink = styled.a`
  scroll-behavior: smooth;
`;

const IndexPage = ({ data }) => {
  return (
    <>
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
