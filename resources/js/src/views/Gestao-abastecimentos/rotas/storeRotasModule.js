import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchRotas(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/Rotas', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchRota(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/Rotas/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addRota(ctx, rotaData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/Rotas', rotaData)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    updateRota(ctx, { rotaData, id }) {
      return new Promise((resolve, reject) => {
        axios
          .put(`/api/Rotas/${id}`, rotaData.value)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
