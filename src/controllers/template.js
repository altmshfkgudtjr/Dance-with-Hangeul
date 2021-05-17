import Fetch from 'src/controllers/fetch';
// types
import { ApiError } from 'src/types/Error';

/**
 * 템플릿 요청 API
 * @version 1
 */
export const getTemplates = () => {
  return Fetch('/storage/templates.json', 'GET')
    .then(res => res.documents)
    .catch(err => {
      throw new ApiError('getTemplates Error', err);
    });
};
