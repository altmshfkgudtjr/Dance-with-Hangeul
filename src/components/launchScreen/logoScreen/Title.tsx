import styled, { keyframes } from 'styled-components';
// lib
import * as styles from 'src/lib/styles/styles';

const moveAnimation = keyframes`
	from { opacity: 0; transform: translateX(0) }
	to { opacity: 1; transform: translateX(26px) }
`;

const Title = styled.div<{ time: number }>`
  position: absolute;
  font-size: 21px;
  font-weight: 600;
  animation: 2s ${moveAnimation} ${({ time }) => `${time}ms`};
  animation-fill-mode: forwards;
  opacity: 0;
  z-index: 0;
  ${styles.noselect};
`;

export default Title;
