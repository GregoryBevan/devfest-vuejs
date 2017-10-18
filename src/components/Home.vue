<template>
    <div>
        <h1>Liste des séries</h1> 
        <ul>
            <serie v-for="serie in series" :key="serie.id" :serie-details="serie"></serie>
        </ul>
    </div>
</template>

<script>
import Serie from '@/components/Serie.vue'
import seriesService from '@/services/series.service'

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
    }
}
</script>

<style>

</style>
