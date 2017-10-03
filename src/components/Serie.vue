<template>
    <li class="list-group-item" @click="onClick()">
        <i class="glyphicon"></i>
        <div class="media">
            <div class="media-left" v-if="serieDetails.image">
                <img class="media-object" :src="serieDetails.image.medium" />
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{ serieDetails.name }}</h4>
                <div v-html="serieDetails.summary"></div>
            </div>
        </div>
    </li>
</template>

<script>
import favoritesService from '@/services/favorites.service'

export default {
    props: [
        'serieDetails'
    ],
    methods: {
        onClick () {
            this.$emit('clicked', this.serieDetails)
        }
    }
}
</script>

<style>
.glyphicon {
    float: right;
}

.list-group-item {
    position: relative
}

.media {
    text-align: left;
}

.media-object {
    height: 64px;
}
</style>
