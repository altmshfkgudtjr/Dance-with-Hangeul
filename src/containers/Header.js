// components
import Wrapper from 'components/header/Wrapper';

const Header = ({ type }) => {
  return (
    <Wrapper type={type}>
      <button>HIDE UI</button>
    </Wrapper>
  );
};

export default Header;
