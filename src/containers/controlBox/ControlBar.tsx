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
    onUpdateControlOption(null);
    console.log('영상을 업로드 해 주세요.');
  };

  return (
    <Wrapper device={device} mode={selectedTheme.mode}>
      <Button
        type="Palette"
        isSelected={controlOption === 'Palette'}
        mode={selectedTheme.mode}
        onClick={onTogglePalette}
      />
      <Button
        type="Video"
        isSelected={false}
        mode={selectedTheme.mode}
        onClick={onClickVideo}
      />
      <Button
        type="Save"
        isSelected={controlOption === 'Save'}
        mode={selectedTheme.mode}
        onClick={onToggleSave}
      />
    </Wrapper>
  );
};

interface Props {
  device: Device;
}

export default ControlBar;
