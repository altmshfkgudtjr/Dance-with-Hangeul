import styled, { css } from 'styled-components';
// lib
import media from 'src/lib/styles/media';
import animations from 'src/lib/styles/animations';
// types
import { Mode } from 'src/types/common';

const Wrapper = styled.div<{ mode: Mode; isFullscreen: boolean }>`
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
  margin-left: 6.25rem;

  ${media.medium} {
    margin-left: 2rem;
  }

  color: ${({ mode }) => (mode === 'Light' ? '#000' : '#fff')};
  ${({ isFullscreen }) =>
    isFullscreen
      ? css`
          animation: 400ms ${animations.fadeOutLeft} ease-in-out;
        `
      : css`
          animation: 400ms ${animations.fadeInLeft} ease-in-out;
        `}
  animation-fill-mode: forwards;
`;

export default Wrapper;
