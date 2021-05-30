import styled from 'styled-components';
// lib
import * as styles from 'src/lib/styles/styles';
import palette from 'src/lib/styles/palette';
import media, { mediaQueryMin, mediaValue } from 'src/lib/styles/media';
// types
import { Device, Mode } from 'src/types/common';

const ConsonantBtn = ({ name, device, mode, isSelected, onClick }: Props) => {
  return (
    <Container isSelected={isSelected} device={device} mode={mode} onClick={onClick}>
      <Name>{name}</Name>
    </Container>
  );
};

const Container = styled.button<{ isSelected: boolean; device: Device; mode: Mode }>`
  width: 40px;
  height: 40px;
  margin-bottom: 2px;
  border-radius: 8px;
  background-color: ${({ isSelected }) =>
    isSelected ? palette.purple5 : `rgba(0,0,0,0)`};
  color: ${({ isSelected, mode, device }) => {
    if (isSelected || (mode === 'Dark' && device === 'Desktop')) return palette.white;
    else return palette.gray6;
  }};
  transition: 0.2s ${styles.transition};

  ${mediaQueryMin(mediaValue.small)} {
    &:hover {
      background-color: ${palette.purple3};
    }
  }

  ${media.small} {
    margin-bottom: 8px;

    &:active {
      background-color: ${palette.purple3};
    }
  }

  ${media.mobileLandscape} {
    width: 50px;
    height: 50px;
    margin: 0;

    &:active {
      background-color: ${palette.purple3};
    }
  }
`;

const Name = styled.span`
  display: block;
  color: inherit;
  font-size: 16px;
  font-weight: 900;
  ${styles.noselect};
`;

interface Props {
  name: string;
  device: Device;
  mode: Mode;
  isSelected: boolean;
  onClick: () => void;
}

export default ConsonantBtn;
