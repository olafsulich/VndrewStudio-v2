import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import Navigation from '../components/organisms/Navigation';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Footer from '../components/Footer';

const StyledContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 0 12rem 20%;
  flex-direction: column;
`;

const StyledImageWrapper = styled.figure`
  width: 100%;
  height: 90%;
  position: relative;

  img {
    width: 100% !important;
    height: auto !important;
  }
`;

const StyledFigcaption = styled.figcaption`
  font-size: 10rem;
  font-weight: 800;
  position: absolute;
  top: 85%;
  left: 4%;
  mix-blend-mode: difference;
  color: #fff;
`;

const StyledTextWrapper = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 2rem 1rem 2rem 0;
  margin-top: 3rem;
`;

const StyledHeading = styled.h2`
  font-size: 2.4rem;
  color: #292929;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const StyledText = styled.p`
  font-size: 2rem;
  color: #292929;
  opacity: 0.5;
  width: 40%;
  line-height: 4rem;
  font-weight: 400;
`;

const IndexPage = ({ data }) => {
  return (
    <>
      <StyledContainer>
        <Navigation />
        <StyledImageWrapper>
          <Image fluid={data.file.childImageSharp.fluid} />
          <StyledFigcaption>MROK</StyledFigcaption>
        </StyledImageWrapper>
        <StyledTextWrapper>
          <StyledHeading>
            <StyledHeading>Mrok jest w nas</StyledHeading>
            <StyledText>
              Największym zbrodniarzem we wszechświecie jest niestety człowiek
              Wiem, bo jestem nim, nie cofnę czasu, by wyleczyć zbrodnię Jestem
              swoim bogiem, ale także swoim katem
            </StyledText>
          </StyledHeading>
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
    file(name: { eq: "main" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;
