import styled from 'styled-components';
import animations from 'lib/styles/animations';

const Home = () => {
  return (
    <Wrapper>
      <p>Hello</p>
      <br />
      <p>Bye</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: 1s ${animations.zoomIn};
`;

export default Home;
