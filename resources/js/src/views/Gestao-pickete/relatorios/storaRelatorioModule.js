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
          .get('/api/CheckListOut', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchSaida(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/CheckListOut/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addCheckListOut(ctx, CheckListOutData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/CheckListOut', CheckListOutData)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    // Entradas Events
    fetchEntradas(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/CheckListIn', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    fetchEntrada(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/CheckListIn/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    addCheckListIn(ctx, CheckListInData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/CheckListIn', CheckListInData)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
<<<<<<< HEAD
    addAtributo(ctx, chklstVar) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/storeChecklistVars', chklstVar)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    getAtributos(ctx, chklstVar) {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/CheckListAttr', chklstVar)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033

  },
}
