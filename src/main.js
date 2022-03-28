import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import moment from 'moment';
import debounce from 'lodash/debounce'
import Vue2TouchEvents from 'vue2-touch-events'
import Datetime  from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
import * as VueGoogleMaps from 'vue2-google-maps'


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCdOmdfAFUzroLvJl8eps6JetA1Wq08ZdA',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    // If you want to set the version, you can do so:
    // v: '3.26',
  },

  // If you intend to programmatically custom event listener code
  // (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  // instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  // you might need to turn this on.
  // autobindAllEvents: false,

  // If you want to manually install components, e.g.
  // import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  // Vue.component('GmapMarker', GmapMarker)
  // then set installComponents to 'false'.
  // If you want to automatically install all the components this property must be set to 'true':
  installComponents: true
})
Vue.use(Datetime)

Vue.config.productionTip = false

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(value).format("MMM Do YYYY")
  }
});

Vue.use(Vue2TouchEvents)

new Vue({
  router,
  store,
  vuetify,
  debounce,
  render: h => h(App)
}).$mount('#app')
