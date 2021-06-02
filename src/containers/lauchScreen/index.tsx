import { useState, useEffect } from 'react';
// containers
import LogoScreen from 'src/containers/lauchScreen/LogoScreen';
import QuoteScreen from 'src/containers/lauchScreen/QuoteScreen';
// components
import LaunchScreenLayout from 'src/components/layout/LaunchScreen';
// slices
import { getQuotes } from 'src/slices/common';
import { getThemes, getDefaultThemes } from 'src/slices/theme';
import { getTemplates } from 'src/slices/template';
// hooks
import { useDispatch } from 'src/lib/hooks/useStore';
// lib
import palette from 'src/lib/styles/palette';

const LaunchScreen = ({ time = 5000, isFullfilled }: Props) => {
  /** 로고가 멈춰있는 시간(ms) */
  const logoStayDuration = 2000;
  /** 화면 전환 애니메이션 시간(ms) */
  const animationDuration = 1000;

  const dispatch = useDispatch();

  const [isClose, setIsClose] = useState<boolean>(false);
  const [isNext, setIsNext] = useState<boolean>(false);

  /** 초기 데이터 사전 호출 */
  useEffect(() => {
    dispatch(getQuotes());
    dispatch(getThemes());
    dispatch(getDefaultThemes());
    dispatch(getTemplates());
  }, [dispatch]);

  /** fadeOut Animation flag 설정 */
  useEffect(() => {
    const timer = window.setTimeout(() => setIsClose(true), time + logoStayDuration);
    return () => window.clearTimeout(timer);
  }, [time, setIsClose]);

  /** fadeOut Animation이 끝난 후, 다음 화면 표시 설정 */
  useEffect(() => {
    if (!isClose) return;
    const timer = window.setTimeout(() => setIsNext(true), animationDuration);
    return () => window.clearTimeout(timer);
  }, [isClose, setIsNext]);

  return (
    <>
      {!isNext && (
        <>
          <LaunchScreenLayout time={animationDuration} isClose={isClose}>
            <LogoScreen time={time} color={palette.purple4} />
          </LaunchScreenLayout>
        </>
      )}

      {isNext && (
        <>
          <LaunchScreenLayout time={animationDuration} isClose={isFullfilled}>
            <QuoteScreen />
          </LaunchScreenLayout>
        </>
      )}
    </>
  );
};

interface Props {
  time: number;
  isFullfilled: boolean;
}

export default LaunchScreen;
