// utils
import { validateProp } from 'lib/utils/validator'

/**
 * 한글 인용구
 * @param {object} prop
 * @param {string} prop.ko	인용구 한국어
 * @param {string} prop.en 인용구 영어
 */
function Quote(prop) {
	/**
	 * 한글 인용구 객체 생성
	 */
	const constructor = () => {
		this.ko = prop.ko || "";
		this.en = prop.en || "";
	}
	
	validateProp();
	constructor();

	return this;
}

export default Quote