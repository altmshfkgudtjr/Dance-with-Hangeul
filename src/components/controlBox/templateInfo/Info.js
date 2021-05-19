import styled from 'styled-components';
// lib
import animations from 'src/lib/styles/animations';

const Info = styled.p`
  opacity: 0;
  font-size: 1.2rem;
  margin-bottom: 0.4rem;
  animation: 1.4s ${animations.fadeInLeft} 0.4s;
  animation-fill-mode: forwards;
`;

export default Info;
