import styled from 'styled-components';
// lib
import * as styles from 'src/lib/styles/styles';
import media from 'src/lib/styles/media';

const Quote = styled.blockquote`
  display: block;
  margin-block-start: auto;
  margin-block-end: auto;
  margin-inline-start: auto;
  margin-inline-end: auto;
  margin-top: 80px;
  text-align: center;
  word-break: keep-all;
  transition: 0.3s ${styles.transition};
  line-height: 24px;

  ${media.medium} {
    margin-top: 60px;
    display: none;

    &:nth-child(2) {
      display: block;
    }
  }
`;

export default Quote;
