import styled from 'styled-components';
// icons
import { LeftIcon, RightIcon } from 'src/lib/svg';
// lib
import * as styles from 'src/lib/styles/styles';
// types
import { Mode } from 'src/types/common';

const HideBtn = ({ message, mode, onClick }: Props) => {
  return (
    <Container mode={mode} onClick={onClick}>
      <LeftIcon />
      <Message>{message}</Message>
      <RightIcon />
    </Container>
  );
};

const Container = styled.button<{ mode: Mode }>`
  color: ${({ mode }) => (mode === 'Light' ? 'black' : 'white')};

  & > svg {
    width: 12px;
    height: 12px;
    transition: 0.2s ${styles.transition};
    fill: ${({ mode }) => (mode === 'Light' ? 'black' : 'white')};

    &:nth-child(1) {
      padding-right: 4px;
    }

    &:nth-child(3) {
      padding-left: 4px;
    }
  }

  &:hover {
    & > span {
      transform: translateY(-4px);
    }

    & > svg {
      &:nth-child(1) {
        padding-right: 12px;
      }

      &:nth-child(3) {
        padding-left: 12px;
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
  message: string;
  mode: Mode;
  onClick: (e: any) => void;
}

export default HideBtn;
