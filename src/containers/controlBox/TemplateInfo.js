import { useSelector } from 'react-redux';
// components
import Wrapper from 'components/controlBox/templateInfo/Wrapper';
import Title from 'components/controlBox/templateInfo/Title';
import Info from 'components/controlBox/templateInfo/Info';

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
