import axios from '@axios'
import router from '@/router';
export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {

    fetchOrdemLists(ctx, { queryParams }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/RelatorioBomba/${router.currentRoute.params.id}`, { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
