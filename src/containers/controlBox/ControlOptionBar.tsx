import { useState, useEffect } from 'react';
// containers
import Palette from 'src/containers/controlBox/controlOptions/PaletteOption';
import Save from 'src/containers/controlBox/controlOptions/SaveOption';
// components
import Wrapper from 'src/components/controlBox/controlOptionBar/Wrapper';
// hooks
import { useSelector } from 'src/lib/hooks/useStore';
// types
import { Device } from 'src/types/common';
import { ControlOption } from 'src/types/slices/common';

const ControlOptionBar = ({ device }: Props) => {
  const TransitionTime = 400;

  const controlOption = useSelector(state => state.common.controlOption);
  const isFullscreen = useSelector(state => state.common.isFullscreen);

  const [optionType, setOptionType] = useState<ControlOption>(null);
  const [isChanged, setIsChaged] = useState<boolean>(false);

  /** 옵션 아이템 전환 작업 */
  useEffect(() => {
    setIsChaged(true);
    const timer = window.setTimeout(() => {
      setIsChaged(false);
      setOptionType(controlOption);
    }, TransitionTime);

    return () => window.clearTimeout(timer);
  }, [controlOption, setIsChaged, setOptionType]);

  return (
    <Wrapper time={TransitionTime} isFullscreen={isFullscreen} isChanged={isChanged}>
      {optionType === 'Palette' && <Palette device={device} />}
      {optionType === 'Save' && <Save device={device} />}
    </Wrapper>
  );
};

interface Props {
  device: Device;
}

export default ControlOptionBar;
