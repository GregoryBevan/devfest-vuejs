<template>
    <div>
        <h1>Liste des séries</h1> 
        <div id="search">
        </div>
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

<style scoped>
#search {
    padding-bottom: 15px;
}
ul {
    -webkit-padding-start: 0px;
    padding: 50px;
}
</style>
