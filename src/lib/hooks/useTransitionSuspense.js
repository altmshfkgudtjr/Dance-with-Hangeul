import { useState, useEffect, useCallback, useRef, Suspense } from 'react';

/**
 * 지연 로딩 트랜지션 추가 Hook
 * @param {object} props
 * @param {number} props.delay 로딩이 끝나고, 전환 되기 전 딜레이 시간 (ms)
 * @returns fallback에 넣을 컴포넌트, 현재 로딩여부, 트랜지션 여부
 * @example
 * const LazyComponent = lazy(() => import("../path/Component"));
 *
 * function Home() {
 *   const {
 *     suspenseFallback, eslint-plugin-react-hooks
 *     isPending,
 *     isFullfilled
 *   } = useTransitionSuspense({ delay: 1000 });
 *
 *   return (<div>
 *     {isPending && <LoadingComponent isDisappear={isFullfilled} />}
 *
 *     <Suspense fallback={suspenseFallback}>
 *       <LazyComponent />
 *     </Suspense>
 *   </div>);
 * }
 */
const useTransitionSuspense = ({ delay }) => {
  const [isPending, setIsPending] = useState(true);
  const [isFullfilled, setIsFullfilled] = useState(false);

  const fallback = useRef(
    <FallbackComponent
      delay={delay}
      setIsPending={setIsPending}
      setIsFullfilled={setIsFullfilled}
    />,
  );

  const suspense = useCallback(
    ({ children }) => DelayedSuspense(isPending, fallback.current, children),
    [isPending],
  );

  useEffect(() => {
    if (!isFullfilled) return;
    const timer = window.setTimeout(() => setIsPending(false), delay);
    return () => window.clearTimeout(timer);
  }, [isFullfilled, delay]);

  useEffect(() => {
    if (!fallback.current) return;
    fallback.current = (
      <FallbackComponent
        delay={delay}
        setIsPending={setIsPending}
        setIsFullfilled={setIsFullfilled}
      />
    );
  }, [delay]);

  return {
    isPending,
    isFullfilled,
    DelayedSuspense: suspense,
  };
};

/** Suspense fallback에 넣어줄 Component */
const FallbackComponent = ({ delay, setIsPending, setIsFullfilled }) => {
  useEffect(() => {
    setIsPending(true);
    setIsFullfilled(false);
    return () => setIsFullfilled(true);
  }, [delay, setIsPending, setIsFullfilled]);

  return null;
};

/** Delay 후에 지연 컴포넌트를 표시해주는 Suspense */
const DelayedSuspense = (isPending, fallback, children) => {
  return (
    <Suspense fallback={fallback}>
      <div style={{ display: isPending ? 'none' : 'block' }}>{children}</div>
    </Suspense>
  );
};

export default useTransitionSuspense;
