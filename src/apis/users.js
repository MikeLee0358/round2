import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')

export default {
  addFavorite({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null, {
      headers: { authorization: `bearer ${getToken()}` }
    })
  },
  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`, {
      headers: { authorization: `bearer ${getToken()}` }
    })
  },
  addLiked({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null, {
      headers: { authorization: `bearer ${getToken()}` }
    })
  },
  deleteLiked({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`, {
      headers: { authorization: `bearer ${getToken()}` }
    })
  },
  getTopUsers() {
    return apiHelper.get(`/users/top`, {
      headers: { authorization: `bearer ${getToken()}` }
    })
  },
  addFollowing({ userId }) {
    return apiHelper.post(`/following/${userId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteFollowing({ userId }) {
    return apiHelper.delete(`/following/${userId}`, {
      headers: { authorization: `bearer ${getToken()}` }
    })
  },

}