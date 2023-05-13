
<script setup lang="ts">

</script>

<template>
  <v-card title="Player" class="player">
    <v-card-text>
      <v-icon icon="mdi-play"></v-icon>
      Song title
    </v-card-text>
    <v-card-action>
      <v-btn>Add to favorites</v-btn>
    </v-card-action>
  </v-card>
</template>


<style scoped>
  .player {
    padding: 20px;
    margin-bottom: 20px;
  }
</style>
