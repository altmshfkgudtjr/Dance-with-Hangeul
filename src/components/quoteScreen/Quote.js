import styled from 'styled-components'
// lib
import * as styles from 'lib/styles/styles'
import media from 'lib/styles/media'


const Quote = styled.blockquote`
	display: block;
	margin-block-start: auto;
	margin-block-end: auto;
	margin-inline-start: auto;
	margin-inline-end: auto;
	margin-top: 100px;
	text-align: center;
	word-break: keep-all;
	transition: .3s ${styles.transition};

	${media.medium} {
		margin-top: 60px;
		display: none;

		&:nth-child(1) {
			display: block;
		}
	}
`;

export default Quote