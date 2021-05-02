import { lazy, Suspense } from 'react'
import { Helmet } from "react-helmet-async"
// containers
import LaunchScreen from 'containers/LaunchScreen'
// components
import LaunchScreenLayout from 'components/layout/LaunchScreen'
import HomeLayout from 'components/layout/Home'
// hook
import useCheckLazy from 'lib/hooks/useCheckLazy'
// lib
import palette from 'lib/styles/palette'


const Home = lazy(() => {
	return Promise.all([
		import("containers/Home"),
    new Promise(resolve => setTimeout(resolve, 7000))
  ])
  .then(([module]) => module);
});

const HomePage = () => {
	const {
		FallbackComponent, 
		isPending, 
		isAnimation
	} = useCheckLazy({ time: 1000 });

	
	return (<>
		<Helmet>
			<title>한글로 춤추다</title>
		</Helmet>

		{isPending && <>
			<LaunchScreenLayout isClose={isAnimation} time={1000}>
				<LaunchScreen time={5000} color={palette.purple4} />
			</LaunchScreenLayout>
		</>}
		
		<Suspense fallback={<FallbackComponent />} >
			<HomeLayout>
				<Home />
			</HomeLayout>
		</Suspense>
	</>);
}


export default HomePage