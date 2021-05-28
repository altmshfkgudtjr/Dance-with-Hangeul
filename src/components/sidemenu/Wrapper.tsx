import styled, { css } from 'styled-components';
// lib
import * as styles from 'src/lib/styles/styles';
import palette from 'src/lib/styles/palette';
import zIndex from 'src/lib/styles/zIndex';
import animations from 'src/lib/styles/animations';
import media from 'src/lib/styles/media';

const Wrapper = ({ isOpen, isFullscreen, children }) => {
  return (
    <Container isOpen={isOpen}>
      <Content isFullscreen={isFullscreen}>{children}</Content>
    </Container>
  );
};

const Container = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  right: -400px;
  width: 400px;
  height: 100vh;
  transition: 0.6s ${styles.transition};
  transform: ${({ isOpen }) => (isOpen ? 'translateX(-400px)' : `translateX(0)`)};
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);

  ${media.xsmall} {
    display: none;
  }
`;

const Content = styled.div<{ isFullscreen: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-left: 1px solid ${palette.gray3};
  padding: 0.5rem;
  box-sizing: border-box;
  transition: 0.6s ${styles.transition};
  ${({ isFullscreen }) =>
    isFullscreen
      ? css`
          animation: 400ms ${animations.fadeOutRight} ease-in-out;
        `
      : css`
          animation: 400ms ${animations.fadeInRight} ease-in-out;
        `}
  background-color: rgba(248, 244, 255, 0.4);
  backdrop-filter: blur(6px);
  z-index: ${zIndex.menu};
  /* animation: 1s ${animations.fadeInRight} ease-in-out; */
  animation-fill-mode: forwards;
`;

export default Wrapper;
