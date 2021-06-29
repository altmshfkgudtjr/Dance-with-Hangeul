import styled from 'styled-components';

const Video = () => {
  return <VideoInput id="hangeul-video" autoPlay loop />;
};

const VideoInput = styled.video`
  position: absolute;
  width: 1px;
  height: 1px;
  left: -1px;
  top: -1px;
  opacity: 0;
`;

export default Video;
