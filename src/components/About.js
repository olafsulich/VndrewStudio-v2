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
  margin-top: 2rem;
  padding: 4rem 1rem;
`;

const StyledHeading = styled.h4`
  font-size: 3rem;
  color: #292929;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const StyledAboutWrapper = styled.article`
  width: 100%;
  padding: 2rem 1rem 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  font-size: 1.6rem;
  color: #292929;
  margin-bottom: 2rem;
  font-weight: 600;
  position: relative;
`;

const StyledSocialsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
`;

const StyledText = styled.p`
  font-size: 1.4rem;
  color: #292929;
  opacity: 0.5;
  width: 100%;
  line-height: 2.8rem;
  font-weight: 400;
  margin-left: 1rem;
`;

const StyledSVGIcon = styled(Arrow)`
  position: absolute;
  width: 15px;
  height: 11.5px;
  top: 50%;
  right: -45%;
  transform: translate(-50%, -50%);
`;

const About = () => {
  return (
    <StyledContainer>
      <StyledHeading>O MNIE</StyledHeading>
      <StyledAboutWrapper>
        <StyledText>
          Największym zbrodniarzem we wszechświecie jest niestety człowiek Wiem,
          bo jestem nim, nie cofnę czasu, Największym zbrodniarzem we
          wszechświecie jest niestety człowiek Wiem, bo jestem nim, nie cofnę
          czasu,
        </StyledText>
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
      </StyledAboutWrapper>
    </StyledContainer>
  );
};

export default About;
