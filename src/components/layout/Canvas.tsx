import styled, { css } from 'styled-components';
// styles
import animations from 'src/lib/styles/animations';

const CanvasLayout = styled.div<{ isFullfilled: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  ${({ isFullfilled }) =>
    isFullfilled
      ? css`
          animation: 800ms ${animations.fadeIn};
        `
      : css``}
`;

export default CanvasLayout;
