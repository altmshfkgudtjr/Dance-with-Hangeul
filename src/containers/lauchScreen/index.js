import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
// containers
import LogoScreen from 'containers/lauchScreen/LogoScreen'
import QuoteScreen from 'containers/lauchScreen/QuoteScreen'
// components
import LaunchScreenLayout from 'components/layout/LaunchScreen'
// slices
import { getQuotes } from 'slices/common'
import { getThemes } from 'slices/theme'
import { getTemplates } from 'slices/template'
// lib
import palette from 'lib/styles/palette'


const LaunchScreen = ({ time=5000, isFullfilled }) => {
	/** 로고가 멈춰있는 시간(ms) */
	const logoStayDuration = 2000;
	/** 화면 전환 애니메이션 시간(ms) */
	const animationDuration = 1000;
	
	const dispatch = useDispatch();
	
	const [isClose, setIsClose] = useState(false);
	const [isNext, setIsNext] = useState(false);


	/** 초기 데이터 사전 호출 */
	useEffect(() => {
		dispatch(getQuotes());
		dispatch(getThemes());
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