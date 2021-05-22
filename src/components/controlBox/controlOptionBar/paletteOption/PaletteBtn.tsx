import styled, { css } from 'styled-components';
// lib
import animations from 'src/lib/styles/animations';
import palette from 'src/lib/styles/palette';
import media from 'src/lib/styles/media';
import * as styles from 'src/lib/styles/styles';

const PaletteBtn = ({ time, isSelected, colors }: Props) => {
  const colorLength = colors.length;
  const gradientColor = colors.reduce((acc, cur, idx) => {
    return acc + `, ${cur} 0 ${(100 / colorLength) * (idx + 1)}%`;
  }, '');

  return (
    <Container time={time} isSelected={isSelected}>
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
  background-color: ${({ isSelected }) => (isSelected ? palette.gray5 : `rgba(0,0,0,0)`)};
  transition: background-color, margin 0.2s ${styles.transition};
  ${({ time }) =>
    css`
      animation: ${time}ms ${animations.fadeInLeft} ease-in-out;
    `};
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

  ${media.small} {
    margin-bottom: 1rem;
  }

  &:hover {
    margin-top: -2px;
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
}

export default PaletteBtn;
