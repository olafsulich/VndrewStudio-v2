import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import { Link } from 'react-scroll';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Heading from './Heading';
import Logo from '../assets/Logo.svg';
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
  cursor: pointer;

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

const StyledLogo = styled(Logo)`
  width: 12rem;
  height: 3.5rem;

  @media only screen and (min-width: 700px) {
    width: 14rem;
    height: 4.2rem;
  }
  @media only screen and (min-width: 1000px) {
    width: 16rem;
    height: 5rem;
  }

  @media only screen and (min-width: 1400px) {
    width: 18rem;
    height: 6rem;
  }
`;

const Navigation = ({ session }) => {
  return (
    <>
      {session ? (
        <StyledWrapper session>
          <Heading logo as="h1">
            <AniLink
              direction="right"
              duration={1.5}
              cover
              to="/"
              bg="
                  center / cover   /* position / size */
                  no-repeat        /* repeat */
                  fixed            /* attachment */
                  padding-box      /* origin */
                  content-box      /* clip */
                  white            /* color */
                "
            >
              <StyledLogo />
            </AniLink>
          </Heading>
          <StyledList>
            <StyledListItem>
              <AniLink
                direction="right"
                duration={1.5}
                cover
                to="#home"
                bg="
                  center / cover   /* position / size */
                  no-repeat        /* repeat */
                  fixed            /* attachment */
                  padding-box      /* origin */
                  content-box      /* clip */
                  white            /* color */
                "
              >
                Strona główna
              </AniLink>
            </StyledListItem>
            <StyledListItem>
              <AniLink
                direction="right"
                duration={1.5}
                cover
                to="#works"
                bg="
                  center / cover   /* position / size */
                  no-repeat        /* repeat */
                  fixed            /* attachment */
                  padding-box      /* origin */
                  content-box      /* clip */
                  white            /* color */
                "
              >
                Prace
              </AniLink>
            </StyledListItem>
            <StyledListItem>
              <AniLink
                direction="right"
                duration={1.5}
                cover
                to="#about"
                bg="
                  center / cover   /* position / size */
                  no-repeat        /* repeat */
                  fixed            /* attachment */
                  padding-box      /* origin */
                  content-box      /* clip */
                  white            /* color */
                "
              >
                O mnie
              </AniLink>
            </StyledListItem>
          </StyledList>
        </StyledWrapper>
      ) : (
        <StyledWrapper>
          <Heading logo as="h1">
            <Link to="home" smooth duration={1000}>
              <StyledLogo />
            </Link>
          </Heading>
          <StyledList>
            <StyledListItem>
              <Link to="home" smooth duration={1000}>
                Strona główna
              </Link>
            </StyledListItem>
            <StyledListItem>
              <Link to="works" smooth duration={1000}>
                Prace
              </Link>
            </StyledListItem>
            <StyledListItem>
              <Link to="about" smooth duration={1250}>
                O mnie
              </Link>
            </StyledListItem>
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
