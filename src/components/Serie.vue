<template>
    <li class="list-group-item">
        <div class="media">
            <div class="media-left">
                <img class="media-object" :src="image.medium" />
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{ name }}</h4>
                <div>{{ summary }}</div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    data() {
        return {
            name: 'NightClazz',
            summary: 'What an amazing codelab …',
            image: {
                medium: 'static/logo.png'
            }
        }
    }
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
