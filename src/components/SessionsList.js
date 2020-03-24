import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import 'animate.css/animate.min.css';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import Image from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Text from './Text';
import Heading from './Heading';
import StyledArrow from './Arrow';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 3rem;

  @media only screen and (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledTextWrapper = styled.article`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 2rem;
  order: 2;

  @media only screen and (min-width: 700px) {
    width: 45%;
    padding: 4rem 2rem;
    order: ${({ order }) => (order % 2 !== 0 ? '1' : '3')};
    margin-left: ${({ order }) => (order % 2 === 0 ? '0' : '8rem')};
  }
`;

const StyledImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 470px;
  position: relative;
  order: 2;
  overflow: hidden;

  @media only screen and (min-width: 700px) {
    min-width: auto;
    min-height: 400px;
    width: 45%;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const StyledContainer = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
`;

const StyledLink = styled(AniLink)`
  font-size: 1.6rem;
  color: #292929;
  font-weight: 600;
  position: relative;
  margin-top: 3rem;

  @media only screen and (min-width: 1600px) {
    font-size: 2rem;
  }
`;

const SessionsList = ({ sessionItems }) => (
  <StyledContainer>
    {sessionItems.map(
      (
        { id, title, subtitle, description, featuredImage: { fluid }, slug },
        index
      ) => {
        return (
          <StyledWrapper key={id}>
            <ParallaxProvider>
              <StyledImageWrapper>
                <Parallax y={[-40, 40]} tagOuter="div">
                  <Image fluid={fluid} />
                </Parallax>
                <Heading galleryImage order={index}>
                  {title}
                </Heading>
              </StyledImageWrapper>
            </ParallaxProvider>
            <StyledTextWrapper order={index}>
              <ScrollAnimation animateIn="fadeIn">
                <Heading gallery as="h3">
                  {subtitle}
                </Heading>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn">
                <Text gallery>{description}</Text>
              </ScrollAnimation>
              <StyledLink
                direction="right"
                duration={1.5}
                cover
                to={`sesje/${slug}`}
                bg="
                  center / cover   /* position / size */
                  no-repeat        /* repeat */
                  fixed            /* attachment */
                  padding-box      /* origin */
                  content-box      /* clip */
                  white            /* color */
                "
              >
                <ScrollAnimation animateIn="fadeIn">
                  Zobacz
                  <StyledArrow gallery />
                </ScrollAnimation>
              </StyledLink>
            </StyledTextWrapper>
          </StyledWrapper>
        );
      }
    )}
  </StyledContainer>
);

SessionsList.propTypes = {
  sessionItems: PropTypes.array.isRequired,
};

export default SessionsList;
