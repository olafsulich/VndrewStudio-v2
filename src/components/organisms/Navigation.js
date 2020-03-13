import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledWrapper = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.5rem;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-right: 12rem;
`;

const StyledListItem = styled.li`
  font-size: 1.6rem;
  margin-left: 3rem;
  font-weight: 600;
`;

const StyledLogo = styled.h1`
  font-size: 7rem;
  font-weight: 800;
`;

const Navigation = () => {
  return (
    <StyledWrapper>
      <StyledLogo>
        <Link to="/"> VS</Link>
      </StyledLogo>
      <StyledList>
        <StyledListItem>
          <Link to="/">Strona główna</Link>
        </StyledListItem>
        <StyledListItem>Prace</StyledListItem>
        <StyledListItem>O mnie</StyledListItem>
      </StyledList>
    </StyledWrapper>
  );
};

export default Navigation;
