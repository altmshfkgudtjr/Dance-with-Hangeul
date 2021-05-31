import { useState, useEffect } from 'react';
// containers
import Header from 'src/containers/Header';
import ControlBar from 'src/containers/controlBox/ControlBar';
import ControlOptionBar from 'src/containers/controlBox/ControlOptionBar';
import Consonant from 'src/containers/sidemenu/Consonant';
import Roulette from 'src/containers/sidemenu/Roulette';
// components
import MobileWrapper from 'src/components/sidemenu/MobileWrapper';
import HomeContent from 'src/components/layout/HomeContent';

const HomeMobile = ({ setShowCanvas }: Props) => {
  const TransitionTime = 400;
  const [isDirection, setIsDirection] = useState<'Left' | 'Right' | null>(null);
  /** [step] 0: 자음, 1: 템플릿, 2: 애니메이션 */
  const [step, setStep] = useState<number>(0);
  const [viewStep, setViewStep] = useState<number>(step);

  /** 이전 단계 이동 */
  const onClickPrev = () => {
    setIsDirection('Left');
    setStep(v => {
      if (v === 0) return v;
      return v - 1;
    });
  };

  /** 다음 단계 이동 */
  const onClickNext = () => {
    setIsDirection('Right');
    setStep(v => {
      if (v === 1) return v;
      return v + 1;
    });
  };

  /** Content 지연 표시 */
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setViewStep(step);
      if (step === 1) setShowCanvas(true);
      else setShowCanvas(false);
    }, TransitionTime);
    return () => window.clearTimeout(timer);
  }, [step, setViewStep, setShowCanvas]);

  return (
    <>
      <Header
        device="Mobile"
        screenStep={step}
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
      />

      <HomeContent time={TransitionTime} step={step} isDirection={isDirection}>
        {/* 룰렛 상태 유지를 위한 조절 */}
        <MobileWrapper isShow={viewStep === 0}>
          <Consonant device="Mobile" />
          <Roulette device="Mobile" />
        </MobileWrapper>
        {viewStep === 1 && (
          <>
            <ControlBar device="Mobile" />
            <ControlOptionBar device="Mobile" />
          </>
        )}
      </HomeContent>
    </>
  );
};

interface Props {
  setShowCanvas: (value: boolean) => void;
}

export default HomeMobile;
