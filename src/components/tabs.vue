<template>
    <div class="w-3/5 px-24 pt-4 z-50 h-20">
        <div class="flex justify-between items-center antialiased w-full font-bold">
            <h2 class="transform hover:-translate-y-1 transition cursor-pointer">Songs</h2>
            <h2 class="transform hover:-translate-y-1 transition cursor-pointer">Albums</h2>
            <h2 class="transform hover:-translate-y-1 transition cursor-pointer">Artists</h2>
            <h2 class="transform hover:-translate-y-1 transition cursor-pointer">Genres</h2>
            <div class="search flex items-center px-4 py-1 w-1/3 border-2 cursor-pointer"><i class="fas fa-search"></i><span class="opacity-50 ml-4">search</span></div>
        </div>
    </div>
</template>
<style scoped>
    .search{
        border-radius: 20px;
        border-color: #161B40;
    }
    h2:hover{
        color: #43BEE5;
    }
</style>