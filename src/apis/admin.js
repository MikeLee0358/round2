import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  categories: {
    get() {
      return apiHelper.get('/admin/categories', {
        headers: {
          authorization: `bearer ${getToken()}`
        }
      })
    },
    create(data) {
      return apiHelper.post('/admin/categories', data, {
        headers: {
          authorization: `bearer ${getToken()}`
        }
      })
    },
    update({ categoryId, name }) {
      return apiHelper.put(`/admin/categories/${categoryId}`, { name }, {
        headers: {
          authorization: `bearer ${getToken()}`
        }
      })
    },
    delete(categoryId) {
      return apiHelper.delete(`/admin/categories/${categoryId}`, {
        headers: {
          authorization: `bearer ${getToken()}`
        }
      })
    }
  },
  restaurants: {
    getDetail({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`, {
        headers: {
          authorization: `bearer ${getToken()}`
        }
      })
    },
    get() {
      return apiHelper.get('/admin/restaurants', {
        headers: {
          authorization: `bearer ${getToken()}`
        }
      })
    },
    create({ formData }) {
      return apiHelper.post('/admin/restaurants', formData, {
        headers: {
          authorization: `bearer ${getToken()}`
        }
      })
    },

    delete({ restaurantId }) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`, {
        headers: {
          authorization: `bearer ${getToken()}`
        }
      })
    },
    update({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData, {
        headers: {
          authorization: `bearer ${getToken()}`
        }
      })
    }
  }
}