import axios from '@axios'
// import { resolve } from 'path'
// import { reject } from 'q'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    getAbastecimentoServicos(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios.get('/api/abastecimentoServicos', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    createAbastecimentoServico(ctx, dataRequest) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/submitAdmniService', dataRequest)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    viewAdministrativeOrder(ctx, { refs }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/abastecimentoServicos/${refs}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
