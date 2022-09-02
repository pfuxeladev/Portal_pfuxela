import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchViaturas(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/viaturas', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchViatura(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/viaturas/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addViatura(ctx, userData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/viatura', { user: userData })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
<<<<<<< HEAD
    activateViatura(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/activateViatura/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    inactivateViatura(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/DesativarViatura/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
  },
}
