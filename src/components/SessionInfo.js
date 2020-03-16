import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from './Text';
import Heading from './Heading';
import StyledArrow from './Arrow';

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

const SessionInfo = ({ sessionDetails }) => {
  return (
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
                <StyledArrow />
              </StyledLink>
            );
          default:
            return null;
        }
      })}
    </StyledWrapper>
  );
};
SessionInfo.propTypes = {
  sessionDetails: PropTypes.object.isRequired,
};

export default SessionInfo;
