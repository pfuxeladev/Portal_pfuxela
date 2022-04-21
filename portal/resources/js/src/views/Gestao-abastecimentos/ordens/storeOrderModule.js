import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchOrders(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/Orders', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchOrder(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/Orders/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addViatura(ctx, orderData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/Orders', { order: orderData })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
