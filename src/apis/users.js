import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')

export default {
  addFavorite({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null, {
      headers: { authorization: `bearer ${getToken()}` }
    })
  },
  deleteFavorite(restaurantId) {
    return apiHelper.delete(`/favorite/${restaurantId}`, {
      headers: { authorization: `bearer ${getToken()}` }
    })
  }
}