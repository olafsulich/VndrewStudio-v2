import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import GridImagesList from '../components/GridImagesList';
import SessionInfo from '../components/SessionInfo';

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
      <SessionInfo sessionDetails={sessionDetails} />
      <GridImagesList sessionDetails={sessionDetails} />
      <Footer />
    </StyledContainer>
  );
};
SessionLayout.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SessionLayout;
