import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
// lib
import animations from 'src/lib/styles/animations';
import media from 'src/lib/styles/media';

const HomeContent = ({ time, step, isDirection, children }: Props) => {
  const [anime, setAnime] = useState<Anime>({
    direction: null,
    isClose: false,
  });

  useEffect(() => {
    setAnime({ direction: isDirection, isClose: true });
    const timer = window.setTimeout(() => {
      setAnime({ direction: isDirection, isClose: false });
    }, time);
    return () => window.clearTimeout(timer);
  }, [step, time, isDirection, setAnime]);

  return (
    <Container time={time} anime={anime}>
      {children}
    </Container>
  );
};

const Container = styled.div<{ time: number; anime: Anime }>`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${({ time, anime }) => {
    if (anime.isClose && anime.direction === 'Left') {
      return css`
        animation: ${time}ms ${animations.fadeOutRightMenu} ease-in-out;
      `;
    }

    if (anime.isClose && anime.direction === 'Right') {
      return css`
        animation: ${time}ms ${animations.fadeOutLeftMenu} ease-in-out;
      `;
    }

    if (!anime.isClose && anime.direction === 'Left') {
      return css`
        animation: ${time}ms ${animations.fadeInLeftMenu} ease-in-out;
      `;
    }

    if (!anime.isClose && anime.direction === 'Right') {
      return css`
        animation: ${time}ms ${animations.fadeInRightMenu} ease-in-out;
      `;
    }
  }}

  ${media.small} {
    max-height: calc(100% - 48px);
  }
`;

interface Props {
  time: number;
  step: number;
  isDirection: Direction;
  children?: React.ReactNode;
}

type Direction = 'Left' | 'Right' | null;

type Anime = {
  isClose: boolean;
  direction: Direction;
};

export default HomeContent;
