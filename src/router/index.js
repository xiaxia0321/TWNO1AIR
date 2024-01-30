import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Login',
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
      component: () => import('../views/AirTime.vue'),
    },
    {
      path: "/OutboundConfirm",
      name: "OutboundConfirm",
      component: () => import('../views/OutboundConfirm.vue')
    },
    {
      path: "/ReturnConfirm",
      name: "ReturnConfirm",
      component: () => import('../views/ReturnConfirm.vue')
    },
    {
      path: "/PassengerInformation",
      name: "PassengerInformation",
      component: () => import('../views/PassengerInformation.vue')
    },
    {
      path: "/ProductDetailed",
      name: "ProductDetailed",
      component: () => import('../views/ProductDetailed.vue')
    },
    {
      path: "/A321Seat",
      name: "A321Seat",
      component: () => import('../views/A321Seat.vue')
    },
    {
      path: "/A321Test",
      name: "A321Test",
      component: () => import('../views/A321Test.vue')
    },
    {
      path:"/LocationHakodate",
      name:"LocationHakodate",
      component:() => import('../views/LocationHakodate.vue')
    },
    {
      path:"/LocationLA",
      name:"LocationLA",
      component:() => import('../views/LocationLA.vue')
    },
    {
      path:"/LocationSFO",
      name:"LocationSFO",
      component:() => import('../views/LocationSFO.vue')
    },
    {
      path:"/LocationKyoto",
      name:"LocationKyoto",
      component:() => import('../views/LocationKyoto.vue')
    },
    {
      path:"/LocationOkinawa",
      name:"LocationOkinawa",
      component:() => import('../views/LocationOkinawa.vue')
    },
    {
      path:"/LocationHoChiMinh",
      name:"LocationHoChiMinh",
      component:() => import('../views/LocationHoChiMinh.vue')
    },
    {
      path:"/LocationBangkok",
      name:"LocationBangkok",
      component:() => import('../views/LocationBangkok.vue')
    },
    {
      path:"/LocationSingapore",
      name:"LocationSingapore",
      component:() => import('../views/LocationSingapore.vue')
    },
    {
      path:"/LocationMacao",
      name:"LocationMacao",
      component:() => import('../views/LocationMacao.vue')
    },
    {
      path:"/LocationTokyo",
      name:"LocationTokyo",
      component:() => import('../views/LocationTokyo.vue')
    },
    {
      path:"/User",
      name:"User",
      component:() => import('../views/User.vue')
    },
    {
      path:"/BackCreateFlight",
      name:"BackCreateFlight",
      component:() => import('../components/BackCreateFlight.vue')
    },
    {
      path:"/BackUpdate",
      name:"BackUpdate",
      component:() => import('../components/BackUpdate.vue')
    },
    {
      path: '/Backstage',
      name: 'Backstage',
      component: () => import('../views/Backstage.vue'),
      children:[
        {
          path:'BackHome',
          component:()=>import('../components/BackHome.vue'),
          //alias預設成首頁
          alias:"",
        },
        {
          path:'BackMembership',
          component:()=>import('../components/BackMembership.vue'),
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
    {
      path:"/CheckInIntro",
      name:"CheckInIntro",
      component:() => import('../views/CheckInIntro.vue')
    },
    {
      path:"/OnlineCheckIn",
      name:"OnlineCheckIn",
      component:() => import('../views/OnlineCheckIn.vue')
    },
    {
      path:"/OnlineCheckInTwo",
      name:"OnlineCheckInTwo",
      component:() => import('../views/OnlineCheckInTwo.vue')
    },
    {
      path:"/Dangerous",
      name:"Dangerous",
      component:() => import('../views/Dangerous.vue')
    },
    {
      path:"/FinalCheckIn",
      name:"FinalCheckIn",
      component:() => import('../views/FinalCheckIn.vue')
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
      path:"/Refund",
      name:"Refund",
      component:() => import('../views/Refund.vue')
    },
    {
      //要加在最後一個 若路徑錯誤則會跳出error404
      path:"/:pathMatch(.*)*",
      name:"NotFound",
      component:()=>import('../views/NotFound.vue')
    }
  ]
})

export default router
