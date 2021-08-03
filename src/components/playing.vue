<template>
    <div class="flex flex-wrap justify-center absolute w-4/6 justify-self-center pt-14 text-center">
        <div class="absolute self-center mb-16 left-0 w-20">
            <div class="self-center flex justify-center items-center icon bg-tedleo icon bg-cover overflow-hidden transform hover:-translate-y-2 transition cursor-pointer">
                <i class="fas text-white fa-step-backward text-2xl absolute z-10"></i>
                <div class="w-full album-background h-full icon bg-cover opacity-50 backdrop-filter backdrop-blur-lg">
                </div>
            </div>
            <h2 class="w-full text-sm font-semibold mt-2 whitespace-nowrap text-center">Counting Down the Hours</h2>
            <h2 class="w-full text-sm whitespace-nowrap text-center">Ted Leo and the Pharmacists</h2>
        </div>
        <div class="album-shadow bg-starlightBrigade bg-cover mt-16 absolute z-0 filter blur-xl opacity-80"></div>
        <div class="album bg-starlightBrigade bg-cover mt-4 z-10 transform hover:-translate-y-2 transition" ></div>
        <h1 class="w-full mt-4 text-2xl font-bold z-10">Starlight Brigade (feat. Dan Avidan)</h1>
        <h2 class="w-full z-10">TWRP</h2>
        <h2 class="w-full z-10">Together Through Time</h2>
        <div class="absolute self-center mb-16 flex flex-wrap justify-end right-0 w-20">
            <div class="self-center flex items-center justify-center icon bg-hayley icon bg-cover overflow-hidden transform hover:-translate-y-2 transition cursor-pointer">
                <i class="fas text-white fa-step-forward text-2xl absolute z-10"></i>
                <div class="w-full album-background h-full icon bg-cover opacity-50 backdrop-filter backdrop-blur-lg"></div>
            </div>
            <h2 class="text-sm font-semibold mt-2 w-full whitespace-nowrap">Simmer</h2>
            <h2 class="text-sm whitespace-nowrap">Hayley Williams</h2>
        </div>
    </div>
</template>
<style scoped>
    .album{
        height: 60vh;
        width: 60vh;
    }
    .album:hover{
        transform: translate(0 -6px);
    }
    .album-shadow{
        height: 57vh;
        width: 56vh;
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