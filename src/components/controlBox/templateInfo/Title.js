import styled from 'styled-components';
// lib
import animations from 'src/lib/styles/animations';

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: inherit;
  opacity: 0;
  animation: 1s ${animations.fadeInTop} 1s ease-out;
  animation-fill-mode: forwards;
`;

export default Title;
