import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled, { css } from 'styled-components';
import Image from 'gatsby-image';
import Arrow from '../assets/arrow.svg';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledTextWrapper = styled.article`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 2rem;
  order: 3;
`;

const StyledImageWrapper = styled.figure`
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 470px;
  position: relative;
  order: 2;

  img {
    width: 100%;
    height: 100%;
  }
`;

const StyledFigcaption = styled.figcaption`
  font-size: 3rem;
  font-weight: 800;
  position: absolute;
  top: 92%;
  right: 5%;
  color: #f2f2f2;
  text-transform: uppercase;
`;

const StyledContainer = styled.section`
  width: 100%;
  height:100%;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
/* 
  ${StyledWrapper}:nth-of-type(1) > ${StyledTextWrapper} {
    margin: 0 auto 8rem auto;
  }

  ${StyledWrapper}:nth-of-type(2) > ${StyledImageWrapper} {
    order: 2;
  }

  ${StyledWrapper}:nth-of-type(2) > ${StyledTextWrapper} {
    order: 1;
  }

  // prettier-ignore
  ${StyledWrapper}:nth-of-type(2) > ${StyledImageWrapper} > ${StyledFigcaption} {
    right: auto;
    left: 5%;
  }

  ${StyledWrapper}:nth-of-type(3) > ${StyledImageWrapper} > ${StyledFigcaption} {
    top: calc(92% );
  } */
`;

const StyledHeading = styled.h3`
  font-size: 1.6rem;
  color: #292929;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const StyledText = styled.p`
  font-size: 1.4rem;
  color: #292929;
  opacity: 0.5;
  width: 100%;
  line-height: 2.8rem;
  font-weight: 400;
`;

const StyledLink = styled(Link)`
  font-size: 1.6rem;
  color: #292929;
  margin-top: 1rem;
  font-weight: 600;
  position: relative;
`;

const StyledSVGIcon = styled(Arrow)`
  position: absolute;
  width: 15px;
  height: 11.5px;
  top: 50%;
  right: -65%;
  transform: translate(-50%, -50%);
`;

const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/sessions/" } }) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`;

const Gallery = () => {
  const data = useStaticQuery(query);
  const photosURLs = [...data.allFile.nodes];
  return (
    <StyledContainer id="works">
      {photosURLs.map(photo => {
        const fluid = photo.childImageSharp.fluid;
        return (
          <StyledWrapper>
            <StyledImageWrapper>
              <Image fluid={fluid} />
              <StyledFigcaption>Prisoner</StyledFigcaption>
            </StyledImageWrapper>
            <StyledTextWrapper>
              <StyledHeading>Prisoner in self mind</StyledHeading>
              <StyledText>
                Największym zbrodniarzem we wszechświecie jest niestety człowiek
                Wiem, bo jestem nim, nie cofnę czasu, by wyleczyć zbrodnię
                Jestem swoim bogiem, ale także swoim katem
              </StyledText>
              <StyledLink>
                Zobacz
                <StyledSVGIcon />
              </StyledLink>
            </StyledTextWrapper>
          </StyledWrapper>
        );
      })}
    </StyledContainer>
  );
};

export default Gallery;
