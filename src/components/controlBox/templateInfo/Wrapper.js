import styled from 'styled-components';
// lib
import media from 'src/lib/styles/media';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
  margin-left: 6.25rem;

  ${media.medium} {
    margin-left: 2rem;
  }

  color: ${({ mode }) => (mode === 'Light' ? '#000' : '#fff')};
`;

export default Wrapper;
