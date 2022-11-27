import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon)

// 遍历所有本地图标文件，获得所有图标并暴露把应该
const req = require.context('./svg', false, /\.svg$/) // 这是webpack的功能获取文件上下文 这里相当于批量获取上面svg文件夹里的图标 导入
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
