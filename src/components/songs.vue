<template>
    <div class="album-container flex flex-wrap justify-between absolute w-4/6 justify-self-center mt-20 z-0 overflow-y-auto pr-6">
        <div class="flex w-full">
            <h2>Title</h2>
            <h2>Time</h2>
            <h2>Artist</h2>
            <h2>Album</h2>
            <h2>Genre</h2>
        </div>
        <div class="flex w-full" v-for="song in songs" :key="song.title">
            <h2>{{song.title}}</h2>
            <h2>{{song.time}}</h2>
            <h2>{{song.artist}}</h2>
            <h2>{{song.album}}</h2>
            <h2>{{song.genre}}</h2>
        </div>
        <template>
            <v-card>
                <v-card-title>
                Nutrition
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
                </v-card-title>
                <v-data-table
                :headers="headers"
                :items="songs"
                :search="search"
                ></v-data-table>
            </v-card>
        </template>
    </div>
</template>

<script>
export default{
    data () {
        return {
            search: '',
            headers: [
                {
                    text: 'Title',
                    align: 'start',
                    sortable: true,
                    value: 'title'
                },
                {
                    text: 'Time',
                    align: 'start',
                    sortable: false,
                    value: 'time'
                },
                {
                    text: 'Artist',
                    align: 'start',
                    sortable: true,
                    value: 'artist'
                },
                {
                    text: 'Album',
                    align: 'start',
                    sortable: true,
                    value: 'album'
                },
                {
                    text: 'Genre',
                    align: 'start',
                    sortable: true,
                    value: 'genre'
                },

            ],
            songs: [
                {
                    title: 'Simmer',
                    artist: 'Hayley Williams',
                    album: 'Petals for Armor',
                    time: '4:25',
                    genre: 'Alternative'
                }
            ]
        }
    }
}
</script>
