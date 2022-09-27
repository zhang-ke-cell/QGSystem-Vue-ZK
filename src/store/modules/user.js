import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: ''
  }
}

const state = getDefaultState()

const actions = {
  // user Login
  // login({ commit }, userInfo) {
  //   const { username, password } = userInfo
  //   return new Promise((resolve, reject) => {
  //     login({ username: username.trim(), password: password }).then(response => {
  //       const { data } = response
  //       commit('SET_TOKEN', data) // 原为 setToken(data.token)
  //       setToken(data) // 原为 setToken(data.token)
  //       resolve()
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // },
  //

  // user Login
  async login({commit}, userInfo){
    const {username, password} = userInfo
    let res = await login({ username: username.trim(), password: password })
    if (res.code===200){
      const {data} = res
      commit('SET_TOKEN', data) // 原为 setToken(data.token)
      setToken(data) // 原为 setToken(data.token)
      return '成功'
    }else{
      return Promise.reject(new Error('失败'))
    }
  },

  // get user info
  // getInfo({ commit, state }) {
  //   return new Promise((resolve, reject) => {
  //     getInfo(state.token).then(response => {
  //       const { data } = response
  //       if (!data) {
  //         return reject('Verification failed, please Login again.')
  //       }
  //       const { name, avatar } = data
  //       console.log(avatar)
  //       commit('SET_NAME', name)
  //       commit('SET_AVATAR', avatar)
  //       resolve(data)
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // },

  async getInfo({ commit, state }){
    let res = await getInfo(state.token)
    if(res.code===200){
      const {data} = res
      if(!data){
        return Promise.reject('验证失败，请重新登录')
      }
      const {name, avatar} = data
      commit('SET_NAME', name)
      commit('SET_AVATAR', avatar)
      return '成功'
    }else{
      return Promise.reject('失败')
    }
  },

  // // user logout
  // logout({ commit, state }) {
  //   return new Promise((resolve, reject) => {
  //     logout(state.token).then(() => {
  //       removeToken() // must remove  token  first
  //       resetRouter()
  //       commit('RESET_STATE')
  //       resolve()
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // },

  async logout({ commit, state }){
    let res = await logout(state.token)
    if(res.code===200){
      removeToken()
      resetRouter()
      commit('RESET_STATE')
      return '成功'
    }else{
      return Promise.reject('失败')
    }
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

