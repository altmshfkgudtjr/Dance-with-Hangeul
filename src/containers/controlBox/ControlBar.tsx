// components
import Wrapper from 'src/components/controlBox/controlBar/Wrapper';
import Button from 'src/components/controlBox/controlBar/Button';
// slices
import { updateControlOption } from 'src/slices/common';
// hooks
import { useSelector, useDispatch } from 'src/lib/hooks/useStore';
// types
import { Device } from 'src/types/common';
import { ControlOption } from 'src/types/slices/common';

const ControlBar = ({ device }: Props) => {
  const dispatch = useDispatch();
  const selectedTheme = useSelector(state => state.theme.selectedTheme);
  const controlOption = useSelector(state => state.common.controlOption);
  const isFullscreen = useSelector(state => state.common.isFullscreen);

  /** Control 옵션 변경 */
  const onUpdateControlOption = (type: ControlOption) => {
    dispatch(updateControlOption(type));
  };

  /** 테마 버튼 토글 */
  const onTogglePalette = () => {
    if (controlOption === 'Palette') onUpdateControlOption(null);
    else onUpdateControlOption('Palette');
  };

  /** 저장 버튼 토글 */
  const onToggleSave = () => {
    if (controlOption === 'Save') onUpdateControlOption(null);
    else onUpdateControlOption('Save');
  };

  /** 영상 버튼 */
  const onClickVideo = () => {
    if (controlOption === 'Video') onUpdateControlOption(null);
    else onUpdateControlOption('Video');
  };

  return (
    <Wrapper device={device} mode={selectedTheme.mode} isFullscreen={isFullscreen}>
      <Button
        type="Palette"
        isSelected={controlOption === 'Palette'}
        mode={selectedTheme.mode}
        device={device}
        onClick={onTogglePalette}
      />
      <Button
        type="Video"
        isSelected={controlOption === 'Video'}
        mode={selectedTheme.mode}
        device={device}
        onClick={onClickVideo}
      />
      <Button
        type="Save"
        isSelected={controlOption === 'Save'}
        mode={selectedTheme.mode}
        device={device}
        onClick={onToggleSave}
      />
    </Wrapper>
  );
};

interface Props {
  device: Device;
}

export default ControlBar;
