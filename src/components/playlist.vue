<template>
    <div class="album-container flex flex-wrap justify-evenly absolute w-4/6 justify-self-center mt-20 z-0 pr-6" >
        <div class="w-1/3 relative">
            <div class="album-shadow bg-cover bg-center absolute z-0 filter blur-lg opacity-80 transform translate-y-14 rounded-xl" :style='{ backgroundImage: `url(${curPlaylist.url})` }'></div>
            <div class="album bg-cover bg-center absolute z-10 rounded-xl" :style='{ backgroundImage: `url(${curPlaylist.url})` }'></div>
            <h2 class="font-bold album-info text-2xl">{{curPlaylist.title}}</h2>
            <div class="info-container flex w-1/2 items-center mt-6 justify-between">
                <h2 v-if="curPlaylist.songs.length > 1">{{curPlaylist.songs.length}} Songs</h2>
                <h2 v-else>{{curPlaylist.songs.length}} Song</h2>
                <i class="fas fa-play text-3xl"></i>
                <i class="fas fa-random text-3xl"></i>
            </div>
        </div>
        <div class="w-2/3 h-full overflow-y-auto pr-6">
            <table class="table-auto text-left w-full">
                <tbody v-for="song in curPlaylist.songs" :key="song.title">
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
    data () {
        return {
            curPlaylist: {},
            playlists: [
                {
                    title: 'Jams',
                    id: 1,
                    url: '../img/kermie.png',
                    songs: [
                        {
                            title: 'Over the Hills and Far Away',
                            time: '4:46'
                        }
                    ]
                },
                {
                    title: 'Rockkkkk',
                    id: 2,
                    url: '../img/kermie.png',
                    songs: [
                        {
                            title: 'Smother',
                            time: '4:46'
                        }
                    ]
                },
                
                {
                    title: 'Car Jams',
                    id: 3,
                    url: '../img/kermie.png',
                    songs: [
                        {
                            title: 'Highway Tune',
                            time: '4:46'
                        }
                    ]
                },
                
                {
                    title: 'Soundtrack',
                    id: 4,
                    url: '../img/kermie.png',
                    songs: [
                        {
                            title: 'Smother',
                            time: '4:46'
                        }
                    ]
                },
                
                {
                    title: ':\')',
                    id: 5,
                    url: '../img/kermie.png',
                    songs: [
                        {
                            title: 'Smother',
                            time: '4:46'
                        }
                    ]
                },
                {
                    title: 'Vibes',
                    id: 6,
                    url: '../img/kermie.png',
                    songs: [
                        {
                            title: 'Smother',
                            time: '4:46'
                        }
                    ]
                }
            ]
        }
    },
    beforeMount () {
        console.log(this.$route.params.id);
        this.curPlaylist = this.playlists.find(playlist => playlist.id == this.$route.params.id);
        console.log(this.curPlaylist);
    },
    mounted () {
        this.findPlaylist();
    },
    methods: {
        findPlaylist () {
            console.log(this.$route.params.id);
            this.curPlaylist = this.playlists.find(playlist => playlist.id == this.$route.params.id);
            console.log(this.curPlaylist);
        }
    }
}

</script>
