import styled from 'styled-components';
// lib
import * as styles from 'src/lib/styles/styles';
import media from 'src/lib/styles/media';
// types
import { Mode } from 'src/types/common';
import { Template } from 'src/types/template';

const ItemBtn = ({ idx, isEmphasized, mode, template, onClick }: Props) => {
  return (
    <Container data-idx={idx} idx={idx} onClick={onClick}>
      <Message mode={mode} isEmphasized={isEmphasized}>
        {template.name}
      </Message>
    </Container>
  );
};

const Container = styled.button<{ idx: number }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  padding: 6px 0;
  transform: ${({ idx }) => `rotateX(${0 - idx * 12}deg) translateZ(340px)`};
  backface-visibility: hidden;

  ${media.small} {
    width: 94vw;
    height: 48px;
  }
`;

const Message = styled.span<{ mode: Mode; isEmphasized: boolean }>`
  font-size: 21px;
  font-weight: 600;
  color: ${({ mode }) => (mode === 'Light' ? 'black' : 'white')};
  opacity: ${({ isEmphasized }) => (isEmphasized ? '1' : '0.3')};
  transition: opacity 1.2s ${styles.transition};
  ${styles.noselect};

  ${media.small} {
    color: black;
  }
`;

interface Props {
  idx: number;
  isEmphasized: boolean;
  mode: Mode;
  template: Template;
  onClick: (e: any) => void;
}

export default ItemBtn;
