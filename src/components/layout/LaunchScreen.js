import styled, { css } from 'styled-components'
// lib
import animations from 'lib/styles/animations'

const LaunchScreenLayout = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	animation: ${({ time, isClose }) => isClose
		? css`${time}ms ${animations.fadeOut}`
		: ``
	};
`;

export default LaunchScreenLayout