// components
import Wrapper from 'src/components/controlBox/controlOptionBar/paletteOption/Wrapper';
import PaletteBtn from 'src/components/controlBox/controlOptionBar/paletteOption/PaletteBtn';
// slices
import { updateSelectedTheme } from 'src/slices/theme';
// hooks
import { useSelector, useDispatch } from 'src/lib/hooks/useStore';
// types
import { Device } from 'src/types/common';
import { Theme } from 'src/types/theme';

const PaletteOption = ({ device }: Props) => {
  const TransitionTime = 400;

  const dispatch = useDispatch();
  const themes = useSelector(state => state.theme.themes);
  const selectedTheme = useSelector(state => state.theme.selectedTheme);
  const defaultThemes = useSelector(state => state.theme.defaultThemes);
  const selectedTemplate = useSelector(state => state.template.selectedTemplate);
  const isVideo = useSelector(state => state.common.isVideo);

  /** 테마 클릭 함수 */
  const onClickPalette = (theme: Theme) => dispatch(updateSelectedTheme(theme));

  const PaletteList = isVideo
    ? defaultThemes.map(theme => (
        <PaletteBtn
          key={theme.id}
          time={TransitionTime}
          isSelected={theme.id === selectedTheme.id}
          colors={theme.fgColor}
          onClick={() => onClickPalette(theme)}
        />
      ))
    : selectedTemplate.themes.map(themeId => (
        <PaletteBtn
          key={themeId}
          time={TransitionTime}
          isSelected={themeId === selectedTheme.id}
          colors={themes[themeId].fgColor}
          onClick={() => onClickPalette(themes[themeId])}
        />
      ));

  return (
    <Wrapper time={TransitionTime} device={device}>
      {PaletteList}
    </Wrapper>
  );
};

interface Props {
  device: Device;
}

export default PaletteOption;
