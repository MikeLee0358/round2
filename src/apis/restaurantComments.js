import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')

export default {
  delete(commentsId) {
    return apiHelper.delete(`/comments/${commentsId}`, {
      headers: { authorization: `bearer ${getToken()}` }
    })
  },
  create(data) {
    return apiHelper.post('/comments', data, {
      headers: { authorization: `bearer ${getToken()}` }
    })
  }
}