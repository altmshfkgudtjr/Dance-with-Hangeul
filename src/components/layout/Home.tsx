import styled from 'styled-components';
// lib
import animations from 'src/lib/styles/animations';
import media from 'src/lib/styles/media';

const HomeLayout = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  animation: 2s ${animations.fadeIn};

  ${media.small} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  ${media.mobileLandscape} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export default HomeLayout;
