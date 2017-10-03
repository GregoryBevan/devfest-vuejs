<template>
    <div class="container">
        <h1>{{ title }}</h1>
        <ul>
            <serie></serie>
            <serie></serie>
            <serie></serie>
            <serie></serie>
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
            title: 'Liste des séries'
        }
    },
    mounted () {
        seriesService.getSeries().then(response => console.log(response.data.map(item => item.show)))
    }
}
</script>

<style>

</style>
