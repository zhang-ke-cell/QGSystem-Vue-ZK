<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="true"
        mode="vertical"
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
        <!-- <sidebar-item v-for="route in sortedRoutes" :key="route.path" :item="route" :base-path="route.path" /> -->
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'
import { constantRoutes } from '@/router'

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters([
      'sidebar',
      'permissionRoutes',
      'routes'
    ]),
    // sortedRoutes() {
    //   // 包含router/index.js里的所有路由元信息
    //   // console.log('this.$router.options.routes', this.$router.options.routes)
    //   // this.$router.options.routes.splice(4,0,...this.permissionRoutes)
    //   let routes = constantRoutes
    //   console.log('routes', routes);
    //   console.log('permissionRoutes', this.permissionRoutes)
    //   routes.splice(4,0,...this.permissionRoutes)
    //   return routes
    // },
    activeMenu() {
      const route = this.$route
      // console.log(route)
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
<style>

</style>