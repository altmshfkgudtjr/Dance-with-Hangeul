import Fetch from 'src/controllers/fetch';
// types
import { ApiError } from 'src/types/Error';

/**
 * 인용구 요청 API
 * @version 1
 */
export const getQuotes = () => {
  return Fetch('/storage/hanguelQuotes.json', 'GET')
    .then(res => res.documents)
    .catch(err => {
      throw new ApiError('getQuotes Error', err);
    });
};
