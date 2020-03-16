import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import Image from 'gatsby-image';
import Arrow from '../assets/arrow.svg';
import Text from './Text';
import Heading from './Heading';

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

const StyledTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  position: absolute;
  top: 92%;
  right: 5%;
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

const StyledSVGIcon = styled(Arrow)`
  position: absolute;
  width: 15px;
  height: 11.5px;
  top: 50%;
  right: -65%;
  transform: translate(-50%, -50%);

  @media only screen and (min-width: 1600px) {
    width: 20px;
    height: 14px;
  }
`;

const Session = ({ id, fluid, title, subtitle, description, slug }) => {
  return (
    <StyledWrapper key={id}>
      <StyledImageWrapper>
        <Image fluid={fluid} />
        <StyledTitle>{title}</StyledTitle>
      </StyledImageWrapper>
      <StyledTextWrapper>
        <Heading gallery as="h3">
          {subtitle}
        </Heading>
        <Text>{description}</Text>
        <StyledLink to={`sesje/${slug}`}>
          Zobacz
          <StyledSVGIcon />
        </StyledLink>
      </StyledTextWrapper>
    </StyledWrapper>
  );
};

Session.propTypes = {
  id: PropTypes.string.isRequired,
  fluid: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Session;
