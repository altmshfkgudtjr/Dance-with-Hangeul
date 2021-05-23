// components
import Wrapper from 'src/components/controlBox/controlOptionBar/paletteOption/Wrapper';
import PaletteBtn from 'src/components/controlBox/controlOptionBar/paletteOption/PaletteBtn';
// types
import { Device } from 'src/types/common';

const PaletteOption = ({ device }: Props) => {
  const TransitionTime = 400;

  return (
    <Wrapper time={TransitionTime} device={device}>
      <PaletteBtn time={TransitionTime} isSelected={true} colors={['#FFB5B5']} />
      <PaletteBtn time={TransitionTime} isSelected={false} colors={['#FFCB87']} />
      <PaletteBtn time={TransitionTime} isSelected={false} colors={['#84D384']} />
      <PaletteBtn
        time={TransitionTime}
        isSelected={false}
        colors={['#75D1D5', '#20989D']}
      />
      <PaletteBtn
        time={TransitionTime}
        isSelected={false}
        colors={['#D1B7FF', '#A77AF7']}
      />
    </Wrapper>
  );
};

interface Props {
  device: Device;
}

export default PaletteOption;
