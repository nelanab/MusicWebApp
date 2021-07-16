<template>
    <div class="flex flex-wrap justify-center absolute w-4/6 justify-self-center pt-14 text-center">
        <div class="absolute self-center mb-16 left-0">
            <div class="self-center flex justify-center items-center icon bg-tedleo icon bg-cover overflow-hidden">
                <i class="fas text-white fa-step-backward text-2xl absolute z-10"></i>
                <div class="w-full album-background h-full icon bg-cover opacity-50 backdrop-filter backdrop-blur-lg">
                </div>
            </div>
            <h2 class="w-full text-left">Counting Down the Hours</h2>
            <h2 class="w-full text-left">Ted Leo and the Pharmacists</h2>
        </div>
        <div class="album-shadow bg-starlightBrigade bg-cover mt-16 absolute z-0 filter blur-xl opacity-80"></div>
        <div class="album bg-starlightBrigade bg-cover mt-4 z-10"></div>
        <h1 class="w-full mt-4 text-2xl font-bold z-10">Starlight Brigade (feat. Dan Avidan)</h1>
        <h2 class="w-full z-10">TWRP</h2>
        <h2 class="w-full z-10">Together Through Time</h2>
        <div class="absolute self-center mb-16 flex flex-wrap justify-end right-0">
            <div class="self-center flex items-center justify-center icon bg-hayley icon bg-cover overflow-hidden">
                <i class="fas text-white fa-step-forward text-2xl absolute z-10"></i>
                <div class="w-full album-background h-full icon bg-cover opacity-50 backdrop-filter backdrop-blur-lg"></div>
            </div>
            <h2 class="w-full text-right">Simmer</h2>
            <h2 class="w-full text-right">Hayley Williams</h2>
        </div>
    </div>
</template>
<style scoped>
    .album{
        height: 26em;
        width: 26em;
    }
    .album-shadow{
        height: 25em;
        width: 24em;
    }
    .album-background{
        background-color: #161B40;
    }
    h2{
        background: linear-gradient(90deg, #161B40 54.17%, rgba(22, 27, 64, 0) 97.4%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>