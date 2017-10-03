<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <ul>
      <serie v-for="favorite in favorites" :key="favorite.id" :serieDetails="favorite"></serie>
    </ul>
  </div>
</template>

<script>
import Serie from '@/components/Serie'
import favoritesService from '@/services/favorites.service'

export default {
  data () {
    return {
      title: 'Vos favoris',
      favorites: []
    }
  },
  mounted () {
    this.favorites = favoritesService.favorites
  },
  components: {
    serie: Serie
  }
}
</script>

<style scoped>
</style>