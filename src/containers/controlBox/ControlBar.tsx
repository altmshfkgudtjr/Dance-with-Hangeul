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

  /** Control 옵션 변경 */
  const onUpdateControlOption = (type: ControlOption) => {
    dispatch(updateControlOption(type));
  };

  return (
    <Wrapper device={device} mode={selectedTheme.mode}>
      <Button
        type="Palette"
        mode={selectedTheme.mode}
        onClick={() => onUpdateControlOption('Palette')}
      />
      <Button
        type="Video"
        mode={selectedTheme.mode}
        onClick={() => console.log('영상을 업로드 해 주세요.')}
      />
      <Button
        type="Save"
        mode={selectedTheme.mode}
        onClick={() => onUpdateControlOption('Save')}
      />
    </Wrapper>
  );
};

interface Props {
  device: Device;
}

export default ControlBar;
