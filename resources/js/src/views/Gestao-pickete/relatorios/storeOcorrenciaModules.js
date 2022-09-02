import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchOcorrencias(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/Ocorrencia', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchOcorrencia(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/Ocorrencia/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addOcorrencia(ctx, ocorrenciaData) {
      return new Promise((resolve, reject) => {
        axios.post('/api/Ocorrencia', ocorrenciaData)
          .then(response => resolve(response)).catch(error => reject(error))
      })
    },
<<<<<<< HEAD
    OcorrenciaViaturas(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/ocorrenciaViatura', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
=======
    // addViatura(ctx, userData) {
    //   return new Promise((resolve, reject) => {
    //     axios
    //       .post('/api/viatura', { user: userData })
    //       .then(response => resolve(response))
    //       .catch(error => reject(error))
    //   })
    // },
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
  },
}
