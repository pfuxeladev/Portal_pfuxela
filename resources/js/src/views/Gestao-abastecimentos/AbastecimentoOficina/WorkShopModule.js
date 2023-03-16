import axios from '@axios'
import { resolve } from 'path'
import { reject } from 'q'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async listBombas() {
      // eslint-disable-next-line no-shadow
      return await new Promise((resolve, reject) => axios.get('/api/bombas')
        .then(response => resolve(response))
        .catch(error => reject(error)))
    },
    listViatura() {
      return new Promise((resolve, reject) => axios.get('/api/listViaturaDentro'))
        .then(response => resolve(response))
        .catch(error => reject(error))
    },

  },
}
