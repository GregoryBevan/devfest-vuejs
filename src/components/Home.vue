<template>
    <div class="container">
        <h1>{{ title }}</h1>
        <ul>
            <serie v-for="serie in series" :key="serie.id" :serie-details="serie"></serie>
        </ul>
    </div>
</template>

<script>
import Serie from '@/components/Serie.vue'
import seriesService from '@/services/series.service'

export default {
    data() {
        return {
            title: 'Liste des séries',
            series: []
        }
    },
    components: {
        serie: Serie
    },
    mounted() {
        seriesService.getSeries().then(response => (this.series = response.data.map(item => item.show)))
    }
}
</script>

<style>

</style>
