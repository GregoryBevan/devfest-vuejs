<template>
  <div class="container">
    <h1>Favoris</h1>
    <ul>
      <serie v-for="favorite in favorites" :key="favorite.id" :serieDetails="favorite"></serie>
    </ul>
  </div>
</template>

<script>
import Serie from '@/components/Serie'
import favoritesService from '@/services/favorites.service'

export default {
  components: {
    Serie
  },
  data () {
    return {
      favorites: []
    }
  },
  mounted () {
    this.favorites = favoritesService.favorites
  },
}
</script>

<style scoped>
</style>