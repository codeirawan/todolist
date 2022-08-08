import './bootstrap';

// import Vue from 'vue'
// import App from './vue/app'

// const app = new Vue({
//     el: '#app',
//     components: { App }
// });

// import { createApp } from 'vue'
// import app from './vue/app.vue'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faPlusSquare, faTrash)

// Vue.components('font-awesome-icon', FontAwesomeIcon)

// createApp({
//     components: { app }
// }).mount('#app')

/* Set up using Vue 3 */
import { createApp } from 'vue'
import app from './vue/app.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faPlusSquare, faTrash)

createApp(app)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')