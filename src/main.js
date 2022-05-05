import Vue from 'vue'
import App from './App.vue'

import "@fontsource/montserrat"
import "@fontsource/montserrat/300.css"
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/700.css"
import "@fontsource/montserrat/800.css"
import "@fontsource/montserrat/900.css"



/* Bootstrap */
const bootstrap = require('bootstrap')
Vue.use(bootstrap)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')