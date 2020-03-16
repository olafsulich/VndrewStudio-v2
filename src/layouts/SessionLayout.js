import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import Footer from '../components/Footer';
import Navigation from '../components/organisms/Navigation';
import Arrow from '../assets/arrow.svg';

const StyledContainer = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 5rem 0 0rem 0;
  flex-direction: column;
`;

const StyledWrapper = styled.article`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 2rem 3rem 8rem 3rem;

  @media only screen and (min-width: 700px) {
    padding: 5rem 4rem;
  }

  @media only screen and (min-width: 1200px) {
    padding: 8rem 7rem;
  }
`;

const StyledHeading = styled.h2`
  font-size: 4.5rem;
  color: #292929;
  margin-bottom: 1rem;
  font-weight: 700;

  @media only screen and (min-width: 700px) {
    font-size: 6rem;
  }

  @media only screen and (min-width: 900px) {
    font-size: 7rem;
    margin-bottom: 3rem;
  }

  @media only screen and (min-width: 1300px) {
    font-size: 8rem;
    margin-bottom: 4rem;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 9.5rem;
    margin-bottom: 5rem;
  }
`;

const StyledText = styled.p`
  font-size: 1.6rem;
  color: #292929;
  opacity: 0.5;
  width: 100%;
  line-height: 2.8rem;
  font-weight: 400;

  @media only screen and (min-width: 650px) {
    width: 60%;
  }

  /* @media only screen and (min-width: 700px) {
    width: 50%;
  } */

  @media only screen and (min-width: 900px) {
    font-size: 1.8rem;
    line-height: 3.2rem;
  }

  @media only screen and (min-width: 1300px) {
    line-height: 3.6rem;
    width: 45%;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 2.2rem;
    line-height: 4rem;
  }
`;
const StyledLink = styled(Link)`
  font-size: 1.6rem;
  color: #292929;
  margin-top: 2rem;
  font-weight: 600;
  position: relative;

  @media only screen and (min-width: 900px) {
    font-size: 1.8rem;
  }

  @media only screen and (min-width: 1300px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 2.2rem;
    margin-top: 3rem;
  }
`;

const StyledSVGIcon = styled(Arrow)`
  position: absolute;
  width: 15px;
  height: 11.5px;
  top: 50%;
  right: -45%;
  transform: translate(-50%, -50%);

  @media only screen and (min-width: 1600px) {
    width: 20px;
    height: 14px;
  }
`;

const StyledGridWrapper = styled.div`
  width: 100%;
  height: 300%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-row-gap: 0rem;
  grid-column-gap: 0rem;
  align-items: center;
  justify-items: center;
  align-content: center;
  justify-items: center;

  @media only screen and (min-width: 500px) {
    padding: 4rem 3rem;
    grid-row-gap: 4rem;
    grid-column-gap: 4rem;
  }

  @media only screen and (min-width: 1200px) {
    grid-column-gap: 8rem;
    padding: 4rem 7rem 8rem 7rem;
  }
`;

const StyledImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 400px;
  order: 2;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const query = graphql`
  query sessionPage($id: String!) {
    datoCmsSession(id: { eq: $id }) {
      sessionDetails {
        ... on DatoCmsDescription {
          descriptionContent
        }
        ... on DatoCmsTitle {
          titleContent
        }
        ... on DatoCmsInstagram {
          instagramLink
        }
        ... on DatoCmsImage {
          imageGallery {
            fluid {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const SessionLayout = ({ data }) => {
  const sessionDetails = data.datoCmsSession.sessionDetails;

  return (
    <StyledContainer>
      <Navigation />
      <StyledWrapper>
        {sessionDetails.map(session => {
          const sessionKey = Object.keys(session)[1];

          switch (sessionKey) {
            case 'titleContent':
              return <StyledHeading>{session[sessionKey]}</StyledHeading>;
            case 'descriptionContent':
              return <StyledText>{session[sessionKey]}</StyledText>;
            case 'instagramLink':
              return (
                <StyledLink to={session[sessionKey]}>
                  Instagram
                  <StyledSVGIcon />
                </StyledLink>
              );
            default:
              return null;
          }
        })}
      </StyledWrapper>

      {sessionDetails.map(session => {
        const sessionKey = Object.keys(session)[1];

        if (sessionKey === 'imageGallery') {
          return (
            <StyledGridWrapper>
              {session.imageGallery.map(image => {
                return (
                  <StyledImageWrapper>
                    <Image fluid={image.fluid} />
                  </StyledImageWrapper>
                );
              })}
            </StyledGridWrapper>
          );
        }
      })}

      <Footer />
    </StyledContainer>
  );
};
SessionLayout.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SessionLayout;
