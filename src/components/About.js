import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Arrow from '../assets/arrow.svg';
import Text from './Text';

const StyledContainer = styled.section`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
  padding: 4rem 1rem;

  @media only screen and (min-width: 700px) {
    order: 2;
    padding: 4rem 3rem;
    height: 100%;
  }

  @media only screen and (min-width: 900px) {
    padding: 8rem;
  }

  @media only screen and (min-width: 1100px) {
    padding: 12rem 14rem;
  }

  @media only screen and (min-width: 1500px) {
    padding: 18rem 20rem;
  }

  @media only screen and (min-width: 1600px) {
    padding: 24rem 30rem;
  }
`;

const StyledHeading = styled.h4`
  font-size: 3rem;
  color: #292929;
  margin-bottom: 1rem;
  font-weight: 700;

  @media only screen and (min-width: 700px) {
    font-size: 5rem;
  }

  @media only screen and (min-width: 900px) {
    font-size: 6.5rem;
    margin-bottom: 3rem;
  }

  @media only screen and (min-width: 1300px) {
    font-size: 7rem;
    margin-bottom: 4rem;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 8.5rem;
    margin-bottom: 5rem;
  }
`;

const StyledAboutWrapper = styled.article`
  width: 100%;
  padding: 2rem 1rem 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media only screen and (min-width: 700px) {
    flex-direction: row;
  }
`;

const StyledLink = styled.a`
  font-size: 1.6rem;
  color: #292929;
  margin-bottom: 2rem;
  font-weight: 600;
  position: relative;

  @media only screen and (min-width: 900px) {
    font-size: 1.8rem;
  }

  @media only screen and (min-width: 1300px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 2.2rem;
    margin-bottom: 3rem;
  }
`;

const StyledSocialsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
  @media only screen and (min-width: 700px) {
    order: 1;
  }
`;

const StyledSVGIcon = styled(Arrow)`
  position: absolute;
  width: 15px;
  height: 11.5px;
  top: 50%;
  right: -45%;
  transform: translate(-50%, -50%);

  @media only screen and (min-width: 1600px) {
    width: 20px;
    height: 14px;
  }
`;

const query = graphql`
  {
    datoCmsAbout {
      description
      instagram
      youtube
      facebook
    }
  }
`;

const About = () => {
  const data = useStaticQuery(query);
  const { description, instagram, youtube, facebook } = data.datoCmsAbout;
  return (
    <StyledContainer>
      <StyledHeading>O MNIE</StyledHeading>
      <StyledAboutWrapper>
        <Text about>{description}</Text>
        <StyledSocialsWrapper>
          <StyledLink
            href={instagram}
            target="_blank"
            rel="noreferrer noopener"
          >
            Instagram
            <StyledSVGIcon />
          </StyledLink>
          <StyledLink href={facebook} target="_blank" rel="noreferrer noopener">
            Facebook
            <StyledSVGIcon />
          </StyledLink>
          <StyledLink href={youtube} target="_blank" rel="noreferrer noopener">
            Youtube
            <StyledSVGIcon />
          </StyledLink>
        </StyledSocialsWrapper>
      </StyledAboutWrapper>
    </StyledContainer>
  );
};

export default About;
