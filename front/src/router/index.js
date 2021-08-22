import Vue from 'vue'
import VueRouter from 'vue-router'
const Layout = () => import( '../components/Layout.vue')
const Home = () => import( '../views/Home.vue')
const Settings = () => import( '../views/Settings.vue')

const Descriptives = () => import( '../views/Descriptives.vue')
const Des1 = () => import( '../views/Des1.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children:[
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'settings',
        name: 'Settings',
        component: Settings,
      },
      {
        path: 'descriptives',
        component: Descriptives,
        children: [
          {
            path: ':id',
            name: 'DesIndex',
            redirect: { name: 'Des1' }
          },
          {
            path: 'd1',
            name: 'Des1',
            component: Des1,
          },
        ]
      },
    ]
  },
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
