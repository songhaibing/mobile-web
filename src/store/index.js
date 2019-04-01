import Vue from 'vue'
import Vuex from 'vuex'
import { Store } from 'vuex';

Vue.use(Vuex);

const state = {
    count:1
}

const mutations = {
   add(state,val){
       state.count+=val
   }

}

const actions = {

}

export default new Store({
  state,
  mutations,
  actions
})
