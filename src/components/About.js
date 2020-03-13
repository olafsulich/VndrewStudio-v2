import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Arrow from '../assets/arrow.svg';

const StyledContainer = styled.section`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 14rem;
  padding: 8rem 10rem;
`;

const StyledHeading = styled.h4`
  font-size: 10rem;
  color: #292929;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const StyledAboutWrapper = styled.article`
  width: 80%;
  padding: 7rem 0rem 0 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  font-size: 3rem;
  color: #292929;
  margin-bottom: 5rem;
  font-weight: 600;
  position: relative;
`;

const StyledSocialsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 40%;
`;

const StyledText = styled.p`
  font-size: 2.6rem;
  color: #292929;
  opacity: 0.5;
  width: 45%;
  line-height: 4rem;
  font-weight: 400;
  margin-left: 3rem;
`;

const StyledSVGIcon = styled(Arrow)`
  position: absolute;
  width: 25px;
  height: 20px;
  top: 50%;
  right: -45%;
  transform: translate(-50%, -50%);
`;

const About = () => {
  return (
    <StyledContainer>
      <StyledHeading>O MNIE</StyledHeading>
      <StyledAboutWrapper>
        <StyledSocialsWrapper>
          <StyledLink>
            Instagram
            <StyledSVGIcon />
          </StyledLink>
          <StyledLink>
            Facebook
            <StyledSVGIcon />
          </StyledLink>
          <StyledLink>
            Youtube
            <StyledSVGIcon />
          </StyledLink>
        </StyledSocialsWrapper>
        <StyledText>
          Największym zbrodniarzem we wszechświecie jest niestety człowiek Wiem,
          bo jestem nim, nie cofnę czasu, Największym zbrodniarzem we
          wszechświecie jest niestety człowiek Wiem, bo jestem nim, nie cofnę
          czasu,
        </StyledText>
      </StyledAboutWrapper>
    </StyledContainer>
  );
};

export default About;
