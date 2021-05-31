import styled, { css } from 'styled-components';
// lib
import * as styles from 'src/lib/styles/styles';
import zIndex from 'src/lib/styles/zIndex';
import animations from 'src/lib/styles/animations';
import media from 'src/lib/styles/media';

const Wrapper = ({ isOpen, isFullscreen, children }) => {
  return (
    <Container isFullscreen={isFullscreen} isOpen={isOpen}>
      <Content isFullscreen={isFullscreen}>{children}</Content>
    </Container>
  );
};

const Container = styled.div<{ isOpen: boolean; isFullscreen: boolean }>`
  position: absolute;
  top: 0;
  right: -400px;
  width: 400px;
  height: 100vh;
  transition: transform 0.6s ${styles.transition};
  transform: ${({ isOpen }) => (isOpen ? 'translateX(-400px)' : `translateX(0)`)};
  backdrop-filter: ${({ isFullscreen }) => (isFullscreen ? `` : `blur(6px)`)};

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
  border-left: 1px solid rgba(100, 100, 100, 0.2);
  padding: 0.5rem;
  box-sizing: border-box;
  transition: 0.6s ${styles.transition};
  background-color: rgba(220, 163, 255, 0.1);
  ${({ isFullscreen }) =>
    isFullscreen
      ? css`
          animation: 400ms ${animations.fadeOutRight} ease-in-out;
        `
      : css`
          animation: 400ms ${animations.fadeInRight} ease-in-out;
        `}
  z-index: ${zIndex.menu};
  animation-fill-mode: forwards;
`;

export default Wrapper;
