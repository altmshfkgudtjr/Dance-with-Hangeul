// utils
import { validateProp } from 'lib/utils/validator'

/**
 * 템플릿 테마
 * @param {Theme} prop
 * @param {string} prop.backgroundColor 바탕 색
 * @param {string} prop.textColor 글자 색
 * @param {Mode} prop.mode 템플릿 모드 ["Light": 라이트모드, "Dark": 다크모드]
 * @param {boolean} prop.chanable 바탕 색과 글자 색 교체 가능 여부
 */
 function Theme(prop) {
	/**
	 * 템플릿 테마 객체 생성
	 */
	const constructor = () => {
		this.backgroundColor = prop.backgroundColor || "#ffffff";
		this.textColor = prop.textColor || "#000000";
		this.mode = (prop.mode === "Light" && "Light") || "Dark";
		this.changable = prop.changable || false;
	}
	
	validateProp();
	constructor();

	return this;
}

/**
 * @typedef {"Light" | "Dark"} Mode 템플릿 모드 ["Light": 라이트모드, "Dark": 다크모드]
 */

export default Theme