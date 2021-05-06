import Fetch from 'controllers/fetch'
// types
import { ApiError } from 'types/Error'


/**
 * 템플릿 요청 API
 * @version 1
 */
export const getTemplates = () => {
	return Fetch('/storage/templates.json', 'GET')
	.then(res => res.templates)
	.catch(err => {
		throw new ApiError("getTemplates Error", err);
	});
}