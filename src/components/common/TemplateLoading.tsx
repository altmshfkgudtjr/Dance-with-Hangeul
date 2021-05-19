import styled, { css } from 'styled-components';
// styles
import animations from 'src/lib/styles/animations';

const TemplateLoading = ({ time = 400, isClose }: Props) => {
  return (
    <Wrapper time={time} isClose={isClose}>
      <div>Loading</div>
    </Wrapper>
  );
};

const Wrapper = styled.div<Props>`
  animation: ${({ time, isClose }) =>
    isClose
      ? css`
          ${time}ms ${animations.fadeOut}
        `
      : css`
          ${time}ms ${animations.fadeIn}
        `};
  animation-fill-mode: forwards;
`;

type Props = {
  time: number;
  isClose: boolean;
};

export default TemplateLoading;
