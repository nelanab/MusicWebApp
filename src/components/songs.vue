<template>
    <div class="song-container flex flex-wrap justify-between absolute w-4/6 justify-self-center mt-20 z-0 overflow-y-auto pr-6">
        <table class="table-auto text-left w-full overflow-y-auto pr-6">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Time</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Genre</th>
                </tr>
            </thead>
            <tbody v-for="song in songs" :key="song.title">
                    <tr class="border-b-2 border-opacity-50 h-10">
                        <td>{{song.title}}</td>
                        <td>{{song.time}}</td>
                        <td>{{song.artist}}</td>
                        <td @click="showAlbum(song.id)">{{song.album}}</td>
                        <td>{{song.genre}}</td>
                    </tr>
            </tbody>
            </table>
    </div>
</template>

<script>
export default {
    data () {
        return {
            songs: [
                {
                    id: '1',
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
    methods: {
        showAlbum (album) {
            this.$router.push({ path: `/album/${album}` });
        }
    }
}
</script>
<style scoped>
    .song-container{
        height: 100%;
        padding-bottom: 12%;
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
</style>
