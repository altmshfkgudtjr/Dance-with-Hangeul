import React, { useState, useEffect } from 'react'


/**
 * 지연 로딩 트랜지션 추가 Hook
 * @param {object} props
 * @param {number} props.time 지연 로딩이 끝난 후, 시작되는 트랜지션 시간 (ms) 
 * @returns fallback에 넣을 컴포넌트, 현재 로딩여부, 트랜지션 여부
 * @example
 * const LazyComponent = lazy(() => import("../path/Component"));
 * 
 * function Home() {
 *   const {
 *     FallbackComponent, 
 *     isPending, 
 *     isAnimation
 *   } = useCheckLazy({ time: 1000 });
 * 
 *   return (<div>
 *     {isPending && <Loading isAnimation={isAnimation} />}
 *     
 *     <Suspense fallback={FallbackComponent}>
 *       <LazyComponent />
 *     </Suspense>
 *   </div>);
 * }
 */
const useCheckLazy = ({ time }) => {
	const [isPending, setIsPending] = useState(true);
	const [isAnimation, setIsAnimation] = useState(false);
	

	/** Suspense fallback에 넣어줄 Component */
	const FallbackComponent = () => {
		useEffect(() => {
			setIsAnimation(false);
			setIsPending(true);
			return () => {
				setIsAnimation(true);
				window.setTimeout(() => setIsPending(false), time);
			}
		}, []);
		
		return <div />;
	}
	

	return {
		FallbackComponent,
		isPending,
		isAnimation
	};
}

export default useCheckLazy