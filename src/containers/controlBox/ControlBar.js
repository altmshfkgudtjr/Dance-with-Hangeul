import { useSelector } from 'react-redux';
// components
import Wrapper from 'src/components/controlBox/controlBar/Wrapper';

const ControlBar = ({ device }) => {
  const selectedTheme = useSelector(state => state.template.selectedTheme);

  return (
    <Wrapper device={device} mode={selectedTheme.mode}>
      <button style={{ color: 'inherit' }}>테마</button>
      <button style={{ color: 'inherit' }}>영상</button>
      <button style={{ color: 'inherit' }}>저장</button>
    </Wrapper>
  );
};

export default ControlBar;
