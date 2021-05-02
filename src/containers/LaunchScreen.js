import Wrapper from 'components/loading/Wrapper'
import Circle from 'components/loading/Circle'
import LineFirst from 'components/loading/LineFirst'
import LineSecond from 'components/loading/LineSecond'
import Title from 'components/loading/Title'


const LaunchScreen = ({ time=5000, color="#C9AAFF" }) => {
  return (<>
    <Wrapper time={time} color={color} >
      <LineSecond time={time} color={color} />
      <LineFirst time={time} color={color} />
      <Circle time={time} color={color} /> 
    </Wrapper>

    <Title time={time}>한글로 춤추다</Title>
  </>);
}

export default LaunchScreen