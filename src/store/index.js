import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    originalLayout: [
      {"x":0,"y":0,"w":4,"h":2,"i":"0", color: 'green', name: 'Unreconciled payments'},
      {"x":0,"y":2,"w":4,"h":4,"i":"1", color: 'red', name: 'Rent and Income graph'},
      {"x":4,"y":0,"w":8,"h":6,"i":"2", color: 'blue', name: 'Outgoing payments'},
      {"x":0,"y":3,"w":4,"h":4,"i":"3", color: 'yellow', name: 'Tenants'},
      {"x":4,"y":3,"w":4,"h":4,"i":"4", color: 'pink', name: 'Landlords'},
      {"x":8,"y":3,"w":4,"h":4,"i":"5", color: 'orange', name: 'Contractors'},
      {"x":4,"y":4,"w":8,"h":4,"i":"6", color: 'purple', name: 'Income'},
      {"x":0,"y":5,"w":4,"h":6,"i":"7", color: 'grey', name: 'Properties'},
      {"x":0,"y":6,"w":4,"h":3,"i":"8", color: 'teal lighten-2', name: 'Tenancy rent collection table'},
      {"x":4,"y":5,"w":8,"h":18,"i":"9", color: 'light-blue lighten-2', name: 'Insights'},
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
