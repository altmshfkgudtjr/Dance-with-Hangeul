import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
// styles
import animations from 'src/lib/styles/animations';
import palette from 'src/lib/styles/palette';
import zIndex from 'src/lib/styles/zIndex';
import media from 'src/lib/styles/media';

/**
 * 템플릿 로딩 컴포넌트
 * @param props
 * @param props.isShow 템플릿 페이지 표시 여부
 * @param props.isClose 로딩 표시 여부
 * @param props.time 로딩 전환 트랜지션 시간
 */
const TemplateLoading = ({ isShow, isClose, time = 400 }: Props) => {
  const [isDisplay, setIsDisplay] = useState(isShow);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsDisplay(isShow), time);
    return () => window.clearTimeout(timer);
  }, [isShow, time]);

  return (
    <Wrapper time={time} isShow={isShow} isDisplay={isDisplay} isClose={isClose}>
      <Circle isClose={isClose} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{
  time: number;
  isShow: boolean;
  isDisplay: boolean;
  isClose: boolean;
}>`
  position: absolute;
  width: 3rem;
  height: 3rem;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: ${zIndex.modal};
  display: ${({ isDisplay, isClose }) => (isDisplay && !isClose ? 'block' : 'none')};
  ${({ time, isShow }) =>
    isShow
      ? css`
          animation: ${time + 100}ms ${animations.fadeIn};
        `
      : css`
          animation: ${time + 100}ms ${animations.fadeOut};
        `}

  ${media.small} {
    width: 100vw;
    height: calc(100vh - 96px);
    top: 48px;
    left: 0;
    margin: 0;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(6px);
  }

  ${media.mobileLandscape} {
    width: 100vw;
    height: calc(100vh - 96px);
    top: 48px;
    left: 0;
    margin: 0;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(6px);
  }
`;

const Circle = styled.div<{ isClose: boolean }>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 4px solid ${palette.purple4};
  border-bottom: 4px solid rgba(0, 0, 0, 0);
  ${({ isClose }) =>
    isClose
      ? css`
          animation: 1.2s ${animations.spin} infinite;
        `
      : css`
          animation: 1.2s ${animations.spin} infinite;
        `};
  transform: rotate(360deg);
  /* animation-fill-mode: forwards; */
`;

type Props = {
  isShow: boolean;
  isClose: boolean;
  time?: number;
};

export default TemplateLoading;
