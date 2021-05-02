import styled, { keyframes } from 'styled-components'


const opacityAnimation = keyframes`
	0% { opacity: 0; }
	80% { opacity: 0; }
	100% { opacity: 1; }
`;

const moveAnimation = keyframes`
	0% { transform: translateX(0) scale(1); }
	60% { transform: translateX(-64px) scale(0.5); }
	100% { transform: translateX(-64px) scale(0.5); }
`;

const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 80px;
	height: 80px;
	animation: 2s ${moveAnimation} ${({ time }) => `${time}ms`};
	animation-fill-mode: forwards;
	z-index: 1;
	
	&::before {
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		background: ${({ color }) => 
			`linear-gradient(135deg, ${color + 'aa'} 25%, 60%, ${color + 'ff'}),
			linear-gradient(to right, white, white)`
		};
		border-radius: 16px;
		animation: ${({ time }) => `${time}ms`} ${opacityAnimation};
		z-index: -1;
	}
`;

export default Wrapper