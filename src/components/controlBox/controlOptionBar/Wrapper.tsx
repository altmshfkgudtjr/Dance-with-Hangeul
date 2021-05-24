import styled, { css } from 'styled-components';
// lib
import animations from 'src/lib/styles/animations';
import media from 'src/lib/styles/media';

const Wrapper = ({ time, isChanged, isFullscreen, children }: Props) => {
  return (
    <Container time={time} isFullscreen={isFullscreen} isChanged={isChanged}>
      {children}
    </Container>
  );
};

const Container = styled.div<{ time: number; isFullscreen: boolean; isChanged: boolean }>`
  ${({ time, isFullscreen, isChanged }) => {
    if (isChanged && isFullscreen) {
      return css`
        animation: 400ms ${animations.fadeOutLeft} ease-in-out;
      `;
    }

    if (isChanged && !isFullscreen) {
      return css`
        animation: ${time}ms ${animations.fadeOutTop} ease;
      `;
    }

    if (!isChanged && isFullscreen) {
      return css`
        animation: 400ms ${animations.fadeOutLeft} ease-in-out;
      `;
    }

    if (!isChanged && !isFullscreen) {
      return css`
        animation: 400ms ${animations.fadeInLeft} ease-in-out;
      `;
    }
  }};
  animation-fill-mode: forwards;

  margin-top: 1rem;

  ${media.small} {
    position: absolute;
    top: 1rem;
    margin-top: 0;
  }

  ${media.mobileLandscape} {
    position: absolute;
    top: 1rem;
    margin-top: 0;
  }
`;

interface Props {
  time: number;
  isChanged: boolean;
  isFullscreen: boolean;
  children?: React.ReactNode;
}

export default Wrapper;
