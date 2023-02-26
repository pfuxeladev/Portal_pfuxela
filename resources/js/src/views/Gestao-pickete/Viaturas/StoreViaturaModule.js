import axios from '@axios'
import { reject } from 'q'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchViaturas(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/viaturas', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchViatura(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/viaturas/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addViatura(ctx, userData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/viatura', { user: userData })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    activateViatura(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/activateViatura/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    inactivateViatura(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/DesativarViatura/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    alocateVehicle(ctx, viatura) {
      return new Promise((resolve, reject) => {
        axios.post('/api/alocarViatura', viatura)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    alocatedVehicles(ctx, queryParams) {
      // eslint-disable-next-line no-shadow
      return new Promise((resolve, reject) => {
        axios.get('/api/viaturasAlocadas', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    ViewAlocatedVehicle(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/viaturasAlocadas/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    UpdateAlocatedVehicle(ctx, { id, viatura }) {
      return new Promise((resolve, reject) => {
        axios.put(`/api/viaturasAlocadas/${id}`, viatura)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
