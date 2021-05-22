import { useState, useEffect, useCallback } from 'react';
// containers
import HomeDesktop from 'src/containers/home/HomeDesktop';
import HomeMobile from 'src/containers/home/HomeMobile';
import Header from 'src/containers/Header';
import WordAnime from 'src/containers/WordAnime';
// components
import HomeLayout from 'src/components/layout/Home';
// utils
import { mobileChecker } from 'src/lib/utils/commonUtils';
// slices
import { setRandomTemplate } from 'src/slices/template';
// hooks
import { useDispatch } from 'src/lib/hooks/useStore';
// types
import { Device } from 'src/types/common';

const Home = () => {
  const dispatch = useDispatch();
  const [device, setDevice] = useState<Device | null>(null);

  /** 디바이스 검사 함수 */
  const detectDevice = useCallback(() => {
    if (mobileChecker()) {
      setDevice('Mobile');
    } else {
      setDevice('Desktop');
    }
  }, [setDevice]);

  /** 랜덤 템플릿 설정 */
  useEffect(() => {
    dispatch(setRandomTemplate());
  }, [dispatch]);

  /** 디바이스 검사 이벤트 등록 */
  useEffect(() => {
    detectDevice();
    window.addEventListener('resize', detectDevice);
    return () => window.removeEventListener('resize', detectDevice);
  }, [detectDevice]);

  return (
    <>
      <WordAnime />

      <HomeLayout>
        {device && <Header device={device} />}

        {device === 'Desktop' && <HomeDesktop />}
        {device === 'Mobile' && <HomeMobile />}
      </HomeLayout>
    </>
  );
};

export default Home;
