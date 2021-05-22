// containers
import TemplateInfo from 'src/containers/controlBox/TemplateInfo';
import ControlBar from 'src/containers/controlBox/ControlBar';
import ControlItemBar from 'src/containers/controlBox/ControlItemBar';

const HomeDesktop = () => {
  return (
    <>
      <TemplateInfo />
      <ControlBar device="Desktop" />
      <ControlItemBar device="Desktop" />

      {/* 메뉴 영역 */}
    </>
  );
};

export default HomeDesktop;
