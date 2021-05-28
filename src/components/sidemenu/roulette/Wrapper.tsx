import styled from 'styled-components';
// lib
import media from 'src/lib/styles/media';

const Wrapper = styled.div`
  flex: 1;
  width: 90vw;
  height: 100%;
  margin: auto;
  padding: 0.5rem;
  overflow: hidden;

  &::-webkit-scrollbar {
  }

  perspective: 1200px;

  ${media.small} {
    max-height: 600px;
  }

  ${media.xsmall} {
    max-height: 400px;
  }
`;

export default Wrapper;
