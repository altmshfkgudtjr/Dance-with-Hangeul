import styled from 'styled-components';
// lib
import * as styles from 'src/lib/styles/styles';
import media from 'src/lib/styles/media';
// types
import { Template } from 'src/types/template';

const ItemBtn = ({ template, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <Message>{template.name}</Message>
    </Container>
  );
};

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  margin: 6px 0;

  ${media.small} {
    width: 94vw;
    height: 48px;
  }
`;

const Message = styled.span`
  font-size: 24px;
  font-weight: 600;
  ${styles.noselect};
`;

interface Props {
  template: Template;
  onClick: () => void;
}

export default ItemBtn;
