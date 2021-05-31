import { useState, useEffect } from 'react';
// components
import Wrapper from 'src/components/sidemenu/consonant/Wrapper';
import ConsonantBtn from 'src/components/sidemenu/consonant/ConsonantBtn';
// slices
import { updateSideMenuInfo } from 'src/slices/common';
// hooks
import { useSelector, useDispatch } from 'src/lib/hooks/useStore';
// types
import { Template } from 'src/types/template';
import { Device } from 'src/types/common';

const Consonant = ({ device = 'Desktop' }: Props) => {
  const dispatch = useDispatch();
  const templates = useSelector(state => state.template.templates);
  const selectedTheme = useSelector(state => state.theme.selectedTheme);
  const selectedTemplate = useSelector(state => state.template.selectedTemplate);
  const selectedConsonant = useSelector(state => state.common.sideMenu.selectedConsonant);
  const [templateList, setTemplateList] = useState<Template[]>([]);

  /** 자음 버튼 클릭 */
  const onClickBtn = (consonant: string) => {
    for (let idx in templateList) {
      if (templateList[Number(idx)].consonant === consonant) {
        dispatch(
          updateSideMenuInfo({
            selectedTemplateIdx: Number(idx),
            selectedConsonant: consonant,
          }),
        );
      }
    }
  };

  /** 선택된 자음 갱신 작업 */
  useEffect(() => {
    dispatch(updateSideMenuInfo({ selectedConsonant: selectedTemplate.consonant }));
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

  /** Template Flatten 작업 */
  useEffect(() => {
    const flattenTemplates = Object.keys(templates).reduce(
      (acc: Template[], cur: string) => {
        acc.push(...templates[cur]);
        return acc;
      },
      [],
    );
    setTemplateList(flattenTemplates);
  }, [templates, setTemplateList]);

  return <Wrapper>{BtnList}</Wrapper>;
};

interface Props {
  device?: Device;
}

export default Consonant;
