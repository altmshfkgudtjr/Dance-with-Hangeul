import styled from 'styled-components';
// lib
import media from 'src/lib/styles/media';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 100%;
  max-height: 1000px;
  flex: 1;
  padding: 0.5rem;

  perspective: 1200px;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  ${media.small} {
    max-height: 600px;
    margin-top: 40px;
  }
`;

export default Wrapper;
