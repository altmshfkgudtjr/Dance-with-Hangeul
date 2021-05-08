// components
import Wrapper from 'components/launchScreen/logoScreen/Wrapper';
import Circle from 'components/launchScreen/logoScreen/Circle';
import LineFirst from 'components/launchScreen/logoScreen/LineFirst';
import LineSecond from 'components/launchScreen/logoScreen/LineSecond';
import Title from 'components/launchScreen/logoScreen/Title';

const LogoScreen = ({ time = 5000, color }) => {
  return (
    <>
      <Wrapper time={time} color={color}>
        <LineSecond time={time} color={color} />
        <LineFirst time={time} color={color} />
        <Circle time={time} color={color} />
      </Wrapper>

      <Title time={time}>한글로 춤추다</Title>
    </>
  );
};

export default LogoScreen;
