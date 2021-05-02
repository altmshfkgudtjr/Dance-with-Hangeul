import { lazy, Suspense } from 'react'
import { Helmet } from "react-helmet-async"
// containers
import LaunchScreen from 'containers/LaunchScreen'
// components
import LaunchScreenLayout from 'components/layout/LaunchScreen'
import HomeLayout from 'components/layout/Home'
// lib
import palette from 'lib/styles/palette'

const Home = lazy(() => {
  return Promise.all([
    import("containers/Home"),
    new Promise(resolve => setTimeout(resolve, 7000))
  ])
  .then(([moduleExports]) => moduleExports);
});

const HomePage = () => {
	return (<>
		<Helmet>
			<title>한글로 춤추다</title>
		</Helmet>
		
		<Suspense fallback={<LaunchScreenLayout>
			<LaunchScreen time={5000} color={palette.purple4} />
		</LaunchScreenLayout>}>
			<HomeLayout>
				<Home />
			</HomeLayout>
		</Suspense>
	</>);
}

export default HomePage