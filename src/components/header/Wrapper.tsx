import styled, { css } from 'styled-components';
// lib
import animations from 'src/lib/styles/animations';
import media from 'src/lib/styles/media';
// types
import { Device } from 'src/types/common';

const Wrapper = styled.div<{ device: Device; isFullscreen: boolean }>`
  width: 100%;
  height: ${({ device }) => (device === 'Mobile' ? '48px' : '80px')};
  display: flex;
  align-items: center;
  justify-content: ${({ device }) => (device === 'Mobile' ? 'space-between' : 'center')};
  backdrop-filter: ${({ device }) => (device === 'Mobile' ? 'blur(4px)' : '')};
  ${({ isFullscreen }) =>
    isFullscreen
      ? css`
          animation: 400ms ${animations.moveOutTop} ease-in-out;
        `
      : css`
          animation: 400ms ${animations.moveInTop} ease-in-out;
        `};
  animation-fill-mode: forwards;

  ${media.small} {
    box-sizing: border-box;
    padding: 0 1rem;
  }
`;

export default Wrapper;
