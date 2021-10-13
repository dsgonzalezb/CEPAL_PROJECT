import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
import messages from './i18n'
import BootstrapVue from 'bootstrap-vue'
import { ToastPlugin } from 'bootstrap-vue'

import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import './stylessheets/style.sass'
import "./stylessheets/fontawesome/css/all.min.css"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'chart.js';
import 'hchs-vue-charts';
import ChartJSPluginDatalabels from "chartjs-plugin-labels";
import store from './store/index'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

Vue.component('v-select', vSelect)
Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(window.VueCharts);
Vue.use(ChartJSPluginDatalabels);
Vue.use(VueI18n)
Vue.use(BootstrapVue)
Vue.use(ToastPlugin)
const i18n = new VueI18n({
  locale: 'es', // set locale
  messages, // set locale messages
  silentTranslationWarn: true
})
Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead)
var eel
if (eel == undefined) eel = {}
Vue.prototype.$loading =  false
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
