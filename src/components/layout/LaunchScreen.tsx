import styled, { css } from 'styled-components';
// lib
import animations from 'src/lib/styles/animations';

const LaunchScreenLayout = styled.div<{ time: number; isClose: boolean }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${({ time, isClose }) =>
    isClose
      ? css`
          ${time}ms ${animations.fadeOut}
        `
      : css`
          ${time}ms ${animations.fadeIn}
        `};
  animation-fill-mode: forwards;
  background-color: rgba(0, 0, 0, 0);
`;

export default LaunchScreenLayout;
