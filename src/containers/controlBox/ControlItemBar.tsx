// components
import Wrapper from 'src/components/controlBox/controlItemBar/Wrapper';
import ItemWrapper from 'src/components/controlBox/controlItemBar/ItemWrapper';
// hooks
import { useSelector } from 'src/lib/hooks/useStore';
// types
import { Device } from 'src/types/common';

const ControlItemBar = ({ device }: Props) => {
  const controlOption = useSelector(state => state.common.controlOption);

  return (
    <Wrapper>
      {/* <ItemWrapper device={device} isOpen={controlOption === 'Palette'}>
        <p>Palette</p>
      </ItemWrapper>
      <ItemWrapper device={device} isOpen={controlOption === 'Save'}>
        <p>Save</p>
      </ItemWrapper> */}
    </Wrapper>
  );
};

interface Props {
  device: Device;
}

export default ControlItemBar;
