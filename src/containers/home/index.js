import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// containers
import HomeDesktop from 'src/containers/home/HomeDesktop';
import HomeMobile from 'src/containers/home/HomeMobile';
import Header from 'src/containers/Header';
// import WordAnime from 'src/containers/WordAnime';
// components
import HomeLayout from 'src/components/layout/Home';
// utils
import { mobileChecker } from 'src/lib/utils/commonUtils';
// slices
import { setRandomTemplate } from 'src/slices/template';

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
      {/* <WordAnime /> */}

      <HomeLayout>
        <Header device={device} />

        {device === 'Desktop' && <HomeDesktop />}
        {device === 'Mobile' && <HomeMobile />}
      </HomeLayout>
    </>
  );
};

export default Home;
