import axios from '@axios'
import { resolve } from 'path'
import { reject } from 'q'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchOrders(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/Ordems', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchOrder(ctx, { refs }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/Ordems/${refs}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addViatura(ctx, orderData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/Ordems', { order: orderData })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    updateOrder(refs, orderData) {
      return new Promise((resolve, reject) => {
        axios.put(`/api/Ordem/${refs}`, orderData)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
