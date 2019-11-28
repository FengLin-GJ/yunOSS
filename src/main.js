import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vueAplayer from 'vue-aplayer'
import VideoPlayer from 'vue-video-player'
import Viewer from 'v-viewer'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
import './plugins/element.js'
import './plugins/axios'
import 'viewerjs/dist/viewer.css'

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(vueAplayer)
Vue.use(VideoPlayer)
Vue.use(Viewer);
Viewer.setDefaults({
  Options: { "inline": true, "button": true, "navbar": true, "title": true, "toolbar": true, "tooltip": true, "movable": true, "zoomable": true, "rotatable": true, "scalable": true, "transition": true, "fullscreen": true, "keyboard": true, "url": "data-source" }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
