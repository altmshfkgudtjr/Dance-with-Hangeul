/** API 반환 타입 (Origin) */
export interface IApiResult<T> {
  success: boolean; // 성공 여부
  message: string; // 메세지
  code: string; // 위키에 정의된 에러코드
  documents?: T; // 결과
}

/**
 * API 반환 타입
 * - 상태코드 추가
 */
export interface IFetchResult<T> extends IApiResult<T> {
  statusCode: number;
}

/** Restful HTTP 메소드 타입 */
export type HttpMethod = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';

/** Query 파라미터 타입 */
export type QueryParams =
  | string
  | URLSearchParams
  | string[][]
  | Record<string, string>
  | undefined;
