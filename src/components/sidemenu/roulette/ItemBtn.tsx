import styled from 'styled-components';
// lib
import * as styles from 'src/lib/styles/styles';
import media from 'src/lib/styles/media';
// types
import { Mode } from 'src/types/common';
import { Template } from 'src/types/template';

const ItemBtn = ({ idx, mode, template, onClick }: Props) => {
  return (
    <Container data-idx={idx} idx={idx} onClick={onClick}>
      <Message mode={mode}>{template.name}</Message>
    </Container>
  );
};

const Container = styled.button<{ idx: number }>`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  margin: 6px 0;
  transform: ${({ idx }) => `rotateX(${0 - idx * 20}deg) translateZ(300px)`};
  backface-visibility: hidden;
  opacity: 0.8;

  ${media.small} {
    width: 94vw;
    height: 48px;
  }
`;

const Message = styled.span<{ mode: Mode }>`
  font-size: 24px;
  font-weight: 600;
  color: ${({ mode }) => (mode === 'Light' ? 'black' : 'white')};
  ${styles.noselect};

  ${media.small} {
    color: black;
  }
`;

interface Props {
  idx: number;
  mode: Mode;
  template: Template;
  onClick: (e: any) => void;
}

export default ItemBtn;
