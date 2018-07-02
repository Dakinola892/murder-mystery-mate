import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VModal from 'vue-js-modal'
import SuiVue from 'semantic-ui-vue';

Vue.use(VModal);
Vue.use(SuiVue);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
