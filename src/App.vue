<template>
  <div class="p-4 h-screen w-screen bg-backgroundPattern antialiased">
    <router-view></router-view>
  </div>
</template>

<script>
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
