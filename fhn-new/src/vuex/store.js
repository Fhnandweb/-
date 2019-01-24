import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//state
const state = {
  userinfo: JSON.parse(sessionStorage.getItem('userinfo')),
  active: JSON.parse(sessionStorage.getItem('active'))
}
// mutations操作state
const mutations = {
  saveinfo(state, data) {
    //存入本地
    sessionStorage.setItem('userinfo', JSON.stringify(data));
    state.userinfo = data
  },
  saveactive(state, data) {
    sessionStorage.setItem('active', JSON.stringify(data))
    state.active = data
  },
  resetinfo(state, data) {
    sessionStorage.setItem('userinfo', JSON.stringify(data));
    state.userinfo = data
  }
}
//actions 异步的， 主要是commit mutations，由mutations 改变状态
const actions = {

}
//全局共享属性
const getters = {

}

//
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
