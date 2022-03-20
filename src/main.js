import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import './assets/scss/styles.scss'

Vue.config.productionTip = false
export const eventBus = new Vue()

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')

