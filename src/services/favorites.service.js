export default {
    list: [],
    addFavorite: function (fav) {
        this.list.push(fav)
    },
    removeFavorite: function (fav) {
        const favIndex = this.list.findIndex(item => item.id === fav.id)
        this.list.splice(favIndex, 1)
    }
}