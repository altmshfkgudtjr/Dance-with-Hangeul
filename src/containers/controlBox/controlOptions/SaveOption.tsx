// components
import Wrapper from 'src/components/controlBox/controlOptionBar/saveOption/Wrapper';
import Btn from 'src/components/controlBox/controlOptionBar/saveOption/Btn';
// hooks
import { useSelector } from 'src/lib/hooks/useStore';
// types
import { Device } from 'src/types/common';

const SaveOption = ({ device }: Props) => {
  const TransitionTime = 400;
  const mode = useSelector(state => state.theme.selectedTheme.mode);

  /** HTML 저장 */
  const onSaveHtml = () => {
    console.log('HTML 저장');
  };

  /** Video 저장 */
  const onSaveVideo = () => {
    console.log('VIDEO 저장');
  };

  return (
    <Wrapper time={TransitionTime} device={device}>
      <Btn message="HTML" time={TransitionTime} mode={mode} onClick={onSaveHtml} />
      <Btn message="VIDEO" time={TransitionTime} mode={mode} onClick={onSaveVideo} />
    </Wrapper>
  );
};

interface Props {
  device: Device;
}

export default SaveOption;
