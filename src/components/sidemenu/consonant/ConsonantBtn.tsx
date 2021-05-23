import styled from 'styled-components';
// lib
import * as styles from 'src/lib/styles/styles';
import palette from 'src/lib/styles/palette';

const ConsonantBtn = ({ name, isSelected, onClick }: Props) => {
  return (
    <Container isSelected={isSelected} onClick={onClick}>
      <Name>{name}</Name>
    </Container>
  );
};

const Container = styled.button<{ isSelected: boolean }>`
  width: 40px;
  height: 40px;
  margin-bottom: 2px;
  border-radius: 8px;
  background-color: ${({ isSelected }) =>
    isSelected ? palette.purple4 : `rgba(0,0,0,0)`};
  color: ${({ isSelected }) => (isSelected ? palette.white : palette.gray6)};
  transition: 0.2s ${styles.transition};

  &:hover {
    background-color: ${palette.purple2};
  }
`;

const Name = styled.span`
  display: block;
  color: inherit;
  margin-top: 3px;
  font-size: 18px;
  font-weight: 900;
`;

interface Props {
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

export default ConsonantBtn;
