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

    addAbastecimentoRecorrente(ctx, SupplyDatas) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/abastecimento_extra', SupplyDatas)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    ApproveOrder(ctx, { refs }) {
      return new Promise((resolve, reject) => {
        axios.post(`/api/AprovarOrdem/${refs}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    CancelOrder(ctx, { refs }) {
      return new Promise((resolve, reject) => {
        axios.post(`/api/CancelarOrdem/${refs}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    AbastecimentoRecorrente(ctx, abstData) {
      return new Promise((resolve, reject) => {
        axios.get('/api/AbastecimentoRecorrente', abstData)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    fetchAbstRecDetails(ctx, { refs }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/AbstCorrDetails/${refs}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    getOpenOrder(ctx, { refs }) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/ordemAberta/${refs}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
