import Vue from 'vue'
import Vuex from 'vuex'
import homes from './model'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    homes
  }
})
