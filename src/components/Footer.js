import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Logo from '../assets/footer-logo.svg';
import Heart from '../assets/heart.svg';

const StyledContainer = styled.footer`
  width: 100%;
  height: 40vh;
  background-color: #151615;
  margin-top: 14rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 8rem;
`;

const StyledWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  padding: 2rem 5rem;
`;

const StyledColumsWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  padding: 5rem;
`;

const StyledColumn = styled.div`
  height: 100%;
  border-left: 3px solid #8888;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: space-around;
  padding-left: 1.7rem;
`;

const StyledLogo = styled(Logo)`
  width: 36rem;
`;

const StyledHeading = styled.h4`
  font-size: 3rem;
  color: #fff5f5;
  margin-bottom: 4rem;
  font-weight: 400;
`;

const StyledText = styled.p`
  font-size: 2.4rem;
  color: #888888;
  font-weight: 400;
  margin-bottom: 2rem;
  background-color: #000;
`;

const StyledLink = styled(Link)`
  font-size: 2.4rem;
  color: #888888;
  margin-bottom: 3.3rem;
  font-weight: 400;
`;

const StyledHeart = styled(Heart)`
  margin: 0 1rem;
`;

const Footer = () => {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledLogo />
        <StyledText>
          Created with
          <StyledHeart />
          by Olaf Sulich
        </StyledText>
      </StyledWrapper>
      <StyledColumsWrapper>
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
      </StyledColumsWrapper>
    </StyledContainer>
  );
};

export default Footer;
