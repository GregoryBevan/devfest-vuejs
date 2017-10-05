<template>
    <li class="list-group-item" @click="onClick()">
        <i class="glyphicon" :class="[isFav ? 'glyphicon-star' : 'glyphicon-star-empty']"></i>
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
    data() {
        return {
            favorites: favoritesService.favorites
        }
    },
    methods: {
        onClick () {
            this.$emit('clicked', this.serieDetails)
        }
    },
    computed: {
        isFav: function() {
            return this.favorites.find(item => item.id === this.serieDetails.id)
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
