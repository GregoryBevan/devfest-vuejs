<template>
  <div class="container">
    <h1>Favoris</h1>
    <ul class="list-group">
      <serie v-for="favorite in favorites" :key="favorite.id" :serieDetails="favorite"></serie>
    </ul>
  </div>
</template>

<script>
import favoritesService from '@/services/favorites.service'
import Serie from '@/components/Serie.vue'

export default {
  components: {
    Serie
  },
  data () {
    return {
      favorites: []
    }
  },
  mounted() {
    this.favorites = favoritesService.favorites
  }
}
</script>

<style scoped>
</style>