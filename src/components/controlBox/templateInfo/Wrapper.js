import styled from 'styled-components';
// lib
import media from 'lib/styles/media';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
  margin-left: 6.25rem;

  ${media.medium} {
    margin-left: 2rem;
  }
`;

export default Wrapper;
