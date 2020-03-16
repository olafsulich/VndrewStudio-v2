import styled, { css } from 'styled-components';

const Text = styled.p`
    font-size: 1.2rem;
    color: #B8B8B8;
    font-weight: 400;

  ${({ main }) =>
    main &&
    css`
      opacity: 0.5;
      width: 100%;
      line-height: 2.8rem;

      @media only screen and (min-width: 900px) {
        width: 50%;
        font-size: 1.4rem;
        line-height: 3.6rem;
      }
      @media only screen and (min-width: 1100px) {
        font-size: 1.8rem;
      }
    `}
  ${({ about }) =>
    about &&
    css`
      font-size: 1.4rem;
      width: 100%;
      line-height: 2.8rem;
      margin-left: 1rem;

      @media only screen and (min-width: 700px) {
        order: 2;
      }

      @media only screen and (min-width: 900px) {
        font-size: 1.6rem;
        line-height: 3.2rem;
      }

      @media only screen and (min-width: 1300px) {
        font-size: 1.8rem;
        line-height: 3.6rem;
      }

      @media only screen and (min-width: 1600px) {
        font-size: 2rem;
        line-height: 4rem;
      }
    `}
  ${({ footer }) =>
    footer &&
    css`
      font-size: 1.6rem;
      color: #888888;
      margin-bottom: 1.5rem;
      background-color: #000;
      opacity: 1;

      @media only screen and (min-width: 1600px) {
        font-size: 2rem;
        margin-bottom: 2rem;
      }
    `} 
     ${({ copyrights }) =>
    copyrights &&
       css`
         font-size: 1.6rem;
         color: #888888;
         margin-bottom: 1.5rem;
         background-color: #000;
         opacity: 0.5;
         font-weight: 600;

         @media only screen and (min-width: 700px) {
           width: 100%;
           text-align: start;
         }
         @media only screen and (min-width: 1600px) {
           font-size: 2rem;
           margin-bottom: 2rem;
         }
       `} 
       ${({ gallery }) =>
    gallery &&
         css`
           width: 100%;
           line-height: 2.8rem;

           @media only screen and (min-width: 900px) {
             font-size: 1.4rem;
             line-height: 3rem;
           }

           @media only screen and (min-width: 1100px) {
             font-size: 1.8rem;
             line-height: 3.2rem;
           }
           @media only screen and (min-width: 1400px) {
             width: 60%;
           }
         `} 
         ${({ session }) =>
    session &&
           css`
             font-size: 1.6rem;
             width: 100%;
             line-height: 2.8rem;

             @media only screen and (min-width: 650px) {
               width: 60%;
             }

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
           `}     
`;

export default Text;
