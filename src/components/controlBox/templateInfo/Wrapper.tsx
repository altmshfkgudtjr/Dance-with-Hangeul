import styled from 'styled-components';
// lib
import media from 'src/lib/styles/media';
// types
import { Mode } from 'src/types/common';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
  margin-left: 6.25rem;

  ${media.medium} {
    margin-left: 2rem;
  }

  color: ${({ mode }: { mode: Mode }) => (mode === 'Light' ? '#000' : '#fff')};
`;

export default Wrapper;
