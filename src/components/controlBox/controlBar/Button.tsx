import styled, { css } from 'styled-components';
// icons
import { PaletteIcon, VideoIcon, SaveIcon } from 'src/lib/svg';
// lib
import media, { mediaQueryMin, mediaValue } from 'src/lib/styles/media';
import * as styles from 'src/lib/styles/styles';
import palette from 'src/lib/styles/palette';
// types
import { Mode } from 'src/types/common';

const IconMap = {
  Palette: PaletteIcon,
  Video: VideoIcon,
  Save: SaveIcon,
};

const Button = ({ type, isSelected, mode, onClick }: Props) => {
  const Icon = IconMap[type];

  return (
    <Container mode={mode} onClick={onClick}>
      <Background mode={mode} isSelected={isSelected} />
      <Icon />
    </Container>
  );
};

const Container = styled.button<{ mode: Mode }>`
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;

  & > svg {
    width: 28px;
    height: 28px;
    opacity: 0.7;
    z-index: 1;
    fill: ${({ mode }) => (mode === 'Light' ? 'black' : 'white')};
  }

  ${mediaQueryMin(mediaValue.small)} {
    &:hover {
      & > div {
        transform: scale(5, 5);
        background-color: ${({ mode }) =>
          mode === 'Light' ? palette.purple2 : palette.purple6};
      }

      & > svg {
        opacity: 0.9;
      }
    }
  }

  ${media.small} {
    margin-right: 0;
    margin-bottom: 1rem;

    &:active {
      & > div {
        transform: scale(5, 5);
        background-color: ${({ mode }) =>
          mode === 'Light' ? palette.purple2 : palette.purple6};
      }

      & > svg {
        opacity: 0.9;
      }
    }
  }

  ${media.mobileLandscape} {
    margin-right: 0;
    margin-bottom: 1rem;

    &:active {
      & > div {
        transform: scale(5, 5);
        background-color: ${({ mode }) =>
          mode === 'Light' ? palette.purple2 : palette.purple6};
      }

      & > svg {
        opacity: 0.9;
      }
    }
  }
`;

const Background = styled.div<{ mode: Mode; isSelected: boolean }>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 8px;
  height: 8px;
  transform: scale(1, 1);
  transition: 0.2s ${styles.transition};
  background-color: rgba(0, 0, 0, 0);
  border-radius: 40px;

  ${({ mode, isSelected }) =>
    isSelected
      ? css`
          transform: scale(5, 5);
          background-color: ${mode === 'Light' ? palette.purple2 : palette.purple6};
        `
      : css``};
`;

interface Props {
  type: 'Palette' | 'Video' | 'Save';
  isSelected: boolean;
  mode: Mode;
  onClick: () => void;
}

export default Button;
