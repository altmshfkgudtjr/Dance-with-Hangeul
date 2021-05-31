import { useEffect, useCallback } from 'react';
// components
import Wrapper from 'src/components/header/Wrapper';
import HideBtn from 'src/components/header/HideBtn';
import MoveBtn from 'src/components/header/MoveBtn';
// slices
import { toggleFullscreen } from 'src/slices/common';
// hooks
import { useSelector, useDispatch } from 'src/lib/hooks/useStore';
// types
import { Device } from 'src/types/common';

const Header = ({ device, screenStep, onClickPrev, onClickNext }: Props) => {
  const dispatch = useDispatch();
  const selectedTheme = useSelector(state => state.theme.selectedTheme);
  const isFullscreen = useSelector(state => state.common.isFullscreen);
  const currentMode =
    device === 'Mobile' && (screenStep !== undefined ? screenStep < 1 : false)
      ? 'Light'
      : selectedTheme.mode;

  /** 전체화면 여부 토글 */
  const onToggleFullscreen = useCallback(
    (e: any) => {
      e.stopPropagation();
      dispatch(toggleFullscreen());
    },
    [dispatch],
  );

  useEffect(() => {
    if (isFullscreen) {
      window.addEventListener('click', onToggleFullscreen, true);
    } else {
      window.removeEventListener('click', onToggleFullscreen, true);
    }
    return () => window.removeEventListener('click', onToggleFullscreen);
  }, [isFullscreen, onToggleFullscreen]);

  return (
    <Wrapper device={device} isFullscreen={isFullscreen}>
      {device === 'Mobile' && (
        <MoveBtn
          direction="Left"
          mode={currentMode}
          step={screenStep !== undefined ? screenStep : 1}
          onClick={onClickPrev}
        />
      )}
      <HideBtn message="HIDE UI" mode={currentMode} onClick={onToggleFullscreen} />
      {device === 'Mobile' && (
        <MoveBtn
          direction="Right"
          mode={currentMode}
          step={screenStep !== undefined ? screenStep : 1}
          onClick={onClickNext}
        />
      )}
    </Wrapper>
  );
};

type Props = {
  device: Device;
  screenStep?: number;
  onClickPrev?: () => void;
  onClickNext?: () => void;
};

export default Header;
