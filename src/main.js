import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'carbon-components/css/carbon-components.css';
import CarbonComponentsVue from '@carbon/vue/src/index';
import titleMixin from './titleMixin'
Vue.mixin(titleMixin)
Vue.use(CarbonComponentsVue);


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


// import VueAxios from 'vue-axios';
 import axios from 'axios'
// Vue.use(VueAxios);
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}
).$mount('#app')
