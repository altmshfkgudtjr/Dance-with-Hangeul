import { useState, useEffect } from 'react'
// containers
import LogoScreen from 'containers/lauchScreen/LogoScreen'
import QuoteScreen from 'containers/lauchScreen/QuoteScreen'
// components
import LaunchScreenLayout from 'components/layout/LaunchScreen'
// lib
import palette from 'lib/styles/palette'


const LaunchScreen = ({ time=5000, isFullfilled }) => {
	const animationDuration = 1000;
	const [isClose, setIsClose] = useState(false);
	const [isNext, setIsNext] = useState(false);


	/** fadeOut Animation flag 설정 */
	useEffect(() => {
		const timer = window.setTimeout(() => setIsClose(true), time + 2000);
		return () => window.clearTimeout(timer);
	}, [time, setIsClose]);

	/** fadeOut Animation이 끝난 후, 다음 화면 표시 설정 */
	useEffect(() => {
		if (!isClose) return;
		const timer = window.setTimeout(() => setIsNext(true), animationDuration);
		return () => window.clearTimeout(timer);
	}, [isClose, setIsNext]);

	
	return (<>
		{!isNext && <>
			<LaunchScreenLayout 
				isClose={isClose} 
				time={animationDuration}
			>
				<LogoScreen time={time} color={palette.purple4} />
			</LaunchScreenLayout>
		</>}

		{isNext && <>
			<LaunchScreenLayout 
				isClose={isFullfilled} 
				time={animationDuration}
			>
				<QuoteScreen time={time} />
			</LaunchScreenLayout>
		</>}
	</>);
}


export default LaunchScreen