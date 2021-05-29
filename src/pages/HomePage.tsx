import { lazy } from 'react';
import { Helmet } from 'react-helmet-async';
// containers
import LaunchScreen from 'src/containers/lauchScreen';
// hook
import useTransitionSuspense from 'src/lib/hooks/useTransitionSuspense';

const HomePage = () => {
  const { isPending, isFullfilled, DelayedSuspense } = useTransitionSuspense({
    delay: 1000,
  });

  return (
    <>
      <Helmet>
        <title>한글로 춤추다</title>
      </Helmet>

      {/* LaunchScreen */}
      {isPending && <LaunchScreen time={4000} isFullfilled={isFullfilled} />}

      {/* Lazy loaded Components */}
      <DelayedSuspense>
        <Home />
      </DelayedSuspense>
    </>
  );
};

const Home = lazy(() => {
  return Promise.all([
    import(
      /* webpackChunkName: "home" */
      'src/containers/home'
    ),
    /* 
			LogoScreen duration(4000ms) + 
			Stay duration(2000ms) + 
			FadeOut duration(1000ms) + 
			QuoteScreen duration(4000ms) + 
			FadeOut duration(1000ms)
		*/
    // TODO Proudction 떄, 주석 해제하기
    // new Promise(resolve => setTimeout(resolve, 12000)),
    new Promise(resolve => setTimeout(resolve, 0)),
  ]).then(([module]) => module);
});

export default HomePage;
