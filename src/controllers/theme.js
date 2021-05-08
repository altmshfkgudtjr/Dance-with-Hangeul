import Fetch from 'controllers/fetch';
// types
import { ApiError } from 'types/Error';

/**
 * 테마 요청 API
 * @version 1
 */
export const getThemes = () => {
  return Fetch('/storage/themes.json', 'GET')
    .then(res => res.documents)
    .catch(err => {
      throw new ApiError('getThemes Error', err);
    });
};

/**
 * 기본테마 요청 API
 * @version 1
 */
export const getDefaultThemes = () => {
  return Fetch('/storage/defaultThemes.json', 'GET')
    .then(res => res.documents)
    .catch(err => {
      throw new ApiError('getDefaultThemes Error', err);
    });
};
