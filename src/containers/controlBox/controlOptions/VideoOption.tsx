// components
import Wrapper from 'src/components/controlBox/controlOptionBar/saveOption/Wrapper';
import Btn from 'src/components/controlBox/controlOptionBar/saveOption/Btn';
// hooks
import { useSelector } from 'src/lib/hooks/useStore';
// types
import { Device } from 'src/types/common';

const VideoOption = ({ device }: Props) => {
  const TransitionTime = 400;
  const mode = useSelector(state => state.theme.selectedTheme.mode);

  /**
   * 카메라 열기
   * - 소리 녹음
   * - 모바일인 경우, 전면 카메라
   */
  const onCamera = () => {
    const videoTag: HTMLMediaElement | null = document.querySelector('#hangeul-video');
    if (!videoTag) return;

    navigator.mediaDevices
      .getUserMedia({ audio: true, video: { facingMode: 'user' } })
      .then(stream => (videoTag.srcObject = stream))
      .catch(err => console.log(`[Stream Error] ${err}`));
  };

  /** 파일 열기 */
  const onFile = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'video/*');
    input.style.opacity = '0';
    input.addEventListener('change', onChangeFile);

    document.body.appendChild(input);
    input.click();
  };

  /** 영상 파일 업로드 */
  // TODO 테마 블랙 테마로 변경하기 + Dark 모드 적용
  const onChangeFile = (e: any) => {
    const videoTag = document.querySelector('#hangeul-video');
    if (!videoTag) return;

    const videoFile = e.target.files[0];
    if (!videoFile) return;

    const videourl = URL.createObjectURL(videoFile);
    videoTag.setAttribute('src', videourl);

    e.target.remove();
  };

  return (
    <Wrapper time={TransitionTime} device={device}>
      <Btn message="CAMERA" time={TransitionTime} mode={mode} onClick={onCamera} />
      <Btn message="FILE" time={TransitionTime} mode={mode} onClick={onFile} />
    </Wrapper>
  );
};

interface Props {
  device: Device;
}

export default VideoOption;
