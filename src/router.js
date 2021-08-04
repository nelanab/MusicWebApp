import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Album from './views/albums.vue'
import Songs from './views/songs.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
    {
      path: '/',
      component: Home,
    },
    {
        path: '/albums',
        component: Album
    },
    {
      path: '/songs',
      component: Songs
    }
  ]
})