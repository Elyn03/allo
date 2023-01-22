import { createStore } from 'vuex'

export default createStore({
  state: {
    number: 0,
    contacts: [
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
      },
    ],
    journal: []
  },
  getters: {
  },
  mutations: {
    addContact(state, contact) {
      state.contacts.push(contact)
    },
    call(state, user) {
      state.journal.push(user)
    },
  },
  actions: {
  },
  modules: {
  }
})
