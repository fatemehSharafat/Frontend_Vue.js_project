import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './assets/css/variables.css';
import './assets/css/main.css';

import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/js/main.js'

createApp(App).use(store).use(router).mount('#app')
