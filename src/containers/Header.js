import { useSelector } from 'react-redux';
// components
import Wrapper from 'src/components/header/Wrapper';

const Header = ({ type }) => {
  const selectedTheme = useSelector(state => state.template.selectedTheme);

  return (
    <Wrapper type={type} mode={selectedTheme.mode}>
      <button style={{ color: 'inherit', fontSize: '14px' }}>HIDE UI</button>
    </Wrapper>
  );
};

export default Header;
