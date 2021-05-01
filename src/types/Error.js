/**
 * 커스텀 에러
 * @class
 */
export class CustomError extends Error {
	/**
	 * CustomError 생성
	 * @param {string} message 
	 */
	constructor(message) {
		super(message);
		this.name = this.constructor.name;
	}
}

/**
 * 유효성 검증 에러
 * @class 
 */
export class ValidationError extends CustomError {
	/**
	 * ValidationError 생성
	 * @param {string} message 
	 */
	constructor(message, description) {
		const desc = description || "";
		super(`${message}\n\n${desc}`);
	}
}

export class ApiError extends CustomError {
	/**
	 * ApiError 생성
	 * @param {string} message 
	 */
	constructor(message, description) {
		const desc = description || "";
		super(`${message}\n\n${desc}`);
	}
}