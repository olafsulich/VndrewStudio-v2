import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Heading from './Heading';

const StyledWrapper = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.5rem;
  padding: 0 2rem;

  @media only screen and (min-width: 700px) {
    width: 90%;
    padding: 0 3rem 0 0;
  }
  @media only screen and (min-width: 1400px) {
    width: 85%;
    padding: 0 5rem 0 0;
  }
  @media only screen and (min-width: 1600px) {
    padding: 0 7rem 0 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ${({ session }) =>
    session &&
    css`
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 3.5rem;
      padding: 0 2rem;

      @media only screen and (min-width: 700px) {
        width: 100%;

        padding: 0 5rem 0 5rem;
      }
      @media only screen and (min-width: 1400px) {
        width: 100%;

        padding: 0 7rem 0 7rem;
      }
      @media only screen and (min-width: 1600px) {
        padding: 0 10rem 0 10rem;
      }
    `}
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledListItem = styled.li`
  font-size: 1rem;
  margin-left: 1.5rem;
  font-weight: 600;

  @media only screen and (min-width: 700px) {
    font-size: 1.2rem;
  }
  @media only screen and (min-width: 1400px) {
    font-size: 1.4rem;
    margin-left: 2rem;
  }
  @media only screen and (min-width: 1600px) {
    font-size: 1.6rem;
    margin-left: 2.5rem;
  }
`;

const Navigation = ({ session }) => {
  return (
    <>
      {session ? (
        <StyledWrapper session>
          <Heading logo as="h1">
            <Link to="/">VS</Link>
          </Heading>
          <StyledList>
            <StyledListItem>Strona główna</StyledListItem>
            <StyledListItem>Prace</StyledListItem>
            <StyledListItem>O mnie</StyledListItem>
          </StyledList>
        </StyledWrapper>
      ) : (
        <StyledWrapper>
          <Heading logo as="h1">
            <Link to="/">VS</Link>
          </Heading>
          <StyledList>
            <StyledListItem>Strona główna</StyledListItem>
            <StyledListItem>Prace</StyledListItem>
            <StyledListItem>O mnie</StyledListItem>
          </StyledList>
        </StyledWrapper>
      )}
    </>
  );
};

Navigation.propTypes = {
  session: PropTypes.bool,
};

Navigation.defaultProps = {
  session: false,
};

export default Navigation;
