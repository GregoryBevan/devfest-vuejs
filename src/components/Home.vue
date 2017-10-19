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

export default {
    components: {
        Serie
		}
}
</script>

<style scoped>
	ul {
		padding: 50px;
	}
</style>
