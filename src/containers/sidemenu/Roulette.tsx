import { useRef } from 'react';
// components
import ItemWrapper from 'src/components/sidemenu/roulette/ItemWrapper';
import Wrapper from 'src/components/sidemenu/roulette/Wrapper';
import ItemStandard from 'src/components/sidemenu/roulette/ItemStandard';
import ItemBtn from 'src/components/sidemenu/roulette/ItemBtn';
import SelectedAria from 'src/components/sidemenu/roulette/SelectedAria';
// slices
import { updateSelectedTemplate } from 'src/slices/template';
// hooks
import { useSelector, useDispatch } from 'src/lib/hooks/useStore';
import useRoulette from 'src/lib/hooks/useRoulette';
// types
import { Template } from 'src/types/template';
import { Device } from 'src/types/common';

const Roulette = ({ device = 'Desktop', onClickNextStep }: Props) => {
  const dispatch = useDispatch();
  const templates = useSelector(state => state.template.templates);
  const mode = useSelector(state => state.theme.selectedTheme.mode);
  const selectedConsonant = useSelector(state => state.common.selectedConsonant);

  // TODO 모바일에서 ref가 적용되지 않는 이슈 수정하기
  const rouletteScrollRef = useRef<any>(null);
  const { onClickRouletteButton } = useRoulette(rouletteScrollRef.current);

  /** 템플릿 선택 */
  const onClickTemplate = (template: Template) => {
    dispatch(updateSelectedTemplate(template));
    if (device === 'Mobile' && onClickNextStep) onClickNextStep();
  };

  const TemplateList =
    selectedConsonant === ''
      ? null
      : // TODO Production 에서 주석해제
        // templates[selectedConsonant].map((template, idx) => (
        mockupData.map((template, idx) => (
          <ItemBtn
            key={template.id}
            idx={idx}
            mode={mode}
            template={template}
            onClick={onClickRouletteButton}
          />
        ));

  return (
    <Wrapper>
      <SelectedAria />
      {/* <div>{HiddenTemplateList}</div> */}
      <ItemWrapper ref={rouletteScrollRef}>
        <ItemStandard>{TemplateList}</ItemStandard>
      </ItemWrapper>
    </Wrapper>
  );
};

interface Props {
  device?: Device;
  onClickNextStep?: () => void;
}

