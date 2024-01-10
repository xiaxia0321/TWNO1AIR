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
      path: '/Backstage',
      name: 'Backstage',
      component: () => import('../views/Backstage.vue')
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
    },
    {
      path:"/User",
      name:"User",
      component:() => import('../views/User.vue')
    },
    {
      path: '/Backstage',
      name: 'Backstage',
      component: () => import('../views/Backstage.vue'),
      children:[
        {
          path:'BackMembership',
          component:()=>import('../components/BackMembership.vue'),
          //alias預設成首頁
          alias:"",
        },
        {
          path:'BackPlane',
          component:()=>import('../components/BackPlane.vue'),
        },
        {
          path:'BackOrder',
          component:()=>import('../components/BackOrder.vue'),
          alias:"",
        }
      ]
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
    {
      //要加在最後一個
      path:"/:pathMatch(.*)*",
      name:"NotFound",
      component:()=>import('../views/NotFound.vue')
    }
  ]
})

export default router
