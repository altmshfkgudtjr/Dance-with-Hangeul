import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// components
import Wrapper from 'components/quoteScreen/Wrapper';
import Icon from 'components/quoteScreen/Icon';
import Quote from 'components/quoteScreen/Quote';

const QuoteScreen = () => {
  const quotes = useSelector(state => state.common.quotes);
  const [quote, setQuote] = useState({ ko: '', en: '' });

  /** 랜덤 인용구 설정 */
  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    if (!randomQuote) return;

    setQuote({
      ko: randomQuote.ko
        ? randomQuote.ko
        : '‘한글로 춤추다’는 한글의 아름다움을 시각적으로 표현합니다.',
      en: randomQuote.en
        ? randomQuote.en
        : '‘Dance with Hangeul’ visually expresses the beauty of Hangeul.',
    });
  }, [quotes, setQuote]);

  return (
    <Wrapper>
      <Icon />
      <Quote>{quote.ko}</Quote>
      <Quote>{quote.en}</Quote>
    </Wrapper>
  );
};

export default QuoteScreen;
