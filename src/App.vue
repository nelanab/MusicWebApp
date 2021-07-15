<template>
  <div class="p-4 h-screen w-screen bg-backgroundPattern">
    <container/>
  </div>
</template>

<script>
  import container from './components/container.vue';
  export default {
      components: { container }
  }
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
#app {
  font-family: 'Nunito Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #161B40;
  background-color: #EDEDED;
}
</style>
