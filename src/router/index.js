import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/Login/index"),
    hidden: true,
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/Dashboard/index"),
        meta: { title: "dashboard", icon: "dashboard" },
      },
    ],
  },

  {
    path: "/data",
    component: Layout,
    children: [
      {
        path: "pre",
        name: "DataPresentation",
        component: () => import("@/views/DataPresentation"),
        meta: { title: "viewData", icon: "table" },
      },
    ],
  }
];

// 需要动态加载的路由
export const asyncRoutes = [
  {
    path: "/manual",
    component: Layout,
    name: "Manual",
    redirect: "/manual/annotation",
    meta: {
      title: "humanAnnotation",
      icon: "el-icon-s-check",
      roles: ["admin", "anotator"],
    },
    children: [
      {
        path: "annotation",
        name: "AnnotationSpecification",
        hidden: true,
        component: () => import("@/views/Manual/AnnotationSpecification"),
        meta: {
          title: "annotationSpecifications",
          roles: ["admin", "anotator"],
        },
      },
      {
        path: "evaluation",
        name: "Evaluation",
        component: () => import("@/views/Manual/Evaluation"),
        meta: {
          title: "evaluteQuestion",
          icon: "el-icon-data-analysis",
          roles: ["admin", "anotator"],
        },
      },
      {
        path: "submit",
        name: "Submit",
        component: () => import("@/views/Manual/Submit"),
        meta: {
          title: "submmitQuestion",
          icon: "el-icon-edit",
          roles: ["admin", "anotator"],
        },
      },
    ],
  },

  {
    path: "/stepqg",
    component: Layout,
    name: "StepQG",
    redirect: "/stepqg/specification",
    meta: {
      title: "semiAutomatedAnnotation",
      icon: "el-icon-s-operation",
      roles: ["admin", "public"],
    },
    children: [
      {
        path: "specification",
        name: "QGSpecification",
        hidden: true,
        component: () => import("@/views/StepQG/QGSpecification"),
        meta: { title: "step", roles: ["admin", "public"] },
      },
      {
        path: "datainput",
        name: "DataInput",
        component: () => import("@/views/StepQG/DataInput"),
        meta: {
          title: "inputData",
          icon: "el-icon-s-data",
          roles: ["admin", "public"],
        },
      },
      // {
      //   path: 'content',
      //   name: 'ContentExtraction',
      //   component: () => import('@/views/StepQG/ContentExtraction'),
      //   meta: { title: '内容抽取', icon:'el-icon-view' }
      // },
      {
        path: "qgevaluation",
        name: "QGEvaluation",
        component: () => import("@/views/StepQG/QGEvaluation"),
        meta: {
          title: "generateAndEvaluateQuestions",
          icon: "el-icon-data-analysis",
          roles: ["admin", "public"],
        },
      },
      {
        path: "distractor",
        name: "DistractorGeneration",
        component: () => import("@/views/StepQG/DistractorGeneration"),
        meta: {
          title: "generateDistractors",
          icon: "el-icon-set-up",
          roles: ["admin", "public"],
        },
      },
      {
        path: "output",
        name: "OutputStorage",
        component: () => import("@/views/StepQG/OutputStorage"),
        meta: {
          title: "storeIntoDatabase",
          icon: "el-icon-takeaway-box",
          roles: ["admin", "public"],
        },
      },
    ],
  },

  {
    path: "/About",
    component: Layout,
    children: [
      {
        path: "index",
        name: "About",
        component: () => import("@/views/About/index"),
        meta: { title: "aboutUs", icon: "el-icon-s-opportunity" },
      },
    ],
  },
  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
