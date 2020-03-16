import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GridImage from './GridImage';

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

const GridImagesList = ({ sessionDetails }) => {
  return (
    <>
      {sessionDetails.map(session => {
        const sessionKey = Object.keys(session)[1];

        if (sessionKey === 'imageGallery') {
          return (
            <StyledGridWrapper>
              {session.imageGallery.map(({ fluid }) => {
                return <GridImage fluid={fluid} />;
              })}
            </StyledGridWrapper>
          );
        }
      })}
    </>
  );
};
GridImagesList.propTypes = {
  sessionDetails: PropTypes.array.isRequired,
};

export default GridImagesList;
