import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
// components
import Wrapper from 'components/quoteScreen/Wrapper'
import Icon from 'components/quoteScreen/Icon'
import Quote from 'components/quoteScreen/Quote'


const QuoteScreen = () => {
	// const quotes = [];
	// const [quote, setQuote] = useState({ ko: "", en: "" });


	// useEffect(() => {
		
	// }, [quotes]);
	
	
	return (
		<Wrapper>
			<Icon />
			<Quote>나 때는 말이야...</Quote>
			<Quote>Lette is horse...</Quote>
		</Wrapper>
	);
}

export default QuoteScreen