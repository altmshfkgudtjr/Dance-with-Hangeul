// components
import Wrapper from 'src/components/launchScreen/logoScreen/Wrapper';
import Circle from 'src/components/launchScreen/logoScreen/Circle';
import LineFirst from 'src/components/launchScreen/logoScreen/LineFirst';
import LineSecond from 'src/components/launchScreen/logoScreen/LineSecond';
import Title from 'src/components/launchScreen/logoScreen/Title';

const LogoScreen = ({ time = 5000, color }: Props) => {
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

interface Props {
  time: number;
  color: string;
}

export default LogoScreen;
