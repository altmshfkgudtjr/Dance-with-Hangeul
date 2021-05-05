import { lazy } from 'react'
import { Helmet } from "react-helmet-async"
// containers
import LaunchScreen from 'containers/LaunchScreen'
// components
import LaunchScreenLayout from 'components/layout/LaunchScreen'
import HomeLayout from 'components/layout/Home'
// hook
import useTransitionSuspense from 'lib/hooks/useTransitionSuspense'
// lib
import palette from 'lib/styles/palette'


const Home = lazy(() => {
	return Promise.all([
		import(
			/* webpackChunkName: "home" */ 
			"containers/Home"
		),
		// Animation duration(5000ms) + FadeOut duration(1000ms) + Stay duration(1000ms)
		new Promise(resolve => setTimeout(resolve, 7000))
  ])
  .then(([module]) => module);
});

const HomePage = () => {
	const {
		isPending, 
		isFullfilled,
		DelayedSuspense
	} = useTransitionSuspense({ delay: 1000 });

	
	return (<>
		<Helmet>
			<title>한글로 춤추다</title>
		</Helmet>

		{/* LaunchScreen */}
		{isPending && <>
			<LaunchScreenLayout isClose={isFullfilled} time={1000 + 100}>
				<LaunchScreen time={5000} color={palette.purple4} />
			</LaunchScreenLayout>
		</>}
		
		{/* Lazy loaded Components */}
		<DelayedSuspense>
			<HomeLayout>
				<Home />
			</HomeLayout>
		</DelayedSuspense>
	</>);
}


export default HomePage