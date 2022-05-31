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
    fetchProjectoDetails(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/Projectos/${id}`)
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
