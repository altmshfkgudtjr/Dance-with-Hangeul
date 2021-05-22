/**
 * Cookie 값 가져오기
 * @category Lib / Util
 *
 * @param cookieKey 쿠키 Key 값
 */
export const getCookie = (cookieKey: string) => {
  let cookieValue: string = '';
  if (document.cookie) {
    let array = document.cookie.split(escape(cookieKey) + '=');
    if (array.length >= 2) {
      let arraySub = array[1].split(';');
      cookieValue = unescape(arraySub[0]);
    }
  }

  return cookieValue;
};

/**
 * Cookie 값 설정하기
 * @category Lib / Util
 *
 * @param cookieKey 쿠키 키
 * @param cookieValue 쿠키 값
 * @param cookieExpire 현재로부터 쿠키 만료 날짜 (minute)
 * @param isSecure HTTPS 통신에서만 가능한지 여부
 * @param cookiePath
 */
export const setCookie = (
  cookieKey: string,
  cookieValue: string,
  cookieExpire: number,
  isSecure: boolean,
  cookiePath: string = '/',
) => {
  const date = new Date();
  date.setTime(date.getTime() + cookieExpire * 60 * 60 * 1000);

  let cookie = `${escape(cookieKey)}=${escape(cookieValue)}`;
  cookie += cookieExpire ? '; EXPIRES=' + date.toUTCString() : '';
  cookie += cookiePath ? '; PATH=' + cookiePath : '';
  cookie += isSecure ? '; SECURE' : '';

  document.cookie = cookie;
};
