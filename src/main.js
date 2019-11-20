import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vueAplayer from 'vue-aplayer'
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
import './plugins/element.js'
import './plugins/axios'

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(vueAplayer)
Vue.use(VideoPlayer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
