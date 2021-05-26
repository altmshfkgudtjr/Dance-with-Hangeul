import styled from 'styled-components';
// lib
import * as styles from 'src/lib/styles/styles';

const ItemWrapper = styled.div`
  height: 50%;
  /* height: 64px; */
  transform-style: preserve-3d;
  overflow: auto;

  transform: translate3d(0px, calc(50% - 32px - 6px), 0px);
  transition: 1000ms ${styles.transition};
`;

export default ItemWrapper;
