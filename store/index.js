import Vue from 'vue'
import Vuex from 'vuex'
import hello from './modules/hello'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    hello
  },
  strict: process.env.NODE_ENV != 'production'
})

export default store
