import styled from 'styled-components';
// lib
import media from 'src/lib/styles/media';

const Wrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
  height: 100%;
  margin: auto;
  padding: 0.5rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
  }

  perspective: 1200px;

  ${media.small} {
    max-height: 600px;
    margin-top: 40px;
  }
`;

export default Wrapper;
