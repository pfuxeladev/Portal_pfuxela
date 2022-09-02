import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchUsers(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/users', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchUser(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/users/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addUser(ctx, userData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/users', userData)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
<<<<<<< HEAD
    updateUser(ctx, { id, userData }) {
      return new Promise((resolve, reject) => {
        axios
          .put(`/api/users/${id}`, { userData })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
  },
}
