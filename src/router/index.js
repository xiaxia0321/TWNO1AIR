import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'Login',
    //   component: () => import('../views/Login.vue')
    // },
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
      path: "/",
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
      path: "/A321",
      name: "A321",
      component: () => import('../views/A321.vue')
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
      path: "/DepartureLocationTime",
      name: "DepartureLocationTime",
      component: () => import('../views/DepartureLocationTime.vue')
    },
    {
      path: "/ArrivalLocationTime",
      name: "ArrivalLocationTime",
      component: () => import('../views/ArrivalLocationTime.vue')
    },
    {
      path: "/AirTimeSearch",
      name: "AirTimeSearch",
      component: () => import('../views/AirTimeSearch.vue')
    },
    {
      path: "/AirTime",
      name: "AirTime",
      component: () => import('../views/AirTime.vue')
    },
    {
      path: "/A321Seat",
      name: "A321Seat",
      component: () => import('../views/A321Seat.vue')
    },
    {
      path:"/LocationHakodate",
      name:"LocationHakodate",
      component:() => import('../views/LocationHakodate.vue')
    },
    {
      path:"/User",
      name:"User",
      component:() => import('../views/User.vue')
    },
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
