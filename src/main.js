import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/tailwind.css'
import store from './store'
import '@meforma/vue-toaster';


createApp(App).use(store).mount('#app')

