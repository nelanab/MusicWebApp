<template>
    <div class="flex flex-nowrap content-center justify-between pr-6 pl-6 items-center w-full bg-white bg-opacity-30 playbar absolute bottom-0 backdrop-filter backdrop-blur-lg border-t-2 border-white">
        <div class="flex w-1/4">
            <div class="icon bg-starlightBrigade bg-cover "></div>
            <div class="album-info flex flex-wrap items-center overflow-hidden w-3/4 ml-4">
                <h2 class="whitespace-nowrap font-bold">Starlight Brigade (feat. Dan Avidan)</h2>
                <h2 class="whitespace-nowrap">TWRP</h2>
            </div>
        </div>
        <div class="controls w-2/4 flex flex-wrap p-2 justify-center justify-self-center text-4xl">
            <div class="buttons flex items-center w-1/3 justify-between">
                <i class="fas fa-random text-2xl"></i>
                <i class="fas fa-step-backward text-2xl"></i>
                <i class="fas fa-play"></i>
                <i class="fas fa-step-forward text-2xl"></i>
                <i class="fas fa-redo text-2xl"></i>
            </div>
            <div class="time-slider w-full flex flex-nowrap items-center mt-4">
                <div class="time text-sm leading-4 mr-2">2:15</div>
                <input type="range" min="1" max="100" value="50" class="slider">
                <div class="time text-sm leading-4 ml-2">5:29</div>
            </div>
        </div>
        <div class="flex flex-wrap w-1/4 text-2xl justify-end pl-24">
            <div class="flex items-center w-full justify-end">
                <i class="fas fa-list mr-4"></i>
                <i class="fab fa-chromecast"></i>
            </div>
            <div class="volume-slider w-full flex flex-nowrap items-center mt-6">
                <i class="fas fa-volume-up text-sm mr-2"></i>
                <input type="range" min="1" max="100" value="50" class="slider">
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
    .playbar{
        height: 120px;
        border-radius: 40px 40px 0 0;
    }

    .album-info{
        background: linear-gradient(90deg, #161B40 54.17%, rgba(22, 27, 64, 0) 97.4%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .slider {
        -webkit-appearance: none;
        width: 100%;
        height: 10px;
        background: #EDEDED;
        outline: none;
        -webkit-transition: .2s;
        transition: opacity .2s;
        border-radius: 10px;
        --fill-color: #41B853;
    }

    .time-slider .slider::-webkit-slider-thumb {
        background: #43BEE5;
    }

    .slider:hover {
        opacity: 1;
    }

    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        background: #41B853;
        border-radius: 50%;
        cursor: pointer;
    }

    .slider::-moz-range-thumb {
        width: 20px;
        height: 20px;
        background: #41B853;
        cursor: pointer;
    }
</style>