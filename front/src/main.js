import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
import messages from './i18n'
import BootstrapVue from 'bootstrap-vue'
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import './stylessheets/style.sass'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'chart.js';
import 'hchs-vue-charts';
import ChartJSPluginDatalabels from "chartjs-plugin-labels";


Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(window.VueCharts);
Vue.use(ChartJSPluginDatalabels);
Vue.use(VueI18n)
Vue.use(BootstrapVue)
const i18n = new VueI18n({
  locale: 'es', // set locale
  messages, // set locale messages
  silentTranslationWarn: true
})
Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead)

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
