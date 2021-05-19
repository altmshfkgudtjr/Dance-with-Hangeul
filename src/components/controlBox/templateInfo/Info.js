import styled from 'styled-components';
// lib
import animations from 'src/lib/styles/animations';

const Info = styled.p`
  opacity: 0;
  color: inherit;
  font-size: 1.2rem;
  margin-bottom: 0.4rem;
  animation: 1s ${animations.fadeInLeft} 1.2s ease-out;
  animation-fill-mode: forwards;
`;

export default Info;
