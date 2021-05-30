import styled from 'styled-components';
// lib
import * as styles from 'src/lib/styles/styles';
import media, { mediaQueryMin, mediaValue } from 'src/lib/styles/media';

const ItemWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  width: 100%;
  height: 128%;
  margin: 6px auto;
  overflow: visible;
  transform-style: preserve-3d;
  transform: translate3d(0px, calc(-50% - 8px), -300px);
  transition: 1000ms ${styles.transition};

  touch-action: none;

  ${mediaQueryMin(mediaValue.small)} {
    &:hover {
      & > div {
        will-change: transform;
      }
    }
  }

  ${media.small} {
    margin: 6px auto;

    &:active {
      & > div {
        will-change: transform;
      }
    }
  }
`;

export default ItemWrapper;
