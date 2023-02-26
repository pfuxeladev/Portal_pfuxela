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
          .get('/api/rotaByDistance', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    getRotaDetails(ctx, { rotaId }) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/Rotas/${rotaId}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
