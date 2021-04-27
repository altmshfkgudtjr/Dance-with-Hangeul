import { ValidationError } from "types/Error"

/**
 * 객체에 들어온 props의 유효성 검증
 * @param {object} props 객체 인자
 * @returns {boolean} 유효성 검증 결과
 */
export const checkProp = (prop) => {
	if (typeof(props) !== "object") {
		throw new ValidationError(`Object 타입이 아닙니다. :::: ${props}`);
	}

	return true;
}