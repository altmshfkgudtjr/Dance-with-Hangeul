import styled from 'styled-components';
// lib
import media from 'lib/styles/media';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;

  ${media.medium} {
    width: 86vw;
  }

  ${media.small} {
    width: 96vw;
  }
`;

export default Wrapper;
