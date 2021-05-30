import { FetchResponse } from 'src/controllers';
import { setCookie } from 'src/lib/utils/cookieUtil';
import * as apiType from 'src/types/controllers';

/**
 * HTTP Reqeust 모듈
 * @function
 *
 * @param {string} url 전송할 URL
 * @param {'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE'} method HTTP 메소드
 * @param {object | FormData} sendData body에 담을 데이터
 * @param {function (res): void} callback 성공했을 때, 콜백 함수 (선택사항)
 * @param {function (err): void} failed 실패했을 때, 콜백 함수 (선택사항)
 *
 * @returns {Promise} API 결과를 Promise객체로 반환
 *
 * @example <caption>Get 메소드를 요청할 때</caption>
 * Fetch('/api/v1/test/get', 'GET')
 * .then(res => {  });
 *
 * @example <caption>Post 메소드를 요청할 때</caption>
 * Fetch('api/v1/test/post', 'POST', {key: 'value'})
 * .then(res => {  });
 *
 * @example <caption>FormData를 전송할 때</caption>
 * const sendData = new FormData();
 * sendData.append('key', 'value');
 * Fetch('api/v1/test/post', 'POST', sendData)
 * .then(res => {  });
 */
const Fetch = <T = any, U = object | FormData>(
  url: string,
  method: apiType.HttpMethod,
  sendData?: U,
  callback?: (res: apiType.IFetchResult<T>) => void,
  failed?: (res: apiType.IFetchResult<T>) => void,
): Promise<apiType.IFetchResult<T>> => {
  // For github-pages (free-domain)
  const targetUrl = process.env.REACT_APP_BASE_URL + url;

  /**
   * FormData 검증 함수
   * @param data 검증 데이터
   */
  const checkFormData = (data: any): boolean =>
    data.constructor.toString().slice(9).startsWith('FormData');

  const authorization = {};

  /* set CSRF token */
  const csrfToken = Math.random().toString(36).substr(2, 10);
  /** @todo HTTPS 통신 적용되면 setCookie 함수 인자 `isSecure`을 true로 변경해주기. */
  setCookie('csrf-token', csrfToken, 1, false);
  csrfToken !== '' &&
    Object.assign(authorization, {
      'X-CSRF-TOKEN': csrfToken,
    });

  /* init request form */
  const isFormData = !!sendData && checkFormData(sendData) ? true : false;

  const request: object = {};
  if (method === 'GET') {
    Object.assign(request, {
      method,
      credentials: process.env.REACT_APP_FETCH_CREDENTIALS,
      headers: authorization,
    });
  } else {
    Object.assign(request, {
      method,
      credentials: process.env.REACT_APP_FETCH_CREDENTIALS,
      headers: isFormData
        ? {}
        : Object.assign(authorization, {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          }),
      body: isFormData ? sendData : JSON.stringify(sendData),
    });
  }

  return fetch(targetUrl, request)
    .then(res => {
      const statusCode = res.status;

      switch (Math.floor(res.status / 100)) {
        //////// 200 ~ 299 ////////
        case 2:
          if (statusCode === 204) {
            // No-Content
            return Promise.resolve(new FetchResponse(statusCode, Promise.resolve({})));
          }
          return Promise.resolve(new FetchResponse(statusCode, res.json()));

        //////// 400 ~ 499 ////////
        case 4:
          return Promise.reject(new FetchResponse(statusCode, res.json()));

        //////// 500 ~ 599 ////////
        case 5:
          return Promise.reject(new FetchResponse(statusCode, res.json()));

        default:
          break;
      }

      return Promise.resolve(new FetchResponse(statusCode, res.json()));
    })
    .then(async res => {
      const response = await res.response;
      const result = {
        statusCode: res.statusCode,
        ...response,
      };
      if (typeof callback === 'function') {
        callback(result);
      }

      return result;
    })
    .catch(async err => {
      const response = await err.response;
      const result = {
        statusCode: err.statusCode,
        ...response,
      };
      if (typeof failed === 'function') {
        failed(result);
      }

      return result;
    });
};

/**
 * Query parameters를 String 객체로 변환 함수
 *
 * @example
 * const params = {
 *   search: 'search keyword',
 *   category: 'IMAGE'
 * }
 * const result = paramsToQuery(params);
 * console.log(result); // "search=search+keyword&category=IMAGE"
 */
export const paramsToQuery = (params: apiType.QueryParams): URLSearchParams =>
  new URLSearchParams(params);

export default Fetch;
