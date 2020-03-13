import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled, { css } from 'styled-components';
import Image from 'gatsby-image';
import Arrow from '../assets/arrow.svg';

const StyledContainer = styled.div`
  width: 100%;
  max-height: 300%;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledImageWrapper = styled.figure`
  width: 45%;
  height: 100%;
  position: relative;

  :nth-of-type(2),
  :nth-of-type(3) {
    margin-bottom: 8rem;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const StyledFigcaption = styled.figcaption`
  font-size: 8rem;
  font-weight: 800;
  position: absolute;
  top: 92%;
  right: 5%;
  color: #f2f2f2;
  text-transform: uppercase;

  ${({ middle }) =>
    middle &&
    css`
      right: auto;
      left: 5%;
    `}
`;

const StyledTextWrapper = styled.article`
  width: 45%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 auto;
  transform: translate(25%, 50%);

  ${({ first }) =>
    first &&
    css`
      margin: 0 auto 8rem auto;
    `}
`;

const StyledHeading = styled.h2`
  font-size: 2.4rem;
  color: #292929;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const StyledText = styled.p`
  font-size: 2rem;
  color: #292929;
  opacity: 0.5;
  width: 60%;
  line-height: 4rem;
  font-weight: 400;
`;

const StyledLink = styled(Link)`
  font-size: 2.4rem;
  color: #292929;
  margin-top: 1rem;
  font-weight: 700;
  position: relative;
`;

const StyledSVGIcon = styled(Arrow)`
  position: absolute;
  width: 25px;
  height: 20px;
  top: 50%;
  right: -65%;
  transform: translate(-50%, -50%);
`;

const Gallery = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "session1" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledImageWrapper>
          <Image fluid={data.file.childImageSharp.fluid} />
          <StyledFigcaption>Prisoner</StyledFigcaption>
        </StyledImageWrapper>
        <StyledTextWrapper first>
          <StyledHeading>Prisoner in self mind</StyledHeading>
          <StyledText>
            Największym zbrodniarzem we wszechświecie jest niestety człowiek
            Wiem, bo jestem nim, nie cofnę czasu, by wyleczyć zbrodnię Jestem
            swoim bogiem, ale także swoim katem
          </StyledText>
          <StyledLink>
            Zobacz
            <StyledSVGIcon />
          </StyledLink>
        </StyledTextWrapper>
      </StyledWrapper>
      <StyledWrapper>
        <StyledTextWrapper>
          <StyledHeading>Prisoner in self mind</StyledHeading>
          <StyledText>
            Największym zbrodniarzem we wszechświecie jest niestety człowiek
            Wiem, bo jestem nim, nie cofnę czasu, by wyleczyć zbrodnię Jestem
            swoim bogiem, ale także swoim katem
          </StyledText>
          <StyledLink>
            Zobacz
            <StyledSVGIcon />
          </StyledLink>
        </StyledTextWrapper>
        <StyledImageWrapper>
          <Image fluid={data.file.childImageSharp.fluid} />
          <StyledFigcaption middle>Prisoner</StyledFigcaption>
        </StyledImageWrapper>
      </StyledWrapper>
      <StyledWrapper>
        <StyledImageWrapper>
          <Image fluid={data.file.childImageSharp.fluid} />
          <StyledFigcaption>Prisoner</StyledFigcaption>
        </StyledImageWrapper>
        <StyledTextWrapper>
          <StyledHeading>Prisoner in self mind</StyledHeading>
          <StyledText>
            Największym zbrodniarzem we wszechświecie jest niestety człowiek
            Wiem, bo jestem nim, nie cofnę czasu, by wyleczyć zbrodnię Jestem
            swoim bogiem, ale także swoim katem
          </StyledText>
          <StyledLink>
            Zobacz
            <StyledSVGIcon />
          </StyledLink>
        </StyledTextWrapper>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default Gallery;
