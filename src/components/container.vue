<template>
  <div class="w-full h-full bg-white bg-opacity-70 rounded-2xl backdrop-filter backdrop-blur-lg">
    <navigationContainer/>
  </div>
</template>

<script>
  import navigationContainer from './nav.vue'
  export default {
    components: { navigationContainer }
  }
</script>

<style scoped>
  a {
    color: #42b983;
  }
</style>
