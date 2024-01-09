import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/AboutView',
      name: 'AboutView',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/Submit",
      name: "Submit",
      component: () => import('../views/Submit.vue')
    },
    {
      path: "/HomeView",
      name: "HomeView",
      component: () => import('../views/HomeView.vue')
    },
    {
      path: "/Search",
      name: "Search",
      component: () => import('../views/Search.vue')
    },
    {
      path: "/Browse",
      name: "Browse",
      component: () => import('../views/Browse.vue')
    },
    {
      path: "/AircraftType",
      name: "AircraftType",
      component: () => import('../views/AircraftType.vue')
    },
    {
      path: "/A330",
      name: "A330",
      component: () => import('../views/A330.vue')
    },
    {
      path: "/A350",
      name: "A350",
      component: () => import('../views/A350.vue')
    },
    {
      path: "/A321neo",
      name: "A321neo",
      component: () => import('../views/A321neo.vue')
    },
    {
      path:"/LocationHakodate",
      name:"LocationHakodate",
      component:() => import('../views/LocationHakodate.vue')
    }
    // {
    //   path:"/dynamicQuestionnaireBack",
    //   name:"dynamicQuestionnaireBack",
    //   component:() => import('../views/dynamicQuestionnaireBack.vue')
    // },
    // {
    //   path:"/backForm",
    //   name:"backForm",
    //   component:() => import('../views/backForm.vue')
    // },
    // {
    //   path:"/questionsForms",
    //   name:"questionsForms",
    //   component:() => import('../views/questionsForms.vue')
    // },
    // {
    //   path:"/dynamicQuestionnaireLogin",
    //   name:"dynamicQuestionnaireLogin",
    //   component:() => import('../views/dynamicQuestionnaireLogin.vue')
    // },
  ]
})

export default router
