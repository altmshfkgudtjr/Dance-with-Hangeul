// utils
import { validateProp } from 'lib/utils/validator'
// type
import { ValidationError } from 'types/Error'

/**
 * 의성어 / 의태어 템플릿
 * @param {object} prop
 * @param {string} prop.name	템플릿 명
 * @param {string} prop.consonant 템플릿 초성
 * @param {string} prop.pronunciation 발음
 * @param {Info} prop.info 템플릿 소개 글 {ko: 한글, en: 영어}
 * @param {Theme[]} prop.themes 템플릿 테마
 */
function Template(prop) {
	/**
	 * 의성어 / 의태어 템플릿 객체 생성
	 */
	const constructor = () => {
		if (!prop.id || prop.id === "") {
			throw new ValidationError(`Template 식별값(id)이(가) 비어있습니다.`);
		}
		this.id = prop.id;
		this.consonant = prop.consonant || "";
		this.pronunciation = `${prop.pronunciation}` || "";
		this.info = {
			ko: prop.info.ko || "",
			en: prop.info.en || ""
		} || { 
			ko: null, 
			en: null 
		};
		this.themes = prop.themes || [];
	}
	
	validateProp();
	constructor();

	return this;
}

/**
 * @typedef {{ ko: string, en: string }} Info 템플릿 소개 글 {ko: 한글, en: 영어}
 */

export default Template