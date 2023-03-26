import { asyncRoutes, constantRoutes } from '@/router'

// 判断当前的角色是否有进入该路由的权限。roles：列表，route：对象
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

// 筛选出有权限的路由
export function filterAsyncRoutes(routes, roles) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

const state = {
  routes: [],
  permissionRoutes: []
}

// const actions = {
//   generateRoutes({ commit }, roles) {
//     return new Promise(resolve => {
//       let accessedRoutes
//       if (roles.includes('admin')) {
//         accessedRoutes = asyncRoutes || []
//       } else {
//         accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
//       }
//       commit('SET_ROUTES', accessedRoutes)
//       resolve(accessedRoutes)
//     })
//   }
// }

const actions = {
  generateRoutes({commit}, roles){
    let accessedRoutes 
    if(roles.includes('admin')){
      accessedRoutes = asyncRoutes || []
    }else{
      accessedRoutes = filterAsyncRoutes(asyncRoutes, roles) // 动态路由中能被roles进入的路由
    }
    commit('SET_ROUTES', accessedRoutes)
  }
}

const mutations = {
  SET_ROUTES: (state, accessedRoutes) => {
    state.permissionRoutes = accessedRoutes
    state.routes = constantRoutes.concat(accessedRoutes)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
