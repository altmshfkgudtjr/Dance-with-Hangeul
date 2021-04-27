// utils
import { checkProp } from 'lib/utils/validator'
// types
import Theme from 'types/Theme'

/**
 * 의성어 / 의태어 템플릿
 * @param {Template} prop
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
		this.name = prop.name || "";
		this.consonant = prop.consonant || "";
		this.pronunciation = `${prop.pronunciation}` || "";
		this.info = {
			ko: prop.info.ko || "",
			en: prop.info.en || ""
		} || { 
			ko: null, 
			en: null 
		};
		this.themes = (prop.themes && prop.themes.map(theme => new Theme(theme))) || [];	
	}
	
	checkProp();
	constructor();

	return this;
}

/**
 * @typedef {{ ko: string, en: string }} Info 템플릿 소개 글 {ko: 한글, en: 영어}
 */

export default Template