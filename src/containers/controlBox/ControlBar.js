// components
import Wrapper from 'src/components/controlBox/controlBar/Wrapper';

const ControlBar = ({ device }) => {
  return (
    <Wrapper device={device}>
      <button>테마</button>
      <button>영상</button>
      <button>저장</button>
    </Wrapper>
  );
};

export default ControlBar;
