import styled from 'styled-components';
// lib
import media from 'src/lib/styles/media';
import palette from 'src/lib/styles/palette';

const SelectedAria = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: calc(100% - 1rem);
  height: 64px;
  border-radius: 16px;
  background-color: ${palette.purple4};
  opacity: 0.2;
  z-index: -1;

  ${media.small} {
    width: 94vw;
    height: 48px;
  }
`;

export default SelectedAria;