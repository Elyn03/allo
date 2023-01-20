import { createStore } from 'vuex'

export default createStore({
  state: {
    number: 0,
    contact: [
      {
        name: 'Gérard',
        num: 808080808,
      },
      {
        name: 'Sylvie',
        num: 707070707,
      },
      {
        name: 'Estéban',
        num: 606060606,
      }
    ],
    formContact: []
  },
  getters: {
  },
  mutations: {
    addContact(state, user) {
      state.contact.push(user)
    },
    increment(state) {
      state.compteur++
    },
  },
  actions: {
  },
  modules: {
  }
})
