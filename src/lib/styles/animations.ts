import { keyframes } from 'styled-components';

const fadeIn = keyframes`
	from { opacity: 0; }
	to { opacity: 1;}
`;
const fadeOut = keyframes`
	from { opacity: 1; }
	to { opacity: 0; }
`;
const fadeInTop = keyframes`
	from { opacity: 0; transform: translateY(-2rem); }
	to { opacity: 1; transform: translateY(0); }
`;
const fadeOutTop = keyframes`
	from { opacity: 1; transform: translateY(0); }
	to { opacity: 0; transform: translateY(-2rem); }
`;
const fadeInBottom = keyframes`
	from { opacity: 0; transform: translateY(2rem); }
	to { opacity: 1; transform: translateY(0); }
`;
const fadeOutBottom = keyframes`
	from { opacity: 1; transform: translateY(0); }
	to { opacity: 0; transform: translateY(2rem); }
`;
const fadeInLeft = keyframes`
	from { opacity: 0; transform: translateX(-2rem); }
	to { opacity: 1; transform: translateX(0); }
`;
const fadeOutLeft = keyframes`
	from { opacity: 1; transform: translateX(0); }
	to { opacity: 0; transform: translateX(-2rem); }
`;
const fadeInRight = keyframes`
	from { opacity: 0; transform: translateX(2rem); }
	to { opacity: 1; transform: translateX(0); }
`;
const fadeOutRight = keyframes`
	from { opacity: 1; transform: translateX(0); }
	to { opacity: 0; transform: translateX(2rem); }
`;
const zoomIn = keyframes`
	from { opacity: 0; transform: scale(.5, .5); }
	to { opacity: 1; transform: scale(1, 1); }
`;
const zoomOut = keyframes`
	from { opacity: 1; transform: scale(1, 1); }
	to { opacity: 0; transform: scale(.5, .5); }
`;
const tooltip = keyframes`
	0% { opacity: 0; }
	49% { opacity: 0; }
	50% { opacity: 1; } 
	100% { opacity: 1; }
`;
const spin = keyframes`
	from { transform: rotate(0deg); }
	to { transform: rotate()(360deg); }
`;
const animations = {
  fadeIn,
  fadeOut,
  fadeInTop,
  fadeOutTop,
  fadeInBottom,
  fadeOutBottom,
  fadeInLeft,
  fadeOutLeft,
  fadeInRight,
  fadeOutRight,
  zoomIn,
  zoomOut,
  tooltip,
  spin,
};

export default animations;
