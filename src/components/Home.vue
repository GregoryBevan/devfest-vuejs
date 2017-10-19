<template>
    <div>
        <h1>Liste des séries</h1> 
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
    mounted () {
        seriesService.getSeries().then(res => console.log(res.map(item => item.show)))
    }
}
</script>

<style scoped>
	ul {
		padding: 50px;
	}
</style>
