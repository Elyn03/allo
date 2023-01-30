import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: [
      {
        name: 'Sylvie',
        num: 707070707,
      },
      {
        name: 'Estéban',
        num: 606060606,
      },
    ],
    journal: [],
  },
  getters: {
  },
  mutations: {
    addContact(state, contact) {
      state.contacts.push(contact)
    },

    call(state, user) {
      var today = new Date();
      if (user.name) {
        let inJournal= {
          name: user.name,
          date: today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear(),
          time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
        };
        state.journal.push(inJournal)
      } else {
        let inJournal= {
          name: user,
          date: today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear(),
          time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
        };
        state.journal.push(inJournal)
      }
      
    },
  },
  actions: {
  },
  modules: {
  }
})
