<template>
    <div class="w-full h-full flex justify-center bg-white bg-opacity-50 rounded-2xl backdrop-filter backdrop-blur-lg overflow-hidden border-t-2 border-white">
        <navigationContainer></navigationContainer>
        <tabs></tabs>
        <playbar></playbar>
        <div class="w-1/5"></div>
        <album></album>
    </div>
</template>
<script>
  import tabs from '../components/tabs.vue';
  import playbar from '../components/playbar.vue';
  import navigationContainer from '../components/nav.vue';
  import album from '../components/album.vue'
  export default {
      components: { playbar, tabs, navigationContainer, album }
  }
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>