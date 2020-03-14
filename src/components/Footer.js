import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import Logo from '../assets/footer-logo.svg';
import Heart from '../assets/heart.svg';

const StyledContainer = styled.footer`
  width: 100%;
  height: 60vh;
  background-color: #151615;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 2rem;
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
`;

const StyledLogo = styled(Logo)`
  width: 18rem;
`;

const StyledHeading = styled.h4`
  font-size: 1.8rem;
  color: #fff5f5;
  margin-bottom: 2rem;
  font-weight: 400;
`;

const StyledText = styled.p`
  font-size: 1.4rem;
  color: #888888;
  font-weight: 400;
  margin-bottom: 1.5rem;
  background-color: #000;

  ${({ copyrights }) =>
    copyrights &&
    css`
      @media only screen and (min-width: 700px) {
        width: 100%;
        text-align: start;
      }
    `}
`;

const StyledLink = styled(Link)`
  font-size: 1.6rem;
  color: #888888;
  margin-bottom: 2rem;
  font-weight: 400;
`;

const StyledHeart = styled(Heart)`
  margin: 0 1rem;
`;

const Footer = () => {
  return (
    <StyledContainer id="about">
      <StyledWrapper>
        <StyledLogo />
      </StyledWrapper>
      <StyledColumnsWrapper>
        <StyledColumn>
          <StyledHeading>Social media</StyledHeading>
          <StyledLink>Facebook</StyledLink>
          <StyledLink>Instagram</StyledLink>
          <StyledLink>Youtube</StyledLink>
        </StyledColumn>
        <StyledColumn>
          <StyledHeading>Kontakt</StyledHeading>
          <StyledText>@vndrew_photos</StyledText>
          <StyledText>vndrewstudio@gmail.com</StyledText>
        </StyledColumn>
      </StyledColumnsWrapper>
      <StyledText copyrights>
        Created with
        <StyledHeart />
        by Olaf Sulich
      </StyledText>
    </StyledContainer>
  );
};

export default Footer;
