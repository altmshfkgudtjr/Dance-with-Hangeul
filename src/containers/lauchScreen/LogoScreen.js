// components
import Wrapper from 'components/launchScreen/Wrapper'
import Circle from 'components/launchScreen/Circle'
import LineFirst from 'components/launchScreen/LineFirst'
import LineSecond from 'components/launchScreen/LineSecond'
import Title from 'components/launchScreen/Title'


const LogoScreen = ({ time=5000, color }) => {
	return (<>
		<Wrapper time={time} color={color} >
			<LineSecond time={time} color={color} />
			<LineFirst time={time} color={color} />
			<Circle time={time} color={color} /> 
		</Wrapper>

		<Title time={time}>한글로 춤추다</Title>
  </>);
}

export default LogoScreen