import { createStore } from 'vuex'

export default createStore({
  state: {
    url: "http://127.0.0.1:8000",
    user : null,
    departements : [],
    roles : [],
    employes : [],
    conges : [],
    banques : [],
    selectedEmploye : null,
    keySearch : ""
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
