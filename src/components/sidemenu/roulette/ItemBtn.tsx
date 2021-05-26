import styled from 'styled-components';
// lib
import * as styles from 'src/lib/styles/styles';
import media from 'src/lib/styles/media';
// types
import { Template } from 'src/types/template';

const ItemBtn = ({ idx, template, onClick }: Props) => {
  return (
    <Container idx={idx} onClick={onClick}>
      <Message>{template.name}</Message>
    </Container>
  );
};

const Container = styled.button<{ idx: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  margin: 6px 0;
  transform: ${({ idx }) => `rotateX(${-80 - idx * 20}deg) translateZ(85px);`}
    ${media.small} {
    width: 94vw;
    height: 48px;
  }
  backface-visibility: hidden;
`;

const Message = styled.span`
  font-size: 24px;
  font-weight: 600;
  ${styles.noselect};
`;

interface Props {
  idx: number;
  template: Template;
  onClick: () => void;
}

export default ItemBtn;
