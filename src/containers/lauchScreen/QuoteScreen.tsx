import { useState, useEffect } from 'react';
// hooks
import { useSelector } from 'src/lib/hooks/useStore';
// components
import Wrapper from 'src/components/launchScreen/quoteScreen/Wrapper';
import Icon from 'src/components/launchScreen/quoteScreen/Icon';
import Quote from 'src/components/launchScreen/quoteScreen/Quote';

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
