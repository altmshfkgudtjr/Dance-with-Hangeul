import { useEffect } from 'react';
// components
import Wrapper from 'src/components/controlBox/controlOptionBar/saveOption/Wrapper';
import Btn from 'src/components/controlBox/controlOptionBar/saveOption/Btn';
// hooks
import { useSelector, useDispatch } from 'src/lib/hooks/useStore';
// slices
import { selectTheme } from 'src/slices/theme';
import { updateIsVideo } from 'src/slices/common';
// types
import { Device } from 'src/types/common';

const VideoOption = ({ device }: Props) => {
  const TransitionTime = 400;

  const dispatch = useDispatch();
  const selectedTemplate = useSelector(state => state.template.selectedTemplate);
  const mode = useSelector(state => state.theme.selectedTheme.mode);
  const isExist = useSelector(state => state.common.isVideo);

  /**
   * 카메라 열기
   * - 소리 녹음
   * - 모바일인 경우, 전면 카메라
   */
  const onCamera = () => {
    const videoTag: HTMLMediaElement | null = document.querySelector('#hangeul-video');
    if (!videoTag) return;

    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: {
          facingMode: 'user',
        },
      })
      .then(stream => (videoTag.srcObject = stream))
      .catch(err => console.log(`[Stream Error] ${err}`));
  };

  /** 파일 열기 */
  const onFile = () => {
    const inputTag = document.createElement('input');
    inputTag.setAttribute('type', 'file');
    inputTag.setAttribute('accept', 'video/*');
    inputTag.style.opacity = '0';
    inputTag.addEventListener('change', onChangeFile);

    document.body.appendChild(inputTag);
    inputTag.click();
  };

  /** 영상 파일 업로드 또는 스트리밍 */
  const onChangeFile = (e: any) => {
    const videoTag = document.querySelector('#hangeul-video');
    if (!videoTag) return;

    const videoFile = e.target.files[0];
    if (!videoFile) return;

    const videourl = URL.createObjectURL(videoFile);
    videoTag.setAttribute('src', videourl);

    dispatch(updateIsVideo(true));

    e.target.remove();
  };

  /** 영상 중지 또는 파일 제거 */
  const onCancelVideo = () => {
    const videoTag: HTMLMediaElement | null = document.querySelector('#hangeul-video');
    if (!videoTag) return;

    videoTag.srcObject = null;
    dispatch(updateIsVideo(false));

    const themeId = selectedTemplate.themes[0];
    if (!themeId) return;

    dispatch(selectTheme(themeId));
  };

  /** 영상이 존재여부에 따른 테마 및 모드 변경 작업 */
  useEffect(() => {
    const videoTag: HTMLMediaElement | null = document.querySelector('#hangeul-video');
    if (!videoTag) return;

    if (isExist) {
      dispatch(selectTheme('T_000000_ffffff'));
      const target = document.querySelector('#hageul-canvas');
      if (!target) return;

      target.setAttribute('style', 'background-color: black;');
    } else {
      const target = document.querySelector('#hageul-canvas');
      if (!target) return;

      target.removeAttribute('style');
    }
  }, [dispatch, isExist, selectedTemplate.themes]);

  return (
    <Wrapper time={TransitionTime} device={device}>
      <Btn message="CAMERA" time={TransitionTime} mode={mode} onClick={onCamera} />
      <Btn message="FILE" time={TransitionTime} mode={mode} onClick={onFile} />
      {isExist && (
        <Btn message="CANCEL" time={TransitionTime} mode={mode} onClick={onCancelVideo} />
      )}
    </Wrapper>
  );
};

interface Props {
  device: Device;
}

export default VideoOption;
