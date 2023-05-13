<script setup lang="ts">
import { onMounted, ref } from "vue"
import type { Song } from './types'
import { addSong, getSongs } from './firebase/songs';
import SongsList from './components/SongsList.vue';
import SongsPlayer from './components/SongsPlayer.vue';

const isLoading = ref(false)

const songs = ref<Song[]>([]);
const playingSongs: Song[] = [
  {
    id: '1',
    title: 'The search',
    artist: 'NF',
    year: 2018,
  },
  {
    id: '2',
    title: 'Bilmaydi',
    artist: 'Konsta',
    year: 2022,
  },
  {
    id: '3',
    title: 'Odamlar nima deydi ?',
    artist: 'Konsta x Timur Alixanov',
    year: 2022,
  },
  {
    id: '4',
    title: 'Zerikarli',
    artist: 'Konsta x Yoshblond',
    year: 2023,
  },

];

onMounted(async () => {
  getSongs(songs, isLoading);
})

const addToFavorite = async (id: string) => {
  const song = playingSongs.find(song => song.id === id)
  if (song) {
    await addSong(song)
  }
}

</script>

<template>
  <main>
    <SongsPlayer :songs="playingSongs" @add-to-favorite="addToFavorite"/>
    <SongsList :songs="songs" :isLoading="isLoading" />
  </main>
</template>

<style scoped>

</style>
