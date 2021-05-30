/**
 * Fetch API 반환값 클래스
 * @class
 */
export class FetchResponse<T> {
  statusCode: number;
  response: Promise<T>;
  /**
   * @param {number} statusCode HTTP 상태코드
   * @param {Promise<T>} response fetch API 반환값
   */
  constructor(statusCode: number, response: Promise<T>) {
    this.statusCode = statusCode;
    this.response = response;
  }
}
