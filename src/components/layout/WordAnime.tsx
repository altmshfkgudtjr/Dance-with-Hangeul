import styled, { css } from 'styled-components';
// lib
import animations from 'src/lib/styles/animations';

const WordAnimeLayout = styled.div<{ time: number; isAnime: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  ${({ time, isAnime }) =>
    isAnime
      ? css`
          animation: ${time}ms ${animations.fadeOut} ease-in-out;
        `
      : ``}
`;

export default WordAnimeLayout;
