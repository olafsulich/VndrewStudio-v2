import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import gsap from 'gsap';
import { useIntersection } from 'react-use';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
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
  order: 3;
  @media only screen and (min-width: 700px) {
    width: 45%;
    padding: 4rem 2rem;
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
  height:100%;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
   @media only screen and (min-width: 700px) {
  ${StyledWrapper}:nth-of-type(2) > ${StyledImageWrapper} {
    order: 2;
  }
  ${StyledWrapper}:nth-of-type(2) > ${StyledTextWrapper} {
    margin-left:8rem;
    order: 1;
  }
  // prettier-ignore
  ${StyledWrapper}:nth-of-type(2) > ${StyledImageWrapper} > ${Heading} {
    right: auto;
    left: 5%;
  }
  ${StyledWrapper}:nth-of-type(3) > ${StyledImageWrapper} > ${Heading} {
    top: calc(92% );
  }
}
`;

const StyledLink = styled(Link)`
  font-size: 1.6rem;
  color: #292929;
  margin-top: 1rem;
  font-weight: 600;
  position: relative;

  @media only screen and (min-width: 1600px) {
    font-size: 2rem;
    margin-top: 2rem;
  }
`;

const SessionsList = ({ sessionItems }) => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const textRef = useRef(null);

  const intersection = useIntersection(subTitleRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.9,
  });

  const fadeIn = () => {
    gsap.to(titleRef.current, 1, {
      autoAlpha: 1,
      ease: 'power4.out',
      stagger: {
        amount: 0.3,
      },
    });
    gsap.to(textRef.current, 1, {
      autoAlpha: 1,
      y: -60,
      ease: 'power4.out',
      stagger: {
        amount: 0.3,
      },
    });

    gsap.to(subTitleRef.current, 1, {
      autoAlpha: 1,
      y: -60,
      ease: 'power4.out',
      stagger: {
        amount: 0.3,
      },
    });
  };
  const fadeOut = () => {
    gsap.to(titleRef.current, 1, {
      autoAlpha: 0,
      ease: 'power4.out',
    });
    gsap.to(subTitleRef.current, 1, {
      autoAlpha: 0,
      y: 0,
      ease: 'power4.out',
    });
    gsap.to(textRef.current, 1, {
      autoAlpha: 0,
      y: 0,
      ease: 'power4.out',
    });
  };

  intersection && intersection.intersectionRatio < 0.9 ? fadeOut() : fadeIn();
  return (
    <StyledContainer>
      {sessionItems.map(
        ({
          id,
          title,
          subtitle,
          description,
          featuredImage: { fluid },
          slug,
        }) => {
          return (
            <StyledWrapper key={slug}>
              <ParallaxProvider>
                <StyledImageWrapper>
                  <Parallax y={[-40, 40]} tagOuter="div">
                    <Image fluid={fluid} />
                  </Parallax>
                  <Heading galleryImage ref={titleRef}>
                    {title}
                  </Heading>
                </StyledImageWrapper>
              </ParallaxProvider>

              <StyledTextWrapper>
                <Heading gallery as="h3" ref={subTitleRef}>
                  {subtitle}
                </Heading>
                <Text gallery ref={textRef}>
                  {description}
                </Text>
                <StyledLink to={`sesje/${slug}`}>
                  Zobacz
                  <StyledArrow gallery />
                </StyledLink>
              </StyledTextWrapper>
            </StyledWrapper>
          );
        }
      )}
    </StyledContainer>
  );
};

SessionsList.propTypes = {
  sessionItems: PropTypes.array.isRequired,
};

export default SessionsList;
