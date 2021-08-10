<template>
    <div class=" p-6 w-1/5 h-full">
        <div class="bg-userIcon bg-center bg-no-repeat bg-cover icon">
            
        </div>
        <ul class="h-3/4 overflow-y-auto text-2xl">
            <li class="font-bold mt-8 transition cursor-pointer">
                <i class="fas fa-music mr-2"></i>Playlists
            </li>
            <template v-for="playlist in playlists" :key="playlist.id">
                <li class="my-4 transition cursor-pointer" @click="showPlaylist(playlist.id)"><router-link :to="'/playlist/' + playlist.id">{{playlist.title}}</router-link></li>
            </template>
        </ul>
    </div>
</template>

<script>
    export default{
        data () {
            return {
                playlists: [
                    {
                        title: 'Jams',
                        id: 1,
                        url: ''
                    },
                    {
                        title: 'Rockkkkk',
                        id: 2
                    },
                    
                    {
                        title: 'Car Jams',
                        id: 3
                    },
                    
                    {
                        title: 'Soundtrack',
                        id: 4
                    },
                    
                    {
                        title: ':\')',
                        id: 5
                    },
                    
                    {
                        title: 'Vibes',
                        id: 6
                    }
                ]
            }
        },
        beforeMount () {
            console.log(this.$route.params.id);
            this.curAlbum = this.playlists.find(playlist => playlist.id == this.$route.params.id);
        },
        methods: {
            showPlaylist (playlist) {
                this.$router.push({ path: `/playlist/${playlist}` });
            }
        }
    }
</script>

<style scoped>
    li:hover{
        color: #41B853;
    }
    .router-link-active{
        color: #41B853;
    }
</style>