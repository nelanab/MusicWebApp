<template>
  <div class="p-4 h-screen w-screen bg-backgroundPattern antialiased">
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
    font-family: 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #161B40;
    background-color: #EDEDED;
    font-size: 20px;
  }

  .icon{
    width: 80px;
    height: 80px;
    border-radius: 10px;
  }
</style>
