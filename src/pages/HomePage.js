import { lazy } from 'react';
import { Helmet } from 'react-helmet-async';
// containers
import LaunchScreen from 'containers/lauchScreen';
// components
import HomeLayout from 'components/layout/Home';
// hook
import useTransitionSuspense from 'lib/hooks/useTransitionSuspense';

const HomePage = () => {
  const { isPending, isFullfilled, DelayedSuspense } = useTransitionSuspense({ delay: 1000 });

  return (
    <>
      <Helmet>
        <title>한글로 춤추다</title>
      </Helmet>

      {/* LaunchScreen */}
      {isPending && <LaunchScreen time={4000} isFullfilled={isFullfilled} />}

      {/* Lazy loaded Components */}
      <DelayedSuspense>
        <HomeLayout>
          <Home />
        </HomeLayout>
      </DelayedSuspense>
    </>
  );
};

const Home = lazy(() => {
  return Promise.all([
    import(
      /* webpackChunkName: "home" */
      'containers/Home'
    ),
    /* 
			LogoScreen duration(4000ms) + 
			Stay duration(2000ms) + 
			FadeOut duration(1000ms) + 
			QuoteScreen duration(4000ms) + 
			FadeOut duration(1000ms)
		*/
    new Promise(resolve => setTimeout(resolve, 12000)),
  ]).then(([module]) => module);
});

export default HomePage;
