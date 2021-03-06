import Vue from 'vue'
import VueRouter from 'vue-router'
const Layout = () => import( '../components/Layout.vue')
const Home = () => import( '../views/Home.vue')
const Settings = () => import( '../views/Settings.vue')

const Descriptives = () => import( '../views/Descriptives.vue')
const Des1 = () => import( '../views/Des1.vue')
const SPDA = () => import('../views/SPDA.vue')
const Manager = () => import('../views/Manager.vue')
const REP = () => import('../views/REP.vue')
const OtherProfiles = () => import('../views/OtherProfiles.vue')
const Graphs = () => import('../views/Graphs.vue')
const Excel = () => import('../views/Excel.vue')

const Results = () => import('../views/Results.vue')
const Actual = () => import('../views/Actual.vue')
const Sankey = () => import('../views/Sankey.vue')
const Proyect = () => import('../views/Proyect.vue')
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
            path: '',
            name: 'DesIndex',
            redirect: { name: 'Des1' }
          },
          {
            path: 'd1/:id',
            name: 'Des1',
            component: Des1,
          },
          {
            path: 'd2',
            name: 'SPDA',
            component: SPDA,
          },
          {
            path: 'd3',
            name: 'Manager',
            component: Manager,
          },
          {
            path: 'd4',
            name: 'REP',
            component: REP,
          },
          {
            path: 'd5',
            name: 'OtherProfiles',
            component: OtherProfiles,
          },
          {
            path: 'd6',
            component: Graphs,
            children: [
              {
                path: '',
                name: 'ResultsIndex',
                redirect: { name: 'Results' }
              },
              {
                path: 'tl1',
                name: 'Results',
                component: Results,
              },
              {
                path: 'tl2',
                name: 'Actual',
                component: Actual,
              },
              {
                path: 'tl3',
                name: 'Sankey',
                component: Sankey,
              },
              {
                path: 'tl4',
                name: 'Proyect',
                component: Proyect,
              },
            ]
          },
          {
            path: 'd7',
            name: 'Excel',
            component: Excel,
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
