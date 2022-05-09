import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchSaidas(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/checkListOut', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchSaida(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/checkListOut/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addCheckListOut(ctx, CheckListOutData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/checkListOut', CheckListOutData)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    // Entradas Events
    fetchEntradas(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/checkListIn', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    fetchEntrada(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/checkListIn/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    addCheckListIn(ctx, CheckListInData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/checkListIn', CheckListInData)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

  },
}
