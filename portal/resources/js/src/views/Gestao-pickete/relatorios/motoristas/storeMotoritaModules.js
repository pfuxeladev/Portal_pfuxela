import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchDrivers(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/motoristas', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchDriver(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/motoristas/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addDriver(ctx, driverData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/motoristas', driverData)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
