// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fontawesome from '@fortawesome/fontawesome'
import {faUser} from '@fortawesome/fontawesome-free-solid'
import faCircle from '@fortawesome/fontawesome-free-regular/faCircle'
import faFacebook from '@fortawesome/fontawesome-free-brands'

// Add the icon to the library so you can use it in your page
fontawesome.library.add(faUser)
fontawesome.library.add(faCircle)
fontawesome.library.add(faFacebook)
fontawesome.config = { autoReplaceSvg: false }
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
