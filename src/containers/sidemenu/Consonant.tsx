import { useEffect } from 'react';
// components
import Wrapper from 'src/components/sidemenu/consonant/Wrapper';
import ConsonantBtn from 'src/components/sidemenu/consonant/ConsonantBtn';
// slices
import { updateSelectedConsonant } from 'src/slices/common';
// hooks
import { useSelector, useDispatch } from 'src/lib/hooks/useStore';
// types
import { Device } from 'src/types/common';

const Consonant = ({ device = 'Desktop', onClickNextStep }: Props) => {
  const dispatch = useDispatch();
  const templates = useSelector(state => state.template.templates);
  const selectedTheme = useSelector(state => state.theme.selectedTheme);
  const selectedTemplate = useSelector(state => state.template.selectedTemplate);
  const selectedConsonant = useSelector(state => state.common.selectedConsonant);

  /** 자음 버튼 클릭 */
  const onClickBtn = (consonant: string) => {
    dispatch(updateSelectedConsonant(consonant));
    if (device === 'Mobile' && onClickNextStep) onClickNextStep();
  };

  /** 선택된 자음 갱신 작업 */
  useEffect(() => {
    dispatch(updateSelectedConsonant(selectedTemplate.consonant));
  }, [dispatch, selectedTemplate]);

  const BtnList = Object.keys(templates).map(consonant => (
    <ConsonantBtn
      key={consonant}
      name={consonant}
      device={device}
      mode={selectedTheme.mode}
      isSelected={consonant === selectedConsonant}
      onClick={() => onClickBtn(consonant)}
    />
  ));

  return <Wrapper>{BtnList}</Wrapper>;
};

interface Props {
  device?: Device;
  onClickNextStep?: () => void;
}

export default Consonant;
