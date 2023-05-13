<script setup lang="ts">
import type { Song } from "../types";
const props = defineProps<{ songs: Song[] }>();
const emits = defineEmits<{
  (event: "add-to-favorite", id: string): void
}>();
const currentSong = props.songs[Math.floor(Math.random() * props.songs.length)];


</script>

<template>
  <v-card title="Player" class="player">
    <v-card-text>
      <v-icon icon="mdi-play"></v-icon>
      {{ currentSong.artist }} - {{ currentSong.title }} ({{ currentSong.year }})
    </v-card-text>
    <v-card-action>
      <v-btn @click="emits('add-to-favorite', currentSong.id)" >Add to favorites</v-btn>
    </v-card-action>
  </v-card>
</template>


<style scoped>
  .player {
    padding: 20px;
    margin-bottom: 20px;
  }
</style>
