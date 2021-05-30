import styled, { css } from 'styled-components';
// lib
import animations from 'src/lib/styles/animations';
import media from 'src/lib/styles/media';
// types
import { Device, Mode } from 'src/types/common';

const Wrapper = styled.div<{ device: Device; mode: Mode; isFullscreen: boolean }>`
  display: flex;
  color: ${({ mode }) => (mode === 'Light' ? '#000' : '#fff')};

  ${({ device, isFullscreen }) => {
    if (device === 'Mobile' && isFullscreen) {
      return css`
        flex-direction: column;
        margin-right: 1rem;
        animation: 400ms ${animations.fadeOutRight} ease-in-out;
      `;
    }

    if (device === 'Mobile' && !isFullscreen) {
      return css`
        flex-direction: column;
        margin-right: 1rem;
        animation: 400ms ${animations.fadeInRight} ease-in-out;
      `;
    }

    if (device === 'Desktop' && isFullscreen) {
      return css`
        flex-direction: row;
        margin-top: 1rem;
        margin-left: 6.25rem;
        animation: 400ms ${animations.fadeOutLeft} ease-in-out;
      `;
    }

    if (device === 'Desktop' && !isFullscreen) {
      return css`
        flex-direction: row;
        margin-top: 1rem;
        margin-left: 6.25rem;
        animation: 400ms ${animations.fadeInLeft} ease-in-out;
      `;
    }
  }};
  animation-fill-mode: forwards;

  margin-left: 6.25rem;

  ${media.medium} {
    margin-left: 2rem;
  }

  ${media.small} {
    margin-top: 16px;
    margin-left: 1rem;
    align-items: flex-end;
  }

  ${media.mobileLandscape} {
    margin-top: 16px;
    margin-left: 1rem;
    align-items: flex-end;
  }
`;

export default Wrapper;
