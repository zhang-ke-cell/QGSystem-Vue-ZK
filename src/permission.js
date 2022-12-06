import router from "./router";
import store from "./store";
import { Message } from "element-ui";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getToken } from "@/utils/auth"; // get token from cookie
import getPageTitle from "@/utils/getPageTitle";

NProgress.configure({ showSpinner: false }); // NProgress Configuration
const whiteList = ["/login"]; // no redirect whitelist

// 静态路由管理规则
// router.beforeEach(async(to, from, next) => {
//   // start progress bar
//   NProgress.start()
//   // set page title
//   document.title = getPageTitle(to.meta.title)

//   // 获取用户登录的token，用于判断用户是否登录了
//   const Token = getToken()
//   // 获取用户信息：名字
//   const userInfo = store.getters.name

//   if (Token) {
//     //用户登录后无法再去login页面，转到首页页面（if is logged in, redirect to the home page）
//     if (to.path === '/login') {
//       // next({ path: '/' }) // 原写法
//       next( '/' )
//       NProgress.done()
//     } else {
//       // 登录了，但是去的不是login
//       //如果有用户名/用户角色信息，直接放行(因为一刷新页面，vuex中的userInfo信息就会丢失)
//       if (userInfo) {
//         next()
//       } else {
//           try {
//             // 获取用户信息：名字和头像（get user info）
//             await store.dispatch('user/getInfo')
//             next()
//           } catch (error) {
//             // token因为时间过长失效了从而获取不到用户信息，重新登录
//             //清除token
//             // remove token and go to Login page to re-Login
//             // await store.dispatch('user/resetToken') // 原写法
//             await store.dispatch('user/logout')
//             Message.error(error || 'Has Error')
//             // next(`/login?redirect=${to.path}`) // 原语句
//             next(`/login`)
//             NProgress.done()
//           }
//       }
//     }
//   } else {
//     /* has no token*/
//     // 如果白名单里有想要去的路径，直接放行
//     if (whiteList.indexOf(to.path) !== -1) {
//       // in the free Login whitelist, go directly
//       next()
//     } else {
//       // other pages that do not have permission to access are redirected to the Login page.
//       // next(`/login?redirect=${to.path}`) // 原语句
//       next(`/login`)
//       NProgress.done()
//     }
//   }
// })

// 权限管理路由规则
router.beforeEach(async (to, from, next) => {
  // 开始进度条
  NProgress.start();
  // 设置网页的title
  document.title = getPageTitle(to.meta.title);
  // 获取用户登录的token，用于判断用户是否登录了
  const Token = getToken();
  // 获取用户信息：名字
  if (Token) {
    //用户登录后无法再去login页面，转到首页页面
    if (to.path === "/login") {
      // next({ path: '/' }) // 原写法
      next("/");
      NProgress.done();
    } else {
      // 登录了，但是去的不是login
      const hasRoles = store.getters.roles && store.getters.roles.length > 0;
      if (hasRoles) { //如果有用户角色信息，证明动态路由已经生成，直接放行(因为一刷新页面，vuex中的userInfo信息就会丢失)
        next()
      } else {
        try {
          // 获取用户信息：名字和头像（get user info）
          await store.dispatch("user/getInfo");
          const roles = store.getters.roles
          await store.dispatch(
            "permission/generateRoutes",
            roles
          );
          const permissionRoutes = store.getters.permissionRoutes
          router.addRoutes(permissionRoutes)
          // 如果 addRoutes 并未完成，路由守卫会一层一层的执行执行，直到 addRoutes 完成，找到对应的路由
          next({ ...to, replace: true })
        } catch (error) {
          // token因为时间过长失效了从而获取不到用户信息，重新登录
          //清除token
          await store.dispatch("user/logout");
          Message.error(error || "Has Error");
          next(`/login`);
          NProgress.done();
        }
      }
    }
  } else {
    // 无token放行到白名单中的login
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else { // 无token放行到login
      next(`/login?redirect=${to.path}`)
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
