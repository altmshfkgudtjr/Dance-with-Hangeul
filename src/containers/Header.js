// components
import Wrapper from 'src/components/header/Wrapper';

const Header = ({ type }) => {
  return (
    <Wrapper type={type}>
      <button>HIDE UI</button>
    </Wrapper>
  );
};

export default Header;
