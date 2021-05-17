import styled, { keyframes } from 'styled-components';
// lib
import * as styles from 'src/lib/styles/styles';

const LineFirst = ({ time, color }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="15.028"
      height="7"
      viewBox="0 0 15.028 7"
      time={time}
      color={color}
    >
      <path
        id="svg_circle_2"
        data-name="svg_circle_2"
        d="M1024.781,518.761a25.508,25.508,0,0,1,11.432,0"
        transform="translate(-1022.983 -516.612)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const fallingAnimation = keyframes`
	0% { opacity: 0; transform: translateY(calc(-100vh / 2)); }
	33% { opacity: 0; transform: translateY(calc(-100vh / 3)); }
	66% { opacity: 0; transform: translateY(calc(-100vh / 6 + 6px)); }
	100% { opacity: 1; transform: translateY(calc(0)); }
`;

const fillAnimation = color => keyframes`
	0% { stroke: ${color}; }
	80% { stroke: ${color}; }
	85% { stroke: #ffffff }
`;

const Svg = styled.svg`
  transition: 0.2s ${styles.transition};
  animation: ${({ time }) => `${(time / 5) * 4}ms`} ${fallingAnimation};

  & > path {
    fill: none;
    stroke: #ffffff;
    stroke-width: 3;
    transition: 0.2s ${styles.transition};
    animation: ${({ time }) => `${time}ms`} ${({ color }) => fillAnimation(color)};
  }
`;

export default LineFirst;
