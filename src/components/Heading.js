import styled, { css } from 'styled-components';

const Heading = styled.h2`
 color: #292929;
 font-weight: 600;

 ${({ logo }) =>
    logo &&
   css`
     font-size: 4rem;
     font-weight: 800;

     @media only screen and (min-width: 700px) {
       font-size: 6rem;
     }
     @media only screen and (min-width: 1400px) {
       font-size: 7rem;
     }
   `}

  ${({ main }) =>
    main &&
    css`
      font-size: 1.6rem;
      margin-bottom: 1rem;

      @media only screen and (min-width: 900px) {
        font-size: 1.8rem;
      }
      @media only screen and (min-width: 1100px) {
        font-size: 2.2rem;
      }
    `}
  ${({ about }) =>
    about &&
    css`
      font-size: 3rem;
      margin-bottom: 1rem;
      font-weight: 700;

      @media only screen and (min-width: 700px) {
        font-size: 5rem;
      }

      @media only screen and (min-width: 900px) {
        font-size: 6.5rem;
        margin-bottom: 3rem;
      }

      @media only screen and (min-width: 1300px) {
        font-size: 7rem;
        margin-bottom: 4rem;
      }

      @media only screen and (min-width: 1600px) {
        font-size: 8.5rem;
        margin-bottom: 5rem;
      }
    `}
  ${({ footer }) =>
    footer &&
    css`
      font-size: 1.8rem;
      color: #fff5f5;
      margin-bottom: 2rem;
      font-weight: 400;
      @media only screen and (min-width: 1100px) {
        font-size: 2.2rem;
      }
      @media only screen and (min-width: 1600px) {
        margin-bottom: 2.4rem;
        font-size: 2.6rem;
      }
    `} 
    ${({ gallery }) =>
    gallery &&
      css`
        font-size: 1.6rem;
        margin-bottom: 1rem;

        @media only screen and (min-width: 900px) {
          font-size: 1.8rem;
          margin-bottom: 1.2rem;
        }

        @media only screen and (min-width: 1100px) {
          font-size: 2.4rem;
          margin-bottom: 1.4rem;
        }
      `}
      ${({ galleryImage }) =>
    galleryImage &&
        css`
          font-size: 3rem;
          font-weight: 800;
          position: absolute;
          top: 92%;
          right: 5%;
          color: #f2f2f2;
          text-transform: uppercase;

          @media only screen and (min-width: 900px) {
            font-size: 3.7rem;
          }

          @media only screen and (min-width: 1100px) {
            font-size: 5rem;
          }

          @media only screen and (min-width: 1600px) {
            font-size: 6.5rem;
          }
        `}  
    ${({ session }) =>
    session &&
      css`
        font-size: 4.5rem;
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
      `}     
`;

export default Heading;
