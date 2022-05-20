import Vue from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import {store} from './components/store/store'


library.add(faUserSecret);

new Vue({
    el: '#app',
    store,
    render:h=>h(App)
})