import { useEffect, useCallback } from 'react';
// components
import Wrapper from 'src/components/header/Wrapper';
import HideBtn from 'src/components/header/HideBtn';
// slices
import { toggleFullscreen } from 'src/slices/common';
// hooks
import { useSelector, useDispatch } from 'src/lib/hooks/useStore';
// types
import { Device } from 'src/types/common';

const Header = ({ device }: Props) => {
  const dispatch = useDispatch();
  const selectedTheme = useSelector(state => state.theme.selectedTheme);
  const isFullscreen = useSelector(state => state.common.isFullscreen);

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
      window.addEventListener('click', onToggleFullscreen);
    } else {
      window.removeEventListener('click', onToggleFullscreen);
    }
    return () => window.removeEventListener('click', onToggleFullscreen);
  }, [isFullscreen, onToggleFullscreen]);

  return (
    <Wrapper device={device} isFullscreen={isFullscreen}>
      {device === 'Mobile' && <button>Back</button>}
      <HideBtn message="HIDE UI" mode={selectedTheme.mode} onClick={onToggleFullscreen} />
      {device === 'Mobile' && <button>Next</button>}
    </Wrapper>
  );
};

type Props = {
  device: Device;
};

export default Header;
