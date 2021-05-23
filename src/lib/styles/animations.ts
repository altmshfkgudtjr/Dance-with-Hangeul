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
const moveInTop = keyframes`
	from { transform: translateY(-3rem); }
	to { transform: translateY(0); }
`;
const moveOutTop = keyframes`
	from { transform: translateY(0); }
	to { transform: translateY(-3rem); }
`;
const moveInBottom = keyframes`
	from { transform: translateY(3rem); }
	to { transform: translateY(0); }
`;
const moveOutBottom = keyframes`
	from { transform: translateY(0); }
	to { transform: translateY(3rem); }
`;
const moveInLeft = keyframes`
	from { transform: translateX(-3rem); }
	to { transform: translateX(0); }
`;
const moveOutLeft = keyframes`
	from { transform: translateX(0); }
	to { transform: translateX(-3rem); }
`;
const moveInRight = keyframes`
	from { transform: translateX(3rem); }
	to { transform: translateX(0); }
`;
const moveOutRight = keyframes`
	from { transform: translateX(0); }
	to { transform: translateX(3rem); }
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
const fadeOutRightMenu = keyframes`
	from { opacity: 1; transform: translateX(0) }
	to { opacity: 0; transform: translateX(4rem) }
`;
const fadeOutLeftMenu = keyframes`
	from { opacity: 1; transform: translateX(0) }
	to { opacity: 0; transform: translateX(-4rem) }
`;
const fadeInRightMenu = keyframes`
	from { opacity: 0; transform: translateX(4rem) }
	to { opacity: 1; transform: translateX(0) }
`;
const fadeInLeftMenu = keyframes`
	from { opacity: 0; transform: translateX(-4rem) }
	to { opacity: 1; transform: translateX(0) }
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
  moveInTop,
  moveOutTop,
  moveInBottom,
  moveOutBottom,
  moveInLeft,
  moveOutLeft,
  moveInRight,
  moveOutRight,
  zoomIn,
  zoomOut,
  tooltip,
  spin,
  fadeOutRightMenu,
  fadeOutLeftMenu,
  fadeInRightMenu,
  fadeInLeftMenu,
};

export default animations;
