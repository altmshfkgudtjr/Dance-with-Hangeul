import styled from 'styled-components';
// lib
import media from 'src/lib/styles/media';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 32px;

  ${media.small} {
  }
`;

export default Wrapper;
