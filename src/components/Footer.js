import React from 'react';
import styled, { css } from 'styled-components';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Logo from '../assets/footer-logo.svg';
import Heart from '../assets/heart.svg';
import Text from './Text';
import Heading from './Heading';

const StyledContainer = styled.footer`
  width: 100%;
  height: 80vh;
  background-color: #151615;
  margin-top: 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 2rem;

  @media only screen and (min-width: 600px) {
    height: 60vh;
  }

  @media only screen and (min-width: 900px) {
    padding: 3rem 4rem;
  }

  @media only screen and (min-width: 1600px) {
    padding: 6rem 8rem 3rem 8rem;
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  padding: 1rem;

  @media only screen and (min-width: 700px) {
    margin: 3rem 5rem;
  }

  @media only screen and (min-width: 1600px) {
    height: 20%;
    margin: 0rem 5rem;
  }
`;

const StyledColumnsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;

  @media only screen and (min-width: 700px) {
    flex-direction: row;
    justify-content: space-around;
  }
  @media only screen and (min-width: 900px) {
    align-items: flex-start;
    margin-top: 4rem;
  }

  @media only screen and (min-width: 1100px) {
    justify-content: flex-end;
    margin-top: 0rem;
  }
`;

const StyledColumn = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 700px) {
    border-left: 3px solid #8888;
    width: auto;
    padding: 1rem 0 0 1.5rem;
    align-items: flex-start;
    justify-content: flex-start;
  }
  @media only screen and (min-width: 900px) {
    height: 70%;
  }

  @media only screen and (min-width: 1100px) {
    height: 80%;
    margin: 2rem 5rem;
  }
  @media only screen and (min-width: 1600px) {
    height: 90%;
    margin: 2rem 7rem;
  }
`;

const StyledLogo = styled(Logo)`
  width: 18rem;

  @media only screen and (min-width: 900px) {
    width: 24rem;
  }
  @media only screen and (min-width: 1600px) {
    width: 28rem;
  }
`;

const StyledLink = styled.a`
  font-size: 1.6rem;
  color: #888888;
  margin-bottom: 2rem;
  font-weight: 400;

  @media only screen and (min-width: 1600px) {
    font-size: 2rem;
  }
`;

const StyledHeart = styled(Heart)`
  margin: 0 1rem;
  opacity: 0.5;
`;

const query = graphql`
  {
    datoCmsFooter {
      facebook
      instagram
      youtube
      email
      instagramName
    }
  }
`;
const Footer = () => {
  const data = useStaticQuery(query);
  console.log(data);
  const {
    instagramName,
    instagram,
    youtube,
    facebook,
    email,
  } = data.datoCmsFooter;
  return (
    <StyledContainer id="about">
      <StyledWrapper>
        <StyledLogo />
      </StyledWrapper>
      <StyledColumnsWrapper>
        <StyledColumn>
          <Heading footer as="h4">
            Social media
          </Heading>
          <StyledLink href={facebook} target="_blank" rel="noreferrer noopener">
            Facebook
          </StyledLink>
          <StyledLink
            href={instagram}
            target="_blank"
            rel="noreferrer noopener"
          >
            Instagram
          </StyledLink>
          <StyledLink href={youtube} target="_blank" rel="noreferrer noopener">
            Youtube
          </StyledLink>
        </StyledColumn>
        <StyledColumn>
          <Heading footer as="h4">
            Kontakt
          </Heading>
          <Text footer>{instagramName}</Text>
          <Text footer>{email}</Text>
        </StyledColumn>
      </StyledColumnsWrapper>
      <Text copyrights>
        Created with
        <StyledHeart />
        by Olaf Sulich
      </Text>
    </StyledContainer>
  );
};

export default Footer;
