import styled from 'styled-components';
// lib
import * as styles from 'src/lib/styles/styles';
import palette from 'src/lib/styles/palette';
import zIndex from 'src/lib/styles/zIndex';
import animations from 'src/lib/styles/animations';
import media from 'src/lib/styles/media';

const Wrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: -400px;
  width: 400px;
  height: 100vh;
  border-left: 1px solid ${palette.gray3};
  padding: 0.5rem;
  box-sizing: border-box;
  transition: 0.6s ${styles.transition};
  transform: ${({ isOpen }) => (isOpen ? 'translateX(-400px)' : `translateX(0)`)};
  background-color: rgba(248, 244, 255, 0.4);
  backdrop-filter: blur(6px);
  z-index: ${zIndex.menu};
  animation: 2s ${animations.fadeInRight} ease-in-out;

  ${media.xsmall} {
    display: none;
  }
`;

export default Wrapper;