// TODO 테스트용 목업데이터 [Production에서 제거할 것]
const mockupData = [
  {
    id: 'Warr',
    name: '와르르(임시)',
    consonant: 'ㅇ',
    pronunciation: 'Wa’leuleu',
    info: {
      ko: '쌓인 것이 야단스럽게 무너지는 소리나 모양',
      en: 'The sound or shape of what is crumbling',
    },
    themes: ['T_000000_ffffff', 'T_ffffff_000000', 'T_ffffff_ffb5b5'],
  },
  {
    id: 'Woorr',
    name: '우르르(임시)',
    consonant: 'ㅇ',
    pronunciation: 'Woo’leuleu',
    info: {
      ko: '쌓인 것이 야단스럽게 무너지는 소리나 모양',
      en: 'The sound or shape of what is crumbling',
    },
    themes: ['T_000000_ffffff', 'T_ffffff_000000', 'T_ffffff_ffb5b5'],
  },
  {
    id: 'Wooddook',
    name: '우뚝(임시)',
    consonant: 'ㅇ',
    pronunciation: 'Woodd’ook',
    info: {
      ko: '높이 솟은 모양',
      en: 'Towering shape',
    },
    themes: ['T_000000_ffffff', 'T_ffffff_000000', 'T_ffffff_ffb5b5'],
  },
  {
    id: 'Irijeori',
    name: '이리저리(임시)',
    consonant: 'ㅇ',
    pronunciation: 'I’rijeori',
    info: {
      ko: '쌓인 것이 야단스럽게 무너지는 소리나 모양',
      en: 'The sound or shape of what is crumbling',
    },
    themes: ['T_000000_ffffff', 'T_ffffff_000000', 'T_ffffff_ffb5b5'],
  },
  {
    id: 'Warrack',
    name: '와락(임시)',
    consonant: 'ㅇ',
    pronunciation: 'Warrack',
    info: {
      ko: '쌓인 것이 야단스럽게 무너지는 소리나 모양',
      en: 'The sound or shape of what is crumbling',
    },
    themes: ['T_000000_ffffff', 'T_ffffff_000000', 'T_ffffff_ffb5b5'],
  },
  {
    id: 'Ossack',
    name: '오싹(임시)',
    consonant: 'ㅇ',
    pronunciation: 'Ossack’',
    info: {
      ko: '쌓인 것이 야단스럽게 무너지는 소리나 모양',
      en: 'The sound or shape of what is crumbling',
    },
    themes: ['T_000000_ffffff', 'T_ffffff_000000', 'T_ffffff_ffb5b5'],
  },
  {
    id: 'Ungeum',
    name: '엉금엉금(임시)',
    consonant: 'ㅇ',
    pronunciation: 'Ungeum',
    info: {
      ko: '쌓인 것이 야단스럽게 무너지는 소리나 모양',
      en: 'The sound or shape of what is crumbling',
    },
    themes: ['T_000000_ffffff', 'T_ffffff_000000', 'T_ffffff_ffb5b5'],
  },
  {
    id: 'Euseuseu',
    name: '으스스(임시)',
    consonant: 'ㅇ',
    pronunciation: 'Eu’seuseu',
    info: {
      ko: '쌓인 것이 야단스럽게 무너지는 소리나 모양',
      en: 'The sound or shape of what is crumbling',
    },
    themes: ['T_000000_ffffff', 'T_ffffff_000000', 'T_ffffff_ffb5b5'],
  },
  {
    id: 'Eguel',
    name: '이글이글(임시)',
    consonant: 'ㅇ',
    pronunciation: 'Eguel',
    info: {
      ko: '쌓인 것이 야단스럽게 무너지는 소리나 모양',
      en: 'The sound or shape of what is crumbling',
    },
    themes: ['T_000000_ffffff', 'T_ffffff_000000', 'T_ffffff_ffb5b5'],
  },
  {
    id: 'Odeul',
    name: '오들오들(임시)',
    consonant: 'ㅇ',
    pronunciation: 'O’deul',
    info: {
      ko: '쌓인 것이 야단스럽게 무너지는 소리나 모양',
      en: 'The sound or shape of what is crumbling',
    },
    themes: ['T_000000_ffffff', 'T_ffffff_000000', 'T_ffffff_ffb5b5'],
  },
  {
    id: 'Weeing',
    name: '위잉(임시)',
    consonant: 'ㅇ',
    pronunciation: 'Weeing',
    info: {
      ko: '쌓인 것이 야단스럽게 무너지는 소리나 모양',
      en: 'The sound or shape of what is crumbling',
    },
    themes: ['T_000000_ffffff', 'T_ffffff_000000', 'T_ffffff_ffb5b5'],
  },
  {
    id: 'Oing',
    name: '오잉(임시)',
    consonant: 'ㅇ',
    pronunciation: 'Oing',
    info: {
      ko: '쌓인 것이 야단스럽게 무너지는 소리나 모양',
      en: 'The sound or shape of what is crumbling',
    },
    themes: ['T_000000_ffffff', 'T_ffffff_000000', 'T_ffffff_ffb5b5'],
  },
  {
    id: 'Asack',
    name: '아삭아삭(임시)',
    consonant: 'ㅇ',
    pronunciation: 'A’sack',
    info: {
      ko: '쌓인 것이 야단스럽게 무너지는 소리나 모양',
      en: 'The sound or shape of what is crumbling',
    },
    themes: ['T_000000_ffffff', 'T_ffffff_000000', 'T_ffffff_ffb5b5'],
  },
  {
    id: 'Eujil',
    name: '어질어질(임시)',
    consonant: 'ㅇ',
    pronunciation: 'Eujil',
    info: {
      ko: '쌓인 것이 야단스럽게 무너지는 소리나 모양',
      en: 'The sound or shape of what is crumbling',
    },
    themes: ['T_000000_ffffff', 'T_ffffff_000000', 'T_ffffff_ffb5b5'],
  },
  {
    id: 'Areun',
    name: '아른아른(임시)',
    consonant: 'ㅇ',
    pronunciation: 'Areun',
    info: {
      ko: '쌓인 것이 야단스럽게 무너지는 소리나 모양',
      en: 'The sound or shape of what is crumbling',
    },
    themes: ['T_000000_ffffff', 'T_ffffff_000000', 'T_ffffff_ffb5b5'],
  },
];

export default Roulette;
