import styled, { css } from 'styled-components';
import Arrow from '../assets/arrow.svg';

const StyledArrow = styled(Arrow)`
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

  ${({ gallery }) =>
    gallery &&
    css`
      right: -65%;
    `}
`;

export default StyledArrow;
