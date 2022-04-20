import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchAbastecimentos(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/Abastecimento', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchAbastecimentoDetails(ctx, { refs }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/Abastecimento/${refs}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addAbastecimento(ctx, SupplyDatas) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/Abastecimento', { abastecimento: SupplyDatas })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
