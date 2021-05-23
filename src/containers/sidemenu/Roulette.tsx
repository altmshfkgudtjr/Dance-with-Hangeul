// components
import Wrapper from 'src/components/sidemenu/roulette/Wrapper';
// slices
import { updateSelectedTemplate } from 'src/slices/template';
// hooks
import { useSelector, useDispatch } from 'src/lib/hooks/useStore';
// types
import { Template } from 'src/types/template';
import { Device } from 'src/types/common';

const Roulette = ({ device = 'Desktop', onClickPrevStep, onClickNextStep }: Props) => {
  const dispatch = useDispatch();
  const templates = useSelector(state => state.template.templates);
  const selectedConsonant = useSelector(state => state.common.selectedConsonant);

  /** 템플릿 선택 */
  const onClickTempalte = (template: Template) => {
    dispatch(updateSelectedTemplate(template));
    if (device === 'Mobile' && onClickNextStep) onClickNextStep();
  };

  const TemplateList =
    selectedConsonant === ''
      ? null
      : templates[selectedConsonant].map(template => (
          <button key={template.id} onClick={() => onClickTempalte(template)}>
            {template.name}
          </button>
        ));

  return <Wrapper>{TemplateList}</Wrapper>;
};

interface Props {
  device?: Device;
  onClickPrevStep?: () => void;
  onClickNextStep?: () => void;
}

export default Roulette;
