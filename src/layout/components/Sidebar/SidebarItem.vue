<template>
  <div v-if="!item.hidden">
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
        !item.alwaysShow
      "
    >
      <el-tooltip
        class="item"
        effect="dark"
        :content="generateTitle(onlyOneChild.meta.title)"
        placement="right"
      >
        <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
          <el-menu-item
            :index="resolvePath(onlyOneChild.path)"
            :class="{ 'submenu-title-noDropdown': !isNest }"
            style="
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            "
          >
            <item
              :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)"
              :title="generateTitle(onlyOneChild.meta.title)"
            />
          </el-menu-item>
        </app-link>
      </el-tooltip>
    </template>

    <el-submenu
      v-else
      ref="subMenu"
      :index="resolvePath(item.path)"
      popper-append-to-body
    >
      <template slot="title">
        <el-tooltip
          class="item"
          effect="dark"
          :content="generateTitle(item.meta.title)"
          placement="right"
        >
          <!--将原来的普通标签改为路由标签，样式的设定与./Item.vue相同-->
          <router-link :to="resolvePath(item.path)">
            <!-- <el-menu-item :class="{'submenu-title-noDropdown':!isNest}"> -->
            <div
              style="
                width: 175px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              "
            >
              <i
                :class="item.meta.icon"
                style="
                  color: currentColor;
                  width: 1em;
                  height: 1em;
                  margin-right: 12px;
                  margin-left: -2px;
                "
              ></i>
              <span>{{ generateTitle(item.meta.title) }}</span>
            </div>
            <!-- </el-menu-item> -->
          </router-link>
        </el-tooltip>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from "path";
import { generateTitle } from "@/utils/i18n";
import { isExternal } from "@/utils/validate";
import Item from "./Item";
import AppLink from "./Link";
import FixiOSBug from "./FixiOSBug";

export default {
  name: "SidebarItem",
  components: { Item, AppLink },
  mixins: [FixiOSBug],
  props: {
    // route object
    item: {
      type: Object,
      required: true,
    },
    isNest: {
      type: Boolean,
      default: false,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    this.onlyOneChild = null;
    return {};
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      // console.log('children*********',children, 'parent************', parent)
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item;
          return true;
        }
      });

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true;
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        return true;
      }
      // console.log('onlyOneChild', this.onlyOneChild)
      return false;
    },

    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.basePath)) {
        return this.basePath;
      }
      // 组件的详细路由路径，从一级路由路径开始
      // console.log('path.resolve(this.basePath, routePath)',path.resolve(this.basePath, routePath))
      return path.resolve(this.basePath, routePath);
    },

    generateTitle,
  },
};
</script>
<style scoped>
.iconClass {
  color: currentColor;
  width: 1em;
  height: 1em;
}

.item {
  margin: 4px;
}

.el-menu-item.is-active，.el-submenu .el-menu-item.is-active {
  background-color: red !important;
}
</style>
