import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import Navigation from '../components/Navigation';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Footer from '../components/Footer';
import Text from '../components/Text';
import Heading from '../components/Heading';

const StyledContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 5rem 0 3rem 0;
  flex-direction: column;
`;

const StyledImageWrapper = styled.figure`
  width: 100%;
  height: 90%;
  position: relative;

  @media only screen and (min-width: 700px) {
    width: 90%;
  }
  @media only screen and (min-width: 1400px) {
    width: 85%;
  }

  img {
    width: 100% !important;
    height: auto !important;
  }
`;

const StyledFigcaption = styled.figcaption`
  font-size: 3rem;
  font-weight: 800;
  position: absolute;
  top: 90%;
  left: 2%;
  color: #f2f2f2;
  text-transform: uppercase;

  @media only screen and (min-width: 900px) {
    font-size: 3.7rem;
  }

  @media only screen and (min-width: 1100px) {
    font-size: 5rem;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 6.5rem;
  }
`;

const StyledTextWrapper = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  margin-top: 3rem;
  @media only screen and (min-width: 700px) {
    width: 85%;
    align-items: flex-start;
    padding: 2rem 0;
    margin-top: 1rem;
  }
  @media only screen and (min-width: 900px) {
    align-items: flex-start;
  }
  @media only screen and (min-width: 1100px) {
    padding: 4rem 0;
  }
  @media only screen and (min-width: 1400px) {
    width: 85%;
  }
`;

const IndexPage = ({
  data: {
    datoCmsMain: {
      image: { fluid },
      title,
      subtitle,
      description,
    },
  },
}) => {
  return (
    <>
      <StyledContainer id="home">
        <Navigation />
        <StyledImageWrapper>
          <Image fluid={fluid} />
          <StyledFigcaption>{title}</StyledFigcaption>
        </StyledImageWrapper>
        <StyledTextWrapper>
          <Heading main>{subtitle}</Heading>
          <Text main>{description}</Text>
        </StyledTextWrapper>
      </StyledContainer>
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
