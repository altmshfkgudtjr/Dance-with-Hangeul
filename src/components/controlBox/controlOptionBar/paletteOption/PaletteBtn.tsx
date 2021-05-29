import styled, { css } from 'styled-components';
// lib
import animations from 'src/lib/styles/animations';
import palette from 'src/lib/styles/palette';
import media, { mediaQueryMin, mediaValue } from 'src/lib/styles/media';
import * as styles from 'src/lib/styles/styles';

const PaletteBtn = ({ time, isSelected, colors, onClick }: Props) => {
  const colorLength = colors.length;
  const gradientColor = colors.reduce((acc, cur, idx) => {
    return acc + `, ${cur} 0 ${(100 / colorLength) * (idx + 1)}%`;
  }, '');

  return (
    <Container time={time} isSelected={isSelected} onClick={onClick}>
      <Color gradientColor={gradientColor.slice(2)} />
    </Container>
  );
};

const Container = styled.button<{ time: number; isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin-right: 1rem;
  opacity: 0;
  box-shadow: 0 0 0 3px
    ${({ isSelected }) => (isSelected ? palette.purple4 : `rgba(0,0,0,0)`)};
  transition: background-color, margin 0.2s ${styles.transition};
  ${({ time }) =>
    css`
      animation: ${time}ms ${animations.fadeInLeft} ease-in-out;
    `};
  background-color: rgba(150, 150, 150, 0.3);
  animation-fill-mode: forwards;

  &:nth-child(1) {
    animation-delay: 100ms;
  }
  &:nth-child(2) {
    animation-delay: 200ms;
  }
  &:nth-child(3) {
    animation-delay: 300ms;
  }
  &:nth-child(4) {
    animation-delay: 400ms;
  }
  &:nth-child(5) {
    animation-delay: 500ms;
  }

  ${mediaQueryMin(mediaValue.small)} {
    &:hover {
      margin-top: -2px;
    }
  }

  ${media.small} {
    margin-bottom: 1rem;

    &:active {
      margin-left: 8px;
    }
  }

  ${media.mobileLandscape} {
    margin-bottom: 1rem;

    &:active {
      margin-left: 8px;
    }
  }
`;

const Color = styled.div<{ gradientColor: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-image: ${({ gradientColor }) => `conic-gradient(${gradientColor})`};
`;

interface Props {
  time: number;
  isSelected: boolean;
  colors: string[];
  onClick: () => void;
}

export default PaletteBtn;
