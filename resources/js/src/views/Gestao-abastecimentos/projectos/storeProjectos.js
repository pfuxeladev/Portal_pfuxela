import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchProjectos(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/Projectos', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
<<<<<<< HEAD
    fetchProjectoDetails(ctx, { name }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/Projecto/${name}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchRotaProject(ctx, { name, queryParams }) {
      return new Promise((resolve, reject) => {
        axios
          .post(`/api/RelatorioProjecto/${name}`, { params: queryParams })
=======
    fetchProjectoDetails(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/Projectos/${id}`)
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addProjecto(ctx, ProjectDatas) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/Projectos', { projecto: ProjectDatas })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
