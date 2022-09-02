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
<<<<<<< HEAD

    fetchAbastecimentoDetails(ctx, { refs }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/Ordems/${refs}`)
=======
    fetchAbastecimentoDetails(ctx, { refs }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/Abastecimento/${refs}`)
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
<<<<<<< HEAD

    addAbastecimento(ctx, SupplyDatas) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/submeterAbst', SupplyDatas)
=======
    addAbastecimento(ctx, SupplyDatas) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/Abastecimento', { abastecimento: SupplyDatas })
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
<<<<<<< HEAD

=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
    addAbastecimentoRecorrente(ctx, SupplyDatas) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/abastecimento_extra', SupplyDatas)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
<<<<<<< HEAD

=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
    ApproveOrder(ctx, { refs }) {
      return new Promise((resolve, reject) => {
        axios.post(`/api/AprovarOrdem/${refs}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
<<<<<<< HEAD
    UndoOrder(ctx, { refs }) {
      return new Promise((resolve, reject) => {
        axios.post(`/api/DesfazerOrdem/${refs}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
    CancelOrder(ctx, { refs }) {
      return new Promise((resolve, reject) => {
        axios.post(`/api/CancelarOrdem/${refs}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
<<<<<<< HEAD

=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
    AbastecimentoRecorrente(ctx, abstData) {
      return new Promise((resolve, reject) => {
        axios.get('/api/AbastecimentoRecorrente', abstData)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
<<<<<<< HEAD

=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
    fetchAbstRecDetails(ctx, { refs }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/AbstCorrDetails/${refs}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
<<<<<<< HEAD
    },
    getHistory(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/RelatorioGeral', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    // ReabrirOrdem
    ReopenOrder(ctx, { refs }) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/ReabrirOrdem/${refs}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    // verOrdensAbertas
    getOpenOrder(ctx, { refs }) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/Ordems/${refs}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    removeLine(ctx, { refs }) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/removeLine/${refs}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
=======
    }
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
  },
}
