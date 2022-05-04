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
          .get('/api/motorista', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchDriver(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/motorista/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addDriver(ctx, driverData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/motorista', driverData)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
