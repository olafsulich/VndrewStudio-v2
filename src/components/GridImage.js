import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';

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

const GridImage = ({ fluid }) => {
  return (
    <StyledImageWrapper>
      <Image fluid={fluid} />
    </StyledImageWrapper>
  );
};
GridImage.propTypes = {
  fluid: PropTypes.object.isRequired,
};

export default GridImage;
