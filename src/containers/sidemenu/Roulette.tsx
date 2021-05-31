import { useState, useEffect, useRef, useCallback } from 'react';
// components
import ItemWrapper from 'src/components/sidemenu/roulette/ItemWrapper';
import Wrapper from 'src/components/sidemenu/roulette/Wrapper';
import ItemStandard from 'src/components/sidemenu/roulette/ItemStandard';
import ItemBtn from 'src/components/sidemenu/roulette/ItemBtn';
import SelectedAria from 'src/components/sidemenu/roulette/SelectedAria';
import SelectBtn from 'src/components/sidemenu/roulette/SelectBtn';
// slices
import { updateSelectedTemplate } from 'src/slices/template';
import { updateSideMenuInfo } from 'src/slices/common';
// hooks
import { useSelector, useDispatch } from 'src/lib/hooks/useStore';
import useRoulette from 'src/lib/hooks/useRoulette';
// types
import { Template } from 'src/types/template';
import { Device } from 'src/types/common';

const Roulette = ({ device = 'Desktop' }: Props) => {
  const dispatch = useDispatch();
  const mode = useSelector(state => state.theme.selectedTheme.mode);
  const templates = useSelector(state => state.template.templates);
  const selectedConsonant = useSelector(state => state.common.sideMenu.selectedConsonant);
  const selectedTemplateIdx = useSelector(
    state => state.common.sideMenu.selectedTemplateIdx,
  );

  const [templateList, setTemplateList] = useState<Template[]>([]);
  const rouletteScrollRef = useRef<any>(null);

  const { selectedIdx, onSpinRoulette, onClickRouletteButton } =
    useRoulette(rouletteScrollRef);

  /** 템플릿 선택 */
  const onClickTemplate = useCallback(() => {
    const filtered = templateList.filter((_, idx) => idx === selectedIdx);
    if (filtered.length === 0) return;
    dispatch(updateSelectedTemplate(filtered[0]));
    dispatch(updateSideMenuInfo({ selectedTemplateIdx: selectedIdx }));
  }, [dispatch, templateList, selectedIdx]);

  const TemplateList =
    selectedConsonant === ''
      ? null
      : templateList.map((template, idx) => (
          <ItemBtn
            key={template.id}
            idx={idx}
            isEmphasized={selectedIdx === idx}
            mode={mode}
            template={template}
            onClick={onClickRouletteButton}
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

  /** 선택된 자음 갱신 */
  useEffect(() => {
    const selectedTemplate = templateList[selectedIdx];
    if (!selectedTemplate) return;

    dispatch(updateSideMenuInfo({ selectedConsonant: selectedTemplate.consonant }));
  }, [dispatch, templateList, selectedIdx]);

  /** 룰렛 회전 작업 */
  /* eslint-disable */
  // TODO 룰렛 구조 변경을 통해서 의존성 수정
  useEffect(() => {
    onSpinRoulette(selectedTemplateIdx);
  }, [selectedTemplateIdx]);
  /* eslint-enable */

  /** 룰렛 변화에 따른 템플릿 선택 */
  // TODO 에러 수정
  useEffect(() => {
    if (device === 'Desktop') return;
    else onClickTemplate();
  }, [device, selectedIdx, onClickTemplate]);

  return (
    <Wrapper>
      <SelectedAria onClick={onClickTemplate} />
      <ItemWrapper ref={rouletteScrollRef}>
        <ItemStandard>{TemplateList}</ItemStandard>
      </ItemWrapper>
      <SelectBtn onClick={onClickTemplate} />
    </Wrapper>
  );
};

interface Props {
  device?: Device;
}

export default Roulette;
