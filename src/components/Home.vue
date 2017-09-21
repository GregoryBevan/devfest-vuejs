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

export default {
    data() {
        return {
            title: 'Listes des séries'
        }
    },
    components: {
        serie: Serie
    }
}
</script>

<style>

</style>
