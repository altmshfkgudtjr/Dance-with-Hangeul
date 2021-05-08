import styled from 'styled-components';
// lib
import animations from 'lib/styles/animations';

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  animation: 1.4s ${animations.fadeInLeft};
`;

export default Title;
