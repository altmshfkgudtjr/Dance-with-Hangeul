// types
import { ValidationError } from "types/Error"

/**
 * 객체에 들어온 prop의 유효성 검증
 * @param {object} props 객체 인자
 * @returns {boolean} 유효성 검증 결과
 */
export const validateProp = (prop) => {
	if (typeof(prop) !== "object") {
		throw new ValidationError(`Object 타입이 아닙니다. :::: ${prop}`);
	}
	
	return true;
}