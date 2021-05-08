import styled, { keyframes } from 'styled-components';
// lib
import * as styles from 'lib/styles/styles';

const Circle = ({ time, color }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" time={time} color={color}>
      <ellipse
        id="svg_circle"
        data-name="svg_circle"
        cx="15"
        cy="15"
        rx="12"
        ry="12"
        strokeMiterlimit="10"
      />
    </Svg>
  );
};

const fallingAnimation = keyframes`
	0% { opacity: 0; transform: translateY(calc(-100vh / 2)); }
	33% { opacity: 0.33; transform: translateY(calc(-100vh / 3)); }
	66% { opacity: 0.66; transform: translateY(calc(-100vh / 6)); }
	100% { opacity: 1; transform: translateY(calc(0)); }
`;

const fillAnimation = color => keyframes`
	0% { stroke: ${color}; }
	80% { stroke: ${color}; }
	85% { stroke: #ffffff }
`;

const Svg = styled.svg`
  width: 30px;
  height: 30px;
  transition: 0.2s ${styles.transition};
  animation: ${({ time }) => `${(time / 5) * 4}ms`} ${fallingAnimation};

  & > ellipse {
    fill: none;
    stroke: #ffffff;
    stroke-width: 4;
    transition: 0.2s ${styles.transition};
    animation: ${({ time }) => `${time}ms`} ${({ color }) => fillAnimation(color)};
  }
`;

export default Circle;
