import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// containers
import HomeDesktop from 'containers/home/HomeDesktop';
import HomeMobile from 'containers/home/HomeMobile';
import Header from 'containers/Header';
import WordAnime from 'containers/WordAnime';
// components
import HomeLayout from 'components/layout/Home';
// utils
import { mobileChecker } from 'lib/utils/commonUtils';
// slices
import { setRandomTemplate } from 'slices/template';

const Home = () => {
  const dispatch = useDispatch();
  const [device, setDevice] = useState(null);

  /** 랜덤 템플릿 설정 */
  useEffect(() => {
    dispatch(setRandomTemplate());
  }, [dispatch]);

  /** 데스크탑/모바일 설정 */
  useEffect(() => {
    if (mobileChecker()) {
      setDevice('Mobile');
    } else {
      setDevice('Desktop');
    }
  }, [setDevice]);

  return (
    <>
      <WordAnime />

      <HomeLayout>
        <Header device={device} />

        {device === 'Desktop' && <HomeDesktop />}
        {device === 'Mobile' && <HomeMobile />}
      </HomeLayout>
    </>
  );
};

export default Home;
