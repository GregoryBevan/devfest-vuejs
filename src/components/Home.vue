<template>
    <div class="container">
        <h1>{{ title }}</h1>
        <ul>
            <serie v-for="serie in series" :key="serie.id" :serie-details="serie" @clicked="toggleFavorites($event)"></serie>
        </ul>
    </div>
</template>

<script>
import Serie from '@/components/Serie.vue'
import seriesService from '@/services/series.service'
import favoritesService from '@/services/favorites.service'

export default {
    components: {
        Serie
    },
    data () {
        return {
            title: 'Liste des séries',
            series: []
        }
    },
    mounted () {
        seriesService.getSeries().then(response => (this.series = response.map(item => item.show)))
    },
    methods: {
        toggleFavorites (serie) {
            favoritesService.isFavorite(serie) ? favoritesService.removeFavorite(serie) : favoritesService.addFavorite(serie) 
        }
    }
}
</script>

<style>

</style>
