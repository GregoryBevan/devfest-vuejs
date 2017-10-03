export default {
	favorites: [],

	/**
	 * Add a serie to favorites
	 */
	addFavorite (serie) {
		this.favorites.push(serie)
	},

	/**
	 * Remove a serie from favorites
	 */
	removeFavorite (serie) {
		this.favorites = this.favorites.filter(item => item.id !== serie.id)
	},

	/**
	 * Check if the serie is part of favorites
	 */
	isFavorite (serie) {
		return this.favorites.find(item => item.id === serie.id)
	}
}