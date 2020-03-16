import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import Image from 'gatsby-image';
import Navigation from './Navigation';
import Text from './Text';
import Heading from './Heading';

const StyledContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 5rem 0 3rem 0;
  flex-direction: column;
`;

const StyledImageWrapper = styled.figure`
  width: 100%;
  height: 90%;
  position: relative;
  overflow: hidden;
  visibility: hidden;

  @media only screen and (min-width: 700px) {
    width: 90%;
  }
  @media only screen and (min-width: 1400px) {
    width: 85%;
  }

  img {
    width: 100% !important;
    height: auto !important;
  }
`;

const StyledImageReveal = styled.div`
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  background: #fff;
  top: 0;
  right: 0;
`;

const StyledFigcaption = styled.figcaption`
  font-size: 3rem;
  font-weight: 800;
  position: absolute;
  top: 90%;
  left: 2%;
  color: #f2f2f2;
  text-transform: uppercase;

  @media only screen and (min-width: 900px) {
    font-size: 3.7rem;
  }

  @media only screen and (min-width: 1100px) {
    font-size: 5rem;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 6.5rem;
  }
`;

const StyledTextWrapper = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  margin-top: 3rem;
  @media only screen and (min-width: 700px) {
    width: 85%;
    align-items: flex-start;
    padding: 2rem 0;
    margin-top: 1rem;
  }
  @media only screen and (min-width: 900px) {
    align-items: flex-start;
  }
  @media only screen and (min-width: 1100px) {
    padding: 4rem 0;
  }
  @media only screen and (min-width: 1400px) {
    width: 85%;
  }
`;

const Main = ({
  data: {
    datoCmsMain: {
      image: { fluid },
      title,
      subtitle,
      description,
    },
  },
}) => {
  const imageReveal = useRef(null);
  const imageRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.easeInOut' } });
    gsap.set([titleRef.current, subTitleRef.current, textRef.current], {
      autoAlpha: 0,
    });
    tl.to(imageWrapperRef.current, {
      duration: 0,
      css: { visibility: 'visible' },
    })
      .fromTo(
        imageReveal.current,
        {
          width: '100%',
          skewX: 20,
          scale: 1.5,
        },
        {
          width: '0',
          skewX: 0,
          duration: 2,
          transformOrigin: '0% 100%',
          xPercent: 100,
        }
      )
      .fromTo(
        imageRef.current,
        { scale: 1.6 },
        { scale: 0, duration: 1.4, delay: -1.4 }
      )
      .to(titleRef.current, { autoAlpha: 1, delay: -1.2, duration: 3 })
      .to(subTitleRef.current, { autoAlpha: 1, delay: -2, duration: 1.4 })
      .to(textRef.current, { autoAlpha: 1, delay: -2, duration: 1.4 });
  }, []);

  return (
    <>
      <StyledContainer id="home">
        <Navigation />
        <StyledImageWrapper ref={imageWrapperRef}>
          <Image fluid={fluid} ref={imageRef} />
          <StyledImageReveal ref={imageReveal} />
          <StyledFigcaption ref={titleRef}>{title}</StyledFigcaption>
        </StyledImageWrapper>
        <StyledTextWrapper>
          <Heading main ref={subTitleRef}>
            {subtitle}
          </Heading>
          <Text main ref={textRef}>
            {description}
          </Text>
        </StyledTextWrapper>
      </StyledContainer>
    </>
  );
};
Main.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Main;
