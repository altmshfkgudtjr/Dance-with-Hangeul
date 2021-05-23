import styled, { css } from 'styled-components';
// icons
import { RightIcon } from 'src/lib/svg';
// lib
import * as styles from 'src/lib/styles/styles';
import palette from 'src/lib/styles/palette';
import media, { mediaQueryMin, mediaValue } from 'src/lib/styles/media';
import animations from 'src/lib/styles/animations';
// types
import { Mode } from 'src/types/common';

const Btn = ({ message, time, mode, onClick }: Props) => {
  return (
    <Container time={time} mode={mode} onClick={onClick}>
      <Message>{message}</Message>
      <RightIcon />
    </Container>
  );
};

const Container = styled.button<{ time: number; mode: Mode }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  height: 32px;
  border-radius: 4px;
  margin-bottom: 12px;
  box-sizing: border-box;
  padding: 0 0.5rem;
  /* background-color: ${palette.purple3}; */
  transition: 0.2s ${styles.transition};
  margin-left: 0;
  color: ${({ mode }) => (mode === 'Light' ? 'black' : 'white')};
  opacity: 0;
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

  & > svg {
    width: 12px;
    height: 12px;
    fill: ${({ mode }) => (mode === 'Light' ? 'black' : 'white')};
  }

  ${media.small} {
    padding-left: 0;
    width: 80px;
    background-color: rgba(0, 0, 0, 0);
  }

  ${mediaQueryMin(mediaValue.small)} {
    &:hover {
      margin-left: 8px;
      /* background-color: ${palette.purple5}; */
      color: white;

      & > svg {
        fill: white;
      }
    }
  }

  ${media.small} {
    &:active {
      margin-left: 8px;
    }
  }
`;

const Message = styled.span`
  color: inherit;
  font-size: 14px;
  ${styles.noselect};
`;

interface Props {
  message: string;
  time: number;
  mode: Mode;
  onClick: () => void;
}

export default Btn;
