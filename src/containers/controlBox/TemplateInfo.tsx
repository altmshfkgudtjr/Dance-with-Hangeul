// components
import Wrapper from 'src/components/controlBox/templateInfo/Wrapper';
import Title from 'src/components/controlBox/templateInfo/Title';
import Info from 'src/components/controlBox/templateInfo/Info';
// hooks
import { useSelector } from 'src/lib/hooks/useStore';

const TemplateInfo = () => {
  const selectedTemplate = useSelector(state => state.template.selectedTemplate);
  const selectedTheme = useSelector(state => state.template.selectedTheme);

  return (
    <Wrapper mode={selectedTheme.mode}>
      <Title>
        {selectedTemplate.name} [{selectedTemplate.pronunciation}]
      </Title>
      <Info>{selectedTemplate.info.en}</Info>
      <Info>{selectedTemplate.info.ko}</Info>
    </Wrapper>
  );
};

export default TemplateInfo;
