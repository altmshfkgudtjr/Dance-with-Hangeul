// components
import Wrapper from 'src/components/sidemenu/consonant/Wrapper';
import ConsonantBtn from 'src/components/sidemenu/consonant/ConsonantBtn';
// hooks
import { useSelector } from 'src/lib/hooks/useStore';

const Consonant = () => {
  const templates = useSelector(state => state.template.templates);
  const selectedTemplate = useSelector(state => state.template.selectedTemplate);

  /** 자음 버튼 클릭 */
  const onClickBtn = (consonant: string) => {
    console.log(consonant);
  };

  const BtnList = Object.keys(templates).map(consonant => (
    <ConsonantBtn
      key={consonant}
      name={consonant}
      isSelected={consonant === selectedTemplate.consonant}
      onClick={() => onClickBtn(consonant)}
    />
  ));

  return <Wrapper>{BtnList}</Wrapper>;
};

export default Consonant;
