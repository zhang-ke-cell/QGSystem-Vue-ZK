import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // 获取用户登录的token，用于判断用户是否登录了
  const Token = getToken()
  // 获取用户信息：名字
  const userInfo = store.getters.name

  if (Token) {
    //用户登录后无法再去login页面，转到首页页面（if is logged in, redirect to the home page）
    if (to.path === '/login') {
      // next({ path: '/' }) // 原写法
      next( '/' )
      NProgress.done()
    } else {
      // 登录了，但是去的不是login
      //如果有用户名，直接放行(因为一刷新页面，vuex中的userInfo信息就会丢失)
      if (userInfo) {
        next()
      } else {
          try {
            // 获取用户信息：名字和头像（get user info）
            await store.dispatch('user/getInfo')
            next()
          } catch (error) {
            // token因为时间过长失效了从而获取不到用户信息，重新登录
            //清除token
            // remove token and go to Login page to re-Login
            // await store.dispatch('user/resetToken') // 原写法
            await store.dispatch('user/logout')
            Message.error(error || 'Has Error')
            // next(`/login?redirect=${to.path}`) // 原语句
            next(`/login`)
            NProgress.done()
          }
      }
    }
  } else {
    /* has no token*/
    // 如果白名单里有想要去的路径，直接放行
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free Login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the Login page.
      // next(`/login?redirect=${to.path}`) // 原语句
      next(`/login`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
