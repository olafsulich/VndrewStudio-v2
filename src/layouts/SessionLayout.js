import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Arrow from '../assets/arrow.svg';
import Text from '../components/Text';
import Heading from '../components/Heading';

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

const StyledLink = styled.a`
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
              return <Heading session>{session[sessionKey]}</Heading>;
            case 'descriptionContent':
              return <Text session>{session[sessionKey]}</Text>;
            case 'instagramLink':
              return (
                <StyledLink
                  href={session[sessionKey]}
                  target="_blank"
                  rel="noreferrer noopener"
                >
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
              {session.imageGallery.map(({ fluid }) => {
                return (
                  <StyledImageWrapper>
                    <Image fluid={fluid} />
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
