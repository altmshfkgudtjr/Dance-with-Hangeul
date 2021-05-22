// components
import Wrapper from 'src/components/header/Wrapper';
// hooks
import { useSelector } from 'src/lib/hooks/useStore';
// types
import { Device } from 'src/types/common';

const Header = ({ device }: Props) => {
  const selectedTheme = useSelector(state => state.theme.selectedTheme);

  return (
    <Wrapper device={device} mode={selectedTheme.mode}>
      {device === 'Mobile' && <button>Back</button>}
      <button style={{ color: 'inherit', fontSize: '14px' }}>HIDE UI</button>
      {device === 'Mobile' && <button>Next</button>}
    </Wrapper>
  );
};

type Props = {
  device: Device;
};

export default Header;
