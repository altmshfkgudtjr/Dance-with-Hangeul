import styled, { css } from 'styled-components';
// lib
import animations from 'src/lib/styles/animations';
import media from 'src/lib/styles/media';
// types
import { Device, Mode } from 'src/types/common';

const Wrapper = styled.div<{ device: Device; mode: Mode }>`
  display: flex;
  color: ${({ mode }) => (mode === 'Light' ? '#000' : '#fff')};
  ${({ device }) =>
    device === 'Mobile'
      ? css`
          flex-direction: column;
          margin-right: 1rem;
          animation: 1.2s ${animations.fadeInLeft};
        `
      : css`
          opacity: 0;
          flex-direction: row;
          margin-top: 1rem;
          margin-left: 6.25rem;
          animation: 1s ${animations.fadeInLeft} 1.4s ease-out;
          animation-fill-mode: forwards;
        `};
  margin-left: 6.25rem;

  ${media.medium} {
    margin-left: 2rem;
  }

  ${media.small} {
    align-items: flex-end;
  }
`;

export default Wrapper;
