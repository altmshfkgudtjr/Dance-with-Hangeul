import React from 'react'
import { Helmet } from "react-helmet-async"
// components
import Home from 'containers/Home'

const HomePage = () => {
	return (<>
		<Helmet>
			<title>한글로 춤추다</title>
		</Helmet>

		<Home />
	</>);
}

export default HomePage