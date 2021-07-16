<template>
  <div class="w-full h-full flex justify-center bg-white bg-opacity-50 rounded-2xl backdrop-filter backdrop-blur-lg overflow-hidden">
    <navigationContainer></navigationContainer>
    <tabs></tabs>
    <playbar></playbar>
    <div class="w-1/5"></div>
    <playing></playing>
  </div>
</template>

<script>
  import navigationContainer from './nav.vue'
  import playbar from './playbar.vue';
  import tabs from './tabs.vue';
  import playing from './playing.vue';
  export default {
    components: { navigationContainer, playbar, tabs, playing }
  }
</script>

<style scoped>
  a {
    color: #42b983;
  }
</style>
