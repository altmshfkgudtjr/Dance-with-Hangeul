import styled from 'styled-components';
// lib
import * as styles from 'src/lib/styles/styles';

const ItemWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  width: 120%;
  height: 128%;
  margin-left: -10%;
  margin-top: 10px;
  overflow: visible;
  transform-style: preserve-3d;
  transform: translate3d(0px, calc(-50% - 8px), -300px);
  transition: 1000ms ${styles.transition};

  touch-action: none;
`;

export default ItemWrapper;
