import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Albums from './views/albums.vue'
import Album from './views/singleAlbum.vue'
import Songs from './views/songs.vue'
import Playlist from './views/playlists.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/albums',
      component: Albums
    },
    {
      path: '/songs',
      component: Songs
    },
    {
      path: '/album/:id',
      component: Album,
      props: (route) => ({ name: route.query.id })
    },
    {
      path: '/playlist/:id',
      component: Playlist,
      props: (route) => ({ name: route.query.id })
    }
  ]
})