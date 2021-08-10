<template>
    <div class="album-container flex flex-wrap justify-evenly absolute w-4/6 justify-self-center mt-20 z-0 pr-6" >
        <div class="w-1/3 relative">
            <div class="album-shadow bg-cover bg-center absolute z-0 filter blur-lg opacity-80 transform translate-y-14 rounded-xl" :style='{ backgroundImage: `url(${curAlbum.url})` }'></div>
            <div class="album bg-cover bg-center absolute z-10 rounded-xl" :style='{ backgroundImage: `url(${curAlbum.url})` }'></div>
            <h2 class="font-bold album-info text-2xl">{{curAlbum.name}}</h2>
            <h2 class="text-2xl">{{curAlbum.artist}}</h2>
            <h2>{{curAlbum.genre}}</h2>
            <h2>2020</h2>
            <div class="info-container flex w-1/2 items-center mt-6 justify-between">
                <h2 v-if="curAlbum.songs.length > 1">{{curAlbum.songs.length}} Songs</h2>
                <h2 v-if="curAlbum.songs.length === 1">{{curAlbum.songs.length}} Song</h2>
                <i class="fas fa-play text-3xl"></i>
                <i class="fas fa-random text-3xl"></i>
            </div>
        </div>
        <div class="w-2/3 h-full overflow-y-auto pr-6">
            <table class="table-auto text-left w-full">
                <tbody v-for="song in curAlbum.songs" :key="song.title">
                        <tr class="border-b-2 border-opacity-50 h-10">
                            <td>{{song.title}}</td>
                            <td class="text-right">{{song.time}}</td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style scoped>
    .album-container{
        height: 100%;
        padding-bottom: 12%
    }
    .album{
        width: 42vh;
        height: 42vh;
    }
    .album-text{
        width: 24vh;
    }
    .album-shadow{
        width: 38vh;
        height: 38vh;
        margin-left: 2vh;
    }
    .album-info {
        margin-top: 45vh;
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
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #F40058;
        border-radius: 10px;
    }
    .album-background{
        background-color: #161B40;
    }
    table h2{
        background: linear-gradient(90deg, #161B40 54.17%, rgba(22, 27, 64, 0) 97.4%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

</style>
<script>
export default{
    props: {
        id: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            albums: [
                {
                    name: 'Petals for Armor',
                    artist: 'Hayley Williams',
                    url: '../img/albums/hayleyWilliams.png',
                    id: 1,
                    genre: 'Alternative',
                    songs: [
                        {
                            title: 'Simmer',
                            time: '4:26'
                        },
                        {
                            title: 'Leave it Alone',
                            time: '4:05'
                        },
                        {
                            title: 'Cinnamon',
                            time: '3:32'
                        },
                        {
                            title: 'Creepin\'',
                            time: '3:08'
                        },
                        {
                            title: 'Dead Horse',
                            time: '3:19'
                        },
                        {
                            title: 'My Friend',
                            time: '3:39'
                        },
                        {
                            title: 'Over Yet',
                            time: '3:35'
                        },
                        {
                            title: 'Roses/Lotus/Violet/Iris',
                            time: '5:21'
                        },
                        {
                            title: 'Why We Ever',
                            time: '4:23'
                        },
                        {
                            title: 'Pure Love',
                            time: '3:07'
                        },
                        {
                            title: 'Taken',
                            time: '2:46'
                        },
                        {
                            title: 'Sugar on the Rim',
                            time: '4:14'
                        },
                        {
                            title: 'Watch Me While I Bloom',
                            time: '3:44'
                        },
                        {
                            title: 'Crystal Clear',
                            time: '3:33'
                        }
                    ]
                },
                {
                    name: 'Popstars',
                    artist: 'KDA',
                    url: '../img/albums/KDA.png',
                    id: 2,
                    genre: 'Pop/Rap',
                    songs: [
                        {
                            title: 'POP/STARS (feat. Jaira Bruns) - Single',
                            time: ''
                        }
                    ]
                },
                {
                    name: 'If You Leave',
                    artist: 'Daughter',
                    genre: 'Alternative',
                    url: '../img/albums/daughter.png',
                    id: 3,
                    songs: [
                        {
                            title: 'Smother',
                            time: '4:01'
                        }
                    ]
                },
                {
                    name: 'Three Cheers for Sweet Revenge',
                    artist: 'My Chemical Romance',
                    genre: 'Rock',
                    url: '../img/albums/edge.png',
                    id: 4,
                    songs: [
                        {
                            title: 'Helena (So Long and Goodnight)',
                            time: '3:23'
                        },
                        {
                            title: 'The Ghost of You',
                            time: '3:23'
                        }
                    ]
                },
                {
                    name: 'Ex:Re',
                    artist: 'Ex:Re',
                    genre: 'Alternative',
                    url: '../img/albums/exre.png',
                    id: 5,
                    songs: [
                        {
                            title: 'Where the Time Went',
                            time: '4:11'
                        },
                        {
                            title: 'The Dazzler',
                            time: '4:42'
                        },
                        {
                            title: 'My Heart',
                            time: '4:37'
                        },
                        {
                            title: 'Crushing',
                            time: '4:08'
                        },
                    ]
                },
                {
                    name: 'Lungs',
                    artist: 'Florence and the Machine',
                    url: '../img/albums/florence.png',
                    id: 6
                },
                {
                    name: 'Hades Original Soundtrack',
                    artist: 'Darren Korb',
                    url: '../img/albums/hades.png',
                    id: 7,
                    genre: 'Soundtrack',
                    songs: [
                        {
                            title: 'No Escape',
                            time: '4:25'
                        },
                        {
                            title: 'The House of Hades',
                            time: '4:51'
                        },
                        {
                            title: 'Out of Tartarus',
                            time: '5:54',
                        },
                        {
                            title: 'Wretched Shades',
                            time: '2:55',
                        }
                    ]
                },
                {
                    name: 'Career Day',
                    artist: 'Keaton Henson',
                    url: '../img/albums/keaton.png',
                    id: 8
                },
                {
                    name: 'Whatever People Say I Am, That\'s the Truth',
                    artist: 'Arctic Monkeys',
                    url: '../img/albums/arcticMonkeys.png',
                    id: 9
                },
                {
                    name: 'Being Human (feat. Emily King)',
                    artist: 'Steven Universe',
                    url: '../img/albums/beingHuman.png',
                    id: 10
                },
                {
                    name: 'Punisher',
                    artist: 'Phoebe Bridgers',
                    url: '../img/albums/phoebeb.png',
                    id: 11
                },
                {
                    name: 'Together Through Time',
                    artist: 'Arctic Monkeys',
                    url: '../img/albums/starlight.png',
                    id: 12
                },
                {
                    name: 'Sweet Creature',
                    artist: 'Harry Styles',
                    url: '../img/albums/sweetCreature.png',
                    id: 13
                },
                {
                    name: 'Shake the Sheets',
                    artist: 'Ted Leo and the Pharmacists',
                    url: '../img/albums/tedleo.png',
                    id: 14
                },
                {
                    name: 'The Both',
                    artist: 'The Both',
                    url: '../img/albums/theBoth.png',
                    id: 15
                },
                {
                    name: 'Career Day',
                    artist: 'Keaton Henson',
                    url: '../img/albums/keaton.png',
                    id: 16
                },
            ],
            curAlbum: {},
            songs: [
                {
                    title: 'No Escape',
                    time: '4:25'
                },
                {
                    title: 'The House of Hades',
                    time: '4:51'
                },
                {
                    title: 'Out of Tartarus',
                    time: '5:54',
                },
                {
                    title: 'Wretched Shades',
                    time: '2:55',
                },
                {
                    title: 'Simmer',
                    artist: 'Hayley Williams',
                    album: 'Petals for Armor',
                    time: '4:25',
                    genre: 'Alternative'
                },
                {
                    title: 'Abyss Watchers',
                    artist: 'Yuka Kitamura',
                    time: '4:51',
                    genre: 'Soundtrack',
                    album: 'Dark Souls III Original Soundtrack'
                },
                {
                    title: 'Counting Down the Hours',
                    artist: 'Ted Leo and the Pharmacists',
                    time: '3:56',
                    genre: 'Rock',
                    album: 'Shake the Sheets'
                },
                {
                    title: 'Over the Hills and Far Away',
                    artist: 'Led Zeppelin',
                    time: '4:50',
                    genre: 'Rock',
                    album: 'Houses of the Holy'
                },
                {
                    title: 'Simmer',
                    artist: 'Hayley Williams',
                    album: 'Petals for Armor',
                    time: '4:25',
                    genre: 'Alternative'
                },
                {
                    title: 'Abyss Watchers',
                    artist: 'Yuka Kitamura',
                    time: '4:51',
                    genre: 'Soundtrack',
                    album: 'Dark Souls III Original Soundtrack'
                },
                {
                    title: 'Counting Down the Hours',
                    artist: 'Ted Leo and the Pharmacists',
                    time: '3:56',
                    genre: 'Rock',
                    album: 'Shake the Sheets'
                },
                {
                    title: 'Over the Hills and Far Away',
                    artist: 'Led Zeppelin',
                    time: '4:50',
                    genre: 'Rock',
                    album: 'Houses of the Holy'
                },
                {
                    title: 'Simmer',
                    artist: 'Hayley Williams',
                    album: 'Petals for Armor',
                    time: '4:25',
                    genre: 'Alternative'
                },
                {
                    title: 'Abyss Watchers',
                    artist: 'Yuka Kitamura',
                    time: '4:51',
                    genre: 'Soundtrack',
                    album: 'Dark Souls III Original Soundtrack'
                },
                {
                    title: 'Counting Down the Hours',
                    artist: 'Ted Leo and the Pharmacists',
                    time: '3:56',
                    genre: 'Rock',
                    album: 'Shake the Sheets'
                },
                {
                    title: 'Over the Hills and Far Away',
                    artist: 'Led Zeppelin',
                    time: '4:50',
                    genre: 'Rock',
                    album: 'Houses of the Holy'
                },
                {
                    title: 'Simmer',
                    artist: 'Hayley Williams',
                    album: 'Petals for Armor',
                    time: '4:25',
                    genre: 'Alternative'
                },
                {
                    title: 'Abyss Watchers',
                    artist: 'Yuka Kitamura',
                    time: '4:51',
                    genre: 'Soundtrack',
                    album: 'Dark Souls III Original Soundtrack'
                },
                {
                    title: 'Counting Down the Hours',
                    artist: 'Ted Leo and the Pharmacists',
                    time: '3:56',
                    genre: 'Rock',
                    album: 'Shake the Sheets'
                },
                {
                    title: 'Over the Hills and Far Away',
                    artist: 'Led Zeppelin',
                    time: '4:50',
                    genre: 'Rock',
                    album: 'Houses of the Holy'
                },
                {
                    title: 'Simmer',
                    artist: 'Hayley Williams',
                    album: 'Petals for Armor',
                    time: '4:25',
                    genre: 'Alternative'
                },
                {
                    title: 'Abyss Watchers',
                    artist: 'Yuka Kitamura',
                    time: '4:51',
                    genre: 'Soundtrack',
                    album: 'Dark Souls III Original Soundtrack'
                },
                {
                    title: 'Counting Down the Hours',
                    artist: 'Ted Leo and the Pharmacists',
                    time: '3:56',
                    genre: 'Rock',
                    album: 'Shake the Sheets'
                },
                {
                    title: 'Over the Hills and Far Away',
                    artist: 'Led Zeppelin',
                    time: '4:50',
                    genre: 'Rock',
                    album: 'Houses of the Holy'
                },
                {
                    title: 'Simmer',
                    artist: 'Hayley Williams',
                    album: 'Petals for Armor',
                    time: '4:25',
                    genre: 'Alternative'
                },
                {
                    title: 'Abyss Watchers',
                    artist: 'Yuka Kitamura',
                    time: '4:51',
                    genre: 'Soundtrack',
                    album: 'Dark Souls III Original Soundtrack'
                },
                {
                    title: 'Counting Down the Hours',
                    artist: 'Ted Leo and the Pharmacists',
                    time: '3:56',
                    genre: 'Rock',
                    album: 'Shake the Sheets'
                },
                {
                    title: 'Over the Hills and Far Away',
                    artist: 'Led Zeppelin',
                    time: '4:50',
                    genre: 'Rock',
                    album: 'Houses of the Holy'
                }
            ]
        }
    },
    beforeMount () {
        console.log(this.$route.params.id);
        this.curAlbum = this.albums.find(album => album.id == this.$route.params.id);
    }
}
</script>
