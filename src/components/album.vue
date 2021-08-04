<template>
    <div class="album-container flex flex-wrap justify-between absolute w-4/6 justify-self-center mt-20 z-0 overflow-y-auto pr-6">
        <div v-for="album in albums" :key="album.url">
            <div class="flex flex-wrap album relative mb-16">
                <div class="album-shadow bg-cover bg-center absolute z-0 filter blur-lg opacity-80 transform translate-y-10 rounded-xl" :style='{ backgroundImage: `url(${album.url})` }'></div>
                <div class="album bg-cover bg-center mt-4 z-10 rounded-xl" :style='{ backgroundImage: `url(${album.url})` }'></div>
                <h2 class="album-text text-left font-bold mt-2 text-base whitespace-nowrap overflow-hidden">{{album.name}}</h2>
                <h2 class="album-text text-left text-base whitespace-nowrap overflow-hidden">{{album.artist}}</h2>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .album-container{
        height: 100%;
        padding-bottom: 12%
    }
    .album{
        width: 24vh;
        height: 24vh;
    }
    .album-text{
        width: 24vh;
    }
    .album-shadow{
        width: 22vh;
        height: 22vh;
        margin-left: 1vh;
    }
    ::-webkit-scrollbar {
        width: 10px;
        border-radius: 6px;
        height: 78%;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #EDEDED;
        border-radius: 15px;
        margin-bottom: 14rem;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #F40058;
        border-radius: 10px;
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
<script>
export default{
    data() {
        return {
            albums: [
                {
                    name: 'Petals for Armor',
                    artist: 'Hayley Williams',
                    url: '../img/albums/hayleyWilliams.png'
                },
                {
                    name: 'Popstars',
                    artist: 'KDA',
                    url: '../img/albums/KDA.png'
                },
                {
                    name: 'If You Leave',
                    artist: 'Daughter',
                    url: '../img/albums/daughter.png'
                }
                ,
                {
                    name: 'Three Cheers for Sweet Revenge',
                    artist: 'My Chemical Romance',
                    url: '../img/albums/edge.png'
                },
                {
                    name: 'Ex:Re',
                    artist: 'Ex:Re',
                    url: '../img/albums/exre.png'
                },
                {
                    name: 'Lungs',
                    artist: 'Florence and the Machine',
                    url: '../img/albums/florence.png'
                },
                {
                    name: 'Hades Original Soundtrack',
                    artist: 'Darren Korb',
                    url: '../img/albums/hades.png'
                },
                {
                    name: 'Career Day',
                    artist: 'Keaton Henson',
                    url: '../img/albums/keaton.png'
                },
                {
                    name: 'Whatever People Say I Am, That\'s the Truth',
                    artist: 'Arctic Monkeys',
                    url: '../img/albums/arcticMonkeys.png'
                },
                {
                    name: 'Being Human (feat. Emily King)',
                    artist: 'Steven Universe',
                    url: '../img/albums/beingHuman.png'
                },
                {
                    name: 'Punisher',
                    artist: 'Phoebe Bridgers',
                    url: '../img/albums/phoebeb.png'
                },
                {
                    name: 'Together Through Time',
                    artist: 'Arctic Monkeys',
                    url: '../img/albums/starlight.png'
                },
                {
                    name: 'Sweet Creature',
                    artist: 'Harry Styles',
                    url: '../img/albums/sweetCreature.png'
                },
                {
                    name: 'Shake the Sheets',
                    artist: 'Ted Leo and the Pharmacists',
                    url: '../img/albums/tedleo.png'
                },
                {
                    name: 'The Both',
                    artist: 'The Both',
                    url: '../img/albums/theBoth.png'
                }
            ]
        }
    }
    
}
</script>
