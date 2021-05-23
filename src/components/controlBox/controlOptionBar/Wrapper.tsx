import styled, { css } from 'styled-components';
// lib
import animations from 'src/lib/styles/animations';
import media from 'src/lib/styles/media';

const Wrapper = ({ time, isChanged, children }: Props) => {
  return (
    <Container time={time} isChanged={isChanged}>
      {children}
    </Container>
  );
};

const Container = styled.div<{ time: number; isChanged: boolean }>`
  ${({ time, isChanged }) =>
    isChanged
      ? css`
          animation: ${time}ms ${animations.fadeOutTop} ease;
        `
      : css`
          animation: ${time}ms ${animations.fadeInTop} ease;
        `}
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
  children?: React.ReactNode;
}

export default Wrapper;
