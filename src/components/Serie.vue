<template>
    <li class="list-group-item">
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
export default {
    props: [
        'serieDetails'
    ]
}
</script>

<style>
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
