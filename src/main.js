import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.useAttrs(VueRouter)

createApp(App).mount('#app')
