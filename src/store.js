import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './constants'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  currentId: 0,
  searchName: '',
  users: [{
    "id": 0,
    "name": "路飞",
    "age": 24,
    "tel": 15680859618
  }, {
    "id": 1,
    "name": "剑豪鹰眼",
    "age": 24,
    "tel": 15680859618
  }, {
    "id": 2,
    "name": "剑豪索罗",
    "age": 24,
    "tel": 15680859618
  }, {
    "id": 3,
    "name": "香吉士",
    "age": 24,
    "tel": 15680859618
  }, {
    "id": 4,
    "name": "娜美",
    "age": 24,
    "tel": 15680859618
  }]
}
let a = false
const mutations = {
  [types.USER_ADD] (state) {
    console.log(state);
  },
  [types.USER_EDIT] (state, user) {
    const id = user.id

    state.users.forEach((currentUser) => {
      if(currentUser.id === id) {
        currentUser = {...user}
      }
    })
  },
  [types.USER_DELETE] (state, id) {
    console.log(id)
    state.users.$remove(state.users[id])
  },
  [types.USER_FILTER] (state, name) {
    state.searchName = name
  },
  [types.USER_START_OPERATE] (state, id) {
    state.currentId = id
  }
}

function fetchUsers () {
  axios('/mock/user.json').then((ret) => {
    if(ret.status === 200) {
      return ret.data
    }
  })
}

export default new Vuex.Store({
  state,
  mutations
})
