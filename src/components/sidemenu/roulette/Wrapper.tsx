import styled from 'styled-components';
// lib
import media from 'src/lib/styles/media';

const Wrapper = styled.div`
  flex: 1;
  width: 90vw;
  height: 100%;
  margin: auto;
  box-sizing: border-box;
  overflow: hidden;

  perspective: 1600px;

  ${media.small} {
    width: auto;
    max-width: 300px;
    margin: 0 0.5rem 0 0;
  }

  ${media.mobileLandscape} {
    width: auto;
    max-width: 300px;
    margin: 0;
  }
`;

export default Wrapper;
