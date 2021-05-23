import styled, { css } from 'styled-components';
// icons
import { PrevIcon, NextIcon } from 'src/lib/svg';
// styles
import * as styles from 'src/lib/styles/styles';
// types
import { Mode } from 'src/types/common';

const MoveBtn = ({ direction, mode, step, onClick }: Props) => {
  const message = direction === 'Left' ? 'PREV' : 'NEXT';

  const isDisplay =
    direction === 'Left' ? (step > 0 ? true : false) : step < 2 ? true : false;

  return (
    <Container direction={direction} mode={mode} isDisplay={isDisplay} onClick={onClick}>
      {direction === 'Left' && <PrevIcon />}

      <Message>{message}</Message>

      {direction === 'Right' && <NextIcon />}
    </Container>
  );
};

const Container = styled.button<{
  direction: 'Left' | 'Right';
  mode: Mode;
  isDisplay: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ mode }) => (mode === 'Light' ? 'black' : 'white')};
  cursor: ${({ isDisplay }) => (isDisplay ? 'pointer' : 'default')};
  opacity: ${({ isDisplay }) => (isDisplay ? '1' : '0')};

  & > svg {
    width: 12px;
    height: 12px;
    margin-bottom: 2px;
    fill: ${({ mode }) => (mode === 'Light' ? 'black' : 'white')};
    transition: 0.2s ${styles.transition};
    ${({ direction }) =>
      direction === 'Left'
        ? css`
            margin-right: 4px;
          `
        : css`
            margin-left: 4px;
          `}
  }

  &:active {
    & > span {
      ${({ direction }) =>
        direction === 'Left'
          ? css`
              transform: translateX(8px);
            `
          : css`
              transform: translateX(-8px);
            `}
    }
  }
`;

const Message = styled.span`
  color: inherit;
  font-size: 14px;
  transition: 0.2s ${styles.transition};
  ${styles.noselect};
`;

interface Props {
  direction: 'Left' | 'Right';
  mode: Mode;
  step: number;
  onClick?: () => void;
}

export default MoveBtn;
