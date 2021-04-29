import { Switch, Route } from 'react-router-dom'
// Pages
import HomePage from 'pages/HomePage'
import NotFound from 'pages/NotFound'
// Containers
import Modal from 'containers/modal'
import Snackbar from 'containers/common/Snackbar'
// hook
import useWebAccessibility from 'lib/hooks/useWebAccessibility'

const App = () => {
	const [isMouseDown] = useWebAccessibility();


	return (<div className={isMouseDown ? 'mousedown' : ''}>
		<Switch>
			<Route path="/" component={HomePage} exact />
			<Route path="*" component={NotFound} status={404} />
		</Switch>
		
		<Modal /> {/* Modal Position */}

		<Snackbar /> {/* Snackbar Position */}
	</div>);
}

export default App