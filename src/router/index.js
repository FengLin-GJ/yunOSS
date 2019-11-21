import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children:[     
      {
        path:'list',
        name: 'list',
        component: () => import('../views/List.vue'),  /*懒加载*/
        children:[     
          {
            path:'imageList',
            name: 'imageList',
            component: () => import('../views/imageList.vue'),   
          },
          {
            path:'musicList',
            name: 'musicList',
            component: () => import('../views/musicList.vue'),   
          },
          {
            path:'videoList',
            name: 'videoList',
            component: () => import('../views/videoList.vue'),   
          } 
        ]
      },
      {
        path:'upload',
        name: 'upload',
        component: () => import('../views/Upload.vue'),
        children:[     
          {
            path:'image',
            name: 'image',
            component: () => import('../views/Image.vue'),   
          },
          {
            path:'music',
            name: 'music',
            component: () => import('../views/Music.vue'),   
          },
          {
            path:'video',
            name: 'video',
            component: () => import('../views/Video.vue'),   
          } 
      ]
      },
      {
        path:'user',
        name: 'user',
        component: () => import('../views/User.vue')
      }
   ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  linkActiveClass:'active',
  routes
})

export default router
