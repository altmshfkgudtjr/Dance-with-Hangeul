import styled, { css } from 'styled-components';
// lib
import animations from 'lib/styles/animations';

const Wrapper = styled.div`
  display: flex;
  ${({ device }) =>
    device === 'Mobile'
      ? css`
          flex-direction: column;
          margin-right: 1rem;
          animation: 1.4s ${animations.fadeInLeft};
        `
      : css`
          opacity: 0;
          flex-direction: row;
          margin-top: 1rem;
          margin-left: 6.25rem;
          animation: 1.4s ${animations.fadeInLeft} 0.8s;
          animation-fill-mode: forwards;
        `};
`;

export default Wrapper;
