import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

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

const StyledLogo = styled.h1`
  font-size: 4rem;
  font-weight: 800;

  @media only screen and (min-width: 700px) {
    font-size: 6rem;
  }
  @media only screen and (min-width: 1400px) {
    font-size: 7rem;
  }
`;

const Navigation = () => {
  return (
    <StyledWrapper>
      <StyledLogo>
        <Link to="/">VS</Link>
      </StyledLogo>
      <StyledList>
        <StyledListItem>Strona główna</StyledListItem>
        <StyledListItem>Prace</StyledListItem>
        <StyledListItem>O mnie</StyledListItem>
      </StyledList>
    </StyledWrapper>
  );
};

export default Navigation;