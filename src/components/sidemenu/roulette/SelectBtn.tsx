import styled from 'styled-components';
// lib
import media from 'src/lib/styles/media';
import palette from 'src/lib/styles/palette';
import * as styles from 'src/lib/styles/styles';
// icons
import { PlayIcon } from 'src/lib/svg';

const SelectBtn = ({ onClick }: Props) => {
  return (
    <Button onClick={onClick}>
      <PlayIcon />
    </Button>
  );
};

const Button = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 12px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  margin-right: 12px;
  background-color: ${palette.purple5};
  opacity: 0.6;
  transition: 0.2s ${styles.transition};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);

  & > svg {
    width: 18px;
    height: 18px;
    fill: white;
  }

  &:hover {
    opacity: 1;
  }

  &:active {
    opacity: 1;
    background-color: ${palette.purple5};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16) inset;
  }

  ${media.small} {
    display: none;
  }
`;

interface Props {
  onClick: () => void;
}

export default SelectBtn;
