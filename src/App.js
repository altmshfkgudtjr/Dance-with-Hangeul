import React from 'react'
import { Switch, Route } from 'react-router-dom'
// Pages
import HomePage from 'pages/HomePage'
import NotFound from 'pages/NotFound'
// hook
import useWebAccessibility from 'lib/hooks/useWebAccessibility'

const App = () => {
	const [isMouseDown] = useWebAccessibility();

	return (<div className={isMouseDown ? 'mousedown' : ''}>
		<Switch>
			<Route path="/" component={HomePage} exact />
			<Route path="*" component={NotFound} status={404} />
		</Switch>
	</div>);
}

export default App