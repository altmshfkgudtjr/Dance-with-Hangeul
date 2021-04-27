
/**
 * 유효성 검증 에러
 * @class 
 */
export class ValidationError extends Error {
	/**
	 * ValidationError 생성
	 * @param {string} message 
	 */
	constructor(message) {
		super(message);
		this.name = this.constructor.name;
	}
}