import { useState } from 'react';
// containers
import Consonant from 'src/containers/sidemenu/Consonant';
import Roulette from 'src/containers/sidemenu/Roulette';
// components
import Wrapper from 'src/components/sidemenu/Wrapper';
import MenuBtn from 'src/components/sidemenu/MenuBtn';
// hooks
import { useSelector } from 'src/lib/hooks/useStore';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectedTheme = useSelector(state => state.theme.selectedTheme);
  const isFullscreen = useSelector(state => state.common.isFullscreen);

  /** 메뉴 토글 */
  const onToggleMenu = () => setIsOpen(v => !v);

  return (
    <Wrapper isOpen={isOpen} isFullscreen={isFullscreen}>
      <MenuBtn isOpen={isOpen} mode={selectedTheme.mode} onClick={onToggleMenu} />
      <Consonant />
      <Roulette />
    </Wrapper>
  );
};

export default SideMenu;
