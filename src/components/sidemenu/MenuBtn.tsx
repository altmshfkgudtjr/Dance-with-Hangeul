import styled from 'styled-components';
// icons
import { NextIcon, PrevIcon } from 'src/lib/svg';
// lib
import * as styles from 'src/lib/styles/styles';
import media, { mediaQueryMin, mediaValue } from 'src/lib/styles/media';
// types
import { Mode } from 'src/types/common';

const MenuBtn = ({ isOpen, mode, onClick }: Props) => {
  return (
    <Container mode={mode} onClick={onClick}>
      <Message>{isOpen ? 'HIDE MENU' : 'SHOW MENU'}</Message>
      {isOpen && <NextIcon />}
      {!isOpen && <PrevIcon />}
    </Container>
  );
};

const Container = styled.button<{ mode: Mode }>`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100px;
  height: 32px;
  top: 0;
  bottom: 0;
  left: -132px;
  margin: auto;
  color: ${({ mode }) => (mode === 'Light' ? 'black' : 'white')};

  & > svg {
    width: 12px;
    height: 12px;
    transition: 0.2s ${styles.transition};
    margin-left: 4px;
    fill: ${({ mode }) => (mode === 'Light' ? 'black' : 'white')};
  }

  ${mediaQueryMin(mediaValue.medium)} {
    &:hover {
      & > span {
        margin-left: -8px;
      }
    }
  }

  ${media.medium} {
    &:active {
      & > span {
        margin-left: -8px;
      }
    }
  }
`;

const Message = styled.span`
  color: inherit;
  font-size: 14px;
  transition: 0.2s ${styles.transition};
`;

interface Props {
  isOpen: boolean;
  mode: Mode;
  onClick: (e: any) => void;
}

export default MenuBtn;
