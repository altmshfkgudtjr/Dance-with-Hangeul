import { useSelector } from 'react-redux';
// components
import Wrapper from 'src/components/controlBox/templateInfo/Wrapper';
import Title from 'src/components/controlBox/templateInfo/Title';
import Info from 'src/components/controlBox/templateInfo/Info';

const TemplateInfo = () => {
  const selectedTemplate = useSelector(state => state.template.selectedTemplate);

  return (
    <Wrapper>
      <Title>
        {selectedTemplate.id} [{selectedTemplate.pronunciation}]
      </Title>
      <Info>{selectedTemplate.info.en}</Info>
      <Info>{selectedTemplate.info.ko}</Info>
    </Wrapper>
  );
};

export default TemplateInfo;
