<template>
    <div class="container">
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
            helloWorld: 'Hello World !'
        }
    },
    components: {
        serie: Serie
    }
}
</script>

<style>

</style>
