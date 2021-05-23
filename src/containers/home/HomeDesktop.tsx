// containers
import SideMenu from 'src/containers/sidemenu';
import TemplateInfo from 'src/containers/controlBox/TemplateInfo';
import ControlBar from 'src/containers/controlBox/ControlBar';
import ControlOptionBar from 'src/containers/controlBox/ControlOptionBar';

const HomeDesktop = () => {
  return (
    <>
      <TemplateInfo />
      <ControlBar device="Desktop" />
      <ControlOptionBar device="Desktop" />

      <SideMenu />
    </>
  );
};

export default HomeDesktop;
