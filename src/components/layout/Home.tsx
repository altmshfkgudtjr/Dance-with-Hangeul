import styled from 'styled-components';
// lib
import animations from 'src/lib/styles/animations';

const HomeLayout = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  animation: 2s ${animations.fadeIn};
`;

export default HomeLayout;
